import {useRef, useState} from "react";

function AppUseRef() {

  // count 상태관리
  const [count, setCount]= useState(0);

  // state가 변경될 때마다 렌더링!
  console.log('렌더링!!!')


  const countRef = useRef(0);
  // console.log(countRef);   // {current: 0}
  // ref안에 값에 접근하고 싶다면 ?? => countRef.current


  // Ref 증가 시 함수
  const increaseCountRef = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };


  // count 증가 시 함수
  const increaseCountState = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려!</button>
      <button onClick={increaseCountRef}>Ref 올려!</button>
    </div>
  );
}
export default AppUseRef;
