import React, { Component } from "react";
import logo from "./assets/img/logo.svg";
import "./components/ListItems/ListItems.css";
import ListItems from "./components/ListItems/ListItems";
import "./assets/css/animate.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      items: [],
      flaggedItems: [],
      selected: ""
    };

    this.openList = this.openList.bind(this);
    this.crossOff = this.crossOff.bind(this);

    this.showTodo = this.showTodo.bind(this);
    this.showDone = this.showDone.bind(this);
    this.showAll = this.showAll.bind(this);

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  openList() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  crossOff(key) {
    this.setState({
      ...this.state,
      items: this.state.items.map(x =>
        x.key === key ? { ...x, checked: !x.checked } : x
      ),
      flaggedItems: this.state.items.map(x =>
        x.key === key ? { ...x, checked: !x.checked } : x
      )
    });
  }

  showTodo() {
    this.setState({
      ...this.state,
      flaggedItems: this.state.items.filter(x => !x.checked),
      selected: "to-do"
    });
  }

  showDone() {
    this.setState({
      ...this.state,
      flaggedItems: this.state.items.filter(x => x.checked),
      selected: "done"
    });
  }

  showAll() {
    let checkedItems = this.state.items.filter(x => x.checked);
    let uncheckedItems = this.state.items.filter(x => !x.checked);
    let items = [];

    if (checkedItems.length !== 0 && uncheckedItems.length !== 0) {
      items = uncheckedItems.concat(checkedItems);
    } else if (checkedItems.length !== 0) {
      items = checkedItems;
    } else if (uncheckedItems.length !== 0) {
      items = uncheckedItems;
    }

    this.setState({ ...this.state, flaggedItems: items, selected: "show-all" });
  }

  addItem(e) {
    e.preventDefault();

    if (this._inputElement.value !== "") {
      var item = {
        text: this._inputElement.value,
        key: Date.now(),
        checked: false
      };

      console.log(item);
      this.setState(
        {
          ...this.state,
          items: this.state.items.concat(item),
          flaggedItems: this.state.items.concat(item)
        },
        () => (this._inputElement.value = "")
      );
    }
  }

  removeItem(key) {
    this.setState({
      ...this.state,
      items: this.state.items.filter(item => item.key !== key),
      flaggedItems: this.state.items.filter(item => item.key !== key)
    });
  }

  render() {
    let hidden = this.state.clicked ? "" : "hidden";
    let isDisabled = this.state.items.length !== 0 ? false : true;

    return (
      <div className="App">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={this.openList}
        />
        <div id="list" className={hidden}>
          <form onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="What's on your list today?"
              className="item-add"
              ref={a => (this._inputElement = a)}
              autofocus="autofocus"
            />
          </form>

          <ListItems
            entries={this.state.flaggedItems}
            delete={idToRemove => this.removeItem(idToRemove)}
            onAdd={idToAdd => this.crossOff(idToAdd)}
          />

          <button
            disabled={isDisabled}
            onClick={this.showTodo}
            className={`to-do ${
              this.state.selected === "to-do" ? "selected" : ""
            }`}
          >
            TO DO
          </button>
          <button
            disabled={isDisabled}
            onClick={this.showDone}
            className={`done ${
              this.state.selected === "done" ? "selected" : ""
            }`}
          >
            DONE
          </button>
          <button
            onClick={this.showAll}
            className={`all ${
              this.state.selected === "show-all" ? "selected" : ""
            }`}
          >
            SHOW ALL
          </button>
        </div>
      </div>
    );
  }
}

export default App;
