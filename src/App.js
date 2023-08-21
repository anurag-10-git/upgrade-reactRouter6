import { Navigate, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import { Redirect, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <MainHeader/>
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to="/welcome"/>}/>
          <Route path='/welcome/*' element={<Welcome/>}>
            <Route path='new-user' element={<p>welcome new user</p>}/>
          </Route>
          <Route exact path='/products' element={<Products/>}/>
          <Route path='/products/:productId' element={<ProductDetail/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// switch loads only one of the routes inside it
// routes goes from top to bottom to load to the first matching path not more specfic
