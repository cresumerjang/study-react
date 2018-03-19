# ReactJS로 프로젝트 진행하기
```
npm install -g create-react-app
create-react-app my_app
cd my_app
```
or
```
git clone https://github.com/cresumerjang/temp-react.git
cd my_app
```
and
```
npm install
npm run start
```
## Must need to know
- __ES6__ (react 컴포넌트 작성시 자주 사용되는 ES6 문법)
    - [class](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/class)
    - [import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import) / [export](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export)
    - [arrow function](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)
    - [map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    - [filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
    - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let) / [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
    - [destructuring assignment](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- __ReactJS__ ([Quick Start](https://reactjs.org/docs/hello-world.html) / [Advanced Guide](https://reactjs.org/docs/jsx-in-depth.html))
    - State(props, state)
    - Component lifecycle
    - Etc
        - jsx
        - form(controlled/uncontrolled components)
        - event handling
        - lifting state up
- __Redux__ (효율적인 상태 관리를 위한 [redux](https://deminoth.github.io/redux/))
    - action, reducer, store...
- __Etc__
    - 환경설정 관련 이슈 대응을 위한 [webpack](https://webpack.js.org/) 학습


## Considerations
- __redux를 통한 상태(props, state) 관리__
    - redux의 action정의
    - 구조화된 reducer 설계
- __재사용 단위 고려한 component 작성__
    - component 재사용 고려 범위를 page definition에 근거한 region 단위로 제한.
    - region을 벗어나면 동일 UI일 지라도 component를 재작성하여 리즌 단위로 폴더 구성하여 관리.
    - scss 파일도 컴포넌트와 동일한 계층으로 구성하고 관리.

## Reference
#### 적용 사례 & 후기
- http://huns.me/development/1953
- https://jae-kwang.github.io/blog/2018/02/04/project-react/
- https://www.ridicorp.com/blog/2017/09/13/how-to-develop-ridistory-front/

#### 가이드, 예제코드
- https://deminoth.github.io/redux/
- http://d2.naver.com/helloworld/1848131
- https://github.com/reactjs/redux
