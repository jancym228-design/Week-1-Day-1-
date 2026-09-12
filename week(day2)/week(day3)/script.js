// ==========================================
// Week 1 - Day 3: JavaScript ES6+ Basics
// ==========================================

// 1. ES5 code
var studentName = "Jancy";
var course = "BCA";

// ES6 refactoring using const and template literals
const student = {
    name: studentName,
    course: course
};

const studentInfo = `Name: ${student.name}, Course: ${student.course}`;

document.getElementById("student").textContent = studentInfo;


// ==========================================
// 2. Arrow Function
// ==========================================

const greetStudent = (name) => {
    return `Hello, ${name}! Welcome to JavaScript ES6+.`;
};

console.log(greetStudent(student.name));


// ==========================================
// 3. Array of Products
// ==========================================

const products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Mouse", price: 800, category: "Electronics" },
    { name: "Keyboard", price: 1500, category: "Electronics" },
    { name: "Notebook", price: 200, category: "Stationery" }
];


// ==========================================
// 4. filter()
// Get products with price greater than 1000
// ==========================================

const expensiveProducts = products.filter(
    (product) => product.price > 1000
);

console.log("Filtered Products:", expensiveProducts);


// ==========================================
// 5. map()
// Get only product names
// ==========================================

const productNames = products.map(
    (product) => product.name
);

console.log("Product Names:", productNames);

document.getElementById("products").textContent =
    productNames.join(", ");


// ==========================================
// 6. reduce()
// Calculate total price
// ==========================================

const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

console.log("Total Price:", totalPrice);

document.getElementById("total").textContent =
    `₹${totalPrice}`;


// ==========================================
// 7. Object Destructuring
// ==========================================

const { name, course: studentCourse } = student;

console.log("Destructuring:");
console.log(name);
console.log(studentCourse);


// ==========================================
// 8. Array Destructuring
// ==========================================

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git"
];

const [skill1, skill2, skill3, skill4] = skills;

console.log("Array Destructuring:");
console.log(skill1);
console.log(skill2);
console.log(skill3);
console.log(skill4);


// ==========================================
// 9. Interactive Component
// Event Listener
// ==========================================

const changeButton = document.getElementById("changeBtn");
const message = document.getElementById("message");

changeButton.addEventListener("click", () => {
    message.textContent =
        "Great! You are learning JavaScript ES6+ 🚀";
});


// ==========================================
// 10. forEach()
// Display all products in console
// ==========================================

products.forEach((product) => {
    console.log(
        `${product.name} - ₹${product.price}`
    );
});


// ==========================================
// End of Week 1 - Day 3
// ==========================================

console.log("Week 1 Day 3 completed successfully!");