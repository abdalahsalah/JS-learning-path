// A simple app to suggest daily activities

// Ask the user for the current day
let day = prompt("What day is it today? (e.g., Monday, Tuesday)").toLowerCase();

// Set initial activity based on the day
let activity;

switch (day) {
  case "monday":
    activity = "Go for a jog 🏃‍♂️";
    break;
  case "tuesday":
    activity = "Attend a yoga class 🧘‍♀️";
    break;
  case "wednesday":
    activity = "Read a book 📚";
    break;
  case "thursday":
    activity = "Watch a movie 🎥";
    break;
  case "friday":
    activity = "Hang out with friends 👫";
    break;
  case "saturday":
    activity = "Go hiking ⛰️";
    break;
  case "sunday":
    activity = "Relax at home 🛋️";
    break;
  default:
    activity = "Invalid day! Please enter a valid day of the week.";
}

// If the day is invalid, exit the program
if (activity.includes("Invalid")) {
  console.log(activity);
} else {
  // Ask the user about their mood using prompt
  let mood = prompt("Are you feeling energetic today? (yes/no)").toLowerCase();
  let finalActivity;

  // Modify the activity based on the user's mood
  if (mood === "yes") {
    finalActivity = activity + " and try something new!";
  } else if (mood === "no") {
    finalActivity = activity + " but take it easy.";
  } else {
    finalActivity = "Invalid mood input. Stick to your normal routine.";
  }

  // Use a ternary operator to display the final activity
  console.log(
    mood === "yes" || mood === "no"
      ? `Suggested activity: ${finalActivity}`
      : "Could not determine the activity."
  );
}
