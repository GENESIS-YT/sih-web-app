import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";


function Startfirebase(){
const firebaseConfig = {

  apiKey: "AIzaSyDzvKwSYf017OnDcuaBH3w1CdkSAhZqbhU",
  authDomain: "sih-dat.firebaseapp.com",
  databaseURL: "https://sih-dat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sih-dat",
  storageBucket: "sih-dat.appspot.com",
  messagingSenderId: "541475645124",
  appId: "1:541475645124:web:45a29b7be1de232d60cb91"
 };

    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
    
}
 export default Startfirebase;