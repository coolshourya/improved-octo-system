const firebaseConfig = {
  apiKey: "AIzaSyBpoO3yKEZTc0ATpthuHO-BdhxpKwOoBM0",
  authDomain: "chaty-4f749.firebaseapp.com",
  databaseURL: "https://chaty-4f749-default-rtdb.firebaseio.com",
  projectId: "chaty-4f749",
  storageBucket: "chaty-4f749.appspot.com",
  messagingSenderId: "644233214896",
  appId: "1:644233214896:web:3798e4f644326c0734f475",
  measurementId: "G-RYQTV8LSB3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Username=localStorage.getItem("username");  
document.getElementById("welcomeUser").innerHTML="welcome "+Username;
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     row="<div id="+Room_names+" onclick='redirecttoroom(this.id)' class='Room_name'>"+Room_names+"</div>";
     document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addroom(){
  Room_name=document.getElementById("roomba").value;
  firebase.database().ref("/").child(Room_name).update({
    purpose:"adding a room"
  });
  localStorage.setItem("room_name",Room_name);
  window.location="kwitter_page.html";
}

function redirecttoroom(name){
  localStorage.setItem("room_name",name);
window.location="kwitter_page.html";


}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   window.location="index.html";

}