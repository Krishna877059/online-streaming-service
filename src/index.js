import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'normalize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react'
import {GlobalStyles} from './global-styles';
render(<>
  <GlobalStyles/><App/></>,
  document.getElementById('root'));
