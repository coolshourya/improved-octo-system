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
  putin=localStorage.getItem("user_name"); 
  room_name=localStorage.getItem("room_name"); 


  function send(){
    YMCA=document.getElementById("YMCA").value;
    firebase.database().ref(room_name).push({
        name:putin,
        message:YMCA,
        like:0
    });
    document.getElementById("YMCA").value="";
  }


  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
     message_data = childData;
        //Start code
console.log(message_data);
name = message_data['name'];
 message = message_data['message'];
  like = message_data['like'];
          tag1="<h4>"+name+"<img class='user_tick'src='tick.png'></h4>";
          tag2="<h4 class='message_h4'>"+message+"</h4>";
          tag3="<button class='btn btn-warning'id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
          tag4="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
          row=tag1+tag2+tag3+tag4;
    document.getElementById("output").innerHTML+=row;

        //End code
  }});});}
  getData();

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
     window.location="index.html";
     }

     function updateLike(message_id) {
      console.log("clicked on like button - " + message_id);
       button_id = message_id;
        likes = document.getElementById(button_id).value; updated_likes = Number(likes) + 1;
         console.log(updated_likes);
          firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
           }