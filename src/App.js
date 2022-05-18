import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login/Login';
import SignUp from './components/Login/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ForgetPass from './components/Login/ForgotPass/ForgetPass';
import LoadServices from './components/Services/LoadServices';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div style={{ minHeight: '60vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About></About>} />
          <Route path="/forget-password" element={<ForgetPass></ForgetPass>} />
          <Route path="/todo-list" element={
            <RequireAuth>
              <LoadServices></LoadServices>
            </RequireAuth>
          } />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
