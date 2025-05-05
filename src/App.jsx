import { useState, useRef } from "react";
import "./App.css";

import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

function App() {
  const mockData = [
    {
      id: 2,
      isDone: false,
      content: "React 공부하기",
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: "빨래하기",
      date: new Date().getTime(),
    },
    {
      id: 0,
      isDone: false,
      content: "노래 연습하기",
      date: new Date().getTime(),
    },
  ];
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header></Header>
      <Editor onCreate={onCreate}></Editor>
      <List></List>
    </div>
  );
}

export default App;
