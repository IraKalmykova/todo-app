import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      items: [],
      selectedList: 0,
      checked: false,
    };

    this.addToValue = (event) => {
      this.setState({
        value: event.target.value,
      });
    };

    this.addToItems = () => {
      if (this.state.value) {
        this.setState(prevState => ({
          items: [
            ...prevState.items,
            {
              value: this.state.value,
              done: false,
            },
          ],

          value: '',
        }));
      }
    };

    this.handleClickToDone = (value) => {
      for (const key of this.state.items) {
        if (key.value === value) {
          key.done = !key.done;
        }
      }

      this.setState({
        items: this.state.items,

      });
    };

    this.showAllItems = () => {
      this.setState({ selectedList: 0 });
    };

    this.showActiveItems = () => {
      this.setState({ selectedList: 1 });
    };

    this.showCompletedItems = () => {
      this.setState({ selectedList: 2 });
    };

    this.removeAllCompletedItems = () => {
      const items = this.state.items.filter(item => !item.done);
      this.setState({ items });
    };

    this.removeCompletedItem = (value) => {
      const newValue = this.state.items.filter(item => item.value !== value);

      this.setState({ items: newValue });
    };

    this.checkedAllItems = () => {
      for (const key of this.state.items) {
        key.done = !this.state.checked;
      }

      this.state.checked = !this.state.checked;
      this.setState({
        items: this.state.items,
        checked: this.state.checked,
      });
    };
  }

  render() {
    return (
      <section className="todoapp">
        <Header
          value={this.state.value}
          handleChange={this.addToValue}
          handleSubmit={this.addToItems}
        />
        <Main
          items={this.state.selectedList === 0
            ? this.state.items
            : this.state.selectedList === 1
              ? this.state.items.filter(item => !item.done)
              : this.state.items.filter(item => item.done)}
          handleClickToDone={this.handleClickToDone}
          checkedAllItems={this.checkedAllItems}
          removeCompletedItem={this.removeCompletedItem}
        />
        <Footer
          countActiveItems={this.state.items.filter(item => !item.done)}
          showAllItems={this.showAllItems}
          showActiveItems={this.showActiveItems}
          showCompletedItems={this.showCompletedItems}
          removeAllCompletedItems={this.removeAllCompletedItems}
          showSelectedList={this.state.selectedList}
        />
      </section>
    );
  }
}

export default App;
