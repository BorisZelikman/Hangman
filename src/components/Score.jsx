export default function Score (params){
    const scoreColor =()=>{
        return  params.value>=80?"high-score":params.value<50?"low-score":"medium-score"
    }
    return <div className={scoreColor()}>{params.value<=0? "GAME OVER": "SCORE: "+params.value}</div>
}