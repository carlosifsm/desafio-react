export default function ButtonOp({text,fx}) {
    return(
        <button type="button" class="operatorButton" onClick={fx}>
            {text}
        </button>
    )
}