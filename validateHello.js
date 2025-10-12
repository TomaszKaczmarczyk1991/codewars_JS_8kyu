function validateHello(greetings) {
  const greets = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  const lower = greetings.toLowerCase();
  return greets.some(greet => lower.includes(greet));
}


console.log(validateHello('ahoj')); // true