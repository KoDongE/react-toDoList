import React from "react";
function App() {
  const [toDo, setToDo] = React.useState("");
  const [toDos, setToDos] = React.useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault(); // 페이지 안 변하도록 
    if(toDo === "") {
      return;
    }

    
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  }

  return (
    <div>
      <h1>My toDos : {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Input your toDo"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
