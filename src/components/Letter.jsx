export default function Letter (props){
    const letterStyle=props.isChecked?"checkedLetter":"letter";
    const clickEvent=props.isChecked?
        ()=>console.log(props.char+" is checked"):
        ()=>props.onCheck(props.char);
    return <span  className={letterStyle} onClick={clickEvent} >{props.char}</span>
}