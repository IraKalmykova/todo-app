import React from 'react';

const Footer = props => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{props.countActiveItems.length}</strong>
      {' '}
        item left
    </span>
    <ul className="filters">
      <li>
        <a
          href="#/"
          className={props.showSelectedList === 0 ? 'selected' : ''}
          onClick={props.showAllItems}
        >
                        All
        </a>
      </li>
      <li>
        <a
          href="#/active"
          className={props.showSelectedList === 1 ? 'selected' : ''}
          onClick={props.showActiveItems}
        >
                        Active
        </a>
      </li>
      <li>
        <a
          href="#/completed"
          className={props.showSelectedList === 2 ? 'selected' : ''}
          onClick={props.showCompletedItems}
        >
                        Completed
        </a>
      </li>
    </ul>
    <button
      type="button"
      className="clear-completed"
      onClick={props.removeAllCompletedItems}
    >
                Clear completed
    </button>
  </footer>
);

export default Footer;
