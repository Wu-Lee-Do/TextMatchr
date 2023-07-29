import "./App.css";
// reset.css 초기화 적용(Node.js 패키지 사용)
// https://velog.io/@daymoon_/React-styled-reset - 참고 자료 출처
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

function App() {
  //useState이용 inputText1,2로 구별
  //결과값 result
  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");
  const [result, setResult] = useState(null);

  //비교 버튼 누를 시 compareHandler작동
  //if문으로 inputText1,2 비교
  //결과값 setResult로 구현
  const compareHandler = () => {
    if (inputText1 === inputText2) {
      setResult("일치");
    } else {
      setResult("불일치");
    }
  };

//reset버튼 누를시 resetHandler작동
//텍스트 박스 값 결과 값 초기화
  const resetHandler = () => {
    setInputText1("");
    setInputText2("");
    setResult(null);
  };
  return (
    <React.Fragment>
      <GlobalStyle />
      <div id="wrapper">
        <div className="group-box">
          <button className="reset-button" onClick={resetHandler}> 
          {/* 리셋버튼 추가 css : reset-button onClick시 resetHandler호출 */}
            reset
          </button>
          <textarea
            className="control-group group"
            type="text"
            placeholder="기준이 되는 텍스트를 입력해 주세요."
            value={inputText1}
            onChange={(e) => setInputText1(e.target.value)}
          />
          <textarea
            className="experimental-group group"
            type="text"
            placeholder="비교하려는 텍스트를 입력해 주세요."
            value={inputText2}
            onChange={(e) => setInputText2(e.target.value)}
          />
        </div>
        <div className="compare-button" onClick={compareHandler}>
          비교하기
        </div>
        {result !== null && (
          <div className="compare-result">결과: {result}</div>
        )}
        {/* 조건부 !== null %% 사용 */}
      </div>
    </React.Fragment>
  );
}
// test 1
// test 2
export default App;
