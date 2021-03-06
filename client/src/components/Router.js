import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Initial from './Initial'
import BaristaLogin from './Barista/BaristaLogin'
import CustomerLogin from './Customer/CustomerLogin'
import BaristaProfile from './Barista/BaristaProfile'
import CreateSchedule from './Barista/CreateSchedule'
import Notes_Barista from './Barista/Notes_Barista'
import CustomerHome from './Customer/CustomerHome'
import CustomerNotes from './Customer/CustomerNotes'
import CustomerProfile from './Customer/CustomerProfile'
import CustomerSearch from './Customer/CustomerSearch'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='Scene_Wrapper'>
        <Scene key='Initial_Flow' hideNavBar>
          <Scene key='Initial' component={Initial} hideNavBar />
          <Scene key='BaristaLogin' component={BaristaLogin} hideNavBar />
          <Scene key='CustomerLogin' component={CustomerLogin} hideNavBar />
        </Scene>
        <Scene key='Barista_Flow' hideNavBar>
          <Scene key='BaristaProfile' component={BaristaProfile} hideNavBar />
          <Scene key='CreateSchedule' component={CreateSchedule} hideNavBar />
          <Scene key='Notes_Barista' component={Notes_Barista} hideNavBar />
        </Scene>
        <Scene key='Customer_Flow' hideNavBar initial>
          <Scene
            key='CustomerProfile'
            component={CustomerProfile}
            hideNavBar
            initial
          />
          <Scene key='CustomerNotes' component={CustomerNotes} hideNavBar />
          <Scene key='CustomerHome' component={CustomerHome} hideNavBar />
          <Scene key='CustomerSearch' component={CustomerSearch} hideNavBar />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
