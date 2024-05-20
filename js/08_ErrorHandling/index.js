const arr = [1, 20, 40, 150, 500];

// throw error if number is > 100

try {
  arr.forEach((item) => {
    if (item > 100) {
      throw new Error("Number is more than 100");
    }
  });
} catch (error) {
  console.log(error);
}
