import React, { Component } from 'react';
import "./animate.css";
import "./App.css";

class ListItems extends Component {
    render() {
        return (
            <div className="items">
                { this.props.entries.map(x => 
                    <div key={x.key}>
                        <input type="checkbox" className={ x.checked ? "hidden" : ""} onClick={ () => this.props.onAdd(x.key) } />
                        <label className={`item-text ${x.checked ? "checked" : "unchecked"}`}>{ x.text }</label>
                        <button className="delete" onClick={ () => this.props.delete(x.key)  }></button>
                    </div>
                )}
            </div>
        );
    }
}

export default ListItems;