import React from "react";
import axios from "axios";

class App extends React.Component {
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
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
    // API로 받아온 movies가 잘 출력됨.
    console.log(movies);

    // 기존 state에 있는 moives 배열에 Axios로 가져온
    // movies 배열 객체 넣어줌 ({movies : movies})
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}
export default App;
