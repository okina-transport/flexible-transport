import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import FlexibleStopPlaceEditor from '../FlexibleStopPlaceEditor/index';
import LineEditor from '../LineEditor';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tabs/Tab';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Tabs>
          <Tab label="Linje">
            <LineEditor />
          </Tab>
          <Tab label="Stoppested">
            <FlexibleStopPlaceEditor />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
