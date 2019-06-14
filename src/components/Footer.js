import React from 'react';

const Footer = (props) => {
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{props.count.length}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a
                        href="#/"
                        className={props.addClass === 0 ? 'selected' : ''}
                        onClick={props.showAllItems}
                    >All</a>
                </li>
                <li>
                    <a href="#/active"
                       className={props.addClass === 1 ? 'selected' : ''}
                       onClick={props.showActiveItems}>Active</a>
                </li>
                <li>
                    <a
                        href="#/completed"
                        className={props.addClass === 2 ? 'selected' : ''}
                        onClick={props.showCompletedItems}
                    >Completed</a>
                </li>
            </ul>
            <button
                type="button"
                className="clear-completed"
                onClick={props.removeAllCompletedItems}
            >Clear completed</button>
        </footer>
    )
}

export default Footer;