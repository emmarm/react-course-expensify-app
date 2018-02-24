import React from 'react';
import Modal from 'react-modal';

const TrashModal = (props) => (
  <Modal
    isOpen={props.showTrashModal}
    onRequestClose={props.handleCloseModal}
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='modal__title'>Delete Item?</h3>
    {props.showTrashModal && 
      <div className='modal__body'>
        <p><span>{props.expense.description}</span></p>
        <p>${(props.expense.amount / 100).toFixed(2)}</p>
      </div>
    }
    <div className='modal__actions'>
      <button
        className="button button--secondary"
        onClick={props.handleCloseModal}
      >
        Cancel
      </button>
      <button
        className="button button--remove"
        onClick={props.onRemove}
      >
        Delete
      </button>
    </div>
  </Modal>
);

export default TrashModal;