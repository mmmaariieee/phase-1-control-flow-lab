function scuberGreetingForFeet(someNumber){
  // Write your code here!

  const reply1 = "This one is on me!";
  const reply2 = "That will be twenty bucks.";
  const reply3 = "I will gladly take your thirty bucks.";
  const reply4 = "No can do.";

  if (someNumber <= 400){
    return reply1;
  }
  else if (someNumber > 400 && someNumber <= 2000){
    return reply2;
  }
  else if (someNumber > 2000 && someNumber <= 2500){
    return reply3;
  }
  else if(someNumber > 2500){
   return reply4;
  }
}

function ternaryCheckCity(city){
  // Write your code here!

  if (city === "NYC") {
    return "Ok, sounds good.";
  }
  else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!

  switch (tip) {
    case 'generous':
      return'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return"Bye.";
      break;
  }

}