import Header from "./components/header";

import memo from "../src/menuHeader/memo/index";
import pesan from "../src/menuHeader/pesan/index";
import ide from "../src/menuHeader/ide/index";
import project from "../src/menuHeader/project/index";
import agenda from "../src/menuHeader/agenda/index";
import aktifitas from "../src/menuHeader/aktifitas/index";
import meeting from "../src/menuHeader/meeting/index";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import { Home } from "./pages/home";
import Login from "./login/login";

import { Routes, Route } from "react-router-dom";
import Berbintang from "./menuHeader/pesan/berbintang";
import Terkirim from "./menuHeader/pesan/terkirim";
import Draft from "./menuHeader/pesan/draft";
import Arsip from "./menuHeader/pesan/arsip";
import Sampah from "./menuHeader/pesan/sampah";
import BuatPesan from "./menuHeader/pesan/buatPesan";
import ArsipIde from "../src/menuHeader/ide/arsip";
import BerbagiIde from "../src/menuHeader/ide/berbagiIde";
import BerbintangIde from "../src/menuHeader/ide/berbintang";
import BuatIde from "../src/menuHeader/ide/buatIde";
import SampahIde from "../src/menuHeader/ide/sampah";
import HalamanPesan from "./menuHeader/pesan/halamanPesan";
import MemoPengajuan from "./menuHeader/memo/componentsMemo/memoPengajuan";
import MemoBerbintang from "./menuHeader/memo/componentsMemo/memoBerbintang";
import MemoTerkirim from "./menuHeader/memo/componentsMemo/memoTerkirim";
import MemoArsip from "./menuHeader/memo/componentsMemo/memoArsip";
import MemoSampah from "./menuHeader/memo/componentsMemo/memoSampah";
import TambahMemo from "./menuHeader/memo/componentsMemo/isimemo/tambahMemo";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          exact
          path="/login"
          name="Login Page"
          render={(props) => <Login {...props} />}
        />
        <Route path="/login" Component={Login} />
        <Route exact path="/" element={<Home />} />
        <Route path="/Ide" Component={ide} />
        <Route path="/Ide/arsip" Component={ArsipIde} />
        <Route path="/Ide/berbagiide" Component={BerbagiIde} />
        <Route path="/Ide/berbintang" Component={BerbintangIde} />
        <Route path="/Ide/buatide" Component={BuatIde} />
        <Route path="/Ide/sampah" Component={SampahIde} />
        <Route path="/project" Component={project} />
        <Route path="/agenda" Component={agenda} />
        <Route path="/aktifitas" Component={aktifitas} />
        <Route path="/meeting" Component={meeting} />
        <Route path="/memo" Component={memo}>
          <Route path="pengajuan" Component={MemoPengajuan} />
          <Route path="berbintang" Component={MemoBerbintang} />
          <Route path="terkirim" Component={MemoTerkirim} />
          <Route path="arsip" Component={MemoArsip} />
          <Route path="sampah" Component={MemoSampah} />
          <Route path="buatMemo" Component={TambahMemo} />
        </Route>
        <Route path="/pesan" Component={pesan}>
          <Route path="halamanPesan" Component={HalamanPesan}></Route>
          <Route path="berbintang" Component={Berbintang}></Route>
          <Route path="terkirim" Component={Terkirim} />
          <Route path="draft" Component={Draft} />
          <Route path="arsip" Component={Arsip} />
          <Route path="sampah" Component={Sampah} />
        </Route>
        <Route path="/pesan/buatpesan" Component={BuatPesan} />
      </Routes>
      <Sidebar />
      <Footer />
    </>
  );
}
// }

export default App;
