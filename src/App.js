import './index.css';
import Header from './MyComponents/Header';
import Greetings from './MyComponents/Greetings';
import AddTodo from './MyComponents/AddTodo';
import Todos from './MyComponents/Todos.jsx';
import TodoItems from './MyComponents/TodoItems.jsx';
import Footer from './MyComponents/Footer';
import About from './MyComponents/About';
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 

function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null) {
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=> {
    console.log("I am onDelete", todo)

    setTodos(todos.filter((e) => {
      return e!== todo;
    })); 
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this Todo", title ,desc)
    let sno;
    if(todos.length==0){
      sno = 0;
    }else {
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo= {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)

    if (localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }
 const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
  return (
  <>
  <Router>
  <Header title="My Todos List"/> 
    <Switch>
          <Route exact path="/my-todo-app" render={()=>{
            return(
            <>
              <Greetings /> 
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
    
    <Footer />
  </Router>
  </>
  );
}

export default App;