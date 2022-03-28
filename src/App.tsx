import { SnippetToggler } from "./components/SnippetToggler";
import "./styles.scss";

const useDidMountTS = require("!!raw-loader!./snippets/useDidMount.ts");
const useDidMountJS = require("!!raw-loader!./snippets/useDidMount.js");

export default function App() {
  return (
    <div className="App">
      <h1>{"<SnippetToggler/>"} example:</h1>
      <SnippetToggler
        snippetLabel="useDidMount()"
        fileLabels={["useDidMount.ts", "useDidMount.js"]}
        typeScriptCode={useDidMountTS}
        javaScriptCode={useDidMountJS}
      />
    </div>
  );
}
