import React, { useState, useEffect, useRef } from 'react'

// Styles Imports
import './filter.scss'
import { theme, chipThemeHidden, chipTheme } from './FilterTheme'

// React Chips
import Chips from 'react-chips'

// Suggestions Declaration
const levelSuggestions = ['Critical',
  'Informational',
  'Notice',
  'Warning',
  'Alert',
  'Error',
  'Emergency']
const sourceSuggestions = ['Orion', 'Splunk']
const typeSuggestions = ['Alerts', 'Traps', 'Syslogs', 'Windows Events', 'VMware Events']

const Filter = props => {
  const { empty, location, params, chips, updateChips } = props
  const divElement = useRef(null)
  const [height, setHeight] = useState(null)
  const [width, setWidth] = useState(null)
  const [initialHeight, setInitialHeight] = useState(null)
  const [initialWidth, setInitialWidth] = useState(null)
  const [locationState, setLocationState] = useState(props.location)
  const [suggestionsState, setSuggestionsState] = useState([
    {
      title: 'Levels',
      suggestions: [...levelSuggestions]
    },
    {
      title: 'Sources',
      suggestions: [...sourceSuggestions]
    },
    {
      title: 'Types',
      suggestions: [...typeSuggestions]
    }, {
      title: 'Nodes',
      suggestions: []
    }
  ])

  useEffect(() => {
    // Set Element Height/Width
    let initialWidth = divElement.clientWidth
    const initialHeight = divElement.clientHeight
    setInitialWidth(initialWidth)
    setInitialHeight(initialHeight)
    // Add Resize Listener
    window.addEventListener("resize", updateDimensions)
    // Update Chips
    if (location === '/list') {
      props.updateChips(params.chips)
    } else {
      props.updateChips(chips)
    }
  }, [])


  // Component Will Unmount
  useEffect(() => {
    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  })

  // Update Width On Window Resize
  const updateDimensions = () => {
    let width = divElement.clientWidth
    if (width !== initialWidth && props.titleMargin) {
      props.setTitleMargin(width)
    }
  }

  const filterSuggestions = (autocomplete, input) => {
    const nodeSuggestions = props.data.filter.entities

    let suggestions = suggestionsState
    input = input.toLowerCase()
    switch (autocomplete.title) {
      case 'Nodes':
        let nodeFiltered = nodeSuggestions.filter((suggestion) => suggestion.toLowerCase().indexOf(input) !== -1)
        let nodeIndex = suggestions.map(x => x.title).indexOf('Nodes')
        suggestions[nodeIndex].suggestions = nodeFiltered
        break
      case 'Levels':
        let levelFiltered = levelSuggestions.filter((suggestion) => suggestion.toLowerCase().indexOf(input) !== -1)
        let levelIndex = suggestions.map(x => x.title).indexOf('Levels')
        suggestions[levelIndex].suggestions = levelFiltered
        break
      case 'Sources':
        let sourceFiltered = sourceSuggestions.filter((suggestion) => suggestion.toLowerCase().indexOf(input) !== -1)
        let sourceIndex = suggestions.map(x => x.title).indexOf('Sources')
        suggestions[sourceIndex].suggestions = sourceFiltered
        break
      case 'Types':
        let typeFiltered = typeSuggestions.filter((suggestion) => suggestion.toLowerCase().indexOf(input) !== -1)
        let typeIndex = suggestions.map(x => x.title).indexOf('Types')
        suggestions[typeIndex].suggestions = typeFiltered
        break
      default:
        break;
    }
    setSuggestionsState(suggestions)
    return true
  }

  const getSectionSuggestions = (section) => {
    return section.suggestions
  }

  const renderSectionTitle = (section) => {
    return (
      section.suggestions.length ? <div style={{ backgroundColor: '#111111', height: 35, alignItems: 'center', display: 'flex' }}>
        <span style={{ color: 'white', marginLeft: 15 }}>{section.title}</span>
      </div> : <div></div>
    )
  }

  return (
    <div className={`filter ${empty ? 'disabled' : ''}`} ref={divElement}>
      <div className="chips-input">
        <Chips
          value={chips}
          onChange={updateChips}
          suggestions={suggestionsState}
          suggestionsFilter={filterSuggestions}
          theme={theme}
          chipTheme={chipThemeHidden}
          placeholder="Add filters..."
          multiSection
          getSectionSuggestions={getSectionSuggestions}
          renderSectionTitle={renderSectionTitle}
        />
      </div>
      <div className="chips-chips">
        <Chips
          value={chips}
          onChange={updateChips}
          theme={theme}
          chipTheme={chipTheme}
          renderSectionTitle={renderSectionTitle}
        />
      </div>
      <div className="gradient-bar" />
    </div>
  )
}

export default Filter