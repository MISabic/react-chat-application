import './Textarea.css';

const Textarea = ({ message, handleChange }) => {
  return (
    <textarea
      className='message-text'
      value={message}
      onChange={handleChange}
      placeholder='Enter message'
    />
  );
}

export default Textarea;