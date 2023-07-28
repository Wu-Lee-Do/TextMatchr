import './App.css';
// reset.css 초기화 적용(Node.js 패키지 사용)
// https://velog.io/@daymoon_/React-styled-reset - 참고 자료 출처
import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`
function App() {
  return(
    <React.Fragment>
      <GlobalStyle />
      <div id='wrapper'>
          <div className='group-box'>
            <textarea className='control-group group' type='text' placeholder='기준이 되는 텍스트를 입력해 주세요.' />            
            <textarea className='experimental-group group' type='text' placeholder='비교하려는 텍스트를 입력해 주세요.' />                           
          </div>
          <div className='compare-button'>비교하기</div>
      </div>
    </React.Fragment>
  );
  
}

export default App;
