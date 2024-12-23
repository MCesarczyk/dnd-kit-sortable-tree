import "./App.css";
import { Tree } from "./twoDimensionalTree";

function App() {
  return (
    <>
      <h1>Sortable tree POC</h1>
      <h2>
        with <b>dnd-kit-sortable-tree</b>
      </h2>
      <div style={{ margin: "4rem auto" }}>
        <Tree />
      </div>
    </>
  );
}

export default App;
