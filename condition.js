/*function company(type) {
  if (type == "tier1") {
    console.log("I will get package of 10 LRA");
  } else if (type == "tier2") {
    console.log("I will get package of 11 LRA");
  } else if (type == "tier3") {
    console.log("I will get package of 15 LRA");
  } else{
    console.log("no job")
}
}
company("tier2"); */

let type = "tier2";
switch (type) {
  case "Tier1":
    console.log("I have a package of 10LAP");
    break;
  case "Tier2":
    console.log("I have a package of 15LAP");
    breeak;
  case "Tier3":
    console.log("I have a package of 15LAP");
    break;
  default:
    console.log("no job");
}
