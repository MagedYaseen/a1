import axios from 'react-native-axios';

// const url = 'https://covid19.mathdro.id/api';
const url = 'http://ejo.magedyaseen.net/procapi.php';
// const url = 'http://localhost/ejo/procapi.php';
// const url = 'http://voomapp.magedyaseen.net/processapi.php';

export const fetchData = async ( country ) => {
    let changeableUrl = url;

    if ( country ) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);

        return { confirmed, recovered, deaths, lastUpdate }
        
    } catch (error){
        console.error(error);
    }
}

export const registerUser = async ( ejo_data ) => {
    await axios.post(url, {ejo_data}).then ( ({data}) => {
        console.log(data);
    });
}

export const login = async ( ejo_data ) => {

   const {data} = await axios.post( url, { ejo_data } );
    return data;
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        // return data;

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        // console.log(modifiedData);
        return modifiedData;


    } catch (error) {
        console.error(error);
    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);

        return countries.map( ( country ) => country.name);
    } catch (error) {
        console.error(error);
    }
}