function palChecker(event) {
  event.preventDefault();

  const inputVal = document.getElementById("inputVal").value;
  const input = inputVal.toLowerCase();
  console.log(input);
 
  const split = input.split("");
  let reverse = split.reverse();
  let revWord = reverse.join("");
  const result = document.getElementById("result");

  //Condition to check the palindrome
  if (revWord == input) {
    result.innerHTML = "It is a Palindrome!!!";
  } else {
    result.innerHTML = "It is  not a Palindrome";
  }
// Another method 
 let reverseVal = "";
 for (let i= input.length-1; i>=0; i--) {
     reverseVal += input[i];
 }
 console.log(reverseVal);

}
