import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'da5f28fc5cd44e5198b7e4038f25d1b0'
  }
});