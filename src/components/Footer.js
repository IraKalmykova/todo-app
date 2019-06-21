import React from 'react';

const Footer = ({countActiveItems, showSelectedList, filterItems, filter, removeAllCompletedItems}) => (

  <footer className="footer">
    <span className="todo-count">
      <strong>{countActiveItems.length}</strong>
      {' '}
        item left
    </span>
    <ul className="filters">
      <li>
        <a
          href="#/"
          className={showSelectedList === filter.all ? 'selected' : ''}
          onClick={() => filterItems(filter.all)}
        >
                        All
        </a>
      </li>
      <li>
        <a
          href="#/active"
          className={showSelectedList === filter.active ? 'selected' : ''}
          onClick={() => filterItems(filter.active)}
        >
                        Active
        </a>
      </li>
      <li>
        <a
          href="#/completed"
          className={showSelectedList === filter.completed ? 'selected' : ''}
          onClick={() => filterItems(filter.completed)}
        >
                        Completed
        </a>
      </li>
    </ul>
    <button
      type="button"
      className="clear-completed"
      onClick={removeAllCompletedItems}
    >
                Clear completed
    </button>
  </footer>
);

export default Footer;
