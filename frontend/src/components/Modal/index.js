import './style.scss'

const Modal = (props) => {
  const { isVisible = false, setIsVisible, onSuccessHandler } = props
  return (
    <>
      {isVisible && (
        <div className='modal'>
          <div className='modal__body'>
            <h3>Are you sure about deleting this friend?</h3>
            <div className='modal__body__actions'>
              <button className='modal__body__actions--close' onClick={() => setIsVisible(!isVisible)}>
                Close
              </button>
              <button className='modal__body__actions--success' onClick={onSuccessHandler}>
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
