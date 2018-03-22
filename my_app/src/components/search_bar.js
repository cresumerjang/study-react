import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />
// };
class SearchBar extends Component {
    constructor({ searchYoutube }) {
        super(searchYoutube);

        this.state = {
            searchYoutube,
            placeholder: '키워드를 입력해 주세요.',
            value: ''
        };
    }

    // arrow function 사용하지 않으면 런타임 컨텍스트 참조로 함수 내부에서 this 참조 불가능
    // 컴포넌트 인스턴스 생성시 this를 자동으로 바인딩 해주지 않기 때문에 constructor 에서 명시적으로 추가 바인딩 해줘야함.
    onInputChange = event => {
        this.setState({value: event.target.value});
        this.state.searchYoutube(event.target.value);
    }

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

export default SearchBar;



// class VideoDetail extends Component {
//   constructor( props ) {
//     if( !props ){
//       return <div>목록에서 비디오를 선택하세요.</div>;
//     }
//     super( props );
//
//     this.state = {
//       title: props.video.snippet.title,
//       description: props.video.snippet.description,
//       url: `https://www.youtube.com/embed/${ props.video.id.videoId }`
//     };
//   }
//
//   componentDidMount = () => {
//       window.scrollTo(0, 0);
//   }
//
//   render() {
//     return (
//         <div>
//         <iframe src={ this.state.url }/>
//         <p><strong>{ this.state.title }</strong></p>
//         <p>{ this.state.description }</p>
//         </div>
//     );
//   }
// }
