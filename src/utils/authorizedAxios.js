import axios from "axios"

const authorizedAxios = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL:"https://job-board-pro.herokuapp.com/",
        // baseURL:"http://127.0.0.1:5000/",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export default authorizedAxios