// import React from 'react';

// const Todo = ({task}) => {
//     return (
//         <div>
//             <li>Task: {task}❤️</li>  
//         </div>
//     );
// };

// export default Todo;
import { useEffect, useState } from "react";

export default function App() {
  const [emoji, setEmoji] = useState("⌨️"); // default

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "a") setEmoji("🍎");     // A → Apple
      else if (event.key === "b") setEmoji("🍌"); // B → Banana
      else if (event.key === "c") setEmoji("🐱"); // C → Cat
      else if (event.key === " ") setEmoji("🌌"); // Space → Night sky
      else if (event.key === "Enter") setEmoji("🚀"); // Enter → Rocket
      else setEmoji("❓"); // any other key
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-6xl">
      {emoji}
      <p className="mt-4 text-lg">Press A, B, C, Space or Enter</p>
    </div>
  );
}
