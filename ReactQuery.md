# React Query
  서버의 값을 클라이언트에 가져오거나, 캐싱, 값 업데이트, 에러핸들링 등 비동기 과정을 더욱 편하게 하는데 사용됩니다.


## 편리함
  - 캐싱 
  - get을 한 데이터에 대해 update를 하면 자동으로 get을 다시 수행(예를 들면 게시판의 글을 가져왔을 때 게시판의 글을 생성하면 게시판 글을 get하는 api를 자동으로 실행)
  - 

- 기존 코드
```tsx
useEffect(() => {
  (async () => {
    const infoData = await (
      await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
    ).json();
    console.log(infoData);
    setInfo(infoData);
    const priceData = await (
      await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
    ).json();
    console.log(priceData);
    setPriceInfo(priceData);
    setLoading(false);

  })()
}, [coinId])
 ```



- React Query 사용 시
```tsx
  const {isLoading: tickersLoading, data: tickersData} = useQuery<PriceData>(
    ['tickers',coinId], 
  () => fetchCoinTickers(coinId)
)

```




## 사용 방법
npm install react-query

```src/index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

 ```


