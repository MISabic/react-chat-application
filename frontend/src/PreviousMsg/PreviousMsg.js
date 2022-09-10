import './PreviousMsg.css';

const PreviousMsg = ({ messages, bottomRef }) => {
  return (
    <div className='previous-message'>
      {
        messages.map((message, idx) => {
          return (
            <div key={idx}>
              <p className={(message.user === 'self') ? 'selfMessage' : 'peerMessage'}>
                {message.userName}: {message.text}
              </p>
            </div>
          );
        })
      }
      <div ref={bottomRef}/>
    </div>
  );
}

export default PreviousMsg;