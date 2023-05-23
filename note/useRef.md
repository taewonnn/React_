# useRef

```jsx
const ref = useRef(value);

  // 아래 객체를 반환해준다!
  {current: value}

const ref = useRef("hi")     // {current: "hi"}
const ref = useRef("hello")     // {current: "hello"}
const ref = useRef("daram")     // {current: "daram")"}
```


## 언제??
1. state와 비슷하게 어떠한 값을 저장해두는 저장공간으로 활용
  useState -> 렌더링 -> 컴포넌트 내부 변수들이 초기화가 된다!
  가끔 원하지 않는 렌더링때문에 변수들도 모두 초기화가 됨!!

  => Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지가 된다!
  => Ref의 변화 -> 렌더링 -> 그래도 변수들의 값이 유지가 된다!  

  => 변경 시 렌더링을 발생시키지 말아야 할 때 유용


2. Ref를 통해 DOM요소에 접근 할 때 사용
  ex. focus 사용 등등  document.querySelector()와 비슷함!!




이 변수를 사용하여 다음과 같은 값을 관리 할 수 있습니다.

setTimeout, setInterval 을 통해서 만들어진 id
외부 라이브러리를 사용하여 생성된 인스턴스
scroll 위치

AppUseRef 컴포넌트에서 useRef 를 사용하여 변수를 관리해볼건데요, 
용도는 우리가 앞으로 배열에 새 항목을 추가할건데, 새 항목에서 사용 할 고유 id 를 관리하는 용도입니다.

useRef 를 사용하여 변수를 관리하기 전에 해야 할 작업이 있습니다.

지금은 우리가 UserList 컴포넌트 내부에서 배열을 직접 선언해서 사용을 하고 있는데요, 이렇게 UserList 에서 선언해서 사용하는 대신에, 이 배열을 AppUseRef 에서 선언하고 UserList 에게 props 로 전달을 해주겠습니다.

```AppUseRef.js
import React from 'react';

import UserList from './UserList';

function AppUseRef() {
const users = [
{
id: 1,
username: 'velopert',
email: 'public.velopert@gmail.com'
},
{
id: 2,
username: 'tester',
email: 'tester@example.com'
},
{
id: 3,
username: 'liz',
email: 'liz@example.com'
}
];
return <UserList users={users} />;
}

export default AppUseRef;
UserList.js
import React from 'react';

function User({ user }) {
return (
<div>
<b>{user.username}</b> <span>({user.email})</span>
</div>
);
}

function UserList({ users }) {
return (
<div>
{users.map(user => (
<User user={user} key={user.id} />
))}
</div>
);
}
export default UserList;
```
이제 AppUseRef 에서 useRef() 를 사용하여 nextId 라는 변수를 만들어보겠습니다.

```AppUseRef.js
import React, { useRef } from 'react';
import UserList from './UserList';

function AppUseRef() {
const users = [
{
id: 1,
username: 'velopert',
email: 'public.velopert@gmail.com'
},
{
id: 2,
username: 'tester',
email: 'tester@example.com'
},
{
id: 3,
username: 'liz',
email: 'liz@example.com'
}
];

const nextId = useRef(4);
const onCreate = () => {
// 나중에 구현 할 배열에 항목 추가하는 로직
// ...

    nextId.current += 1;
};
return <UserList users={users} />;
}

export default AppUseRef;
```


useRef() 를 사용 할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본값이 됩니다.
그리고 이 값을 수정 할때에는 .current 값을 수정하면 되고 조회 할 때에는 .current 를 조회하면 됩니다.
