import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from './store/user/user.slice'

import Spinner from './components/Spinner/Spinner'


// import Home from './routes/Home/Home'
// import Navigation from './routes/Navigation/Navigation';
// import Footer from './components/Footer/Footer'
// import Authentication from './routes/Authentication/Authentication';
// import Shop from './routes/Shop/Shop';
// import Checkout from './routes/Checkout/Checkout';

const Authentication = lazy(() => import('./routes/Authentication/Authentication'))
const Navigation = lazy(() => import('./routes/Navigation/Navigation'))
const Checkout = lazy(() => import('./routes/Checkout/Checkout'))
const Footer = lazy(() => import('./components/Footer/Footer'))
const Home = lazy(() => import('./routes/Home/Home'))
const Shop = lazy(() => import('./routes/Shop/Shop'))


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) { createUserDocumentFromAuth(user) }

      const pickedUser = user && (({ accessToken, email }) => ({ accessToken, email }))(user)
      // console.log(pickedUser)
      dispatch(setCurrentUser(pickedUser))
    })

    return unsubscribe
  }, [])

  return (
    <>
      <Suspense fallback={<Spinner/>}>

        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='shop/*' element={<Shop />} />
            <Route path='auth' element={<Authentication />} />
            <Route path='checkout' element={<Checkout />} />
          </Route>
        </Routes>

        <Footer />

      </Suspense>
    </>
  );
}

export default App;