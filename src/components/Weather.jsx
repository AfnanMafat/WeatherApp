import { useEffect, useState } from "react"
import { Search } from "./Search"

export const Weather = () => {

    const [search,setSearch] = useState("")
    const [loading,setLoading] = useState(false)
    const [weatherData,setWeatherData] = useState(null)

    async function fetchWeatherData(param){
        setLoading(true)

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=071083bd0a97bfb3626f171c6e007d8f`)
            
            const data = await response.json();
            console.log(data);

            if(data){
                setWeatherData(data)
                setLoading(false)
            }
            
        } catch (e) {
            setLoading(false)
            console.log(e);
            
        }
    }

    function handleSearch() {
        fetchWeatherData(search)
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us',{
            weekday : "long",
            month : "long",
            day : "numeric",
            year : "numeric"
        }

        )
    }

    useEffect(()=>{
        fetchWeatherData("bangalore")
    },[])
    return (
       <>
       
       <div className="weather-app">
       <h1>My Weather App</h1>
            <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />

            {loading ? (
                <h1 className="loading">Loading</h1>
            ) : (
                <div>
                    <div className="city">
                        <h2>{weatherData?.name}, <span className="country">{weatherData?.sys?.country}</span></h2>
                    </div>
                    
                    <div className="date">
                        <span>{getCurrentDate()}</span>
                    </div>

                    <div className="temperature">
                        {weatherData?.main?.temp}
                        <p className="description">
                            {weatherData?.weather?.[0]?.description}
                        </p>
                    </div>

                    <div className="weather-info">
                        <div className="metrics">
                            <div className="metric">
                                <p className="wind-speed">{weatherData?.wind?.speed}</p>
                                <p className="metric-label">Wind Speed</p>
                            </div>
                            
                            <div className="metric">
                                <p className="humidity">{weatherData?.main?.humidity}</p>
                                <p className="metric-label">Humidity</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
       </>
        
    )
}