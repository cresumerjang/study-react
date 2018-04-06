# React/Redux를 위한 파일 구조 고민하기
<!-- 스노우화이트 프로젝트는 검색 개편 프로젝트로 검색 결과 페이지, 카테고리 리스트 페이지, 플렉시블 브라우저 페이지를 포함한다.
리액트를 사용하는 이유는 서버사이드 랜더링을 지원하고 동적으로 UI를 조합하여 사용하기에 유리하며 개발, 유지보수시 독립적인 컴포넌트로 신경쓸 부분이 적기 때문이다.
이러한 이유로 리액트를 사용하지만 컴포넌트의 재사용 역시 TradeOff를 야기한다고 생각하여 추후 발생할 이슈를 최소화 하며 유용하게 운용할 수 있는 접점을 고민할 필요가 있다고 생각하였다.
이러한 고민은 번들링과 컴포넌트 관련 리소스 작성을 위한 파일 구조에 영향이 있기 때문에 better file structure for reactredux 를 고민해 보았다. -->

파일 구조를 고민하다 보니 자연스럽게 `action/, component/, container/, reducer/, helper/` 등의 디렉토리로 나누게 되었다.
자연 스럽게 나눠진 구조에 대하여 프로젝트에 적절한 구조인지 검증하기 위해 구글링해본 결과 자연스럽게 나눠진 위의 구조는
리덕스(action, reducer가 필요한)를 사용한 애플리케이션 개발시 좋지 않다는 글들을 보게되어 better structure를 위한 몇가지 구조를 정리해 보았다.

#### Reference
- https://www.reddit.com/r/reactjs/comments/47mwdd/a_better_file_structure_for_reactredux/
- https://marmelab.com/blog/2015/12/17/react-directory-structure.html
- https://github.com/JisuPark/ducks-modular-redux
- http://bradfrost.com/blog/post/atomic-web-design/
- https://arc.js.org/
- https://www.facebook.com/groups/react.ko/permalink/1983182645275231/

#### Division Rule
- __파일 용도에 따른 구분__
- __서비스 페이지 단위 구분__
    - 파일명으로 컴포넌트 레벨 구분
    - 폴더명으로 컴포넌트 레벨 구분
    - 뷰/모델(액션, 액션생성자, 리듀서) 파일단위 컴포넌트 레벨 구분
- __Atomic Design Methodology__

#### 파일 용도에 따른 구분
> 용도(`action/, component/, container/, reducer/, helper/`)에 따라 자연스럽게 접하게 되는 가장 기본적인 구성인것 같다.
많은 튜토리얼이나 예제 코드들이 이와 같은 구조를 취하고 있으며, 작은 규모의 서비스에서는 크게 고민하지 않고 사용해볼 수 있을 것 같다.

```js
actions/
    // 공통 액션
    commons/
    // 검색 페이지 액션
    search/
    // 카테고리 리스트 액션
    category/
componentes/
    commons/
    search/
    category/
        filter/
            PriceRange.js
            OptionSelector.js
containers/
    commons/
    search/
    category/
reducers/
    commons/
    search/
    category/
helpers/
    commons/
    search/
    category/
```

#### 서비스 페이지 단위 구분 (파일명)
> 기본적으로 페이지 레벨에서 디렉토리를 생성하고 그 하위로는 컴포넌트 단위의 디렉토리만을 가진다.
컨테이너, 컴포넌트, 액션, 리듀서, 헬퍼등 컴포넌트에 필요한 모든 요소는 해당 디렉토리내 파일명으로 구분하여 관리한다.

```js
// 페이지 공통 컴포넌트
common/
    header/
    footer/
// 검색 페이지
search/
// 카테고리 리스트
category/
    // region[x] -> 리즌 place는 새로 생길 수 있고 여러 리즌에 중복 모듈이 들어갈 수 있으므로 리즌단위 X
    // module[o] -> 모듈단위로 자유도를 높이는 대신 모듈간 레이아웃을 컨트롤 할 수단이 필요함

    // 컴포넌트 레벨 구분
    // 필터 컴포넌트 (용도별 파일명으 구분)
    filter/
        container__Filter.js // module's entry component & container
        component__FilterList.js
        component__FilterPriceRange.js
        component__FilterOptionSelector.js
        action__Filter.js
        reducer__Filter.js
```
#### 서비스 단위 구분 (폴더명)
> 기본적으로 페이지 레벨에서 디렉토리를 생성하고 그 하위로는 컴포넌트 단위의 디렉토리만을 가진다.
컨테이너, 컴포넌트, 액션, 리듀서, 헬퍼등은 그 용도에 따라 컴포넌트 내에서 폴더로 구분하고 각 폴더 내부에 필요한 코드를 작성한다.

```js        
// 페이지 공통 컴포넌트
common/
    header/
    footer/
// 검색 페이지
search/
// 카테고리 리스트
category/
    common/
    filter/
    // 배너 컴포넌트 (용도별 폴더로 구분)
    banner/
        containers/
            Banner.js // module's entry component & container
        components/
            BannerList.js
            BannerListItem.js
        actions/
            Banner.js
        reducers/
            Banner.js
```
#### 서비스 단위 구분 (뷰/모델)
> 기본적으로 페이지 레벨에서 디렉토리를 생성하고 그 하위로는 컴포넌트 단위의 디렉토리만을 가진다.
컨테이너, 컴포넌트등 뷰를 담당하는 파일과 리덕스를 위한 액션, 액션생성자, 리듀서등을 하나의 파일에 위치시켜 사용한다.
대부분의 리덕스를 사용하는 컴포넌트들이 액션, 액션생성자, 리듀서를 필요로하고 반복적으로 작성되기 때문에 관리차원에서 나쁘지 않을 것 같다.

```js
// 페이지 공통 컴포넌트
common/
    header/
    footer/
// 검색 페이지
search/
// 카테고리 리스트
category/
    banner/
    // 컴포넌트 단위 폴더 구분 후 View/Data 파일에
    filter/
        // FilterView -> View 컴포넌트
        FilterContainer.js
        FilterComponent.js
        // FilterData -> View 이외 나머지 액션, 액션 생성자, 리듀서 모두 작성
        FilterData.js
            // FilterData.js
            const LOAD   = 'my-app/widgets/LOAD';
            const CREATE = 'my-app/widgets/CREATE';
            const UPDATE = 'my-app/widgets/UPDATE';
            const REMOVE = 'my-app/widgets/REMOVE';

            function reducer(state = {}, action = {}) {
              switch (action.type) {
                // do reducer stuff
                default: return state;
              }
            }

            reducer.loadWidgets = function() {
              return { type: LOAD };
            }

            reducer.createWidget = function(widget) {
              return { type: CREATE, widget };
            }

            reducer.updateWidget = function(widget) {
              return { type: UPDATE, widget };
            }

            reducer.removeWidget = function(widget) {
              return { type: REMOVE, widget };
            }

            module.exports = reducer;
```

#### Atomic Design Methodology
> arc라는 리액트 스타트 킷에서 차용한 구조로 모든 요소들을 잘게 쪼개어 레고처럼 조합하는 방식이다.
`Pages>Templates>Organisms>Molecules>Atoms` 처럼 결국 수많은 Atoms이 모여 Page를 구성하는 방식이다.
좋은 접근이긴 하나 추가로 엄격한 컴포넌트 관리 rule이 필요할 것 같다.

```js
// basic building blocks
Atoms/
    Button/
    Icon/
    Spinner/
    Tooltip/
// combined atoms
Molecules/
    IconButton/
    Modal/
// Molecules give us some building blocks
Organisms/
    Header/
    Footer/
    DealCard/
// Group by Organisms
Templates/
    Search/
    Category/
// Specific instance of templates
Pages/
    Search/
    Category/
```
