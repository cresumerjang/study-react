애니메이션처리?
제이쿼리
구글맵
슬라이더 플러그인등 외부 플러그인 사용은 어떻게?
라이브러리 리소스 불러오느법
돔처리 방식이 다른거에 대한 이슈?

npm에 올라간 라이브러리만 사용가능?
일반 슬라이더 플러그인 받아서 컴포넌트 안에서 어떻게 사용


---
브랜치 나눠서 서로서로 코드리뷰
처음 스터디 방법부터
어떤식으로 흐름을 잡고 코드를짰는지까지 정리
z-index 규치(scss 규칙 변수화 사용)
dom셀렉팅은 DOM으로 에니메이션은 css3 transition으로
제이쿼리 빠이
dom에서 노드 제거시 페이드아웃 효과 주면서 사라지게 하고싶다
그럴때 components에서 ref로 참조하여 애니메이션 처리하고 removeChild같은 걸로 dom 지우면 되나?
상태 관리가 필요한 돔이면 지우고 setState나 액션 디스패치 추가로 해주고
리듀스에서 상태관리는 배열이 아닌 오브젝트(해시)베이스 스토리지 형식으로
배열경우루프를 해야하고 최적화된 알고리즘을 고려해야하지만
해시객체는 키값으로 바로 메모리 참조가능

class aaa {

  removeItem () => {
    $(refs.item).fadeOut(function()
    refs.item.remove()
  )
  }

  rend(){
    re(

      asdf.map(asdfas
          onClick=

      )
    )
  }
}

[
  {
    data,

  }
]

child {
  state = {
     remove: false
  }

  handleRemove() {
    remove -> true
    0.3 this.props.onRemove
  }

  render() {
    remove === true 일때 어떤 스타일 apply
  }
}

import slider from '.../asdf'
didMount

  new refs.slider. slider()
);
<div ref-"sldier"


didMount는 가상돔에서 사라졋다가 다시 그려질때만 색상바뀌고 이런 state변경에는 영향없음




---

상태 관리를 위한 immutable.js 사용법 숙지
https://react-immutable.vlpt.us/01.html
모든 객체는 Map으로 감싼다. 중첩이면 내부에 계속 Map으로 감싼다.
```js
import { Map, List, Record } from 'immutable';
const obj = Map({
  foo: 1,
  inner: Map({
    bar: 10
  })
});
const arr = List([
  Map({ foo: 1 }),
  Map({ bar: 2 }),
]);


console.log(obj.toJS()); // .toJS()는 일반 js Object로 변환해줌
console.log(arr.toJS());
obj.get('foo');
arr.get(0);
obj.delete('foo');
arr.delete(0);

obj.set('foo', 5); // set하면 새로운 참조의 객체를 리턴함
// 기존 객체에 추가시는
obj.update('foo', value => value + 1);

or

Record 사용해서 Record 객체만들어서 Map처럼 사용가능
중첩 Record 가능
```

immutable.js 어려우면 immer.js로?

reselect.js

ref로 dom에 다한 직접적인 값을 사용
-> input에 포커스 주거나 할 경우 사용
```js
import React, { Component } from "react";

class RefSample extends Component {
  state = {
    height: 0
  };

  input = null;
  box = null;

  handleClick = () => {
    this.input.focus();
  };

  componentDidMount() {
    this.setState({
      height: this.box.clientHeight
    });
  }

  render() {
    return (
      <div>
        <input
          ref={ref => {
            this.input = ref;
          }}
        />
        <button onClick={this.handleClick}>Focus Input</button>
        <div
          ref={ref => {
            this.box = ref;
          }}
        >
          <h2>TITLE</h2>
          <p>Content</p>
        </div>
        <p>
          <b>height:</b> {this.state.height} // ex) 118
        </p>
      </div>
    );
  }
}

export default RefSample;

```
컴포넌트에 ref 달면 컴포넌트 인스턴스를 가져올 수 있음. ui상태 변경시에만 가끔 사용함 데이터때문에 사용하면 상태가 꼬임
-> 특정 컴포넌트의 스크롤 위치 변경할 경우정도에 사용
```js
import React from "react";
import { render } from "react-dom";
import RefSample from "./RefSample";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  componentDidMount() {
    console.log(this.input);
  }
  render() {
    // ref={ref => this.input = ref }가 아닌 다른 attr에 할당시 생성된 dom이 아닌
    // 컴포넌트의 인스턴스에 직접 참조 가능
    return <RefSample innerRef={ref => this.input = ref} />;
  }
}

render(<App />, document.getElementById("root"));

```

DOM 메소드 다시공부

날짜를 위한 코드를 매번 작성하지말고
https://momentjs.com/ 사용 고려

https://include-media.com/ 사용하여 반응형 처리 방법 찾아보기

scss에서 import시 ~ 붙여주면 노드 모듈스에서 불러올 수 있음(../../하지 않아도 됨)


Q
axios
  .get()
  .then((res)=>{ then말고 res값을 밖으로 바로 빼는 법? })
  .catch()

=> asfd => ffff => {}
  let c = str1 => {
  	return str2 => {console.log(str1 + str2)}
  }
  c(1)(2) //3

VSCode 플러그인 및 설 // 3

import * as HAHA from 'something'; HAHA로 something의 export된 모든 참조가 가능함

async await
함수앞에 async를 넣어주면됨
aa = async() => {}
async function aa(){}
async 내부에서 try catch로 에러잡아 디버깅함
const aa = async() => {
  try{
    const response1 = await api.getPOD(data);
    const response2 = await api.getPOD(data);
    const response3 = await api.getPOD(data);
  }catch(e){

  }
}
최적t
shouldComponentUpdate(prevProps, prevState) {
    return this.props.user !== prevProps.user;
  }

  store.getState().value 값가져옴


  defaultProps

  여러개의 form 상태 관리를 위해서 this.state에 폼요소와 매칭되는 값들을 생성한다.
  폼 요소의 name값과 state.폼참조명 을 같이 맞춰주고
  setState시 setState([e.target.name]: updateValue)과 같이 처리할 수 있다.

UI경우 렌더 시점을 위해 열림 닫힘등의 상태등만 가지고 있고
이미 렌더된 후 UI애니메이션 처리는 ref를 통한 직접적인 DOM컨트롤로 처리한
UI컨트롤은
아코디언 컨테이너에서 열린 아코디언의 상태를 가지고 있고 아코디언 컴포넌트는 그냥 ref를 통한 DOM 처리를 하는게 맞는 것 같고. 컨테이너의 라이프사이클에서 이전상태와 비교해서 열림, 닫힘 관련된 값일 경우 렌더하지 않음으로 처리

Comp.defaultProps
Comp.propTypes
로 프리젠테이션 컴포넌트의 읽기전용 상태를 관리할 수 있지만
상태로 관리해야하는 부분이 있으면 state의 초기값으로 state를 할당하고
이후는 state통해 관리하는게 맞나?

constructor()
componentWillMount()
render()
componentDidMount()
컴포넌트사용
  componentWillReceiveProps(nextProps)
  shouldComponentUpdate(nextProps, nextState)
  componentWillUpdate()
  render()
  componentDidUpdate()
componentWillUnmount()



https://code.visualstudio.com/docs/getstarted/tips-and-tricks#vscode
https://medium.com/@auchenberg/live-edit-and-debug-your-react-apps-directly-from-vs-code-without-leaving-the-editor-3da489ed905f
https://code.visualstudio.com/docs/nodejs/reactjs-tutorial


dom은 dom메소드 사용하고 애니메이션은 css3로 하면 jquery 안쓸 수 있을 것 같은데...
아래 리액트에서 애니메이션 처리 사례 확인 후 검토
https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935
gitbook list https://gist.github.com/velopert/8a1071ea03f06d21a98bc38986d24290
https://reactarmory.com/guides/lifecycle-simulators 라이프사이클 확인
https://validatejs.org/
https://github.com/vlpt-playground?tab=repositories
https://github.com/mweststrate/immer
https://redux-form.com/6.0.0-alpha.6/examples/simple/
https://github.com/facebook/prop-types
https://articles.coltpini.com/react-redux-architecture-overview-7b3e52004b6e

vscode에서 eslint 기본은 루트에 .eslintrc 추가
yarn eject후는 package.json에 eslintConfig에 컨피그
HOC 예제코드 https://codesandbox.io/live/OYn6nQ
https://gist.github.com/velopert/3bdd08cb135587ffc481102c38134f6d
https://bestalign.github.io/2015/10/26/cartoon-intro-to-redux/

project안에 .env파일 안에 NODE_PATH=src 라고 작성하면
모듈에서 import시 src부터 경로 써주면됨

액션명 작성시 어떤모듈의 액션인지 namespace개념으로 작성함
const create = '/WIDJET/CREATE';
const INCREMENT = '리듀서명/액션명';

```js
import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = {
  number: 0
};

export default handleActions(
  {
    [INCREMENT]: state => {
      return { number: state.number + 1 };
    },
    [DECREMENT]: ({ number }) => {
      return { number: number - 1 };
    }
  },
  initialState
);

```
duck patter사용해서 액션과 리듀서는 함께 리듀서엔트리에서 컴바인만함 액션은 개별로 존재

스토어를 만드는 configure.js 고려?
```js
import { createStore } from 'redux';
import modules from './modules';

const configure = () => {
  const store = createStore(modules);
  return store;
};

export default configure;

```