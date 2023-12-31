import React, {useState} from 'react';
import {data} from '../data/data.js'

function Food(props) {
    const [foods,setFoods]=useState(data)

    const filterType =(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category===category;
            })
        )
    }

    const sortCard = (price) => {
        const sortedData = [...data].sort((a, b) => {
            return Number(a[price]) - Number(b[price]);
        });
        setFoods(sortedData);
    };
    const sortCardD = (price) => {
        const sortedData = [...data].sort((a, b) => {
            return Number(b[price]) - Number(a[price]);
        });
        setFoods(sortedData);
    };
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-red-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            {/*Filter Row*/}
            <div className='flex flex-col lg:flex-row  justify-between '>
                {/*Filter Type*/}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap border-red-500  '>
                        <button onClick={()=>setFoods(data)} className='m-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'>All</button>
                        <button onClick={()=>filterType('fruits')} className='m-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'>Fruits</button>
                        <button onClick={()=>filterType('berries')} className='m-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'>Berries</button>
                        <button onClick={()=>filterType('exotic')} className='m-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'>Exotic</button>
                        <button onClick={()=>filterType('citrus')} className='m-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'>Citrus</button>
                    </div>
                </div>

                {/*Filter Price*/}
                <div>
                    <p className='font-bold text-gray-700'>Sort by  Price</p>

                    <div className='flex justify-betweeen max-w-[390px] w-full'>
                        <button onClick={()=>sortCard('price')} className='m-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'>Ascending</button>
                        <button onClick={()=>sortCardD('price')} className='m-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'>Descending</button>
                    </div>
                </div>
            </div>
            {/*Display Foods*/}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.map((item,index)=>(
                    <div key={index} className='border rounded-lg shadow-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name}
                            className='w-full h-[200px] object-cover rounded-t-lg'
                        />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-red-500 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div> 
                ))}
            </div>

        </div>
    );
}

export default Food;