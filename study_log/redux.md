리덕스 액션
타입(파이어할 이벤트명 or Request URI 같은 것)을 가진 데이터(객체) 묶음
액션 생성자는 타입(+상태)을 가진 객체를 반환하는 함수
디스패치를 통해 액션을 리듀서로 보낼 수 있다.

리듀서는 액션의 타입을 가지고 리듀서함수를 호출하여 store를 업데이트 하여 애플리케이션의 상태를 바꾸는 일을 함
앱의 상태를 만들때 데이터 뿐만 아니라 UI의 상태도 상태 트리에 저장해야하는데 이는 좋지않은 방법으로 데이터는 UI 상태와 분리 권장
앱이 복잡해지면 각각의 상태가 서로를 참조하는 경우도 생기지만 앱의 상태가 중첩되지 않도록 정규화 하는 것이 중요함.
각 상태는 id(pk)를 가지고 이를 통하여 개체나 목록을 참조하도록 설계

https://deminoth.github.io/redux/basics/Reducers.html
리듀서(상태와 액션을 받음)에서 하지말아야 할 것
- 인수 변경
- API호출 및 라이팅 전환
- Date.now / Math.random 같은 메소드 호출금지, 같은 입력(액션)엔 항상 같은 상태가 반환되어야함

즉 주어진 인수(상태, 액션)를 가지고 다음 상태만 반환하면 됨.
상태 반환시 이전 상태는 건들지 않고 새로운 객체로 상태를 반환해야함
Object.assign()(지원브라우저 제한적) 으로 deep copy로 참조 없는 복사본을 만들어 리턴해야함.
https://www.npmjs.com/package/babel-plugin-object-assign
loadash의 _.assign https://lodash.com/docs/4.17.5#assign
사용하여 deep copy 처리
알수없는 액션이 들어오면 이전의 상태를 반환 해야함(왜지?)
리듀서의 초기 상태는 default arguments로 쪼개진 각 리듀에서 처리

```js
function todoApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  // 지금은 아무 액션도 다루지 않고
  // 주어진 상태를 그대로 반환합니다.
  return state
}

// or

function todoApp(state = initialState, action) {
  // 지금은 아무 액션도 다루지 않고
  // 주어진 상태를 그대로 반환합니다.
  return state
}
```

리듀서 쪼개기를 통해 상태를 구조화 하여 관리할 수 있음
앱크기 고려하기 보다 처음부터 이렇게 구현하는게 좋음
각 리듀서에서 initialState를 관리하고 리듀서의 state는 전체 store가 아닌 자신이 관리하는 부분의 데이터만을 받음

쪼개진 리듀서는 redux의 combineReducers()를 통하여 리듀서를 하나로 합친다.
combineReducers는 객체를 기대하기 때문에, 모든 최상위 리듀서들을 각기 다른 파일에 놓고 export한 다음 import * as reducers를 이용해 각각의 이름을 키로 가지는 객체를 얻을 수 있다
```js
import { combineReducers } from 'redux';
import * as reducers from './reducers';

const todoApp = combineReducers(reducers);
```
합쳐진 리듀서를 가지고 리덕스의 createStore를 통해 store를 생성한다.
두번째 인수로 초기 상태를 지정할 수 있다. 서버에서 실행중인 리덕스 상태와 클라이 언트의 상태를 채워줄때 사용한다.
```js
let store = createStore(combinedReducer, window.STATE_FROM_SERVER);
```

디스패치로 액션을 보내면 리덕스 스토어가 액션타입에 일치하는 리듀서를 실행한다?

컴포넌트 설계시 presentational 컴포넌트, container 컴포넌트를 잘 분리하여 컴포넌트 계층을 설계해야함
함수형이냐 클래스형(라이프사이클, 최적화등 필요시)이냐는 적절하게 선택해서 사용하면됨

투두리스트 예시 temp-react로 해보기 https://deminoth.github.io/redux/basics/ExampleTodoList.html
### 비동기 리덕스 사용하는법 확인필요
리듀서 구조화하기
https://deminoth.github.io/redux/recipes/StructuringReducers.html

https://www.udemy.com/react-redux-korean/learn/v4/content
axios 사용법


일단 프리젠테이셔날 컴포넌트로 데이터 떨구다보면 컨테이너가 필요하다고 느끼게된다고함
컨테이너 컴포넌트는 redux의 connect로 구현
