import React from 'react'

const CarsList = ({filteredCars}) => {
    return (
        <div className='cars__list' style={{padding: '0 30px 0 30px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            {filteredCars.map(car => (
                <div className='cars__item' style={{marginBottom: '20px', width: '32%', height: '250px'}}>
                    <div className='cars__item-img' style={{width: '100%', height: '200px'}}>
                        <img src={car.image} alt={car.model} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px'}}>
                        <span style={{marginRight: '10px'}}>{car.brand}</span>
                        <span>{car.model}</span>
                    </div>
                </div>
            ))}
            {filteredCars.length === 0 && (
                <div style={{textAlign: 'center', width: '100%', fontSize: '25px'}}>No cars</div>
            )}
        </div>
    )
}

export default CarsList