
import './App.css'
import  react, {useState} from 'react'
import PelitList from './PeliList'
import Laskuri from './Laskuri'
import GenretList from './GenreList'

function App() {

  const [page, setPage] = useState("")


  return (
    <>
    <button onClick={() => setPage("genret")}>genret</button>
    <button onClick={() => setPage("pelit")}>pelit</button>
    <button onClick={() => setPage("Laskuri")}>Laskuri</button>
    <button onClick={() => setPage("Sport")}>Laskuri</button>
   
    

     {page === "pelit" && <PelitList />}

     {page ==="genret" && <GenretList />}

    {page === "Laskuri" && <Laskuri/>}

    

    </>
  )
}

export default App
