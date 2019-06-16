import React from 'react';

const Header = props => (
  <header className="header">
    <h1>todos</h1>
    <form onSubmit={props.handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus=""
        value={props.value}
        onChange={props.handleChange}
      />
    </form>

  </header>
);

export default Header;
