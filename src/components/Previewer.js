function Preview(props) {
    const {textInput} = props;

    return (
        <div id="preview-container">
            <h1>this is the preview section</h1>
            <div id="preview" dangerouslySetInnerHTML={{ __html: textInput }}>

            </div>
        </div>
    )
}

export default Preview;