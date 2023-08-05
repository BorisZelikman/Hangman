import Letter from "./Letter"
export default function GuessWord(props){
    let chars=props.word.toUpperCase().split('');
    const showIfSelected= (c)=>props.checked.some(l=>l===c)?c:"-";
    return chars.map((c, i) =><span key={i}>{showIfSelected(c)}</span>)
}