
class Car {

  constructor(model, year) {
    this.model = model;
    this._year = year;
  }

  get year() {
    return this._year;
  }

  set year(newYear) {
    this._year = newYear;
  }

  getModel() {
    return this.model;
  }

  setModel(newModel) {
    this.model = newModel;
  }
}

let myCar = new Car("Mazda", 2014);
console.log(myCar.year);
console.log(mycar.getModel());
