import "./styles.css";
import { useEffect, useState } from "react";
import { Home } from "./components/Pages/Home";

export default function App({ style0, style1 }) {
  // const [counter, setCounter] = useState(0);
  // const [texto, setTexto] = useState();

  // const Texto = (event) => {
  //   setTexto(event.target.value);
  // };

  // const [names, setNames] = useState([]);
  // const renderNames = () => setNames(people);

  // const people = [
  //   {
  //     name: "Esteban",
  //     edad: 19
  //   },
  //   {
  //     name: "Sebastian",
  //     edad: 19
  //   },
  //   {
  //     name: "Ferney",
  //     edad: 19
  //   }
  // ];

  // const sumar = () => {
  //   setCounter(counter + 1);
  // };

  // const restar = () => {
  //   setCounter(counter - 1);
  // };

  // const [styleTitle, setStyleTitle] = useState(style0);

  // useEffect(() => {
  //   counter >= 10 ? setStyleTitle(style1) : setStyleTitle(style0);
  // }, [counter]);

  return (
    <div className="App">
      <Home />
      {/* <h1 className={styleTitle}>ChangeStyle</h1>
      <p>{counter}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <input
        onChange={Texto}
        type="text"
        placeholder="Ingrese el texto"
      ></input>
      <p id="texto">Parrafo: {texto}</p>
      <div>
        <h2>Lista nombres</h2>
        <button onClick={renderNames}>Show</button>
        <ul>
          {names.map((names, key) => (
            <li key={key}>{names.name}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}
