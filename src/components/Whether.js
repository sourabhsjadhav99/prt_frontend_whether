import React, { useEffect, useState } from 'react'
import "./WhetherPage.css"
import axios from "axios"
function Whether() {
    let arr =[{cityname:"Kathmandu",temp:291.15,humidity:45,temp_min:291.15,temp_max:291.15, sea_level:1500, ground_level:500},
    {cityname:"Pune",temp:291.15,humidity:45,temp_min:291.15,temp_max:291.15, sea_level:1500, ground_level:500},
    {cityname:"Mumbai",temp:291.15,humidity:45,temp_min:291.15,temp_max:291.15, sea_level:1500, ground_level:500},
    {cityname:"Kolhapur",temp:291.15,humidity:45,temp_min:291.15,temp_max:291.15, sea_level:1500, ground_level:500},
    {cityname:"Agra",temp:291.15,humidity:45,temp_min:291.15,temp_max:291.15, sea_level:1500, ground_level:500},
    {cityname:"Chennai",temp:291.15,humidity:45,temp_min:291.15,temp_max:291.15, sea_level:1500, ground_level:500},
    {cityname:"Delhi",temp:291.15,humidity:45,temp_min:291.15,temp_max:291.15, sea_level:1500, ground_level:500},
    {cityname:"Hyderabad",temp:291.15,humidity:45,temp_min:291.15,temp_max:291.15, sea_level:1500, ground_level:500},
    {cityname:"Nagpur",temp:291.15,humidity:45,temp_min:291.15,temp_max:291.15, sea_level:1500, ground_level:500},
    
    
]
    let [data, setData] = useState([])
    let [searchData, setSearchData] = useState([])
    let [filterVal, setFilterVal] = useState("")
    let[valid, setValid]=useState(false)

    let fetchData = () => {
        axios.get("https://prtwhether.onrender.com/products")
            .then((data) => {
                console.log(arr)
                setData(data.data.products)
                setSearchData(data.data.products)
            })

    }
    useEffect(() => {
        fetchData()
    }, [])


    const handleFilter = (e) => {
        if (e.target.value === "") {
            setData([]);
        } else {
            const filterResult = searchData.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
                setData(filterResult);
            
        }
        setFilterVal(e.target.value);
    };

    return (
        <div id='main-container'>
            <h1>Whether App</h1>
            <div><input
                placeholder="Search City"
                value={filterVal}
                onChange={(e) => {
                    handleFilter(e);
                }}
            /></div>
            {filterVal && data.slice(0,1).map((data, index) => {
                return <div key={index} id="city-box">
                    <p id='city-name' >Whether details of city-{data.title}</p>
                    <p>Current Temprature</p>
                    <p>Temprature Range</p>
                    <p>Humidity</p>
                    <p>Sea Level</p>
                    <p>Ground Level</p>
                    
                </div>
            })}
            {!data.title && <h3 id='valid'>Enter valid city name</h3>}
         



        </div>
    )
}

export default Whether
// 8af32c6f4e0faedb3729e98a369fa94b
// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8af32c6f4e0faedb3729e98a369fa94b