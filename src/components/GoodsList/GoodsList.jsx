import React from 'react';

export const GoodsList = (props) => {
  const { goods } = props;

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
