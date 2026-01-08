import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function BarMap({ bars, onSelectBar }) {
    // Center of your bars (Aarau area based on your coordinates)
    const center = [47.392, 8.044];

    return (
        <MapContainer center={center} zoom={16} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                attribution='&copy; OpenStreetMap contributors'
            />

            {bars.map(bar => {
                // Create a custom icon using your backend logo
                const customIcon = new L.Icon({
                    iconUrl: `/logos/${bar.logo_path}`,
                    iconSize: [35, 35],
                    iconAnchor: [17, 35],
                    popupAnchor: [0, -35],
                    className: "map-icon"
                });

                return (
                    <Marker
                        key={bar.id}
                        position={[bar.latitude, bar.longitude]}
                        icon={customIcon}
                        eventHandlers={{
                            click: () => onSelectBar(bar),
                        }}
                    >
                    </Marker>
                );
            })}
        </MapContainer>
    );
}
export default BarMap;