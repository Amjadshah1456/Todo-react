
import './App.css';
import { useState } from 'react';


function App() {
  
const[inputArr, setInputArr] = useState ([]);
 
const [inputData, setInputData] = useState( { name: "" , age: "" , designation: ""});
  
function handleChange(e) {
setInputData({...inputData,[e.target.name]: e.target.value});
}
console.log(inputData);

let { name, age, designation } = inputData;
function handlleChange() {
setInputArr([...inputArr, { name, age, designation }]);
}

  return (
    <div className="App">
      <p>Name:</p>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={inputData.name}
      />
      <p>Age:</p>

      <input
        type="number"
        name="age"
        onChange={handleChange}
        value={inputData.age}
      />
      <p>Designation:</p>

      <input
        type="text"
        name="designation"
        onChange={handleChange}
        value={inputData.designation}
      /> <br/><br/>
      <button onClick={handlleChange}>Add</button>

      <br/><br/>
      <table border={1} width="10%" cellPadding={10} >
        <tbody>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Designation</td>
          </tr>
          {inputArr.map((info, ind) => {
            return (
              <tr key={ind}>
                <td>{info.name}</td>
                <td>{info.age}</td>
                <td>{info.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
