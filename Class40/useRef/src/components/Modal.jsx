import '../style/Modal.css'

const Modal = ({isVisible, hide}) => {
    if (!isVisible) return null
  return (
    <div className='modal-overlay'>
        <div className="modal">
            <h2>This is a modal</h2>
            <button onClick={hide}>Close</button>
        </div>
    </div>
  )
}

export default Modal