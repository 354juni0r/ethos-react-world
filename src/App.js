
import Header from './components/Header';

import memo from './Memo/index';
import pesan from './pesan/index';
import addmemo from './Memo/tambahmemo';
import ide from './Ide/index';
import project from './project/index'
import agenda from './agenda/index';
import aktifitas from './aktifitas/index';
import meeting from './meeting/index';
import Sidebar  from './components/Sidebar';
import Footer from './components/Footer';
import {Home} from './pages/Home';
import Login from './login/login';

import { Routes, Route } from 'react-router-dom';
import Berbintang from './pesan/Berbintang';
import Terkirim from './pesan/Terkirim';
import Draft from './pesan/Draft';
import Arsip from './pesan/Arsip';
import Sampah from './pesan/Sampah';
import BuatPesan from './pesan/BuatPesan';
import ArsipIde from './Ide/Arsip';
import BerbagiIde from './Ide/BerbagiIde';
import BerbintangIde from './Ide/Berbintang';
import BuatIde from './Ide/BuatIde';
import SampahIde from './Ide/Sampah';

function App() {
  return (
    <>
    
    <Header/>
        
         <Routes>
         <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
         <Route  path="/login" Component={Login} />
          <Route exact path="/" element={<Home />} />
          <Route  path="/Ide" Component={ide} />
          <Route  path="/Ide/arsip" Component={ArsipIde} />
          <Route  path="/Ide/berbagiide" Component={BerbagiIde} />
          <Route  path="/Ide/berbintang" Component={BerbintangIde} />
          <Route  path="/Ide/buatide" Component={BuatIde} />
          <Route  path="/Ide/sampah" Component={SampahIde} />
          <Route  path="/project" Component={project} />
          <Route  path="/agenda" Component={agenda} />
          <Route  path="/aktifitas" Component={aktifitas} />
          <Route  path="/meeting" Component={meeting} />
          <Route  path="/memo" Component={memo} />
          <Route  path="/pesan" Component={pesan} />
          <Route  path="/pesan/berbintang" Component={Berbintang} />
          <Route  path="/pesan/terkirim" Component={Terkirim} />
          <Route  path="/pesan/draft" Component={Draft} />
          <Route  path="/pesan/arsip" Component={Arsip} />
          <Route  path="/pesan/sampah" Component={Sampah} />
          <Route  path="/pesan/buatpesan" Component={BuatPesan} />
          <Route  path="/memo/tambahmemo" Component={addmemo} />
         
       </Routes>
       <Sidebar/>
       <Footer /> 

       </>
  );
}
  // }

export default App;
