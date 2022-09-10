import Textarea from '../Textarea/Textarea';
import sendIcon from '../send.png';
import './Message.css';

const Message = ({ message, handleClick, handleChange }) => {
  return (
    <div className='new-message'>
      <Textarea message={message} handleChange={handleChange}/>
      <button className='send-message' onClick={handleClick}>
        <img src={sendIcon} alt='send'/>
      </button>
    </div>
  )
}

export default Message;