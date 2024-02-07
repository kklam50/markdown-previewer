import React, { useEffect } from "react";

function Editor(props) {
    const {textInput, setTextInput} = props;

    const updatePreview = (newText) => {
        setTextInput(newText.target.value);
    }

    return (
        <div id="test">
            <div id="editor-container">
                <h1>Editor</h1>
                <textarea id="editor" 
                        onChange={updatePreview} 
                        value={textInput}
                />
            </div>
        </div>
    );
}

export default Editor;