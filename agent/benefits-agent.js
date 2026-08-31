var BenefitsAgent = {

respond: function(prompt) {

var text = prompt.toLowerCase();

if (text.indexOf("health") !== -1 ||
text.indexOf("medical") !== -1) {

return {
type: "health",
message:
"Your current health plan is Blue Choice, Employee + Family. Open enrollment begins October 1."
};
}


if (text.indexOf("pto") !== -1 ||
text.indexOf("time off") !== -1) {

return {
type: "pto",
message:
"You currently have 14.5 days of PTO available."
};
}


if (text.indexOf("retirement") !== -1 ||
text.indexOf("401") !== -1) {

return {
type: "retirement",
message:
"Your current retirement contribution is 8.4%."
};
}


if (text.indexOf("compare") !== -1) {

return {
type: "comparison",
message:
"I can compare your available plans by premium, deductible, out-of-pocket maximum, and coverage."
};
}


return {
type: "general",
message:
"I can help with health coverage, retirement, PTO, enrollment, and benefits questions."
};

}

};