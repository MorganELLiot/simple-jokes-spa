export default function Joke(props) {
    return (
        <div className="joke-cont">
            {props.settup !== "" && <h1 className="joke">Settup: {props.settup}</h1>}
            <h1 className="joke">Punchline: {props.punchline}</h1>
        </div>
    )
}