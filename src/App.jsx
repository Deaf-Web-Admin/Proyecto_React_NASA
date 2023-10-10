import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Figure from "../components/Figure/Figure";

const App = () => {
  //Recuperamos la fecha actual en un formato ISO -> 2022-01-01
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  //Creamos una variable de estado llamada apod inicializada como objeto vacío
  const [apod, setApod] = useState({});

  //Creamos una variable de estado llamada date con la fecha del día actual formateada
  const [date, setDate] = useState(today);

  //Almacenamos en una constante la URL de la NASA
  const NASA_URL = "https://api.nasa.gov/";

  //Almacenamos en una constante nuestra API Key, esto es recomendable almacenarlo en una variable de entorno
  const NASA_API_KEY = import.meta.env.VITE_SECRET_KEY;

  //El efecto del renderizado será hacer una petición de tipo get a la URL de la NASA
  //utilizando la query de la fecha con el valor de date y añadiéndole al final
  //la API Key tal como indica en la documentación.
  //Una vez realizada la petición se setea el data en apod y le indicamos en el
  //array de dependencias que no vuelva a lanzar el efecto hasta que cambie el estado
  //de date
  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);
  //Crearemos una función que setee la fecha a través de un input en el formato
  //necesario (igual que el formato de today)
  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };
  return (
    <div className="App">
      <header>
        <img
          src="https://i.pinimg.com/originals/f1/55/35/f15535699939fb714ab3404b3116f87e.gif"
          className="logo"
          alt="NASA LOGO"
        />
        <h2 className="titleBig">National AeroSpace Association API </h2>
        <h2 className="titleSmall">NASA API </h2>
      </header>
      <main>
        <h1>Astronomy Picture of the Day {date}</h1>
        <input
          type="date"
          id="photo-date"
          onChange={handleInput}
          value={date}
        />
        {date > today ? (
          <h2 className="window-pane">
            Haha, we must not show future pics...yet, please choose a previous
            date
          </h2>
        ) : (
          <Figure data={apod} />
        )}
      </main>
    </div>
  );
};

export default App;
