import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initList } from '../actions/index';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import axios from 'axios';

// const SearchBar = () => {
//     return <input />
// };
class SearchBar extends Component {
    constructor({ searchYoutube }) {
        super(searchYoutube);

        this.state = {
            placeholder: '키워드를 입력해 주세요dd.',
            value: ''
        };
    }

    // arrow function 사용하지 않으면 런타임 컨텍스트 참조로 함수 내부에서 this 참조 불가능
    // 컴포넌트 인스턴스 생성시 this를 자동으로 바인딩 해주지 않기 때문에 constructor 에서 명시적으로 추가 바인딩 해줘야함.
    onInputChange = event => {
        this.setState({value: event.target.value});
        this.getVideoList(event.target.value);
    }

    getVideoList = _.debounce(( searchKeyword = '보기만 해도 힐링되는 하이텐션 사나' ) => {
      const YOUTUBE_API_KEY = 'AIzaSyBeF5pvvqj0ekkeMPXgnJAfmC7bZWhiCOE';
      const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search';
      const that = this;

      axios.get(YOUTUBE_API, {
          params: {
              q: searchKeyword,
              part: 'snippet',
              key: YOUTUBE_API_KEY
          }
      })
      .then((res) => {
        // this.setState({ videos: res.data.items });
        that.props.initList(res.data.items);
      });
    }, 300)

    render() {
        return (
            // JSX로 리턴되는 노드는 유일해야한다.
            // siblings 노드는 허용되지 않으며 필요시 child 노드가 추가되어야 한다.
            <div>
                <input
                    placeholder={this.state.placeholder}
                    onChange={this.onInputChange}
                    value={this.state.value}
                />
                비디오를 검색합니다.
            </div>
        )
    }
}

// function mapStateToProps(state) {
//   return {
//     videos: state.videos
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({initList: initList}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
// export default SearchBar;
