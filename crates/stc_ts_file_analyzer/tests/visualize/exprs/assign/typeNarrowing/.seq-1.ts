let x: string | boolean | number;
let obj: any;

x = true;
(x = "", obj).foo = (x = x.length);
x; // number

export { }