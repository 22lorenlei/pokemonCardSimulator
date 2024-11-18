import {Link} from 'react-router-dom' 
function Home() {
  return (
    <>
      <h1> This is the home page for pokemon card simulator </h1>
      <Link to="/pokemonCardSimulator">
      <button> Pokemon Simulator </button>
    </Link>
    </>
  )
}

export default Home
