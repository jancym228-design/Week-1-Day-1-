// ========================================
// WEEK 2 - DAY 3
// JAVASCRIPT FUNDAMENTALS
// ========================================

// 1. Arrow Function
const greet = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet("Jancy"));


// 2. Default Parameter
const welcome = (name = "Student") => {
    return `Welcome, ${name}!`;
};

console.log(welcome());
console.log(welcome("Jancy"));


// 3. Addition Function
const addNumbers = (a, b) => {
    return a + b;
};

console.log("Addition:", addNumbers(10, 20));


// 4. Rest Operator
const sumNumbers = (...numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
};

console.log("Total:", sumNumbers(10, 20, 30, 40));


// 5. Spread Operator
const combineArrays = (array1, array2) => {
    return [...array1, ...array2];
};

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log("Combined:", combineArrays(array1, array2));


// 6. Array map()
const doubleNumbers = (numbers) => {
    return numbers.map(number => number * 2);
};

console.log("Doubled:", doubleNumbers([1, 2, 3, 4, 5]));


// 7. Array filter()
const evenNumbers = (numbers) => {
    return numbers.filter(number => number % 2 === 0);
};

console.log("Even Numbers:", evenNumbers([1, 2, 3, 4, 5, 6]));


// 8. Object Function
const createStudent = (name, course = "BCA") => {
    return {
        name: name,
        course: course
    };
};

console.log("Student:", createStudent("Jancy"));


// 9. Object Spread
const updateStudent = (student, details) => {
    return {
        ...student,
        ...details
    };
};

const student = {
    name: "Jancy",
    course: "BCA"
};

const updatedStudent = updateStudent(student, {
    skill: "Full Stack Development"
});

console.log("Updated Student:", updatedStudent);


// 10. Destructuring
const displayStudent = ({ name, course, skill }) => {
    console.log("Name:", name);
    console.log("Course:", course);
    console.log("Skill:", skill);
};

displayStudent(updatedStudent);


// ========================================
// PROMISE
// ========================================

const checkNumber = (number) => {

    return new Promise((resolve, reject) => {

        if (number > 0) {
            resolve("Number is positive");
        } else {
            reject("Number must be greater than zero");
        }

    });

};

checkNumber(10)
    .then(result => {
        console.log("Promise:", result);
    })
    .catch(error => {
        console.log("Promise Error:", error);
    });


// ========================================
// ASYNC / AWAIT + FETCH API
// ========================================

const fetchUsers = async () => {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        console.log("Users from API:");

        users.forEach(user => {
            console.log(user.name);
        });

    } catch (error) {

        console.log("API Error:", error.message);

    }

};

fetchUsers();


// ========================================
// TRY / CATCH
// ========================================

const divideNumbers = (a, b) => {

    try {

        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }

        return a / b;

    } catch (error) {

        console.log("Error:", error.message);

    }

};

console.log("Division:", divideNumbers(20, 5));

console.log("Division:", divideNumbers(20, 0));