import React from 'react'
// import {api} from './api'

// Context
const AppContext = React.createContext();
export const Consumer = AppContext.Consumer;


export class Provider extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            authed: false
        }
    }

    render() {
        return (
            <AppContext.Provider value={{store: this.state}}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
