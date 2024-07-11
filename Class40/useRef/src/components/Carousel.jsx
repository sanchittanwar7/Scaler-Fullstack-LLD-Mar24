import { useEffect, useState } from 'react'

const items = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 1',
      description: 'Description of item 1',
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 2',
      description: 'Description of item 2',
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 3',
      description: 'Description of item 3',
    }
  ];

const Carousel = () => {
    const [currentItem, setCurrentItem] = useState(0)
    const nextItem = () => {
        if(currentItem === items.length - 1) {
            setCurrentItem(0)
        } else {
            setCurrentItem(currentItem => currentItem + 1)
        }
    }
    const prevItem = () => {
        if(currentItem === 0) {
            setCurrentItem(items.length - 1)
        } else {
            setCurrentItem(currentItem => currentItem - 1)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            nextItem()
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [currentItem])
  return (
    <div className='carousel'>
        <button onClick={prevItem}>Prev</button>
        <div className="carousel-item">
            <img src={items[currentItem].imageUrl} alt={items[currentItem].title} />
            <h2>{items[currentItem].title}</h2>
            <p>{items[currentItem].description}</p>
        </div>
        <button onClick={nextItem}>Next</button>
    </div>
  )
}

export default Carousel