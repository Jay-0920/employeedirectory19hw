import axios from "axios";
export default {
    search: query => axios.get(query)
};