// Package Modules
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
// import _ from 'lodash';
// import axios from 'axios';

// UI Components
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

// Reducers
import ReducersEntry from './reducers/index';

const logger = createLogger({/* timestamp: true, diff:true */});
const createStoreWithMiddleware = applyMiddleware(logger, ReduxThunk)(createStore);
const store = createStoreWithMiddleware(ReducersEntry);

class App extends Component {
  constructor(props) {
    super(props);

    // state는 생성자에서 하도록 하자 그냥해도 상관은없음
    this.state = {
      isLogin: true,
      number: 0
    };

    // this.getVideoList(); // 비디오 목록 호출
  }

  /**
   * 비디오 목록에서 비디오 선택시 해당 비디오 객체로 state 변경
   * @param  {[Object]} selectedVideo [선택된 비디오 객체]
   */
  onVideoSelect = ( selectedVideo ) => {
    this.setState({ selectedVideo });
  }

  // 16.3 부터는 사라져서 이건 constructor 에서 하거나 componentDidMount 에서 하면됨
  // dom에 접근하기전 할일을 사용하던거
  // componentWillMount() {
  //
  // }

  componentDidMount() {
    // dom 관련 작업들, width값 스크롤 위치 등
    // api 호출들
  }

// update //
  componentWillReceiveProps(nextProps) {
    // this.props 는 이전 props
    // state가 props에 따라 변해야 하는 로직 여기서 처리
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 성능 최적화시 주로 사용하는 메소드, 버츄얼 돔에 그리는 것 조차 아낄 수 있음
    // return true를 하지 않으면 업데이트 안됨
    // this.props.item !== nextProps.item // 현재와 이전 값을 비교하여 반환여부 결정

    // ex
    // 5 의 배수라면 리렌더링 하지 않음
    // console.log('shouldComponentUpdate');
    // if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  countUp = () => {
    this.setState(
      // (state) => ({ number: state.number + 1})
      ({ number }) => ({ number: number + 1})
    );
    // this.setState({number: this.state.number +1});
  }

  countDown = () => {
    this.setState({number: this.state.number -1});
  }
  /**
   * 랜더 메소드
   * @return {[Object]} [JSX]
   */
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <div>count : {this.state.number}</div>
          <button onClick={this.countUp}>+</button>
          <button onClick={this.countDown}>-</button>
          { this.state.isLogin ?
            (
              <Fragment>
                <SearchBar searchYoutube={ this.getVideoList }/>
                <VideoDetail video={ this.state.selectedVideo }/>
                <VideoList videos={ this.state.videos } onVideoSelect={ this.onVideoSelect }/>
              </Fragment>
            )
              : (<div>Empty Content</div>)
            }
        </Fragment>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
