# Router


라우터 적용은 index.js 에서 BrowserRouter 라는 컴포넌트를 사용하여 구현하시면 됩니다.

```src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // * BrowserRouter 불러오기
import './index.css';
import AppUseRef from './AppUseRef';
import * as serviceWorker from './serviceWorker';

// * AppUseRef 을 BrowserRouter 로 감싸기
ReactDOM.render(
  <BrowserRouter>
    <AppUseRef />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();

```



## Route: 특정 주소에 컴포넌트 연결하기
사용자가 요청하는 주소에 따라 다른 컴포넌트를 보여줘보겠습니다. 
이 작업을 할 때에는 Route 라는 컴포넌트를 사용합니다.

사용 방식은 다음과 같습니다:

<Route path="주소규칙" component={보여주고싶은 컴포넌트}>


## Link: 누르면 다른 주소로 이동시키기
Link 컴포넌트는 클릭하면 다른 주소로 이동시키는 컴포넌트입니다. 리액트 라우터를 사용할땐 일반 <a href="...">...</a> 태그를 사용하시면 안됩니다. 만약에 하신다면 onClick 에 e.preventDefault() 를 호출하고 따로 자바스크립트로 주소를 변환시켜주어야 합니다.

그 대신에 Link 라는 컴포넌트를 사용해야하는데요, 그 이유는 a 태그의 기본적인 속성은 페이지를 이동시키면서, 
페이지를 아예 새로 불러오게됩니다. 그렇게 되면서 우리 리액트 앱이 지니고있는 상태들도 초기화되고, 렌더링된 컴포넌트도 모두 사라지고 새로 렌더링을 하게됩니다. 
그렇기 때문에 a 태그 대신에 Link 컴포넌트를 사용하는데요, 이 컴포넌트는 HTML5 History API 를 사용하여 브라우저의 주소만 바꿀뿐 페이지를 새로 불러오지는 않습니다.
