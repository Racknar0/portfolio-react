import { useContext, useEffect } from 'react';
import { GlobalContext } from './context/GlobalContext';

import Main from './components/Main/Main';
import Preload from './components/Preload/Preload';

import './App.css';



function App() {

  const { preload, setPreload } = useContext(GlobalContext);

  useEffect(() => {

    setTimeout(() => {
      setPreload(false);
    }, 4400);

  }, []);




  return (


      <>
      {preload ? <Preload /> : <Main /> }
      </>

  );
}

export default App;
