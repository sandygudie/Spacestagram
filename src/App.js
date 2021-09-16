import Container from "@material-ui/core/Container";
import Display from "./Component/Display";


import GlobalStyles from "./Component/GlobalStyles";
function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <GlobalStyles />
       
        <Display />
      </Container>
    </div>
  );
}

export default App;
