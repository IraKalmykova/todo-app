import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: '',
        }

    }

    render() {
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" />
                <label
                    htmlFor="toggle-all"
                    onClick={this.props.checkedAllItems}
                >Mark all as complete</label>
                <ul className="todo-list">
                    {this.props.items.map((item, i) => (
                        <li key={item.value} className={item.done ? 'completed' : ''} >
                            <div className="view">
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    onClick={() => this.props.handleClickToDone(item.value)}/>
                                    <label>{item.value}</label>
                                <button
                                    type="button"
                                    className="destroy"
                                    onClick={() => this.props.removeCompletedItem(item.value)}
                                ></button>
                            </div>
                        </li>
                    ))}

                </ul>
            </section>
        )
    }


}

export default Main;