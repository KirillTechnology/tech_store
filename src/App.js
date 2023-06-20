import Home from './routes/Home/Home'
import Navigation from './routes/Navigation/Navigation';
import SignIn from './routes/SignIn/SignIn';
import { Routes, Route } from 'react-router-dom';


function Shop() {
  return <h1>Shop Page</h1>
}

function App() {
  return (
    <Routes>

      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>

    </Routes>
  );
}

export default App;