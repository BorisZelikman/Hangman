export default function Letter (props){
    return <span onClick={()=>props.onCheck(props.char)} >{props.char}</span>
}