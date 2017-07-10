import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';

const config = {  
    apiKey: "AIzaSyBpcTOzviEtw471XrRLfJPINhiiZ1jXgm4",
    authDomain: "elminda-oren-1903413.firebaseapp.com",
    databaseURL: "https://elminda-oren-1903413.firebaseio.com",
    projectId: "elminda-oren-1903413",
    storageBucket: "elminda-oren-1903413.appspot.com",
    messagingSenderId: "272079437557"
};

const fb = firebase  
  .initializeApp(config)
  .database()
  .ref();

// Added some "action" functions
// These will update our firebase database
const addLocation = data => { console.log(data); fb.child('locations').push(data, response => response); }
const updateLocation = (id, data) => { console.log(data); fb.child(`locations/${id}`).update(data, response => response); }
const actions = {  
  addLocation,
  updateLocation,
};

fb.on('value', snapshot => {  
  const store = snapshot.val();
  ReactDOM.render(
    <App
        {...actions}
        {...store}
    />,
    document.getElementById('root')
  );
});

registerServiceWorker();
