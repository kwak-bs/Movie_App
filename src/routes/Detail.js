import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;

    // 클릭해서 들어오는 것이 아닌 검색해서 들어온다면
    if (location.state === undefined) {
      // home으로 redirect
      history.push("/");
    }
  }
  //componentDidmount()는 class component내에서
  //render가 실행되기 전에(mount 되기전에) 실행됨

  render() {
    const { location } = this.props;
    // 클릭해서 들어오면 잘 보여주고
    // 새로고침하면 다시 redirect
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
