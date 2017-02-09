//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

print("Hello world");

// let makea a constant and var makes a variable.
let myConstant = 50
var myVariable = 100
print(myConstant, myVariable)
myVariable = 150;
print(myVariable)
// myConstant = 51 -- this will not work as this is a contant value.
print(myConstant)

// Value of a variable or an interger can be defined by using a colon 
// after the variable itself. 

let myFloat: Float = 4
print(myFloat)
let myDecimal: Decimal = 10
print(myDecimal)

let label = "Label"
let width = 100
print(label+String(width))

// A simple way to do interpolation is to use \() with a back slash
var apples = 10
print("I have \(apples) apples with me.")

// Arrays and dictionaries are easy to make. use [] to make that.
var myArray = ["Item1", "item2", "Item3"]
var myDict = ["item1": "1", "item2": "2"]
// TODO find out about how to print dictionaries in swift
print(myArray[2])


// Initializing empty array or dictionary
let emptyArray = [String]()
let emptyDict = [String: Float]()
// if type info is known use empty [] and [:] for array and dict respectively.


