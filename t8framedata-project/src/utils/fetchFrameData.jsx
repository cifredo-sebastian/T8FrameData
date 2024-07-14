import React from "react";
import axios from 'axios'
import Papa from 'papaparse';

const sheetId = '1IDC11ShZjpo6p5k8kV24T-jumjY27oQZlwvKr_lb4iM';


const fetchFrameData = async (sheetName) => {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
    try {
        const response = await axios.get(url);
        // console.log(response)
        const parsedData = Papa.parse(response.data);
        // console.log('parsed data:')
        // console.log(parsedData)
        return (parsedData.data)
        
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
    
};

export default fetchFrameData