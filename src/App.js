import './App.css';
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { useState } from 'react';
import { marked } from 'marked';

function App() {
  const startingMarkdown = "### Hello! \nWelcome to the markdown previewer! \n\n**bolded text**";
  const [textInput, setTextInput] = useState(startingMarkdown);

  return (
    <div className="App">
      <Editor textInput={textInput} setTextInput={setTextInput}/>
      <Previewer textInput={marked.parse(textInput)}/>
    </div>
  );
}

export default App;
