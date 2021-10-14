import React from 'react'
import './App.css'

const catsKey = '2fbabe58-0577-430f-a11b-80592e5a988b';
const catsApi = 'https://api.thecatapi.com/v1/images/search';
const App = () => {

  const [catImage, setCatImage] = React.useState([])

  //useEffect para renderizar el dom, el [] es para que no se renderice infinitamente
  React.useEffect(() => {
    getCat()
  }, [])

  const getCat = () => {
    console.log('miau');

    //el headers es para pasarle la key de la api utilizada
    fetch(catsApi, {
      headers: {
        'x-api-key': catsKey
      }
    })
      //Primer then para transformar en un json la iteración
      .then((cat) =>
        cat.json()
      )
      //segundo then para extraer la imagen
      .then((cats) => {
        console.log('Cats: ', cats);
        const catUrl = cats[0].url;
        setCatImage(catUrl)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className='container'>
      <h2>🐈 A random cat image 🐈</h2>
      <div class="text-center">
        <img src={catImage} class="rounded" alt="catImage" />
      </div>

      <button onClick={getCat}>Get a new random Cat</button>
    </div>
  )
}
export default App