export default function ButtonSubmit({text,fx}) {
    return(
        <button type="button" class="submitButton" onClick={fx}>
            {text}
        </button>
    )
}
