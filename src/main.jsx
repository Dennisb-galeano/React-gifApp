import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifReactApp } from './GifReactApp';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifReactApp />
  </React.StrictMode>
);
