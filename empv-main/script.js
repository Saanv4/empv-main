import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js"
import { getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database"

const firebaseConfig = {
    apiKey: "AIzaSyBh0V44XJJxqpwW2FQx1unQpUTigX2eXq4",
    authDomain: "empovertyauth-6c297.firebaseapp.com",
    databaseURL: "https://empovertyauth-6c297-default-rtdb.firebaseio.com",
    projectId: "empovertyauth-6c297",
    storageBucket: "empovertyauth-6c297.appspot.com",
    messagingSenderId: "564361276552",
    appId: "1:564361276552:web:d708a3741176b47881433d",
    measurementId: "G-9V71R4LP0E"
  };
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  document.getElementById("submit").addEventListener('click',function(e){
    set(ref(db,'user/' + document.getElementById("username").value),
      {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        phonenumber: document.getElementById("phonenumber").value
      });
      alert("login successful!");


  })