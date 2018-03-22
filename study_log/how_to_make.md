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
