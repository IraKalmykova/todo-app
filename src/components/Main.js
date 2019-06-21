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
        <li key={item.id} className={item.done ? 'completed' : ''}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.done}
              onClick={() => props.handleClickToDone(item.id)}
            />
            <label>{item.value}</label>
            <button
              type="button"
              className="destroy"
              onClick={() => props.removeCompletedItem(item.id)}
            />
          </div>
        </li>
      ))}

    </ul>
  </section>
);

export default Main;
