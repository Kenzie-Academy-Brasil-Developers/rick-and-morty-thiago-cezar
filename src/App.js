import Characters from './components/Characters';
import { useState, useEffect } from 'react';
import GlobalStyle from './style/global';


function App() {
  const [characterList, setCharacterList] = useState([])
  const [next, setNext] = useState()
  const [page, setPage] = useState(1)

  useEffect(()=> {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(((response)=> response.json()))
    .then((response)=>{
      setCharacterList(response.results)
      setNext(!response.info.next)
    })
    .catch((err)=> console.log(err))
  },[page, next])


  return (
    <div className = "App" >
      <>
      <GlobalStyle />
      <Characters characterList={characterList} setPage={setPage} page={page} next ={next}/>
      </>
    </div>
  );
}

export default App;