import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { useFilterContext } from "../context/FilterContext"

export const Filter = () => {

  const [showFilters, setShowFilter] = useState(false)

  const {filter, setFilter} = useFilterContext()

  const regions = ['Americas', 'Africa', 'Asia', 'Europe', 'Oceania']

  return (

    <div className="relative ">   
    <div onClick={() => {
      setShowFilter(!showFilters)}} className="flex justify-between w-[10rem] bg-bgElements rounded-lg items-center ml-5 mt-12 h-[3rem] px-2 mb-1 shadow-lg cursor-pointer">
        <p className="text-xs">Filter by Region</p>
        <IoIosArrowDown />
    </div>

    <div className={`text-text bg-bgElements rounded-lg w-[10rem] px-2 ml-5 text-sm flex flex-col gap-2 p-2 ${showFilters ? 'absolute' : 'hidden'}`}>
      {regions.map(region => (
        <p className={`pl-3 cursor-pointer ${filter.region === region ? 'bg-gray-400 rounded-xl p-1' : ''}`} key={region} onClick={() => {
          if(filter.region === region){
            setFilter({region: ''})
          }else{
            setFilter({region})
          }
          setShowFilter(!showFilters)
        }        
        } >{region}</p>
      ))}
    </div>
    
    </div>
  )
}
