import React from 'react'

const FiltersList = ({carsType, numberOfDoors, setFilteredCarsType, setFilteredNumberOfDoors, filterCars, clearFilters}) => {
    return (
        <div className='filters__list' style={{padding: '30px 0', width: '100%', display: 'flex', justifyContent: 'center'}}>
            <select className='filter__list-item' style={{marginRight: '5px'}} onChange={(e) => setFilteredCarsType(e.target.value)}>
                {carsType.map(type => (
                    <option>{type}</option>
                ))}
            </select>
            <select className='filter__list-item' style={{marginRight: '50px'}} onChange={(e) => setFilteredNumberOfDoors(e.target.value)}>
                {numberOfDoors.map(doors => (
                    <option>{doors}</option>
                ))}
            </select>
            <button type='button' style={{marginRight: '5px'}} onClick={filterCars}>Search</button>
            <button type='button' onClick={clearFilters}>Clear filters</button>
        </div>
    )
}

export default FiltersList