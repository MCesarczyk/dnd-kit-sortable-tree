import "./App.css";
// import { MinimalViable } from "./MinimalViable";
import { NoDropAnimation } from "./NoDropAnimation";

function App() {
  return (
    <>
      <h1>Sortable tree POC</h1>
      <h2>
        with <b>dnd-kit-sortable-tree</b>
      </h2>
      <div style={{ margin: "4rem auto" }}>
        {/* <MinimalViable /> */}
        <NoDropAnimation />
      </div>
    </>
  );
}

export default App;
