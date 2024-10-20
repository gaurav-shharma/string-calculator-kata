function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterLineEnd); // Extract custom delimiter
    numbers = numbers.substring(delimiterLineEnd + 1); // Remove delimiter line
  }

  // Replace new lines and custom delimiter with commas
  const numArray = numbers.replace(/\n/g, delimiter).split(delimiter);

  // Check for negative numbers
  const negatives = numArray.filter((num) => parseInt(num) < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  // Convert the array of strings to integers and sum them
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
