# useParams

리액트에서 라우터 사용 시 파라미터 정보를 가져와 활용하고 싶다면 useParams라는 훅을 사용하면 된다.



useParams() 사용 방법
1) useParams를 import 한다.

```
import React from 'react';
import { useParams } from 'react-router-dom';

const test = () => {
return (
<div className="test">
<p></p>
</div>
)
}

export default test;
```

2) useParams 정보를 하나의 변수에 저장한다.

```
import React from 'react';
import { useParams } from 'react-router-dom';

const test = () => {
let { params } = useParams();

return (
<div className="test">
<p></p>
</div>
)
}

export default test;
```

3) 파라미터 값을 사용할 수 있다.

```
import React from 'react';
import { useParams } from 'react-router-dom';

const test = () => {
let { params } = useParams();

return (
<div className="test">
<p>현재 페이지의 파라미터는 { params } 입니다.</p>
</div>
)
}

export default test;
```
ex) ~url~/test/1은 파라미터가 1이므로, 현재 페이지는 파라미터가 1입니다.라고 출력된다.
