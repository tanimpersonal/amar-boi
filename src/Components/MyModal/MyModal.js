import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyModal = ({random,cartArray}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(random);
    return (
        <>
      <Button variant="primary" onClick={()=>{handleShow();random()}} disabled={cartArray.length<4}>
        Show Random Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>{random.name}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
            {/* {random.name} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default MyModal;