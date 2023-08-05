export default function Score (params){
    return <div>{params.value<=0? "GAME OVER":params.value}</div>
}