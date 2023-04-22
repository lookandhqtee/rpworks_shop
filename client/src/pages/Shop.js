import React from 'react';
import { Container} from 'react-bootstrap';
import './Shop.css'



const Shop = () => {
  
  return (
    <Container fluid className="p-0">
      <div className="shop-image">
        <div className="shop-text">
          <h1>Любая поломка это повод для обращения к нам!</h1>
          <p className="lead">
            Наши мастера знают свое дело. Мы с Вами уже 20 лет, и останемся еще надолго.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Shop;