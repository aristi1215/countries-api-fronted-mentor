import { useLocation } from "react-router-dom"
import { Header } from "../components/Header"
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";


export const CountryDetails = () => {

    const location = useLocation()
    const {country} = location.state || undefined

    if(country){
        console.log(country)
    }
    if(!country){
        <p className="text-text text-center">No hay detalles de este país</p>
    }

  return (
    <div className="bg-bg pb-10 lg:min-h-screen">
      <Header />
      <main className="px-5 lg:mx-5">
        <Link to={'/'} className="bg-bgElements shadow-xl text-text flex items-center gap-2 rounded- py-[5px] w-28 justify-center text-sm justify-items-center my-10">
            <FaArrowLeft />
          <span>Back</span>
        </Link>
        <div className="lg:flex lg:justify-between lg:gap-20">
        <img src={country?.flags?.png} className="w-full lg:w-[50%]" alt="" />
        <div className=" flex flex-col gap-2 my-10 lg:w-[50%]">
          <h2 className="text-text text-xl font-semibold lg:mb-8 lg:text-3xl">{country?.name}</h2>
          <div className="lg:flex lg:gap-10">
          <div className="flex flex-col gap-2 text-text">
            <p className="text-sm lg:text-lg"><b className="font-semibold">Native Name:</b> {country?.name}</p>
            <p className="text-sm lg:text-lg"><b className="font-semibold">Population:</b> {country?.population}</p>
            <p className="text-sm lg:text-lg"><b className="font-semibold">Region:</b> {country?.region}</p>
            <p className="text-sm lg:text-lg"><b className="font-semibold">Sub Region:</b> {country?.subregion}</p>
            <p className="text-sm lg:text-lg"><b className="font-semibold">Capital:</b> {country?.capital}</p>
          </div>
          <div className="flex flex-col gap-2 mt-7 text-text">
 
            <p className="text-sm lg:text-lg"><b className="font-semibold">Top Level Domain:</b> {country?.topLevelDomain}</p>
            <p className="text-sm lg:text-lg"><b className="font-semibold">Currencies:</b> {country?.currencies[0]?.name}</p>
            <p className="text-sm lg:text-lg"><b className="font-semibold">Languages:</b> {country?.languages[0].name}</p>
          </div>
        </div>
        <div className="hidden lg:flex lg:mt-5 lg:gap-4">
          <h4 className="text-text text-lg font-semibold">Border Countries:</h4>
          <div className="flex gap-3">
            {
                country?.borders?.slice(0,3).map(border => (
                    <div className="bg-bgElements w-[6rem] px-2 py-1 text-sm shadow-xl text-center text-text" key={border}>
                        {border}
                    </div>
                )) 
                }
          </div>
          </div>
          </div>
        </div>
      </main>
        <footer className="bg-bg mt-10 px-5 text-text lg:hidden">
          <h4 className="text-text text-lg font-semibold mb-6 lg:mx-5">Border Countries:</h4>
          <div className="flex gap-3">
            {
                country?.borders?.slice(0,3).map(border => (
                    <div className="bg-bgElements w-[30%] px-2 py-1 text-sm shadow-xl text-center" key={border}>
                        {border}
                    </div>
                )) 
                }
          </div>
        </footer>
    </div>
  )
}
