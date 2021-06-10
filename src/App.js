import Search from './components/Search';
import Suggest from './components/Suggest';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 1.4 !important;
  }
  
  h1, h2, h3, h4, p {
    margin: 0;
    padding: 0;
  }
`

const AppStyled = styled.div`
  position: relative;
  width: 100% !important;
  max-width: 830px !important;
`

function App() {
  return (
   <>
       <GlobalStyle />
       <AppStyled className="anyclip-search-widget">
           <Search />
       </AppStyled>
   </>
  );
}

export default App;
