
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
  };
  
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2); // Use negative slicing to get last two elements
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  
  const fareDoubler = createFareMultiplier(2);
  
  
  const fareTripler = createFareMultiplier(3);
  
  
  function selectDifferentDrivers(drivers, selectionFunction) {
    return selectionFunction(drivers);
  }
  
  // Call example
  const firstTwo = selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers);
  console.log(firstTwo); // Output: ["Antonia", "Nuru"]
  
  const lastTwo = selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers);
  console.log(lastTwo); // Output: ["Amari", "Mo"]
  
  const doubledFare = fareDoubler(100);
  console.log(doubledFare); // Output: 200
  