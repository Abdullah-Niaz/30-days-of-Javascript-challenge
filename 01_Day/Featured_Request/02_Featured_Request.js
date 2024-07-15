// Using let
let name = "Abdullah";
console.log(`Initial value with let: ${name}`);

// Reassigning the variable declared with let
name = "Niaz";
console.log(`Reassigned value with let: ${name}`);

// Using const
const age = 25;
console.log(`Initial value with const: ${age}`);

// Attempting to reassign the variable declared with const
try {
    age = 30;
} catch (error) {
    console.error(`Error when reassigning const: ${error.message}`);
}
