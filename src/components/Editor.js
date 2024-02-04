import React, { useEffect } from "react";

function Editor(props) {
    const {textInput, setTextInput} = props;

    const updatePreview = (newText) => {
        setTextInput(newText.target.value);
    }

    return (
        <div id="editor-container">
            <h1>this is the editor section</h1>
            <textarea id="editor" 
                      onChange={updatePreview} 
                      value={textInput}
                      rows="6"
                      cols="50"
            />
        </div>
    );
}

export default Editor;