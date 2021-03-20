import './style.scss'

const Modal = (props) => {
  const { isVisible = false, setIsVisible, onSuccessHandler } = props
  return (
    <>
      {isVisible && (
        <div className='modal-container'>
          <div className='body'>
            <h3>Are you sure about deleting this friend?</h3>
            <div className='actions'>
              <button className='close waves-effect' onClick={() => setIsVisible(!isVisible)}>
                Close
              </button>
              <button className='success waves-effect' onClick={onSuccessHandler}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
