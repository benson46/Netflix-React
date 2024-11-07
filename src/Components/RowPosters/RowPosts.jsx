import { useEffect, useState } from "react";
import "./RowPosts.css";
import axios from "../../Axios";
import YouTube from "react-youtube";
import { API_KEY } from "../../Constants/constants";

const RowPosts = ({ title, isSmall, type, image }) => {
  const [movies, setMovie] = useState([]);
  const [urlId, setUrlId] = useState(null);

  useEffect(() => {
    axios
      .get(type)
      .then((response) => {
        // Filter out movies with no poster
        const filteredMovies = response.data.results.filter(
          (movie) => movie.backdrop_path
        );
        setMovie(filteredMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [type]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleTrailer = (id) => {
    if (urlId && urlId.movieId === id) {
      setUrlId(null);
    } else {
      axios
        .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en=US`)
        .then((response) => {
          if (response.data.results.length !== 0) {
            setUrlId({ movieId: id, key: response.data.results[0].key });
            console.log(urlId);
          } else {
            alert("No trailer available");
          }
        })
        .catch((err) =>
          console.log(`fetching data got error 
                error: ${err}`)
        );
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={isSmall ? "smallPost" : "post"}
            src={`${image + movie.poster_path}`}
            alt={movie.name || "image"}
            onClick={() => handleTrailer(movie.id)}
          />
        ))}
      </div>
      {urlId && urlId.key ? (
        <YouTube videoId={urlId.key} opts={opts} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RowPosts;
