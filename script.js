//1.	Declare a function fullName and it print out your full name

function fullName(name) {
  console.log("benim adım " + name)
}
fullName("selim isabetli")

//2.	Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullNamee(firstName, lastName) {
  console.log("My full name is " + firstName + lastName + ".")
}
fullName("Selim Isabetli")

//3.	Declare a function addNumbers and it takes two two parameters and it returns sum.

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2)
}
addTwoNumbers(5, 4)

//4.	An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
  console.log(length * width)
}
areaOfRectangle(5, 8)

//5.	A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
console.log(perimeterOfRectangle(8, 9));

//6.	A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}
console.log(volumeOfRectPrism(5, 6, 7))


//7.	Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function circumOfCircle(pi, r) {
  return 2 * pi * r
} //pi is3.14
console.log(circumOfCircle(3.14, 8))

//8.	Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle


function areaOfCircle(pi, r) {
  return pi * r * r
} //pi is3.14
console.log(areaOfCircle(3.14, 8))

//9.	Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density(mass, volume) {
  return mass / volume
}
console.log(density(18, 36))

//10.	Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function calculateSpeed(distance, time) {
  return distance / time + " m/sn"
}
console.log(calculateSpeed(100, 2))

//11.	Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function calculateWeight(mass, gravity) {
  return mass * gravity
}
console.log(calculateWeight(85, 9.8))

//12.	Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

function convertCelciusToFahrenheit(oC) {
  return (oC * 9 / 5) + 32;
}
console.log(convertCelciusToFahrenheit(100))

//13.	Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
  if (month === "ocak" || month === "subat" || month === "aralık") {
    return "mevsim kıs haydi kartopu oynamaya";
  } else if (month === "eylul" || month === "ekim" || month === "kasım") {
    return "meysim sonbahar sarardı yine yapraklar";
  } else if (month === "haziran" || month === "temmuz" || month === "agustoz") {
    return "mevsim yaz bu sıcakda dısarda durulmaz";
  } else if (month === "mart" || month === "nisan" || month === "mayıs") {
    return "mevsim ilkbahar yeşillendi yine agaçlar";
  } else {
    return "bence bir hata yaptın tekrar bak";
  }
  }
  console.log(checkSeason("mayıs"));

  //14.	Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

  function findMax (num1,num2,num3) {
    return Math.max(num1,num2,num3);
  }
  console.log(findMax(5,8,15))

 
