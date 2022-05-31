console.log('firebase app');
try {
  self.importScripts(
    'firebase/firebase-app.js',
    'firebase/firebase-auth.js',
    'firebase/firebase-firestore.js'
  );

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyDKiC4C_cxOMFU99y4B4dieZapPTzpKjl8',
    authDomain: 'vtasks-84d79.firebaseapp.com',
    projectId: 'vtasks-84d79',
    storageBucket: 'vtasks-84d79.appspot.com',
    messagingSenderId: '647018818358',
    appId: '1:647018818358:web:e493a28564e8d0aa8ea197',
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const ref = app.firestore().collection('tasks');
  // add event listeners for the service worker

  chrome.runtime.onMessage.addListener(
    (request, sender, response) => {
      if (request.command === 'post') {
        ref
          .doc('shared')
          .set({
            tasks: request.tasks,
          })
          .then((result) => {
            response({
              message: 'Data Stored Successfully',
            });
          })
          .catch((err) => {
            response.err = err;
          });
      }
    }
  );
} catch (err) {
  console.log(err);
}
