"use strict";

// this behaves differently in differnt scenario's

// in global space, this refers to global object. Window in browser, Global in NodeJs

// Inside functions this is actually undefined. But in non strict mode, whenever this value is null or undefined, it substituted with global object. In strict mode it stays as undefined
// This of function depends on how it is called. If called it normally above thing is right. If we call it window.fnc() this points to global object

// THIS in  methods is nothing but where this is present (this refers to object itself. Just remember how this method is called obj.fnc())

// Arrow functions do not have their own this, THIS of array functions refer to same value of enclosing lexical context

console.log(this);

function Func() {
  console.log(this);
}

Func();
window.Func();

const obj = {
  method: function () {
    console.log(this);
    const innerFun = () => {
      console.log(this);
    };
    innerFun();
  },
};

obj.method();

const arrowFunc = () => {
  console.log(this);
};

arrowFunc(); // refers to this value of its enclosing lexical context

const obj2 = {
  method: () => {
    console.log(this);
  },
};

obj2.method();
