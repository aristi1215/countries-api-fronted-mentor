import { Header } from "../components/Header"
import { IoIosSearch } from "react-icons/io";
import { Filter } from "../components/Filter";
import { CountryCard } from "../components/CountryCard";
import { useEffect, useState } from "react";
import { useFilterContext } from "../context/FilterContext";
import { Link } from "react-router-dom";

export const Main = () => {

  const [countryData, setCountryData] = useState([])
  const [search, setSearch] = useState('')

  const {filter} = useFilterContext()


  useEffect(() =>{
    fetch('/data.json').then((response) => response.json()).then((response) => setCountryData(response))
  },[])


  const handleFilterRegion = () => {
      if(filter.region !== ''){
        const filteredRegions = countryData.filter(country => country.region == filter.region)
        return filteredRegions
      }else{
        return countryData
      }
  }

  const handleCountrySearch = () => {
    if(search !== ''){
      const filterByTitle = handleFilterRegion().filter(country => country.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      return filterByTitle
    }else{
      return handleFilterRegion()
    }
  }

  return (
    <div className="text-text bg-bg min-h-screen pb-10">
        <Header />
        <main className="h-full">
          <div className="md:flex md:w-full md:items-center md:justify-between">
            <div className="flex shadow-xl items-center mx-5 px-5 gap-5 h-[4rem] rounded-lg bg-bgElements mt-4 md:w-[45%]">
                <IoIosSearch size={25} />
                <input placeholder="Search for a country..." value={search} onChange={e => setSearch(e.target.value)} type="text" className="focus:outline-none w-full bg-bgElements" />
            </div>
            
            <Filter />
          </div>

            <section className="flex flex-col items-center gap-8 mt-7 z-0 lg:grid lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-4">

              {handleCountrySearch() && handleCountrySearch().length > 0 ? (
              handleCountrySearch().slice(0,8)?.map(country => (
                <Link className="flex flex-col items-center w-[20rem] md:w-[30rem ]" key={country.name} to={'/details'} state={{country}} >
                  <CountryCard countryData={country}
                  />
                </Link>
                  ))
              ):(
                <p className="text-center">There are no countries to show</p>
              )}
              

            </section>

        </main>
    </div>
  )
}
