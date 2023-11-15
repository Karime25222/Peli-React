import axios from "axios"

const baseUrl = "https://localhost:7134/api/Genret"

const getAll = ()=> {

    const request = axios.get(baseUrl)
    return request.then(response => response.data)

}
// Uuden luontiin käytettävä http pyyntö
const create = (genre) => {
    const request = axios.post(baseUrl, genre)
    return request.then(response => response)
}
// Poisto ///////////////////////////////
const remove = (id) => {
    const request = axios.delete(baseUrl + "/" + id)
    return request.then(response => response.data)
}

export default {getAll, create, remove}

