const num = 25;
const str = "Joshik Loves Javascript";
const bool = true;
const notDefinedYet = undefined;
const absent = null;
const sym1 = Symbol("Joshik");
const sym2 = Symbol("Joshik");

console.log(sym1 === sym2); // false even we create a symbol with same description

// undefined means not defined yet, null means intentional absence
// primitives are immutable (for ex: if we convert string tp lower case, it automatically creates a new string without mutating orignal string)
// refer docs for more

const obj = {
  a: "1",
  b: 10,
};

const copyOfObj = obj;

// any change we make to copyOfObj is copied to obj too as we are copying reference of obj. These are called referential types
