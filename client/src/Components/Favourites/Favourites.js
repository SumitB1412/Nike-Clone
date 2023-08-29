import React from 'react'
import Card from './Card'

const Favourites = () => {
  const list =[
    {
      title: "Nike Invicible 3",
      gender: "Female",
      description: "Best Ever Running Shoes",
      category: "Shoes",
      price: "3695.00",
      size: ["Small", "Medium", "Large"],
      color: "Black",
      rating: "4.4",
      img: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00afad82-be65-49db-a1c9-1f2b3c3c079f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee344bd7-5a64-423c-9c85-3a6dce10a68f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132be235-f9f5-4e45-91fe-d93d5590ffe4/invincible-3-road-running-shoes-Wwmmlp.png",
      ],
    },
    {
      title: "Nike Invicible 3",
      gender: "Female",
      description: "Best Ever Running Shoes",
      category: "Shoes",
      price: "3695.00",
      size: ["Small", "Medium", "Large"],
      color: "Black",
      rating: "4.4",
      img: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00afad82-be65-49db-a1c9-1f2b3c3c079f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee344bd7-5a64-423c-9c85-3a6dce10a68f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132be235-f9f5-4e45-91fe-d93d5590ffe4/invincible-3-road-running-shoes-Wwmmlp.png",
      ],
    },
    {
      title: "Nike Invicible 3",
      gender: "Female",
      description: "Best Ever Running Shoes",
      category: "Shoes",
      price: "3695.00",
      size: ["Small", "Medium", "Large"],
      color: "Black",
      rating: "4.4",
      img: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00afad82-be65-49db-a1c9-1f2b3c3c079f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee344bd7-5a64-423c-9c85-3a6dce10a68f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132be235-f9f5-4e45-91fe-d93d5590ffe4/invincible-3-road-running-shoes-Wwmmlp.png",
      ],
    },
    {
      title: "Nike Invicible 3",
      gender: "Female",
      description: "Best Ever Running Shoes",
      category: "Shoes",
      price: "3695.00",
      size: ["Small", "Medium", "Large"],
      color: "Black",
      rating: "4.4",
      img: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00afad82-be65-49db-a1c9-1f2b3c3c079f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee344bd7-5a64-423c-9c85-3a6dce10a68f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132be235-f9f5-4e45-91fe-d93d5590ffe4/invincible-3-road-running-shoes-Wwmmlp.png",
      ],
    },
    {
      title: "Nike Invicible 3",
      gender: "Female",
      description: "Best Ever Running Shoes",
      category: "Shoes",
      price: "3695.00",
      size: ["Small", "Medium", "Large"],
      color: "Black",
      rating: "4.4",
      img: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00afad82-be65-49db-a1c9-1f2b3c3c079f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee344bd7-5a64-423c-9c85-3a6dce10a68f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132be235-f9f5-4e45-91fe-d93d5590ffe4/invincible-3-road-running-shoes-Wwmmlp.png",
      ],
    },
    {
      title: "Nike Invicible 3",
      gender: "Female",
      description: "Best Ever Running Shoes",
      category: "Shoes",
      price: "3695.00",
      size: ["Small", "Medium", "Large"],
      color: "Black",
      rating: "4.4",
      img: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00afad82-be65-49db-a1c9-1f2b3c3c079f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee344bd7-5a64-423c-9c85-3a6dce10a68f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132be235-f9f5-4e45-91fe-d93d5590ffe4/invincible-3-road-running-shoes-Wwmmlp.png",
      ],
    },
    {
      title: "Nike Invicible 3",
      gender: "Female",
      description: "Best Ever Running Shoes",
      category: "Shoes",
      price: "3695.00",
      size: ["Small", "Medium", "Large"],
      color: "Black",
      rating: "4.4",
      img: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00afad82-be65-49db-a1c9-1f2b3c3c079f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee344bd7-5a64-423c-9c85-3a6dce10a68f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132be235-f9f5-4e45-91fe-d93d5590ffe4/invincible-3-road-running-shoes-Wwmmlp.png",
      ],
    },
    {
      title: "Nike Invicible 3",
      gender: "Female",
      description: "Best Ever Running Shoes",
      category: "Shoes",
      price: "3695.00",
      size: ["Small", "Medium", "Large"],
      color: "Black",
      rating: "4.4",
      img: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00afad82-be65-49db-a1c9-1f2b3c3c079f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee344bd7-5a64-423c-9c85-3a6dce10a68f/invincible-3-road-running-shoes-Wwmmlp.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132be235-f9f5-4e45-91fe-d93d5590ffe4/invincible-3-road-running-shoes-Wwmmlp.png",
      ],
    },
  ]
  return (
    <div className='px-4 md:px-12 lg:px-24 py-10 flex flex-col'>
        <div><p className='text-2xl pb-8'>Favourites</p></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {list.map(item => (
                  <Card product={item}/>
                ))}        
        </div>
    </div>
  )
}

export default Favourites