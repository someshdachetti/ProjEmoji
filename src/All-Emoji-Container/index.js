import './index.css'

const AllEmojis = (props) =>{
  const {emojisList,onEachEmojiClick}=props
  const {id,emojiUrl ,emojiName}=emojisList

  const eachEmoji = () =>{
    onEachEmojiClick(id)
  }
  
  return (
    <>
    <div className="emojis-container">
      <button onClick = {eachEmoji} className='emoji-button'>
      <img  src= {emojiUrl} alt = {emojiName}/>
      </button>
    </div>
    </>
  )
}
export default AllEmojis