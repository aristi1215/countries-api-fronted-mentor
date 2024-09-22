import { createContext, useContext, useState } from "react";

const FilterContext = createContext()

export const useFilterContext = () => useContext(FilterContext)

export const FilterContextProvider = ({ children }) => {
    const [filter, setFilter] = useState({region: ''})
  return (
    <FilterContext.Provider value={{filter, setFilter}}>
        {children}
    </FilterContext.Provider>
  )
}


