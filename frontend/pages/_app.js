import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function MyApp({ Component, pageProps }) {
  return<Component {...pageProps} />
}

export default MyApp
