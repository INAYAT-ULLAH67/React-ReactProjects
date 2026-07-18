
import { useState, useEffect } from 'react'
import './App.css'
import InputItems from './components/InputItems'

function App() {
  const [items, setitems] = useState([])
  const [editingItem, setEditingItem] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('myItems')
    if (saved) {
      setitems(JSON.parse(saved))
    }
  }, [])

  const addNewitem = (itemName) => {
    const NewItem = {
      id: crypto.randomUUID(),
      name: itemName,
    }
    const UpdatedItems = [...items, NewItem]
    setitems(UpdatedItems)
    localStorage.setItem('myItems', JSON.stringify(UpdatedItems))
  }

  const dleteSelectedItem = (itemToDelete) => {
    const updatedItems = items.filter((item) => item.id !== itemToDelete.id)
    setitems(updatedItems)
    localStorage.setItem('myItems', JSON.stringify(updatedItems))
  }

  const updateSelectedItem = (item) => {
    setEditingItem(item)
  }

  
  const saveEditingItem = (newName) => {
    const updatedItems = items.map((item) =>
      item.id === editingItem.id ? { ...item, name: newName } : item
    )
    setitems(updatedItems)
    // Next step: save UpdatedItems to localStorage.
        // localStorage only stores strings, so convert the array first
        // with JSON.stringify(). Save UpdatedItems (not `items`) — state
        // updates aren't instant, so `items` is still stale here.
        // Syntax: localStorage.setItem(key, value)
        // key — a string name we choose, to label this piece of data
        //value---> must be a string. localStorage can only store strings, never raw arrays/objects.
    localStorage.setItem('myItems', JSON.stringify(updatedItems))
    setEditingItem(null)
  }

  return (
    <>
      <InputItems
        addNewItem={addNewitem}
        editingItem={editingItem}
        saveEditingItem={saveEditingItem}
      />
      <div className='max-w-md mx-auto mt-6 flex flex-col gap-2'>
        {items.map((item) => (
          <div
            key={item.id}
            className='justify-between flex flex-row bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 shadow-sm'
          >
            <p>{item.name}</p>
            <div className='flex gap-x-1'>
              <button
                type="button"
                className="text-red-600 bg-red-50 rounded-sm w-8 h-8 hover:text-red-700 font-bold text-lg"
                onClick={() => dleteSelectedItem(item)}
              >
                ✕
              </button>
              <button
                type="button"
                className="text-blue-600 w-8 h-8 bg-blue-50 hover:text-blue-700 text-base"
                onClick={() => updateSelectedItem(item)}
              >
                <i className="fa-solid fa-pen"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App