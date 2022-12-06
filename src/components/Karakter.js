// Karakter bileşeniniz buraya gelecek
import React from "react";
import { useState } from "react";


const Karakter = (prop) => {
    //const {kisi}= prop;


    const [acik, setAcik] = useState(false)



    //return kısmı app.js den getirdik.

    return (
        <div onClick={prop.tiklayincaYap} className='char' key={prop.kisi.url}>
        <h2>{prop.kisi.name}</h2> 
        {prop.acikMi && (
            <div className='char-ozellikleri'>
            <div>Göz rengi: {prop.kisi.eye_color}</div>
            <div>Boyu: {prop.kisi.height}</div>
            <div>Kilosu: {prop.kisi.mass}</div>
            <div>Doğum tarihi: {prop.kisi.birth_year}</div>
          </div>
        )}
         
         </div>
    )
}

export default Karakter;





