import React from 'react';
import "./ModalContainer.scss";
import { Modal } from '@material-ui/core';

function ModalContainer(props) {
    const {isOpenModal, closeModal, children } = props;
    return(
        <div>
            <Modal
                className="modal-container"
                open={isOpenModal}
                onClose={closeModal}
                closeAfterTransition
            >                
                <div>                    
                    {children}
                </div>
            </Modal>
        </div>
    );   
}

export default ModalContainer;