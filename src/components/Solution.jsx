import Letter from "./Letter";

function Solution(props) {
    let chars=props.solution.word.toUpperCase().split('');
    console.log (props.letterStatus)
    const showGuessed=(char)=>props.letterStatus[char]?char:"_"
    return (<>
        {chars.map((c, i) =><Letter key={i} char={showGuessed(c)}/>)}
        <div className="question">{props.solution.hint}</div>
    </>)
}

export default Solution;