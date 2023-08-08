function EndGame(props) {
    const {result}=props.finishedResult;
    const {word}=props.finishedResult;
    if (props.finishedResult===undefined || result==="in progress")return (<></>);
    else {
        const text= result==="win"?"Congratulations":`Game Over! The word was "${word}"`;
        return (<> 
        <div className={result}>{text}</div>
        <button>Restart</button>
        </>)    
    }
 }

export default EndGame;