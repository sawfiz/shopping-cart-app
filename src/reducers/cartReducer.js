import uniqid from 'uniqid';

export default function cartReducer(state, action) {
  let order;
  let qty;
  let tempCart;
  let target;

  switch (action.type) {
    case 'ADD_TO_CART':
      order = action.order;

      // If the item already in cart, accumulate the quantity
      tempCart = [...state];
      target = tempCart.find((o) => o.item.uid === order.item.uid);
      if (target) {
        target.qty += action.qty;
      } else {
        // If not, add order to cart
        tempCart = [...tempCart, { ...order, uid: uniqid() }];
      }
      return tempCart;

    // Update the order when modified in Cart
    case 'UPDATE_ORDER':
      order = action.data.order;
      qty = action.data.temp;
      tempCart = [...state];
      target = tempCart.find((o) => o.item.name === order.item.name);
      if (target) {
        target.qty = qty;
      }
      return tempCart;

    case 'DELETE_ORDER':
      tempCart = state.filter((o) => o.uid !== action.order.uid);
      return tempCart;

    default:
      return state;
  }
}
