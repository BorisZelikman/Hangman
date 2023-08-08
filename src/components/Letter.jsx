export default function Letter (props){
    return <span className={props.checked} 
                 onClick={()=>props.selectLetter===undefined ? 
                          null:
                          props.selectLetter(props.char)}>
                 {props.char}
            </span>
}