### Q&A
- action 조작은 actionCreator 내부에서 하나 아니면 외부에서 하고 actionCreator 는 action 만 리턴해 줘야하나?
> 액션(뷰모델)을 리턴하는 액션 생성자는 mapDispatchToProps로 props에 바인딩된 콜백 함수로 리듀서에서 이전 state와 비교하여 새로운 state를 처리하기 위한 base state를 만들어 넘기는게 맞는 듯.<br/>
ex) 관심상품 클릭시 액션 생성자에서 로그인 여부 체크(isLogin API)해서 base 액션을 만든다음(변경될 형상의 뷰모델) 리듀서로 값 전달, 리듀서에서는 API 같은거 호출하지 않음

- CDN에 올라간 CSS는 번들링할 수 없지않나? 그렇다면 html에 코드밖고 환경마다 바뀌도록 해야하나? 한다면 어디서 설정하고 어떻게 가능한지?
> 대기

- yarn.lock / package.json.lock 같은 `lock` 파일은 용도가 뭔지?
> 대기

- jsx는 dom을 대신하는 문법이지 확장자는 js, jsx든 상관 없다?
> 상관 없음, TS 사용시 상관 있-

- create-react-app 으로 개발환경 사용하는 거랑 직접 webpack config 작성해서 사용하는 거랑 차이점?
> 대기

- 번들시 엔트리 파일을 지정하는데 엔트리파일과 참조가 없는 파일은 번들링 대상이 아닌가?
> 대기

### Note
- JSX 주석
> <!-- --> 안됨 { /\* \*/},

- 코드 스플리팅
> 번들링 코드 분할?
https://www.youtube.com/watch?v=joFI3H3ZImE

- Koa + MongoDB 로 백엔드 사용

- 웹팩에서 이미지가 10k 미만이면 base64로 js로 변환시키기도

- react 16.2에서 컴포넌트 리턴시 무의미한 dom 리턴하지 않게 `Fragemnt` 사용하여 처리가능

```js
import React, { Component, Fragment } from 'react';

render() {
  return (
    <Fragment>
        <VideoDetail video={ this.state.selectedVideo }/>
        <SearchBar searchYoutube={ this.getVideoList }/>
        <VideoList videos={ this.state.videos } onVideoSelect={ this.onVideoSelect }/>
    </Fragment>
  )
}
```

- jsx 내에서 조건부 랜더링은 if 사용불가  &&나 삼항연산자 사용

```js
render() {
  return (
    <Fragment>
    { this.isLogin ?
      (
        // 내부에서 리턴할 JSX도 dom으로 감싸진 단일 노드가 리턴되어야함
        <Fragment>
          <VideoDetail video={ this.state.selectedVideo }/>
          <SearchBar searchYoutube={ this.getVideoList }/>
          <VideoList videos={ this.state.videos } onVideoSelect={ this.onVideoSelect }/>
        </Fragment>
      )
        : (<div>Empty Content</div>)
      }
    </Fragment>
  )
}

render() {
  return (
    <Fragment>
        { isLogin && <ShowUi/> }
    </Fragment>
  )
}
```

- props는 부모가 자식에게 주는 값 자식이 값을 변견할 수 없다?
> 프롭스는 읽기 전용으로 함수 컴포넌트는 props로 접근, 클래스 컴포넌트는 this.props로 접근

- immutable.js, immer.js 로 자바스크립트 전개연산자로 객체 컨트롤 할 수 있다.
- view model기반 UI니까 초기화 되지 않은 선언되지 않은 모델 값이나 타입이슈에 대한 에러캐치 신경쓰기 and 컴포넌트.defaultProps 처럼 기본 속성값 선언
없는 데이터 참조시 에러 발생하게 하는 라이프사이클 메소드 활용 componentDidCatch(error, info)

- es6  newObject = {...baseObject, key:val }로 참조 끊을 수 잇는 듯
