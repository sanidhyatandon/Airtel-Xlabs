import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import Card from '../../common/Card';
import { routeFoodItemDetail, orderNow, cancel } from '../../constants';
import './styles/index.css';

const FoodItem = ({ data }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const { name, price, id, imageURL, ingredients } = data;

  const orderModal = () => {
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>{`Your Order will be delivered soon`}</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              {cancel}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  };
  return (
    <>
      <Card linkTo={{ pathname: `/${routeFoodItemDetail}/${id}?${name}`, ingredients: ingredients }}>
        <div className="food-item">
          <div className="item">
            <h3>{name}</h3>
            <span>${price}</span>
          </div>
          <img src={imageURL} alt={`dish-${id}`} />
        </div>
      </Card>
      <Button className="order-button" color="primary" size="lg" onClick={toggle}>
        {orderNow}
      </Button>
      {modal && orderModal()}
    </>
  );
};

export default FoodItem;
