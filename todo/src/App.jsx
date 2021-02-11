import React, { useState } from "react";

import ListItems from "./components/ListItems/ListItems";

import "./assets/css/animate.css";
import "./components/ListItems/ListItems.css";
import logo from "./assets/img/logo.svg";

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [items, setItems] = useState([]);
  const [flaggedItems, setFlaggedItems] = useState([]);
  const [selected, setSelected] = useState("");

  const openList = () => {
    setClicked(!clicked);
  };

  const crossOff = key => {
    this.setState({
      ...this.state,
      items: this.state.items.map(x =>
        x.key === key ? { ...x, checked: !x.checked } : x
      ),
      flaggedItems: this.state.items.map(x =>
        x.key === key ? { ...x, checked: !x.checked } : x
      )
    });
  };

  const showTodo = () => {
    setFlaggedItems(items.filter(x => !x.checked));
    setSelected("to-do");
  };

  const showDone = () => {
    setFlaggedItems(items.filter(x => x.checked));
    setSelected("done");
  };

  const showAll = () => {
    let checkedItems = items.filter(x => x.checked);
    let uncheckedItems = items.filter(x => !x.checked);
    let items = [];

    if (checkedItems.length !== 0 && uncheckedItems.length !== 0) {
      items = uncheckedItems.concat(checkedItems);
    } else if (checkedItems.length !== 0) {
      items = checkedItems;
    } else if (uncheckedItems.length !== 0) {
      items = uncheckedItems;
    }

    setFlaggedItems(items);
    setSelected("show-all");
  };

  const addItem = e => {
    e.preventDefault();

    if (this._inputElement.value !== "") {
      var item = {
        text: this._inputElement.value,
        key: Date.now(),
        checked: false
      };

      this.setState(
        {
          ...this.state,
          items: this.state.items.concat(item),
          flaggedItems: this.state.items.concat(item)
        },
        () => (this._inputElement.value = "")
      );
    }
  };

  const removeItem = key => {
    this.setState({
      ...this.state,
      items: this.state.items.filter(item => item.key !== key),
      flaggedItems: this.state.items.filter(item => item.key !== key)
    });
  };

  let hidden = this.state.clicked ? "" : "hidden";
  let isDisabled = this.state.items.length !== 0 ? false : true;

  return (
    <div className="App">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        onClick={() => openList}
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
          className={`to-do ${selected === "to-do" ? "selected" : ""}`}
        >
          TO DO
        </button>
        <button
          disabled={isDisabled}
          onClick={() => showDone}
          className={`done ${selected === "done" ? "selected" : ""}`}
        >
          DONE
        </button>
        <button
          onClick={() => showAll}
          className={`all ${selected === "show-all" ? "selected" : ""}`}
        >
          SHOW ALL
        </button>
      </div>
    </div>
  );
};

export default App;
