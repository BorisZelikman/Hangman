export default function Score (params){
    return <div className="score">{params.value<=0? "GAME OVER": "SCORE: "+params.value}</div>
}