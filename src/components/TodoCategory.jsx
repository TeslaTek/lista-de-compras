import React from 'react'
import { categories } from './general';

export const TodoCategory = ({handleCategoryChange, placeholder}) => {

  return (
    <select placeholder={placeholder} onChange={handleCategoryChange} className="form-select  mb-3" aria-label=".form-select-lg example">
        <option defaultValue={0} value={undefined}>{placeholder}</option>
        {
          categories.map((listItem) => <option key={listItem.id} value={listItem.id}>{listItem.category}</option>)
        }
        
    </select>
  )
}
