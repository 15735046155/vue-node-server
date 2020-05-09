import axios from 'axios'

export default axios.create({
    baseURL:'http://localhost:8888/admin/api/',
    headers:{"Content-Type" : "application/json;charset=UTF-8"}
})
