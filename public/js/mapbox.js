/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZGltYS1rdXptaW4tMjAyMyIsImEiOiJjbGJwMzYzcWswMnVoM25vMGZiOXo5aGh6In0.ERxegm9mIp2J3qG5FYT2vw';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/dima-kuzmin-2023/clbo6p7z3000f14qrhha9gtsy',
    scrollZoom: false,
    center: [-118.243683, 34.052235],
    zoom: 8
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
} 