import React from 'react'

const Orders = () => {
const orderList =[];
  return (
    <div className='py-10 px-24 flex flex-col'>
        <div><h4 className="text-2xl pb-4">Orders<span className='text-base pl-2'>[{orderList.length}]</span></h4></div>
        <div className="border border-gray-200 mb-24"></div>
    </div>
  )
}

export default Orders