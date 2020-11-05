import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


export const fetchData = async (country) => {

    let changedUrl = url ;

    if(country){
        changedUrl = `${url}/countries/${country}`;
    }
    try {
        
        const {data} = await axios.get(changedUrl);

        const dataTobeUsed = {
            confirmed : data.confirmed,
            recovered : data.recovered,
            deaths : data.deaths,
            lastUpdate : data.lastUpdate
        }
        return dataTobeUsed;
    } catch (error) {
        
    }
    
}  


export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData)=>({
            confirmed : dailyData.confirmed.total ,
            deaths : dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData ;
    } catch (error) {
        
    }
    
} 

export const fetchCountryData = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        
    }
    
} 