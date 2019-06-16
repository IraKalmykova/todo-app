import React from 'react';

const Main = props => (
  <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label
      htmlFor="toggle-all"
      onClick={props.checkedAllItems}
    >
                Mark all as complete
    </label>
    <ul className="todo-list">
      {props.items.map(item => (
        <li key={item.value} className={item.done ? 'completed' : ''}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onClick={() => props.handleClickToDone(item.value)}
            />
            <label>{item.value}</label>
            <button
              type="button"
              className="destroy"
              onClick={() => props.removeCompletedItem(item.value)}
            />
          </div>
        </li>
      ))}

    </ul>
  </section>
);

export default Main;
