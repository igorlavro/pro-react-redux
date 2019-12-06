import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.scss';

const ItemList = ({ data, onItemSelected, children: renderLabel }) => {
  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

ItemList.defaultProps = {
  onItemSelected: () => {},
  data: []
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object)
};

export default ItemList;
