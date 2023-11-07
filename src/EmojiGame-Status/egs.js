

import './egs.css'

const EmojiGameStatus = (props) =>{
    const {score,topScore}=props
    return (
        <>
        <div className='Score-container'>
                    <div className='logo-container'>
                        <img className='logo' src= 'https://assets.ccbp.in/frontend/react-js/game-logo-img.png' alt ='emoji logo'/>
                        <h1>EmojiGame</h1>
                    </div>
                    <div className='score-card'>
                    <p>SCORE : {score}</p>
                    <p>Top Score : {topScore}</p>
                    </div>
            </div>
            
        </>
    )
}
export default EmojiGameStatus



