import { Component } from 'react';
import EmojiGameStatus from '../EmojiGame-Status/egs';
import AllEmojis from '../All-Emoji-Container/index';
import WinOrLoose from '../Win-Or-Lose-Emoji-Game/index'
import './EG.css';

class EmojiGame extends Component {
  state = {clickedEmojiList : [],topScore :0,isGameInProgress :true,won :false}

  getshuffledEmoji = () =>{
    const {emojisList}=this.props
    return emojisList.sort(() => Math.random() - 0.5)
    
  }

  finishTheEmojiGame = currentScore =>{
    const {topScore,}=this.state
    let newTopScore = topScore
    if (currentScore > topScore){
      newTopScore = currentScore
    }
    this.setState({topScore : newTopScore})
  }

  eachEmoji= id =>{
       const {emojisList}=this.props
       const {clickedEmojiList}=this.state
       const isEmojiPresentClickedEmoji = clickedEmojiList.includes(id)
       const lengthOfEachEmoji = clickedEmojiList.length
     

    if (isEmojiPresentClickedEmoji){
      this.setState({isGameInProgress :false})
      this.finishTheEmojiGame(emojisList.length)
    }else{
      if (emojisList.length-1 ===lengthOfEachEmoji){
        this.finishTheEmojiGame(emojisList.length)
      }
    }
      this.setState(prevState => ({
        clickedEmojiList : [...prevState.clickedEmojiList,id]
      }))
  }

  renderedEmojis = () =>{
    const shuffledEmojis = this.getshuffledEmoji()

    return (
          <div>
            <div className='each-emojis-container'>
              {shuffledEmojis.map(eachEmoji =>(
                <div key = {eachEmoji.id} className='each-emojis-container'>
                  <AllEmojis emojisList={eachEmoji} onEachEmojiClick = {this.eachEmoji}/>
                  </div>
              ))}
            </div>
          </div>
    )
  }

  restart =() =>{
    this.setState({clickedEmojiList : [] ,isGameInProgress:true})
  }

statusOfGame = () =>{
  const {emojisList}=this.props
  const {clickedEmojiList}=this.state
  const lengthOfEachEmoji= clickedEmojiList.length
  const isWon = emojisList.length ===lengthOfEachEmoji
  const score = clickedEmojiList.length
  
  
  
  return (
    <>
    <WinOrLoose isWon={isWon} gameScore = {score} reStartGame ={this.restart} />
    </>
  )
}



  render() {
    const {clickedEmojiList,topScore,isGameInProgress}=this.state
    return (
      <>
      <EmojiGameStatus score={clickedEmojiList.length} topScore ={topScore} isGameInProgress={isGameInProgress}  />
      <div>
      {isGameInProgress ? this.renderedEmojis() : this.statusOfGame()}
      </div>
      
      </>
    )
  }
}

export default EmojiGame;
