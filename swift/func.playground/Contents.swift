//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"
print(str)

// Functions
func greet(person: String, day: String)-> String{
    return "Hello, \(person). Today is \(day)"
}

greet(person: "jay", day: "MOnday")

// Custom function.
func greet2(_ person: String, on day: String)->String{
    return "Hello, \(person). Today is \(day)"
}

greet2("John", on: "Tuesday")

func calculateStatistics(scores: [Int])-> (min: Int, max: Int, sum: Int){
    var min = scores[0]
    var max = scores[0]
    var sum = 0
    
    for score in scores{
        if score > max{
            max = score
        }
        else if score < min{
            min = score
        }
        sum += score
    }
    return (min, max, sum)
}

let stats = calculateStatistics(scores: [2, 3, 5, 7, 11, 13, 14, 15])
print(stats)
print(stats.2)
print(stats.sum) // same as above


func nestedFunc() -> Int{
    var y = 10
    func add(){ // this nested function will have access to variable of its parent
        y += 5
    }
    add()
    return y
}

nestedFunc()

// functions are first class functions as well.
// they return a function 

func makeIncrementor() -> ((Int) -> Int){
    func addOne(number: Int) -> Int{
        return number + 1
    }
    return addOne
}

var increment = makeIncrementor()
increment(5)

// A function can take other functions as arguments

func hasAnyMatches(list: [Int], condition: (Int)->Bool) -> Bool{
    for item in list{
        if condition(item){
            return true
        }
    }
    return false
}

func condition(number: Int)-> Bool{
        return number < 10
}

var numbers = [30, 100, 89, 35, 5, 90]
hasAnyMatches(list: numbers, condition: condition)