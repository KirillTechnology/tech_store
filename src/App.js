import Home from './routes/Home/Home'
import Navigation from './routes/Navigation/Navigation';
import Authentication from './routes/Authentication/Authentication';
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
        <Route path='/auth' element={<Authentication />} />
      </Route>

    </Routes>
  );
}

export default App;