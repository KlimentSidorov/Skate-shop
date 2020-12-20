import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CartButtons.css';
import { useCartContext } from '../../context/cart_context';

const CartButton = () => {
  const { total_items } = useCartContext();
  return (
    <Link to='/cart' className='cart-btn'>
      <span className='cart-container'>
        <FaShoppingCart />
        <span className='cart-value'>{total_items}</span>
      </span>
    </Link>
  );
};

export default CartButton;
