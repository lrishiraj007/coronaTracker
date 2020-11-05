import React ,{useState,useEffect} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';

import {fetchCountryData } from '../../api';
const CountryPicker = ({ handleCountryChange }) => {

    const[fetchedCountries , setFetchCountries] = useState([]);

    useEffect (() => {
        const fetchCountries = async ()=>{
            setFetchCountries(await fetchCountryData());
        }
        // console.log(dailyData);

       fetchCountries();
    },[setFetchCountries]);

    return(
            <FormControl className={styles.formControl}>
             <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value) }>
                <option value="">Global</option>
    {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option> )}
                </NativeSelect>
            </FormControl>
    )
}


export default CountryPicker;