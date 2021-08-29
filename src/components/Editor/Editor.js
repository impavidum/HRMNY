import React from 'react'

// Styles Imports
import './editor.scss'

// Component Imports
import Card from '../Utility/Card/Card'
import Button from '../Utility/Button/Button'

const Editor = props => {
  const { addCard } = props
  return (
    <div className='editor'>
      <Card>
        <div className='editor-title'><h2>Grouping Editor</h2></div>
        <div className='editor-body'>
          <div className='buttons'>
            <Button buttonType='wideButtons' onClick={addCard}>Add Card</Button>
            <Button buttonType='wideButtons' onClick={() => { console.log('add page') }}>Add Page</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Editor
