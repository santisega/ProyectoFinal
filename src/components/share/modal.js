import React from "react";
const Modal = ({ setIsOpen }) => {
    return (
        <>
            <div className="overlay" onClick={() => setIsOpen(false)}></div>
            <div className="modal">
                <div className="modal-header">
                    <h4 className="modal-header-text roboto">Checkout completed</h4>
                    <button onClick={() => setIsOpen(false)} className="material-symbols-outlined modal-button01">
                        close
                    </button>
                </div>
                <div className="modal-content roboto">
                        <p>Your purchase was successfully done!
                        </p> 
                </div>
                <div className="modal-actions roboto">
                    <button onClick={() => setIsOpen(false)} className="modal-button02">
                        Got it
                    </button>
                </div>
            </div>
        </>
    );
};

export default Modal;