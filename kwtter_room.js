
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDu7Z7ce-ktjqdqBkqAB7r8HrmocfOrBq0",
    authDomain: "kwitter-8863f.firebaseapp.com",
    databaseURL: "https://kwitter-8863f-default-rtdb.firebaseio.com",
    projectId: "kwitter-8863f",
    storageBucket: "kwitter-8863f.appspot.com",
    messagingSenderId: "56045094994",
    appId: "1:56045094994:web:74422a579bcad73994778b",
    measurementId: "G-GM1S39WCF2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username= localStorage.getItem("username")
  document.getElementById("username").innerHTML = "Welcome" + username + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room_name" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    //End code
    });});}
getData();

function AddRoom(){
    room_name = document.getElementById("Room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding user"
      });
    localStorage.setItem("room_name", room_name)
    window.location = "kwitter_page.html"; 
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name)
    window.location="kwitter_room.html";
}


