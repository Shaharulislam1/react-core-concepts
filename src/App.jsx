import "./App.css";
import Counter from "./Counter";
import Todo from "./Todo";

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
