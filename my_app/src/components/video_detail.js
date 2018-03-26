import React from 'react';
import { connect } from 'react-redux';

const VideoDetail = ({ playVideo }) => {
    if( !playVideo ){
      return <div>목록에서 비디오를 선택하세요.</div>;
    }

    const url = `https://www.youtube.com/embed/${ playVideo.id.videoId }`;

    return (
        <div>
            <h1>React Axios Test</h1>
        <iframe title={playVideo.snippet.etag} width="700px" height="500px" src={ url }/>
        <p><strong>{ playVideo.snippet.title }</strong></p>
        <p>{ playVideo.snippet.description }</p>
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
// export default VideoDetail;
function mapStateToProps(state) {
    console.log('##############',state);
    return {
        playVideo: state.playVideo
    }
}
export default connect(mapStateToProps)(VideoDetail);
