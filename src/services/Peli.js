import axios from "axios"

//const baseUrl = "https://localhost:7134/api/Peli"
const baseUrl = "https://pelibackend.azurewebsites.net/api/Pelit"

const getAll = ()=> {

    const request = axios.get(baseUrl)
    return request.then(response => response.data)

}
// Uuden luontiin käytettävä http pyyntö
const create = (peli) => {
    const request = axios.post(baseUrl, peli)
    return request.then(response => response)
}
// Poisto ///////////////////////////////
const remove = (id) => {
    const request = axios.delete(baseUrl + "/" + id)
    return request.then(response => response.data)
}

export default {getAll, create, remove}
