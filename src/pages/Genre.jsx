import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const GenreName = ({genre}) => {
  return (
    <>
      <h2>All Artists</h2>
      <h3>Genre: {genre.name}</h3>
    </>
  )
};

const AllArtistsInGenre = ({params}) => {
  const [artists, setArtist] = useState([]);

  const endpoint = `${baseUrl}/artists?genre=${params.id}&_embed`;

  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((response) => {
      setArtist(response.data);
    })
    .catch((error) => console.log(error))
  }, [endpoint])

  const renderedArtists = artists.map((artist, index) => {
    return (
      <div className='artist-container' key={index}>
        <Link to={`/artists/${artist.id}`}>
          <h4>{artist.title.rendered}</h4>
        </Link>
      </div>
    )
  });

  return(
    <>
      {renderedArtists}
    </>
  )
};

const Genre = () => {
  const [genre, setGenre] = useState({});
  const params = useParams();

  const genreEndpoint = `${baseUrl}/genre/${params.id}`

  useEffect(() => {
    axios.get(`${genreEndpoint}`)
    .then((response) => {
      setGenre(response.data);
    })
    .catch((error) => console.log(error))
  }, [genreEndpoint])

  return (
    <div>
      <GenreName genre={genre}/>
      <div className='artist-grid'>
        <AllArtistsInGenre params={params}/>
      </div>
    </div>
  )
}

export default Genre
