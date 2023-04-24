// App.js
import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import Account from './Account';
import AuthComponent from './AuthComponent';
import FreeComponent from './FreeComponent';
import './App.css';
import ProtectedRoutes from './ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col className="text-center">
            <h1>React Authentication Tutorial</h1>

            <section id="navigation">
              <Link to="/">Home</Link>
              <Link to="/free">Free Component</Link>
              <Link to="/auth">Auth Component</Link>
            </section>
          </Col>
        </Row>

        <Routes>
          <Route path="/" exact element={<Account />} />
          <Route path="/free" exact element={<FreeComponent />} />
          <Route
            path="/auth"
            element={
              <ProtectedRoutes
                redirectTo="/"
                component={AuthComponent}
              />
            }
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
