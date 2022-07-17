
import './App.css';
import { useState, useEffect } from 'react';
import InputItem from './components/InputItem';
import TitleItem from './components/TitleItem';
import ListItem from './components/ListItem';

function App() {
  let [mylist, setMylist] = useState([])
  let [test, setTest] = useState()


  useEffect(() => {
    if (localStorage.getItem('myBox') == null) {
      localStorage.setItem('myBox', JSON.stringify([]));
    }
    let myBox = localStorage.getItem('myBox')
    myBox = JSON.parse(myBox)
    setTest(myBox)

  }, [])


  return (
    <div className="App">
      <div className='black-bg'>

        <div style={{ height: '1px' }}></div>

        <div className='white-bg'>
          <InputItem
            mylist={mylist}
            setMylist={setMylist}
            test={test}
            setTest={setTest}
          />
          <TitleItem />
          <br />
          <ListItem
            test={test}
            setTest={setTest}
          />
        </div>

      </div>
    </div >
  );
}

export default App;
