import React, { useState } from 'react';
import useCar from '../../useHook/useCarHook';
import DisplayService from './DisplayService';
import Item from './Item';

const Service = () => {

    const [cars] = useCar()
    const [item, setItem] = useState([])

    const hendalClicke = (car)=>{
        const newItem = [...item, car]
        
        setItem(newItem);
    }
    return (
        <div className='container mt-5'>

            <div className='row '>
                <h1 className='text-center'>This is my Hard work</h1>

                <div className='col col-md-8'>
                <div className='row row-cols-1 row-cols-md-2 g-4'>
                    
                {
                        cars.slice(0, 10).map(car => <DisplayService
                        
                            key={cars.id}
                            car={car}
                            hendalClicke ={hendalClicke}
                        
                        
                        
                        ></DisplayService>)
                    }

                </div>

                </div>



                <div className='col col-md-4 bg-danger sticky-top h-25'>

                        <Item item={item}></Item>

                </div>
                
            </div>


        </div>
    );
};

export default Service;