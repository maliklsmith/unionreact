
var form = document.getElementById("ai-form");

var input = document.getElementById("ai-input");

var response = document.getElementById("ai-response");


form.addEventListener("submit", function(event) {

event.preventDefault();

var prompt = input.value.trim();

if (!prompt) {
return;
}

var result =
BenefitsAgent.respond(prompt);

response.textContent =
result.message;

input.value = "";

});


var suggestions =
document.querySelectorAll(
".ai-suggestions button"
);


for (var i = 0; i < suggestions.length; i++) {

suggestions[i].addEventListener(
"click",
function() {

var prompt =
this.getAttribute("data-prompt");

input.value = prompt;

form.dispatchEvent(
new Event("submit")
);

}
);

}

