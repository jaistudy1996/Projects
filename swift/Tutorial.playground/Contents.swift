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

// ####### CONTROL FLOW #######

let individualScores = [75, 43, 103, 87, 12]
var teamScore = 0
for score in individualScores{
    if score > 50{
        teamScore+=3
    }
    else{
        teamScore+=1
    }
}
print(teamScore)


// Optional values: they help with values that are not available.
// They either have a nil or have a value.
var optionalName: String? = "Jay"
print(optionalName == nil)

var optionalName2: String? = "Jay Arora"
var greeting = "hello"

// WIll only work if optioalName2 is not nill
if let name = optionalName2{
    greeting = greeting + name
}
else{
    greeting = "Hello world"
}

//Another way to use optional value is to use ?? operator

let nickName: String? = "jay"
let fullName: String = "Jayant Arora"
let informalGreet = "Hello \(nickName ?? fullName)"

// Switch statements
// no need to break after case statements
let vegetable = "red pepper"
switch vegetable{
    case "celery":
        print("YOu are celery ")
    case "red pepper":
        print("Great you ate red pepper")
    default:
        print("I have no idea what you ate.")
}

// For-in loop for dictionaries
let interestingNumbers = ["Prime": [2, 3, 5, 7, 11, 13], "Fibonacci": [1, 1, 2, 3, 5, 8], "Square": [1, 4, 9, 16, 25]]

var largest = 0
for (keys, values) in interestingNumbers{
    for number in values{
        if number > largest{
            largest = number
        }
    }
}
print(largest)

// While loop
var n = 1
while n<5{
    n+=1
}
print(n)

// Will work first and then check for condition
var m = 7
repeat{
    m += 1
}while m<7

print(m)
