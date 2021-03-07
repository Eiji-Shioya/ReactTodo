import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  //可変要素　stateを使う
  //incompleteTodos:変数 ,  setIncompleteTodos処理する関数
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["uuu", "いいい"]);

  // 関数
  // event.target.value 入力された値を取得表示する
  // これをsetTodoTextへ値を渡す
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //addボタンが押された時の処理関数 todoTextの値を表示
  //...incomplteTools : 今の排列を取得
  // [...incompleteTodos,todoText]; incompleteTodosにtodoTextをセット
  const onClickAdd = () => {
    //inputが空の場合
    if (todoText === "") return;
    //値がある場合
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    //reset
    setTodoText("");
  };

  //表示
  return (
    <>
      <div className="input-area">
        {
          //value={todoText} だけだとstateのからの値がセットされるので
          //入力ができないその為、onchange
        }
        <input
          placeholder="Todo input area"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>Add</button>
      </div>

      <div className="incomplete-area">
        <p className="title">incomplete</p>
        <ul>
          {
            // map の中には usestateない排列要素が入っていく
            // key ループ処理される際の目印
          }
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>complete</button>
                <button>delete</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">complete</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>return</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
