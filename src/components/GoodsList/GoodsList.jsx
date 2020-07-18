import React from 'react';
import { useSelector } from 'react-redux';

const goodsSelector = (globalState) => globalState.goods;

export const GoodsList = () => {
  const goods = useSelector(goodsSelector);

  return (
    <ul className="list-group">
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="list-group-item"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
