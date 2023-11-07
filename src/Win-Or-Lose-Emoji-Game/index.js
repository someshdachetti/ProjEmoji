import './index.css'

    const win = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    const loose = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    

const WinOrLoose = (props) =>{
    const {isWon,gameScore,reStartGame} =props
    const imgUrl = isWon ? win : loose
    const BestScore = isWon ?   'yahooo...' : 'You Lose'
    
    return (
        <>
        <div className='win-or-loose-'>
            <img src={imgUrl} alt ='win or Loose'/>
            <p>{gameScore}/12</p>
            <p>{BestScore}</p>
            <button onClick={reStartGame} className='restart'>Play Again</button>
        </div>
        </>
    )
}
export default WinOrLoose