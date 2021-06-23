import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { theme } from './Theme';
// PAGES

import CheckoutPage from './Pages/CheckoutPage';
import ProductsPage from './Pages/ProductsPage';
import ItemDetailsPage from './Pages/ItemDetailsPage';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
// PAGES

// Layout
import Layout from './Components/Layout';
// Layout

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route path='/about'>
              <AboutPage />
            </Route>
            <Route exact path='/contact'>
              <ContactPage />
            </Route>
            <Route path='/checkout'>
              <CheckoutPage />
            </Route>
            <Route path='/products'>
              <ProductsPage />
            </Route>
            <Route path='/product/:id'>
              <ItemDetailsPage />
            </Route>
            <Route path='*'>
              <HomePage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
