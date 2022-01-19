import React, { Component } from "react";

class Counter extends Component {
  // reserved word
  state = {
    counter: 1,
    tags: ["tag1", "tag2", "tag3"],
  };

  // reserved word
  // or you can use style={{fontSize: 15}}
  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  formatCount() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.counter === 0 ? "warning" : "primary");
  }
}

export default Counter;
