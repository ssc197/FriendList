import "./style.scss";

const Modal = (props) => {
  const { isVisible = false, setIsVisible, onSuccessHandler } = props;
  return (
    <>
      {isVisible && (
        <div className="modal-container">
          <div className="body">
            <div className="icon-container">
              <span className="icon">
                <i className="material-icons">clear</i>
              </span>
              <h5>Are you sure?</h5>
            </div>
            <h6>
              Do you really want to delete these record? This process cannot be
              undone.
            </h6>
            <div className="actions">
              <button
                className="close waves-effect"
                onClick={() => setIsVisible(!isVisible)}
              >
                Cancel
              </button>
              <button
                className="success waves-effect"
                onClick={onSuccessHandler}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
