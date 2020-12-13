import axios from 'axios'; // import axios module

export default axios.create({
    baseURL: 'localhost:3000', // defining api url
});
