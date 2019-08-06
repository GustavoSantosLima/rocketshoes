import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Cart, Container } from './styles';
import logo from './../assets/images/myshoes.svg';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="MyShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default Header;
