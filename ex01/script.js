function calculateGrade(score) {
    if (typeof score !== "number" || score !== score || score < 0 || score > 100) {
        return "Invalid";
    }
    
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function checkAccess(age, hasTicket) {
    if (typeof age !== "number" || age !== age || age < 0) {
        return false;
    }
    if (typeof hasTicket !== "boolean") {
        return false;
    }
    if ((hasTicket === true && age >= 12) || age >= 65) {
        return true;
    }
    return false;
}

// Tests: calculateGrade
console.log("--- calculateGrade ---");
console.log("100:", calculateGrade(100));      // A
console.log("90:", calculateGrade(90));        // A
console.log("89:", calculateGrade(89));        // B
console.log("80:", calculateGrade(80));        // B
console.log("79:", calculateGrade(79));        // C
console.log("70:", calculateGrade(70));        // C
console.log("69:", calculateGrade(69));        // D
console.log("60:", calculateGrade(60));        // D
console.log("59:", calculateGrade(59));        // F
console.log("0:", calculateGrade(0));          // F
console.log("-1:", calculateGrade(-1));        // Invalid
console.log("101:", calculateGrade(101));      // Invalid
console.log("'abc':", calculateGrade("abc"));  // Invalid
console.log("NaN:", calculateGrade(NaN));      // Invalid
console.log("undefined:", calculateGrade());   // Invalid

// Tests: checkAccess
console.log("--- checkAccess ---");
console.log("20, ticket:", checkAccess(20, true));      // true
console.log("20, no ticket:", checkAccess(20, false));  // false
console.log("12, ticket:", checkAccess(12, true));      // true
console.log("11, ticket:", checkAccess(11, true));      // false
console.log("65, no ticket:", checkAccess(65, false));  // true
console.log("64, no ticket:", checkAccess(64, false));  // false
console.log("-5, ticket:", checkAccess(-5, true));      // false
console.log("'20', ticket:", checkAccess("20", true));  // false
console.log("20, 'yes':", checkAccess(20, "yes"));      // false