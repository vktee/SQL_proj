import React from 'react';
import ReactDOM from 'react-dom/client';
import { Foo, Bar, Baz, App } from './App';
import Blah from './components/Test1';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Link to='/blah'>Blah</Link>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='foo' element={<Foo />} />
          <Route path='bar' element={<Bar />} />
          <Route path='baz' element={<Baz />} />
          <Route path='blah' element={<Blah />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
