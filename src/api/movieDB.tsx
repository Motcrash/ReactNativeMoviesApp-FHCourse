import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '4647995b0c03656411d45f2a318bbc57',
        language: 'en-US',
    }
});

export default movieDB;