//YOUR FIREBASE LINKS
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
    
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name: user_name,
          message:msg,
          like : 0,
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
          name = message_data['name'];
           message=message_data['message'];
         like = message_data['like'];
         name_with_tag= "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>"+message + "</h4>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

         row =  name_with_tag + message_with_tag + like_button + span_with_tag; 
         document.getElementById("output").innerHTML += row;
         //End code
         } }); }); }
getData();
function updateLike(message_id)
{
   console.log("clicked on like button -"+ message_id);
   buttom_id= message_id;
   likes= document.getElementById(buttom_id).value;
   updated_likes= Number(likes)+1;
   console.log(updated_likes);

   firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes 
   });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}

