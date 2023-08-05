import Letter from "./Letter";

export default function Letters(props){
  const chars=[];
  for (let i="A".charCodeAt(0); i<="Z".charCodeAt(0); i++) {
    const char=String.fromCharCode(i);
    if (!props.checked.some(c=>c===char)) chars.push(char);
  }
  return (
    <div className="letters">
        {chars.map(c=><Letter key={c} char={c} onCheck={props.onCheck}/>)}
    </div>
  )  
}