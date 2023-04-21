import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { ErrorPage } from './components';
import {Weekday, MuscleGroupForm, SubmitForm, DescriptionForm} from "./components/forms"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MuscleGroupForm/>
  </React.StrictMode>
);



