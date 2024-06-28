function findCarByID(inventory, ID) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === ID) {
      return inventory[i];
    }
  }
  return null;
}

function problem1(inventory) {
  let car_ID = 455;
  let car = findCarByID(inventory, car_ID);
  if (car) {
    const result = `Car ${car_ID} is a ${car.car_year} ${car.car_make} ${car.car_model}`;
    // console.log(result);
    return result;
  } else {
    const errResult = `Car with id ${car_ID} not found.`;
    // console.log(errResult);
    return errResult;
  }
}

module.exports = problem1;
