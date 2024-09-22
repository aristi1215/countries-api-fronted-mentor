export const CountryCard = ({countryData}) => {
  return (
    <div className="bg-bgElements shadow-lg w-[70%] rounded-lg h-[22rem]">
       <img className="w-full rounded-t-lg max-h-[50%]" src={countryData.flags.png} alt="" />   
       <div className="pl-5">
          <h2 className="my-4 text-lg font-semibold">{countryData?.name}</h2>
          <p className="text-text"><b className="font-[400]">Population:</b> {countryData?.population}</p>
          <p className="text-text"><b className="font-[400]">Region: </b> {countryData?.region}</p>
          <p className="text-text"><b className="font-[400]">Capital:</b> {countryData?.capital}</p>
       </div>
    </div>
  )
}
