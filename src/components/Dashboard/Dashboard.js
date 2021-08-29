import React, { useState } from 'react'

// Styles Imports
import './dashboard.scss'
import '../../containers/app.scss'

// Component Imports
import Divider from '../../components/Divider/Divider'
import Navbar from '../../components/Utility/Navbar/Navbar'
import Grouping from '../../components/Grouping/Grouping'
import GroupingSandBox from '../../components/GroupingSandBox/GroupingSandBox'

// Query Imports
import GET_GROUPINGS from './DashboardQuery'

// Init WidthProvider
import '../../../node_modules/react-grid-layout/css/styles.css'
import '../../../node_modules/react-resizable/css/styles.css'

// GraphQL
import { Query } from 'react-apollo'

const Dashboard = props => {
    const { history, location, store } = props

    // state
    const [alertData, setAlertData] = useState([40, 41, 48, 35, 51, 36, 19])
    const [syslogsData, setSyslogsData] = useState([25, 14, 17, 17, 21, 15, 13])
    const [trapsData, setTrapsData] = useState([15, 15, 18, 16, 16, 18, 14])
    const [alertHealth, setAlertHealth] = useState('#D34747')
    const [trapHealth, setTrapHealth] = useState('#FAF342')
    const [syslogHealth, setSyslogHealth] = useState('#FAF342')
    const [health, setHealth] = useState('fair')
    const [events, setEvents] = useState([])
    const [count, setCount] = useState(11)


    const updateEvents = () => {
        setEvents(store.monthByTriggerObject.slice(0, this.state.count))
    }

    return (
        <div>
            <Query query={GET_GROUPINGS}>
                {({ data, loading, error }) => {
                    if (error) return `Error! ${error.message}`;
                    return (
                        <div>
                            <Navbar loading={loading ? true : false} />
                            {loading ? <div /> : <div>
                                {data.dashboard.groupings.map(grouping => (
                                    <div key={grouping.id}>
                                        <Grouping grouping={grouping}
                                            // {...props}
                                            count={count}
                                            updateEvents={updateEvents}
                                            events={events}
                                            alertData={alertData}
                                            trapsData={trapsData}
                                            syslogsData={syslogsData}
                                            history={history}
                                            location={location} />
                                        <Divider />
                                    </div>
                                ))}
                            </div>}
                        </div>
                    )
                }}
            </Query>
            <GroupingSandBox />
        </div>
    )
}

export default Dashboard
