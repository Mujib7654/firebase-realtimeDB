const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DB_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MSG_SENDER_ID",
    appId: "APP_ID",
    measurementId: "MEASUREMEN_ID"
    };
  
  
    firebase.initializeApp(firebaseConfig);
  
    // reference your database
    var Battle_of_BookwormsDB = firebase.database().ref("Battle_of_Bookworms");
    
    document.getElementById("Battle_of_Bookworms").addEventListener("submit", submitForm);
    
    function submitForm(e) {
      e.preventDefault();
    
      var Teamname = getElementVal("Teamname");
      var mem1name = getElementVal("mem1name");
      var mem1collegename= getElementVal("mem1collegename");
      var mem1mail= getElementVal("mem1mail");
      var mem1num = getElementVal("mem1num");
      var mem1age= getElementVal("mem1age");
      var mem2name = getElementVal("mem2name");
      var mem2collegename= getElementVal("mem2collegename");
      var mem2mail= getElementVal("mem2mail");
      var mem2num = getElementVal("mem2num");
      var mem2age= getElementVal("mem2age");
      
  
      
  
    
      saveMessages(Teamname,mem1name,mem1collegename,mem1mail,mem1num,mem1age,mem2name,mem2collegename,mem2mail,mem2num,mem2age);
    
      //   enable alert
      document.querySelector(".alert").style.display = "block";
    
      //   remove the alert
      setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 3000);
    
      //   reset the form
      document.getElementById("Battle_of_Bookworms").reset();
    }
    
    const saveMessages = (Teamname,mem1name,mem1collegename,mem1mail,mem1num,mem1age,mem2name,mem2collegename,mem2mail,mem2num,mem2age) => {
      var newBattle_of_Bookworms = Battle_of_BookwormsDB.push();
    
      newBattle_of_Bookworms.set({
          Teamname: Teamname,
          mem1name : mem1name,
          mem1collegename:mem1collegename,
          mem1mail:mem1mail,
          mem1num:  mem1num,
          mem1age :mem1age,
          mem2name : mem2name,
          mem2collegename:mem2collegename,
          mem2mail:mem2mail,
          mem2num:  mem2num,
          mem2age :mem2age,
  
          
      });
    };
    
    const getElementVal = (id) => {
      return document.getElementById(id).value;
    };