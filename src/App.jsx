import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="Todo input area" />
        <button>Add</button>
      </div>

      <div className="incomplete-area">
        <p className="title">incomplete</p>
        <ul>
          <div className="list-row">
            <li>aaaa</li>
            <button>complete</button>
            <button>delete</button>
          </div>
          <div className="list-row">
            <li>bbbb</li>
            <button>complete</button>
            <button>delete</button>
          </div>
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">complete</p>
        <ul>
          <div className="list-row">
            <li>ccc</li>
            <button>return</button>
          </div>
        </ul>
      </div>
    </>
  );
};
