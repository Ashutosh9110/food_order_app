import React, { useReducer } from 'react'
import CartContext from './cart-context'


const defaultCartState = {
  item : [],
  totalAmount: 0
} 

const cartReducer = (state, action) => {
  if(action.type === "ADD") {
    const updateItems = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount 
    return {
      items : updateItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState
}

const CartProvider = (props) => {

  const [cartState, dispatchCartAction ] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: "ADD", item: item})
  }

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: "REMOVE", id: id})
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.provider value={cartContext}>
      {props.children}
    </CartContext.provider>
  )
}

export default CartProvider