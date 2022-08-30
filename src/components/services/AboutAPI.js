import axios from "axios";

function getAbout() {
    return axios.get('http://localhost:1337/qui-sommes-nous').then((res) => res.data)
}


export default {
    getAbout
}
