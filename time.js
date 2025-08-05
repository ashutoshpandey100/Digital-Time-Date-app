// Get current time and display in console
const now = new Date();
console.log(now);
console.log(now.getMinutes()); // 60 min = 1hr
console.log(now.getSeconds()); // 60 sec = 1 min
console.log(now.getHours());   // 24 hr

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

console.log(`The current time is ${h}:${m}:${s}`);

// Function to update the clock and date on the web page
function updateClock() {
    const time = new Date();

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    // Add leading zeros
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    const timeNow = `${h}:${m}:${s}`;

    // Get date
    const day = time.getDate();
    const month = time.getMonth() + 1; // Months are 0-based
    const year = time.getFullYear();

    const fullDate = `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`;

    const dateTime = `Date: ${fullDate} | Time: ${timeNow}`;

    // Update HTML content
    document.getElementById('time').textContent = dateTime;
}

// Call function immediately and then every second
updateClock(); // immediate load
setInterval(updateClock, 1000);

// Ternary operator example
const age = 15;
let statement = age < 18 ? "Hii small kid" : "Hello bhai";
console.log(age);
console.log(statement);

// setTimeout with var (closure issue)
for (var i = 1; i < 5; i++) {
    setTimeout(() => {
        console.log("number", i); // will print 5, 5, 5, 5 with var
    }, 1000);
}
