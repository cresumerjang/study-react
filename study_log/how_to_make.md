어떤 식으로 프로젝트를 진행할지
컴포넌트 쪼개기
리듀서 쪼개기
단위 재사용범위등
쪼개는 룰 접근방법
디렉토리구조 (css는 어떻게 처리되나?)
페이지단위/액션/리듀서/컴포넌트 파일단위 쪼개어 디렉토리로 관리
마크업은 어떻게 작성할지
접근성 처리
작업전 모든 리스크 리스트업

state로 어플리케이션 구조를 정의하고
어떤 컴포넌트와 구성으로 이를 화면에 표시할지를 정하는 플로우?
컴포넌트를 컨테이너로 할지 프리젠테이션날 컴포넌트로할지 결정할 rule?
어떤 컴포넌트가 컨테이너를 반환하나
일반적으로는 가장 상위 컴포넌트(얘가 전체 앱을 관리함)
state의 특정 부분을 이용하는 최상위 부모 컴포넌트만이 리덕스에 연결되어야함?

프리젠테이션 - 컴포넌트
리덕스연결 - 컨테이더
컴포넌트와 컨테이너는 코드상 구분은 없음
리액트컴포넌트에서 상태 주입시 컨테이너를 통해서 주입한다.(react-redux)
컨테이너(리덕스에 속한 스테이트를 다룰 수 있는 컴포넌트)

컴포넌트    
- 컨테이너 (class)
- 프리젠테이션 (functional)

mapStateToProps (state) => {
    return { key:value }
}
하면 this.props에서 key로 참조가능

mapStateToProps는 state를 해당컴포넌트의 props로 연결시켜주고
connect로 컴포넌트로 컨테이너로 내보내준다.

mapDispatchToProps(dispatch){
    return bindActionCreators({key:value}, dispatch) // (키:액션, dispatch)
}
는 액션이 호출되면 모든 리듀서에 해당 액션이 전달 되도록 바인딩해줌
dispatch가 액션을 리듀서로 뱉어내는 역할
mapDispatchToProps가 반환하는 값이 컨테이너의 props에 할당되게 하는 역할
그래서 this.props.key로 함수 호출하면 액션에 dispatch되고 리듀서가 이를 받아 store를 업데이트하고 라이프사이클에 의해 컴포넌트가 리랜더링된다.

섹션을 나누고 컴포넌트를 쪼갠다
쪼갠컴포넌트중 어떤걸 컨테이너롤 사용할지 정한다.

---
#### Think
1. 컴포넌트 트리중 어떤 컴포넌트를 컨테이너로 만들지 정한다.
2. 각 컨테이너, 컴포넌트에서 사용할 액션 정의한다.
3. 해당 액션을 처리할 리듀서 정의한다.

#### Do
1. 컴포넌트의 컨테이너화
2. 1번 처리를 위해 액션 파일에 액션 생성자 먼저 추가
  - type, payload 정의
3. 액션을 처리할 리듀서 생성
4. 루트 리듀서 파일에서 해당 리듀서 결합
```js
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    videos: VideoReducer
});
export default rootReducer;
```
5. 컴포넌트로 돌아와서 connect, bindActionCreators 임포트
```js
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
```
6. 액션과 리덕스 스토어를 컨테이너에 묶어준다.
```js
mapStateToProps(state){
    return {
        propsName: state.comBineReducer의 Key 값
    }
}
mapDispatchToProps(dispatch) {
  return bindActionCreators({propsName: 임포트한 액션 함수}, dispatch);
}
```
7. 리덕스와 액션을 props로 컴포넌트에서 참조할 수 있게되었으므로 리덕스를 값이 필요한 곳에 추가하고
이벤트나 필요한 로직에서 액션을 호출한다.


액션을 사용할 곳에서는 액션호출하고
바인드 액션크리에이터로 액션을 컴포넌트 props에 바인딩 시킨다.

리덕스를 사용할 곳에서는
mapStateToProps로 액션하고 매칭되는 리듀서를 참조하는 키값을 값으로
컴포넌트 props에 새로운 키값으로 바인딩하여 컴포넌트에 연결해 둔다.

둘다 커넥트는 필수

미들웨어 쓸려면

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
