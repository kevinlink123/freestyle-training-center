import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD3CaPaLVdhOc2iC2pALf4yBPRKpRqv2cY",
  authDomain: "freestyle-training-center.firebaseapp.com",
  projectId: "freestyle-training-center",
  storageBucket: "freestyle-training-center.appspot.com",
  messagingSenderId: "203586530938",
  appId: "1:203586530938:web:58fb40fb031484a28715c3"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
