import React, { useState, useEffect } from "react";

import "./App.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

//불일치 하이라이트 로직
const findDifference = (inputText1, inputText2) => {
  const differences = [];
  const maxLength = Math.max(inputText1.length, inputText2.length);
  for (let i = 0; i < maxLength; i++) {
    if (inputText1[i] !== inputText2[i]) {
      differences.push(i);
    }
  }
  return differences;
};


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
    
    if (inputText1 === inputText2) {
      setResult("일치");
    } else {
      setResult(findDifference(inputText1, inputText2));
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
  };
  
  //불일치 하이라이트 로직
  useEffect(() => {
    setResult(findDifference(inputText1, inputText2));
  }, [inputText1, inputText2]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <div id="wrapper">
        <div className="title">TextMatchr</div>
        <div className="group-box">
          <div className="reset-button button" onClick={resetHandler}>
            reset
          </div>
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
        <div className="compare-button button" onClick={compareHandler}>
          비교하기
        </div>
        <div className="compare-result">{`${result}`}</div>
        {result !== null && (
          <div className="compare-result">
            결과:{" "}
            {Array.isArray(result) ? (
              <>
                {result.map((index, i) => (
                  <React.Fragment key={i}>
                    {inputText2.slice(result[i - 1] + 1, index)}
                    <span style={{ color: "red" }}>
                      {inputText2.slice(index, index + 1)}
                    </span>
                  </React.Fragment>
                ))}
                {inputText2.slice(result[result.length - 1] + 1)}
              </>
            ) : (
              result
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
// test
export default App;
