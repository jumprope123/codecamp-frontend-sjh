import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
       // 그려지고 나서 실행
  }

  componentDidUpdate() {
    // 변경되고 나서 실행
  }

  componentWillUnmount(){
    // 사라지기 전에 실행
  }

  onClickCountUp = () => {
    this.setState({
      count: 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>count Up</button>
      </>
    );
  }
}
