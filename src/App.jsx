import { Suspense } from "react";
import "./App.css";
import Counter from "./Counter";
import Todo from "./Todo";

import Users from "./Users";

const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())


function App() {
 function handleClick(){
  alert('I am clicked')
 }
 const handleClick2 =()=>{
  alert('clicked 2')
 }
  return (
    <>
      <h1>Vite + React</h1>
     <Suspense fallback={<h3>Loading users....</h3>}>
     <Users fetchUser={fetchUser}></Users>
     </Suspense>

      <Todo task="Learn react"></Todo>
      <Counter></Counter>

     <button onClick={handleClick}>Click Me</button>
     <br />
     <button onClick={handleClick2}>Click 2</button>
     <button onClick={()=> alert("clicked 3")}>Click 3</button>
    </>
  );
}

export default App;
