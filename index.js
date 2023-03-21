// Code your solution in this file!


let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    
    return drivers.slice(0,2)
}


const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2,4)
}


let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]




function createFareMultiplier (integer) {

    return function calculateFarePrice(integer) {
        return integer * integer
    }
}


const fareDoubler = integer =>  integer * 2




const fareTripler = integer => integer * 3




function selectDifferentDrivers (drivers, selection) {

    return selection(drivers)

}



// const fareDoubler = function calculateFarePrice(fare) {
//     return createFareMultiplier(2)(fare)
// }








