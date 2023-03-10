import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKf5zOq8hdQTM0yd89P1yu2iqSsn1bmFE",
  authDomain: "moreschineumaticos.firebaseapp.com",
  projectId: "moreschineumaticos",
  storageBucket: "moreschineumaticos.appspot.com",
  messagingSenderId: "172525210373",
  appId: "1:172525210373:web:eea33e86523f0a1014056c"
};
initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
