// This runs when the "Send complaint" button is clicked
function sendComplaint() {
  var college = document.getElementById("college").value;
  var details = document.getElementById("details").value;

  // Check that the important boxes are not empty
  if (college == "" || details == "") {
    alert("Please write your college name and what happened.");
    return;
  }

  // Later: send the complaint to your server here

  // Hide the form and show the thank you message
  document.getElementById("complaintForm").style.display = "none";
  document.getElementById("thanks").style.display = "block";
}
