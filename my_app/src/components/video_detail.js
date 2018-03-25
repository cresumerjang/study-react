import React from 'react';

const VideoDetail = ({ video }) => {
    if( !video ){
      return <div>목록에서 비디오를 선택하세요.</div>;
    }

    const url = `https://www.youtube.com/embed/${ video.id.videoId }`;

    return (
        <div>
            <h1>React Axios Test</h1>
        <iframe title={video.snippet.etag} width="700px" height="500px" src={ url }/>
        <p><strong>{ video.snippet.title }</strong></p>
        <p>{ video.snippet.description }</p>
        </div>
    );
};


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

// componentDidMount = () => {
//     window.scrollTo(0, 0);
// }
export default VideoDetail;
