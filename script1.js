//Question 01
function areJsonEqual(obj1, obj2) {
    // Convert JSON objects to strings
    const str1 = JSON.stringify(obj1);
    const str2 = JSON.stringify(obj2);

    // Sort the strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Example usage
const ob1 = { name: "person1", age: 5 };
const ob2 = { age: 5, name: "person1" };

if (areJsonEqual(ob1, ob2)) {
    console.log("The JSON objects are equal.");
} else {
    console.log("The JSON objects are not equal.");
}
