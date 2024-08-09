import axios from "axios";
// const API_KEY = import.meta.env.YOUYUBE_API_KEY;
const BASE_URL='https://youtube138.p.rapidapi.com'

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '87a6a9ae6amshcdb826602a305dbp1e4862jsnbaf0ac072cc9',
            'x-rapidapi-host': 'youtube138.p.rapidapi.com'
        }
    };
     const fetchData= async(url)=>{
        try{
            const {data} = await axios.get(`${BASE_URL}/${url}`,options);
            return data;
        }catch(error){
            console.error("error fetching api data: ",error);
            throw error;
        }
    }

    export default fetchData;

    
