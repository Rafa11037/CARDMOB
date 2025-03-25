import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './components/Counter';
import Photo from './components/Photo'
import Album from './components/album';
import TodoList from './components/TodoList';

function App() {
  const [count, setCount] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [albumId, setAlbumId] = useState(1);

  const fetchPhotos = async (albumId) => {
    try {
        const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
        const response = await fetch(url); //Por padrão executa um request do tipo GET
        if (response.status == 200) {
          const data = await response.json();
          // console.log(data);
          const updatedPhotos = data.map( (photo) => ({
            ...photo,
            thumbnailUrl: `https://picsum.photos/150?random=${photo.id}`
          }) );
          setPhotos(updatedPhotos);
        }
    } catch (error) {
        console.error('Erro ao buscar fotos', error);
    }

  }

  useEffect(() => {
    fetchPhotos(albumId);
  }, [albumId]);

  // function updateCount() {
  //   setCount(count+1);
  // }

  // arraw function 

  const updateCount = () => {
    // outros comandos
    return count + 1;
  }

  const updateCount1 = () => count + 1; // return é implicito

  const dados = {
    "nome": "fulano",
    "atualiza": (novo_nome) => `Nome nome é ${novo_nome}`,
    "endereco": {
      "rua": "xyz",
      "numero": "111",
      "complementos": ["casa", "na esquina do supermercado ABC"]
    }

  }; // é um objeto JS
  dados.atualiza("gerson");
  dados.endereco.complementos[1]; // acessando a referência do endereço


  return (
    <>
      <TodoList name="CARDMOB" />
      <Counter title="Contando..." />
      <Counter initial="100" />
      {/* <article>
        <h1>Album da API</h1>
        {photos.map ( (photo) => (
          // <article key={photo.id}>
          //   <h2>ID #{photo.id} {photo.title}</h2>
          //   <img src={photo.thumbnailUrl} alt={photo.title}/>

          // </article>
          <Photo photo={photo} />
        ) )}
      </article> */}
      <div>
        <button onClick={() => setAlbumId(1)}>Album #1</button>
        <button onClick={() => setAlbumId(2)}>Album #2</button>
        <button onClick={() => setAlbumId(3)}>Album #3</button>
        <button onClick={() => setAlbumId(4)}>Album #4</button>
       </div>

      <Album albumId={albumId}/>

    </>
  )
}

export default App
