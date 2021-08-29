const theme = {
  chipsContainer: {
    zIndex: 9999,
    display: "flex",
    minHeight: 'calc(100% - 10px)',
    backgroundColor: 'transparent',
    font: "13.33333px Arial",
    alignContent: "flex-start",
    flexWrap: "wrap",
    padding: "5px 5px",
    borderRadius: 5,
    ':focus': {
      border: "1px solid #aaa",
    }
  },
  container: {
    flex: 1,
  },
  containerOpen: {

  },
  input: {
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    width: '100%',
    padding: 5,
    margin: 2.5,
    backgroundColor: 'transparent',
    color: '#808080',
    fontSize: 16,
  },
  suggestionsContainer: {
    position: 'absolute',
    width: '100%',
    maxHeight: 475,
    overflowY: 'auto',
    left: 0,
    marginTop: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  suggestionsList: {
    width: '100%',
    backgroundColor: '#151516',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    boxShadow: '0 2 5px rgba(0,0,0,0.25)',

  },
  suggestion: {
    padding: '10px 15px',
    color: '#A6A6A6'
  },
  suggestionHighlighted: {
    background: '#2C2C2F'
  },
  sectionContainer: {

  },
  sectionTitle: {

  },
}

const chipTheme = {
  chip: {
    maxWidth: '80%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    position: 'relative',
    padding: "5px 25px 5px 10px",
    background: "#1A1B1D",
    color: '#ffffff',
    margin: "5px",
    borderRadius: 3,
    cursor: 'default',
    fontWeight: 500,
    fontSize: 16,
    boxShadow: '-1px 1px 3px rgba(0,0,0,0.25)'
  },
  chipSelected: {
    background: '#888',
  },
  chipRemove: {
    position: 'absolute',
    right: '10px',
    cursor: "pointer",
    ':hover': {
      color: '#A6A6A6',
    }
  }
}

const chipThemeHidden = {
  ...chipTheme,
  chip: {
    display: 'none'
  }
}

export {
    theme,
    chipTheme,
    chipThemeHidden
}