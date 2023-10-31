export default function ButtonNum({text,fx}) {
    return(
        <button type="button" class="numbersButton" onClick={fx}>
            {text}
        </button>
    )
}