console.log(6 * 7);

const $button = $("#search-btn");
const $charSearch = $("#character-search");
const $stats = $("#stats");
const $name = $("#name");
const $role = $("#role");
const $age = $("#age");
const $force = $("#force-points");
const $add = $("#add-btn");

$button.on("click", function () {
  var searchedCharacter = $($charSearch).val().trim();

  // Using a RegEx Pattern to remove spaces from searchedCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

  $.get("/api/characters/" + searchedCharacter, function (data) {
    console.log(data);
    if (data) {
      $("#stats").show();
      $("#name").text(data.name);
      $("#role").text(data.role);
      $("#age").text(data.age);
      $("#force-points").text(data.forcePoints);
    } else {
      $("#name").text(
        "The force is not strong with this one. Your character was not found.",
      );
      $("#stats").hide();
    }
  });
});

$add.on("click", function (event) {
  event.preventDefault();
  var newCharacter = {
    name: $("#name").val().trim(),
    role: $("#role").val().trim(),
    age: $("#age").val().trim(),
    forcePoints: $("#force-points").val().trim(),
  };

  // Question: What does this code do??
  $.post("/api/characters", newCharacter).then(function (data) {
    console.log("add.html", data);
    alert("Adding character...");
  });
});
