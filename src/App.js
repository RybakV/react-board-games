import Header from './header/Header';
import Socials from './socials/Socials';
import Home from './page-home/Home';
import Error from './page-error/Error';
import Game from './games/Game';
import Contacts from './page-contacts/Contacts';
import './App.css';
import {Route, Routes} from "react-router-dom";
import { observer } from 'mobx-react';
import { useStoresHook } from './store/use-stores-hook';
import Newbie from './page-newbie/Newbie';
import Feedback from './page-feedback/Feedback';
import Sale from './page-sale/Sale';

function App() {

  const {pageBackground} = useStoresHook();


  return (
    <div className="app" style={{backgroundImage: `url(${pageBackground.backgroundUrl})`}}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="games/:id" element={<Game/>} />
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/newbie" element={<Newbie/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/sale" element={<Sale/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
      <Socials/>
    </div>
  );
}

export default observer(App);