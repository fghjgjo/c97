const firebaseConfig = {

      apiKey: "AIzaSyCHJsRIg6vwnxyhd_EL3rQ7rsZa5Psupe4",
    
      authDomain: "kwitter-fe2c6.firebaseapp.com",
    
      projectId: "kwitter-fe2c6",
    
      storageBucket: "kwitter-fe2c6.appspot.com",
    
      messagingSenderId: "1007279241142",
    
      appId: "1:1007279241142:web:75cddad4e28c7384b6b317",
    
      measurementId: "G-5RJ0C91BF8"
    
    };
    firebase.intializeAPP(firebaseCofig);
    
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
  Room_name= document.getElementById("room_name").value;
  firebase.database().ref("/").child(Room_name).update({
   purpose : "adding room name"   
  });
  localStorage.setItem("room_name", Room_names)
  window.location= "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+ Room_names);
row = "<div class = 'room_name' id="+Room_names+" onclick='redrictToRoomName(this.id)'>#"+ Room_names+"</div><hr>"; 
  document.getElementById("output").innerHTML+= row;
//End code
      });});}
getData();
function redrictToRoomName(name) {
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location ="kwitter_page.html";    
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}