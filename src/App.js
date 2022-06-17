import React from 'react'
import './App.css';
import FiltersList from './components/FiltersList';
import CarsList from './components/CarsList';

import { cars } from './data'

function App() {

  const [arrayOfCars] = React.useState(cars)
  const [filteredCars, setFilteredCars] = React.useState(arrayOfCars)

  const carsType = [...new Set(cars.map(car => car.type))]
  const numberOfDoors = [...new Set(cars.map(car => car.doors))]

  const [filteredCarsType, setFilteredCarsType] = React.useState(carsType[0])
  const [filteredNumberOfDoors, setFilteredNumberOfDoors] = React.useState(numberOfDoors[0])

  const filterCars = () => {
    setFilteredCars(cars)
    setFilteredCars(arrayOfCars.filter(cars => cars.type === filteredCarsType).filter(cars => cars.doors === +filteredNumberOfDoors))
  }

  const clearFilters = () => {
    setFilteredCars(cars)
  }
  
  return (
    <div className="App">
      <FiltersList 
        carsType={carsType} 
        numberOfDoors={numberOfDoors} 
        setFilteredCarsType={setFilteredCarsType} 
        setFilteredNumberOfDoors={setFilteredNumberOfDoors}
        filterCars={filterCars}
        clearFilters={clearFilters}
      />      

      <CarsList filteredCars={filteredCars}/>
    </div>
  );
}

export default App;
