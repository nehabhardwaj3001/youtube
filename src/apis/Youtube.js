import axios from 'axios';
const KEY = 'AIzaSyBV9qOz_k0WUmZdjCWB6AXbl_GvRK7R5S4';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: '',
        key: KEY
    }
})