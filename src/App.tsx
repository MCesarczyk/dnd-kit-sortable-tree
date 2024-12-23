import styled from "styled-components";

import { Tree } from "./twoDimensionalTree";

function App() {
  return (
    <>
      <Title>Sortable tree POC</Title>
      <Subtitle>
        with <b>dnd-kit-sortable-tree</b>
      </Subtitle>
      <div style={{ margin: "4rem auto" }}>
        <Tree />
      </div>
    </>
  );
}

export default App;

const Title = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
`;

const Subtitle = styled.h2`
  font-family: "Barlow", sans-serif;
  font-weight: 400;
`;
