import React, { useState } from 'react';
import {Collapse} from 'react-collapse';

const AccordianItem = ({orderList}) => {
const [open,setOpen] = useState(false);
const toggle = () => {
    return setOpen(!open);
}
  return (
    <div>
        <div className='flex cursor-pointer' onClick={() => toggle}>
            <div><h4 className='text-base'>Order on  {orderList.orderDate}</h4></div>
        </div>
        <Collapse isOpened={open}>
            <div>{orderList.title}</div>
        </Collapse>
    </div>
  )
}

export default AccordianItem