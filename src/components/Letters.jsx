import Letter from "./Letter";

export default function Letters(props){
  const chars=[];
  for (let i="A".charCodeAt(0); i<="Z".charCodeAt(0); i++) chars.push(String.fromCharCode(i));
  
  return (
    <div className="letters">
        {chars.map(c=><Letter key={c} char={c} isChecked ={props.checked.some(a=>a===c)} onCheck={props.onCheck}/>)}
    </div>
  )  
}