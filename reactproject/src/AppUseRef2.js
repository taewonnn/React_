import {useRef, useState} from "react";

function AppUseRef() {

  const [renderer, setRenderer] = useState(0);

  const doRendering = () => {
    setRenderer(prev => prev +1);
  }

  // useRef는 리렌더링 된다고 한들 기존 값을 유지!!
  const CountRef = useRef(0);

  // 단순 변수 - 함수가 불릴 때마다 0으로 초기화가 된다!
  let countVar = 0;

  const increaseRef = () => {
    CountRef.current += 1;
    console.log( 'Ref : ' + CountRef.current)
  }

  const increaseVar = () => {
    countVar += 1;
    console.log( 'var : ' + CountRef.current)
  }


  return (
    <div>
      <p>Ref: {CountRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={increaseRef}>Ref 올려!</button>
      <button onClick={increaseVar}>변수 올려!</button>
    </div>
  );
}
export default AppUseRef;
