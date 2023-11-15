import React, {useState, useEffect} from "react"
import './App.css'
import GenreService from './services/Genre'
import GenreAdd from "./GenreAdd"

const GenreList = () => { // vastaava kuin function PelitList() {...

    // Komponentin tila (state)
    const [genret, setGenret] = useState([])
    const [adding, setAdding] = useState(false)
    const [search, setSearch] = useState("")
    
    // UseEffect funktio suoritetaan aina kun komponentti ladataan 1. kerran
    useEffect(() => {
        GenreService.getAll()
        .then(data => setGenret(data))
    } , [])
                                                                                                                                                             
//// DELETE NAPIN TAPAHTUMANKÄSITTELIJÄ FUNKTIO 
// saa parametriksi koko peli olion)
const deleteGame = (genre) => {
    let answer = window.confirm("Poistetaanko genre: " + genre.genre)
    if (answer === false){
        return
    }
    else {
        GenreService.remove(genre.genreId)
        .then(res => {
            alert(res)
            window.location.reload()
            }
          )
      }
    }


return(
    <div>
            <button className="add-btn" onClick={() => setAdding(true)}>
                Lisää uusi genre</button>

            {adding && <GenreAdd />}

            <input type="text" placeholder="Hae genreiä" 
            value={search}
            onChange={({target}) => setSearch(target.value)} />

            {genret && genret.map(p => {
                let lowerCaseName = p.genre.toLowerCase()
                if (lowerCaseName.indexOf(search) > -1) {
                
                return(
                    
                <div key={p.genreId} className="genre-div">

                    <button onClick={() => deleteGame(p)} className="poisto-btn">X</button>
                   
                    <h3>{p.genre}</h3>
                    <h5>Kuvaus: {p.kuvaus}</h5>
                  
                </div>
                    )
                }}
            )}
    </div>
 )


}

export default GenreList