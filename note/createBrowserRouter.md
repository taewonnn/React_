# createBrowserRouter

createBrowserRouter는 react router v6.4부터 사용할 수 있다.




## <RouterRrovider />

<BrowserRout>로 감싸지 않고 최상단에서 index.tsx에서 <RouterProvider> 를 import한다.
RouterRrovider에는 router={} props를 필수로 넣어야 하는데, Router.tsx에서 createBrowserRouter 함수로 생성한 router를 넘겨준다.

```jsx 
index.tsx

import { RouterProvider } from 'react-router-dom';
import router from './Router';

root.render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>,
);
```
