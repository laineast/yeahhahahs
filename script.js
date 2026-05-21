let streak = localStorage.getItem("streak") || 0
let lastStudied = localStorage.getItem("lastStudied")

document.getElementById("streak").innerText =
  "🔥 Streak: " + streak

function studyVerse() {

  const today = new Date().toDateString()

  // already studied today
  if (lastStudied === today) {

    document.getElementById("message").innerText =
      "You already studied today."

    return
  }

  // increase streak
  streak++

  // save data
  localStorage.setItem("streak", streak)
  localStorage.setItem("lastStudied", today)

  lastStudied = today

  // update screen
  document.getElementById("streak").innerText =
    "🔥 Streak: " + streak

  document.getElementById("message").innerText =
    "Daily study completed."
}
