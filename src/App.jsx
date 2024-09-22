import { Main } from "./main-page/pages/Main"
import { CountryDetails } from "./main-page/pages/CountryDetail"
import { FilterContextProvider } from "./main-page/context/FilterContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <FilterContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Main />}/>
        <Route path="/details" element={<CountryDetails />} />
      </Routes>
      </BrowserRouter>
    </FilterContextProvider>
  )
}

export default App
