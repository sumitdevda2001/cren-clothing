import {
  CartItemContainer,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.style.jsx";
const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ₹{price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;