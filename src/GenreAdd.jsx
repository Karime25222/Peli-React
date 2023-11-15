import React, {useState} from "react"
import './App.css'
import GenreService from './services/Genre'

const GenreAdd = () => {

// Statet jotka pitää kirjaa input kenttien sisällöstä
const [genre, setGenre] = useState("")
const [kuvaus, setKuvaus] = useState("")


// Funktio jota kutsutaan kun formi submitoidaan
const formSubmitted = (event) => {
    event.preventDefault()
    
    const uusiGenre = {
        genre: genre,
        kuvaus: kuvaus,
    
    }

    GenreService.create(uusiGenre)
    .then(response => {
        alert(response.data)
        window.location.reload()
    })

}


return(
    <div className="add-div">
        <form onSubmit={formSubmitted}>
            <input type="text" placeholder="genre" value={genre} 
            onChange={({target}) => setGenre(target.value)}
            required
            />

            <input type="text" placeholder="Kuvaus" value={kuvaus}
            onChange={({target}) => setKuvaus(target.value)} 
            required />


            <input type="submit" value="tallenna"/>
        </form>
    </div>
    )
}

export default GenreAdd