import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const FILTER = {
  all: 0,
  active: 1,
  completed: 2
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      items: [],
      filterBy: FILTER.all,
      checked: false,
    };
  }

  addToValue = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  addToItems = (event) => {
    event.preventDefault();

    if (!this.state.value) {
      return;
    }

    this.setState(prevState => ({
      items: [
        ...prevState.items,
        {
          id: Date.now(),
          value: this.state.value,
          done: false,
        },
      ],
      value: '',
    }))
  };

  handleClickToDone = (id) => {
    const items = [...this.state.items];
    const itemIndex = items.findIndex(item => item.id === id);

    items[itemIndex] = {
      ...items[itemIndex],
      done: !items[itemIndex].done
    }
    this.setState({items});
  };

  changeFilterBy = (filter) => {
    this.setState({ filterBy: filter })
  };

  filterItems(value) {
    // we've already renamed `selectedList` to `filterBy`
    switch (value) {
      case FILTER.all: {
        return this.state.items;
      }
      case FILTER.active: {
        return this.state.items.filter((item) => !item.done);
      }
      case FILTER.completed: {
        return this.state.items.filter((item) => item.done);
      }
      default: {
        return this.state.items;
      }
    }
  }

  removeAllCompletedItems = () => {
    const items = this.state.items.filter(item => !item.done);
    this.setState({ items });
  };

  removeCompletedItem = (id) => {
    const items = this.state.items.filter(item => item.id !== id);

    this.setState({ items });
  };

  checkedAllItems = () => {
    const items = this.state.items.map((item) =>({
      ...item,
      done: !this.state.checked,
    }))

    this.setState({
      items,
      checked: !this.state.checked,
    });
  };

  render() {
    return (
      <section className="todoapp">
        <Header
          value={this.state.value}
          handleChange={this.addToValue}
          handleSubmit={this.addToItems}
        />
        <Main
          items={this.filterItems(this.state.filterBy)}
          handleClickToDone={this.handleClickToDone}
          checkedAllItems={this.checkedAllItems}
          removeCompletedItem={this.removeCompletedItem}
        />
        <Footer
          countActiveItems={this.state.items.filter(item => !item.done)}
          filter={FILTER}
          filterItems={this.changeFilterBy}
          removeAllCompletedItems={this.removeAllCompletedItems}
          showSelectedList={this.state.filterBy}
        />
      </section>
    );
  }
}

export default App;
