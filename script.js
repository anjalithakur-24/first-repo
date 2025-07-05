// Question 1

// const arr = [12,15,18,24,27];
// const sqr = arr.map(num => num*num);
// console.log(sqr);


// Question 2

// function Getgrade(score){
//     return score >= 90 ? 'A':
//     score >= 80 ? 'B':
//     score >= 70 ? 'C':
//     score >= 60 ? 'D':
//     score >= 50 ? 'E': 'F' ;
// }

// console.log(Getgrade(60));
// console.log(Getgrade(92));
// console.log(Getgrade(56));
// console.log(Getgrade(49));
// console.log(Getgrade(77));
// console.log(Getgrade(85));


// Question 3

// const car = {
//     company: "Toyota",
//     model: "Vellfire",
//     year: 2019
//   };
//   function changeCarYear(newYear) {
//     car.year = newYear;
//   }
//   changeCarYear(2023);
//   console.log(car.year);
// const { model, year } = car;
// console.log(Model: ${model});
// console.log(Year: ${year}); 


// Question 4

// const arr = [7,9,11,12,5,8];
// const isPrime = arr.filter(num => {
//     if (num <= 1) return false;
//     if (num === 2) return true;
    
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
    
//     return true
// })
// console.log(isPrime);


// Question 5

// Use cases of --
// Map funtion:
// 1: Transforming Data: Convert an array of objects to an array of specific properties.
// 2: Changing Data Format: Convert data types or structures.
// 3: Perform calculations on each element.

// Filter:
// 1: Filtering Based on Conditions.
// 2: Removing Unwanted Data and Searching Data.
// 3: Validating Data.

// Reduce:
// 1: Reduce is used for aggregating or combining data into a single output.
// 2: Calculating Averages.
// 3: Flattening Arrays.


// Question 6

// async function fetchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
//       if (!response.ok) {
//         throw new Error(HTTP error! status: ${response.status});
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
//   fetchData();


// Question 7 

// const person = {
//     name: "Anjali",
//     address: {
//       street: "Ambedkar Colony",
//       city: "Indore",
//       postalCode: "480453"
//     },
//     contact: {
//       email: "xyz@gmail.com",
//       phone: "9876543210"
//     }
//   };
// const phoneNumber = person.contact?.phone;
// console.log(phoneNumber);