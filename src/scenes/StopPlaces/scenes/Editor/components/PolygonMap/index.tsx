import React, { createRef, useEffect, useState } from 'react';
import { Map, Polygon, TileLayer } from 'react-leaflet';
import { FloatingButton } from '@entur/button';
import { UndoIcon } from '@entur/icons';
import { LatLngTuple, LeafletMouseEvent } from 'leaflet';
import './styles.scss';

type Props = {
  addCoordinate: (e: LeafletMouseEvent) => void;
  polygon: LatLngTuple[];
  undo: () => void;
};

const DEFAULT_ZOOM_LEVEL = 6;

const DEFAULT_CENTER = {
  lat: 46.23,
  lng: 2.21,
};

const PolygonMap = (props: Props) => {
  const [center, setCenter] = useState(DEFAULT_CENTER);
  const [bounds, setBounds] = useState();
  const [polygonRefLoaded, setPolygonRefLoaded] = useState(false);

  const map = createRef<any>();

  useEffect(() => {
    map.current.leafletElement.locate();
  }, [map]);

  const setPolygonRef = (element: any) => {
    if (element && !polygonRefLoaded) {
      const newBounds = element.leafletElement.getBounds();
      if (newBounds.isValid()) {
        setBounds(newBounds);
      }
    }

    if (element != null) {
      setPolygonRefLoaded(true);
    }
  };

  const handleLocationFound = (e: LeafletMouseEvent) => {
    if (!bounds) {
      setCenter(e.latlng);
    }
  };

  const { addCoordinate, polygon, undo } = props;

  return (
    <div className="map-container eds-contrast">
      <Map
        className="map"
        center={[center.lat, center.lng]}
        zoom={DEFAULT_ZOOM_LEVEL}
        bounds={bounds}
        onClick={addCoordinate}
        onLocationFound={(e: LeafletMouseEvent) => handleLocationFound(e)}
        ref={map}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=0d925ffb1c7f4fa29c090405b4038b96"
        />
        <Polygon ref={(e) => setPolygonRef(e)} positions={polygon} />
      </Map>

      <FloatingButton
        className="undo-button"
        size="small"
        aria-label="Undo"
        onClick={undo}
      >
        <UndoIcon />
      </FloatingButton>
    </div>
  );
};

export default PolygonMap;
