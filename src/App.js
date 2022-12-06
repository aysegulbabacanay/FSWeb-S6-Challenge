import React, { useState, useEffect } from 'react';
import Karakter from './components/Karakter';
import axios from "axios"


const App = () => {

  const [chars, setChars] = useState(null);
  const [visibleIndex, setVisibleIndex] = useState(2);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then((res) => {
        setChars(res.data)
        //console.log(res.data)
      });
  }, [])
  //console.log(`Karakterler: ${chars}`) karakter önce null geliyor,bu yüzden koşul koyuyoruz.
  

  return (
   
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {
        chars === null
        ? <div>Yükleniyor</div>
        : <div className='chars-list'>
          {chars.map((k ,sira) => <Karakter kisi = {k} kisiIndex={sira} acikMi={sira === visibleIndex} tiklayincaYap = {() => setVisibleIndex(sira)}/>)}
        </div>
      }
    </div>
  );
}

export default App;
