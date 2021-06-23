import React from 'react';
import { ItemColumn, ItemRow, Button, TrashIcon } from '../CartItem/ItemStyle';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { useGlobalContext } from '../../../../Context';
const CartItem = ({ id, brand, model, price, quantity, images }) => {
  const { deleteItem, incrementQuantity, decrementQuantity } =
    useGlobalContext();
  return (
    <ItemRow>
      <ItemColumn>
        <p>
          {brand} {model}
        </p>
      </ItemColumn>
      <ItemColumn>
        <span>${price}</span>
      </ItemColumn>
      <ItemColumn>
        <Button onClick={() => decrementQuantity(id)}>
          <AiFillCaretDown />
        </Button>
        <span>{quantity}</span>
        <Button onClick={() => incrementQuantity(id)}>
          <AiFillCaretUp />
        </Button>
      </ItemColumn>
      <ItemColumn>
        <span>${price * quantity}</span>
      </ItemColumn>
      <TrashIcon style={{ color: 'red' }} onClick={() => deleteItem(id)} />
    </ItemRow>
  );
};

export default CartItem;
