# React Quick Start
리액트 공식 퀵스타트 가이드중 새로운 개념 및 인지 해야하는 부분 일부 번역<br/>
공식 가이드 : [reactjs.org](https://reactjs.org/docs/hello-world.html)

#### 컴포넌트 표현식 사용
JSX내에서 `{}` 를 사용하여 js표현식을 작성할 수 있다.

#### 컴포넌트 상태 조작
컴포넌트에 사용되는 viewModel(state/ props)는 단방향으로 흘러야 한다. 이를 위해 viewModel의 상태를 변경하기 위해서 반드시 setState() 메소드를 사용해야 한다.
해당 메소드는 상태 변경에 따른 라이브사이클 메소드(`componentDidMount`, `componentWillUnmount`)를 fires 시킨다. 그리고 setState를 사용하여 선언, 변경된 상태값은 merge 된다.
추가로 state가 이전의 state를 참조하여 갱신되어야할 경우 아래처럼 setState 메소드의 파라미터로 고차함수를 사용하여 해당 메소드에 prevState, props를 던져 리턴되는 값을 사용해야 한다.
```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});

// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```
>  That function(setState를 말한다) will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

#### 컴포넌트 메소드 사용
리액트 컴포넌트내 메소드를 JSX에서 호출시 컴포넌트 인스턴스에 자동으로 `this`가 바인딩 되지 않으므로 생성자(`constructor`)에서 `this`를 바인딩한 메소드를 재선언 해 줘야한다.
```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

JSX에서 `arrowFunction`을 사용하면 정상적으로 컨텍스트를 참조하지만 공식 가이드에서는 이 방식 보다는 컴포넌트의 생성자(`constructor `)에서 명시적으로 바인딩 하는걸 추천하고 있다.
대부분의 경우 문제가 없지만 호출되는 콜백이 prop으로 하위 컴포넌트에 넘어갈 경우 해당 컴포넌트가 추가 렌더링 되어 성능 이슈를 발생시키기 때문이다.
```js
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
```
>The problem with this syntax(arrowFunction을 말한다.) is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem. (https://reactjs.org/docs/handling-events.html)

#### 리스트 컴포넌트내 key 사용
리스트 컴포넌트의 유니크한 식별자로 사용될 키가 필요하다. state에 uid값을 가지고 있어서 사용하면 된다. 리스트 아이템의 변경될 경우 성능 문제를 야기하므로 map과 같은 메소드의 index를 키값으로 사용하는건 피하는게 좋다고 한다. 유니크한 키를 사용하기 위하 module도 있다(https://www.npmjs.com/package/shortid)
> We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state. (가이드에 링크된 포스팅 https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)

#### Form 컴포넌트 사용
form 요소[`input`, `textarea`, `select`]는 내부 상태값을 가지기 때문에 다른 리액트 컴포넌트와는 다르게 동작한다. 컴포넌트의 상태는 setState 메소드를 통해서만 변경되어야 하는데 이 요소들은 사용자 입력에 따른 상태를 가지므로 `controlled component`라고 불리는 값이 제어되는 컴포넌트를 만들어야 한다.

__&lt;input/&gt;__<br/>
```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

`input[type="file"]` 경우는 사용자에 의해서만 value가 선언 되기 때문에 `controlled component`가 아닌 `uncontrolled component`로 분류된다. (https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag)

매번 controlled component를 사용하는건 귀찮은 일이고 외부 라이브러리와 함께 사용시 더욱 그렇다. 가이드는 기본적으로 controlled component를 추천하지만 이러한 부분을 개선하기 위해 궁극적으로 uncontrolled component를 고려해 볼 수 있다. (https://reactjs.org/docs/uncontrolled-components.html)

하나의 메소드로 여러 input 요소를 핸들링할 경우 아래와 같이 name 속성을 사용합니다.

>Note how we used the ES6 computed property name syntax to update the state key corresponding to the given input name:

```js
handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // ES6
    this.setState({
      [name]: value
    });

    // ES5
    // var partialState = {};
    // partialState[name] = value;
    // this.setState(partialState);
  }
```

__&lt;textarea&gt;&lt;textarea/&gt;__<br/>
textarea의 값은 children 노드이지만 react에서는 input 요소와 유사하게 value 속성으로 접근한다.
```js
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

__&lt;select&gt;&lt;select/&gt;__<br/>
select태그는 option 태그의 selected 속성을 사용하여 값을 선택하지만 react에서는 select의 value 속성을 사용합니다.
```js
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:

          // single select option
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>

        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
multiple 옵션 선택시 select 태그에 `multiple={true}`, `value={[a, b]}` 두가지 속성을 적용해 주시면 됩니다.
```js
// multiple select option
<select multiple={true} value={['B', 'C']}>
```

#### [컴포넌트간 state share(sync)](https://reactjs.org/docs/lifting-state-up.html#lessons-learned)
리액트에서 상태를 공유하기 위해서는 가장 가까운 공통 조상(ancestor)컴포넌트가 필요하다. 이를 lifting state up이라고 하며 조상 컴포넌트로 state를 옮기는 대신 로컬 state를 지운다. 조상 컴포넌트와 state를 공유하기 위해서 props 속성을 통해야 하는데 props는 readonly 속성이다. 따라서 조상 컴포넌트에서 props에 자신의 state를 변경하는 메소드 참조를 전달하고 하위 컴포넌트에서 이를 통하여 state를 share 한다.
```js
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />

      </div>
    );
  }
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

#### 컴포넌트 구조화 vs 상속
공식 가이드에서는 상속 보다는 적절한 구조화를 통한 개발을 추천하고 있다.
> At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.

아래와 같은 방식으로 컴포넌트를 구조화 하여 활용할 수 있다.

JSX를 중첩하면 props로 명시하지 않아도 `props.childre`로 임의의 자식을 컴포넌트에 전달할 수 있다.
```js
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```
props에 명시적으로 컴포넌트를 할당해 slots 방식으로 타겟 컴포넌트 내부에서 사용할 수 있다.
```js
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane left={<Contacts />} right={<Chat />} />
  );
}
```

### 리액트 설계 Flow
>[How to think about building components and applications with React](https://reactjs.org/docs/thinking-in-react.html)


1. 컴포넌트 계층 구조로 UI 쪼개기
2. 정적 버전의 리액트 Build
3. 앱에 필요한 state 확인
    - 애플리케이션에서 사용할 minimal한 data piece 확인
    - viewModel을 위한 별도의 상태 변수는 작성하지 말고 state를 사용
    - state인지 여부 확인
        - props를 통해 부모에 전달되면 state 아님
        - 시간이 지나도 변화가 없으면 state 아님
        - 컴포넌트의 state나 props 기반으로 계산할 수 있다면 state 아님
4. state를 가지고 있거나 변경하는 컴포넌트 식별하기
    - state를 기반으로 무언가를 렌더링하는 모든 컴포넌트를 식별한다.
    - 컴포넌트를 공통으로 소유하는 소유자(계층 구조에서 상태가 필요한 모든 구성 요소 위에 단일 구성 요소)를 찾는다.
    - 공통 또는 상위 컴포텉느가 state를 소유해야 한다.
    - state를 소유하고있는 컴포넌트를 찾을 수없는 경우 state를 보유하기위한 새 컴포넌트를 만들어 공통으로 컴포넌트를 소유하고 있는 계층구조위 어딘가에 추가한다.
5. 역방향 데이터 흐름 추가
