var phrases = [
    "That sounds good!",
    "Yes sir!",
    "No!",
    "Definitely no!",
    "Are you crazy????",
    "Maybe not today!",
    "The Psychic says no!",
    "I'm not sure that's a great idea!",
    "Yes!!!",
    "You should definitely do that!",
    "I wouldn't if I were you!!!!"
     ];

  
  
  //function f1() {
    //alert(randomIndex);
  //}
  //window.eventClick =  function() {
    //document.getElementById("ask-button").onclick =  function fun() {
      //f1();
   // }
  //}
  
  
  window.onload =  function() {
    document.getElementById("ask-button").onclick =  function fun() {
        let randomIndex = phrases[Math.floor(Math.random() * phrases.length)];
  console.log(randomIndex)
      alert(randomIndex);
    }
  }