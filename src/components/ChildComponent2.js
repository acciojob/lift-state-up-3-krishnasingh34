import React from 'react'

const ChildComponent2 = ({setSelectedOption}) => {
  return (
    <div className='ChildComponent2'>
        <h1>Child Component 2</h1>
        <button
        onClick={()=> {
            setSelectedOption('Option 2')
        }}
        >Option 2</button>
    </div>
  )
}

export default ChildComponent2