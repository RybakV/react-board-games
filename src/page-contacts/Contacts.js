import iconUrl from "./map-marker.svg";
import './Contacts.css';
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useStoresHook } from '../store/use-stores-hook';

function Contacts() {

  // Background image
  const { pageBackground } = useStoresHook();
  pageBackground.setBackgroundUrl(`/img/bg-home.jpg`);

  const newicon = new Leaflet.Icon({
    iconUrl,
    iconAnchor: [11, 30],
    popupAnchor: [11, -35],
    iconSize: [23, 30]
  });

    return (
        <section className="contacts">
            <div className="container">
                <h1 className="contacts--title">Ігри у Львові</h1>
                <h2 className="contacts--subtitle">Контакти</h2>

                <div className="contacts--content">
                  <div className="contacts--text">
                      <div className="contacts--box">
                         <div className="contacts--subtitle-small">Адреса</div>
                          Львів,<br/>
                          Площа Ринок, 3Б
                      </div>
                    <div className="contacts--box">
                      <div className="contacts--subtitle-small">Години роботи</div>
                        Щоденно, з 9:00 до 20:00<br/>
                    </div>
                    <div className="contacts--box">
                      <div className="contacts--subtitle-small">Телефон</div>
                        +38 (050) 555-99-55<br/>
                    </div>
                    <div className="contacts--box">
                        <div className="contacts--subtitle-small">E-mail</div>
                        lviv.games@game.ua
                      </div>
                  </div>
                  <div className="contacts--map">
                    <MapContainer center={[49.8416, 24.0305]} zoom={15} scrollWheelZoom={false} >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[49.8416, 24.0305]} icon={newicon}>
                        <Popup>
                          A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                </div>
            </div>
        </section>
    );
}
export default Contacts;