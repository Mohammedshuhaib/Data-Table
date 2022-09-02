
import './App.css';
import Chart from './components/chart/Chart';
import Header from './components/header/Header';
import { useDispatch } from 'react-redux'
import { data } from './features/dataSlice'
import { useEffect } from 'react';
import List from './components/list/List';
function App() {
 const dispatch = useDispatch()
  useEffect(() => {
    (
      async function getData() {
        dispatch(data())
      }
    )()
  },[dispatch])
  
  return (
    <div>
      <Header/>
      <Chart/>
      <List/>
    </div>
  );
}

export default App;
