import React, { useState } from 'react';

function AddContactModal({ handleNewContact }) {
  const [contactName, setContactName] = useState('');

  const handleSubmit = () => {
    if (contactName.trim() !== '') {
      handleNewContact(contactName);
      setContactName('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
      const closeButton = document.querySelector('[data-dismiss="modal"]');
      closeButton.click();
    }
  };
  
  return (
    <div className="modal" id="addModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add new contact</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="username"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContactModal;
