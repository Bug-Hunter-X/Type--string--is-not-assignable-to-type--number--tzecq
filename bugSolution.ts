function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result1 = add(1, 2); // Correct usage

let value1 = 1;
let value2 = "2";

if (isNumber(value1) && isNumber(value2)) {
  let result2 = add(value1, value2);
}

let result3 = add(1, parseInt(value2 as string)); //Using type assertion and parseInt