import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="Todo input area" />
        <button>Add</button>
      </div>
      <div>
        <p>incomplete</p>
        <ul>
          <div>
            <li>aaaa</li>
            <button>complete</button>
            <button>delete</button>
          </div>
          <div>
            <li>bbbb</li>
            <button>complete</button>
            <button>delete</button>
          </div>
        </ul>
      </div>
      <div>
        <p>complete</p>
        <ul>
          <div>
            <li>ccc</li>
            <button>return</button>
          </div>
        </ul>
      </div>
    </>
  );
};
