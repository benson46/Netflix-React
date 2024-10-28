import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import RowPosts from './Components/RowPosters/RowPosts'
import { API_KEY, imageUrl } from "./Constants/constants";


function App() {
const trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
const netflixOriginals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
const tv = `/discover/movie?api_key=${API_KEY}&with_genres=10770`;
const topRated = `/movie/top_rated?api_key=${API_KEY}&language=en-US`;
const actionMovies = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
const comedyMovies = `/discover/movie?api_key=${API_KEY}&with_genres=35`;
const horrorMovies = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
const romanceMovies = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
const mystery = `/discover/movie?api_key=${API_KEY}&with_genres=9648`;
const sciFi = `/discover/movie?api_key=${API_KEY}&with_genres=878`;

  
  return (
    <>
      <div>
        <Navbar/>
        <Banner/>
        
        <RowPosts title='Trending Now'  type={trending} image={imageUrl} />
        <RowPosts title='Netflix Originals'isSmall type={netflixOriginals} image={imageUrl} />
        <RowPosts title='TV Shows'isSmall type={tv} image={imageUrl} />
        <RowPosts title='Top Rated'isSmall type={topRated} image={imageUrl} />
        <RowPosts title='Action Movies' isSmall type={actionMovies} image={imageUrl} />
        <RowPosts title='Comedy Movies' isSmall type={comedyMovies} image={imageUrl} />
        <RowPosts title='Horror Movies' isSmall type={horrorMovies} image={imageUrl} />
        <RowPosts title='Romance Movies' isSmall type={romanceMovies} image={imageUrl} />
        <RowPosts title='Mystery Movies' isSmall type={mystery} image={imageUrl} />
        <RowPosts title='Sci-Fi Movies' isSmall type={sciFi} image={imageUrl} />

        
      </div>
    </>
  )
}

export default App
