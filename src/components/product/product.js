import React from 'react';
import PropTypes from 'prop-types';
import { increment, decrement } from '../../redux/actions';
import { connect } from 'react-redux';

import style from './product.module.css';

import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';

const Product = ({ product, decrement, increment, amount }) => {
  return <div className={style.card} data-id="product">
    <p>{product.name}</p>
    <p className={style.description}>{product.ingredients?.join(', ')}</p>
    <p>{product.price} $</p>
    <button onClick={decrement} data-id="product-decrement">
      <Minus className={style.icon} />
    </button>
    <div data-id="product-amount">{amount}</div>
    <button onClick={increment} data-id="product-increment">
      <Plus className={style.icon} />
    </button>
  </div>
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired)
  }).isRequired,
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
};

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0
});

// const mapDispatchToProps = ({
//   increment,
//   decrement
// });

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id, props.product.name, props.product.price)),
  decrement: () => dispatch(decrement(props.product.id, props.product.name, props.product.price))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

