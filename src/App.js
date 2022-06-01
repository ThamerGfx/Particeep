import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "./App.css";
import CardsList from "./CardsList";
import Filter from './Filter';
import { movies$ } from "./movies";

function App() {

  const [data, setData] = useState([])

  const movieReducer = useSelector((state) => state.movieReducer);
  const { categItem } = movieReducer;


  useEffect(() => {
    async function showData() {
      try {
        const cards = await movies$;
        setData(cards);
      } catch(e) {
        console.log(e);
      }
    }
    showData(); 

  })

  const itemFetched = data.filter((itemMovie) => {
    return (
      categItem.includes(itemMovie.category) 
    );
  });

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Hello</h1>
      </header> */}
      {/* <h1>Hello</h1> */}
      <Filter data={data} />
      <CardsList data={categItem.length === 0 ? data : itemFetched} />
    </div>
  );
}

export default App;
