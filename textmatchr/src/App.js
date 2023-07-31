import React, { useState } from "react";

import "./App.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

function App() {
  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");
  const [result, setResult] = useState("");

  const compareHandler = () => {
    if (inputText1 === "" | null && inputText2 === "" | null){
      setResult("텍스트를 입력해 주세요.");
    }else if (inputText1 === "" | null && inputText2 !== "" | null){
      setResult("기준이 되는 텍스트를 입력해 주세요.");
    }else if (inputText1 !== "" | null && inputText2 === "" | null){
      setResult("비교하려는 텍스트를 입력해 주세요.");
    }else if (inputText1 === inputText2 && inputText1 !== "" | null && inputText2 !== "" | null){
      setResult("일치");
    }else if (inputText1 !== inputText2){
      setResult("불일치");
    }
  };

  const resetHandler = () => {
    setInputText1("");
    setInputText2("");
    setResult("");
  };

  const changeHandler = () => {
    setInputText1(inputText2);
    setInputText2(inputText1);
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <div id="wrapper">
        <div className="title">TextMatchr</div>
        <div className="group-box">
        <div className="reset-button button" onClick={resetHandler}>reset</div>
          <textarea
            className="control-group group"
            type="text"
            placeholder="기준이 되는 텍스트를 입력해 주세요."
            value={inputText1}  
            onChange={(e) => setInputText1(e.target.value)}
          />
          <div className="change-button" onClick={changeHandler}></div>
          <textarea
            className="experimental-group group"
            type="text"
            placeholder="비교하려는 텍스트를 입력해 주세요."
            value={inputText2}
            onChange={(e) => setInputText2(e.target.value)}
          />
        </div>

        <div className="compare-button button" onClick={compareHandler}>비교하기</div>
        <div className="compare-result">{`${result}`}</div>  
      </div>
    </React.Fragment>
  );
}
// test
export default App;
