import Header from './components/Header/Header';
import './assets/styles/style.scss'
import 'bootstrap/dist/css/bootstrap-grid.css'
import Main from './components/Main/Main';
import CardPage from './components/CardPage/CardPage';
import { Routes,Route } from 'react-router-dom';
import Themes from './components/Themes/Themes';
import EditCard from './components/EditCard/EditCard';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RepeatPage from './components/RepeatPage/RepeatPage';
import KnowWordsPage from './components/KnowWordsPage/KnowWordsPage';
import AllCardsPage from './components/AllCardsPage/AllCardsPage';


function App() {
  return (
    <>
      <Header/>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
      />
      <Routes>
        <Route path='/'element={<Main/>}/>
        <Route path='/card/:cardId' element={<CardPage/>}/>
        <Route path='/cardEdit' element={<EditCard/>}/>
        <Route path='/themes/:id' element={<Themes/>}/>
        <Route path='/repeat' element={<RepeatPage/>}/>
        <Route path='/know' element={<KnowWordsPage/>}/>
        <Route path='/cards' element={<AllCardsPage/>}/>
      </Routes>
    </>
  );
}

export default App;
