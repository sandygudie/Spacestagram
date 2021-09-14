import Container from "@material-ui/core/Container";
import Display from "./Component/Display";
import DisplayText from "./Component/DisplayText";

import GlobalStyles from "./Component/GlobalStyles";
function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <GlobalStyles />
        <DisplayText />
        <Display />
      </Container>
    </div>
  );
}

export default App;
