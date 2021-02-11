import React from "react";
import "../../assets/css/animate.css";
import styles from "./ListItems.css";

const ListItems = ({ entries, delete }) => (
  <div className="items">
    {entries.map(x => (
      <div key={x.key}>
        <input
          type="checkbox"
          className={x.checked ? "hidden" : ""}
          onClick={() => this.props.onAdd(x.key)}
        />
        <label className={`item-text ${x.checked ? "checked" : "unchecked"}`}>
          {x.text}
        </label>
        <button className={styles.delete} onClick={() => delete x.key} />
      </div>
    ))}
  </div>
);

export default ListItems;
