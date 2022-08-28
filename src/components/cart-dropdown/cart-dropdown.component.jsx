import Button from '../button/button.component';

import './cart-component.styles.scss';

const CartDropdown = () => {
  return (
    <dev className='cart-dropdown-container'>
      <div className='cart-item'></div>
      <Button>GO TO CHECKOUT</Button>
    </dev>
  );
};

export default CartDropdown;
