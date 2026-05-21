// script.js

let streak = 0

function studyVerse(){

  streak++

  document.getElementById("streak").innerText =
    "🔥 Streak: " + streak

  document.getElementById("message").innerText =
    "Good job. Come back tomorrow."
}
