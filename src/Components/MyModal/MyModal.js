import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyModal = ({cartArray}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const min=0;
    const max= cartArray.length-1;
    var item = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(cartArray[item]);
    return (
        <>
      <Button className='ms-2 mb-2' variant="primary" onClick={()=>{handleShow()}} disabled={cartArray.length<4}>
        Show Random Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        {cartArray[item]!==undefined?(

          <Modal.Title>{cartArray[item].name}</Modal.Title>):('hello')
        }
        </Modal.Header>
        <Modal.Body>
            <div className="image">
                <img src={cartArray[item]!==undefined?(cartArray[item].img):('')} alt="" />
            </div>
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