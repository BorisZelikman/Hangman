import Letter from "./Letter";

export default function Letters(props){
    const chars=Object.keys(props.letterStatus);
    const checked= (char)=>props.letterStatus[char]?"checkedLetter":"letter";
    return (
    <div className="letters">
         {chars.map(c=><Letter checked={checked(c)} key={c} char={c} selectLetter={props.selectLetter}/>)} 
    </div>
  )  
}