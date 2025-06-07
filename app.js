// 1. Validates an email address submitted on the Contact Us form
function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}
// Use
console.log(isValidEmail("john@example.com")); // true
console.log(isValidEmail("johnexample.com"));  // false

// 2. Lists all membership options with a loop
function listAllMemberships() {
    const memberships = ["Virtual Office", "Part Time Flex", "Full Time Flex", "Dedicated Desk", "Private Office"];
    for (let i = 0; i < memberships.length; i++) {
        console.log(memberships[i]);
    }
}
// Use
listAllMemberships();

// 3. Calculating tax on memberships
function calculateMonthlyCost(price) {
    const taxRate = 0.0825; // 8.25% sales tax
    const total = price + (price * taxRate);
    return total;
}
// Use
console.log(calculateMonthlyCost(299)); // Example: Full Time Flex

// 4. Location availability
function isLocationAvailable(city) {
    const locations = ["Brickell", "Coral Gables", "Doral", "Ft Lauderdale", "Orlando", "Philly", "Tampa"];
    return locations.includes(city);
}
// Use
console.log(isLocationAvailable("Philly")); // true
console.log(isLocationAvailable("Boston")); // false