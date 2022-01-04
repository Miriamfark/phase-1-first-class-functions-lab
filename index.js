const returnFirstTwoDrivers = array => array.slice(0,2)
const returnLastTwoDrivers = array => array.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return (fare) => fare*integer
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => createFareMultiplier(3)(fare)

const selectDifferentDrivers = (arrayOfDrivers, driverFunction) => driverFunction(arrayOfDrivers)