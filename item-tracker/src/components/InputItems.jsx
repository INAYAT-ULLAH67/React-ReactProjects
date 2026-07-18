import React, { useState, useEffect } from 'react'

function InputItems({ addNewItem, editingItem, saveEditingItem }) {
  const [item, setItem] = useState('')

  // whenever editingItem changes, pre-fill the input with its name
  useEffect(() => {
    if (editingItem) {
      setItem(editingItem.name)
    }
  }, [editingItem])

  const HandleInputItem = () => {
    if (item === '') {
      return alert('enter item')
    }

    if (editingItem) {
      saveEditingItem(item)
    } else {
      addNewItem(item)
    }
    setItem('')
  }

  return (
    <div className="flex gap-2 max-w-md mx-auto mt-10">
      <input
        type="text"
        placeholder="Enter Item Name"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="flex-1 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 shadow-sm transition duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            HandleInputItem()
          }
        }}
      />

      <button
        type="button"
        onClick={HandleInputItem}
        className="bg-blue-600 text-white font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
      >
        {editingItem ? 'Save' : 'Add'}
      </button>
    </div>
  )
}

export default InputItems