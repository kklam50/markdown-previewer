function Preview(props) {
    const {textInput} = props;

    return (
        <div id="preview-container">
            <h1>Preview</h1>
            <div id="preview" dangerouslySetInnerHTML={{ __html: textInput }}/>
        </div>
    )
}

export default Preview;