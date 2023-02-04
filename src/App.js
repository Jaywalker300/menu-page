import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allCategories = ['all',...new Set (items.map((item)=>item.category))]
// setting the state values/properties
function App() {
  const [menuItems,setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  // filtering the items

const filterItems = (category) =>{

  if (category === 'all'){
    setMenuItems(items) 
    return
  }
  const newItems = items.filter((items)=> items.category === category)
  setMenuItems(newItems)
}

  // displaying UI
  return (<main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </div>
      </section>
      </main>
)
}

export default App;
