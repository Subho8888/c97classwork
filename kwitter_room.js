//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAClOtDewt4wZ8GQL0Ut3qg0ZLzvd_Jhsw",
      authDomain: "kwitter-3f37e.firebaseapp.com",
      databaseURL: "https://kwitter-3f37e-default-rtdb.firebaseio.com",
      projectId: "kwitter-3f37e",
      storageBucket: "kwitter-3f37e.appspot.com",
      messagingSenderId: "493950627811",
      appId: "1:493950627811:web:95d7c2c1e2b026ec003ad6"
    };
    
    // Initialize Firebase
    const app =firebase.initializeApp(firebaseConfig);


    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome  "+user_name+"!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
          purpose:"addingRoomName"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("roomname-"+Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
function logout(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location="index.html"
}