import React, { useState, useEffect } from 'react'

// Styles
import './grid.scss'
import '../../../node_modules/react-grid-layout/css/styles.css'
import '../../../node_modules/react-resizable/css/styles.css'

// React Grid
import GridLayout from 'react-grid-layout'
// import { Responsive, WidthProvider } from 'react-grid-layout'

// Init WidthProvider
// const ResponsiveGridLayout = WidthProvider(Responsive);

const Grid = props => {
    const { editing, grouping, children, setGroupingLayoutToState, layout } = props
    let layoutProps = [...grouping.layoutLGs]

    if (grouping) {
        layoutProps.forEach((layout) => {
            layout.i = layout.card.id
        })
    }

    // Component Did Mount
    useEffect(() => {
        if (layoutProps !== layout) {
            setGroupingLayoutToState(layoutProps)
        }
    }, [])

    useEffect(() => {
        console.log(layout)
    }, [layout])

    if (grouping) {
        return (
            <GridLayout
                className="layout"
                layout={layout}
                // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={24}
                // cols={{ lg: 24, md: 18, sm: 12, xs: 9, xxs: 4 }}
                width={1800}
                // rowHeight={65}
                // margin={[10,10]}
                isDraggable={false}
                isResizable={false}
            // onLayoutChange={this.}
            >
                {children}
            </GridLayout>
        )
    }
}

export default Grid
