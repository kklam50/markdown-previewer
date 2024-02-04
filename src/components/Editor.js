import React, { useEffect } from "react";

function Editor(props) {
    const {textInput, setTextInput} = props;

    const updatePreview = (newText) => {
        setTextInput(newText.target.value);
    }

    return (
        <div id="editor-container">
            <h1>Editor</h1>
            <textarea id="editor" 
                      onChange={updatePreview} 
                      value={textInput}
            />
        </div>
    );
}

export default Editor;