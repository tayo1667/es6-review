// 1. Class
export class Calculator {
    add(a, b) {
      return a + b;
    }
    subtract(a, b) {
      return a - b;
    }
  }
  
  // 2. Async & 3. Promises
  export const fetchData = async () => {
    const data = await new Promise((resolve) =>
      setTimeout(() => resolve("Data fetched"), 1000)
    );
    return data;
  };
  
  // 4. Map
  export const doubleNumbers = (nums) => {
    return nums.map((num) => num * 2);
  };
  