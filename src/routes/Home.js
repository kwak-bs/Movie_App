import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };

  getMovies = async () => {
    // data - data - movies에 접근 (변수도 movies로 접근 하면 잘 출력됨)
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    // API로 받아온 movies가 잘 출력됨.
    //console.log(movies);

    // 기존 state에 있는 moives 배열에 Axios로 가져온
    // movies 배열 객체 넣어줌 ({movies : movies})
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                id={movie.id}
                key={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
              // 위와 같이 object를 풀어줄 때 map함수를 사용하고, 또
              // jsx에서는 props를 통해서 값을 전달한다.
              // key는 표현되지 않지만 필수 props이다.
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default Home;
