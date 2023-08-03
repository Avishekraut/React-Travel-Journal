export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.img}></img>
      <div className="card-details">
        <div className="card-country">
          <img className="location-icon" src="./images/location-icon.png"></img>
          <p>JAPAN</p>
          <a href="#">View on Google Maps</a>
        </div>
        <h1 className="card-title">Mount Fuji</h1>
        <p className="card-date">12 jannnn</p>
        <p className="card-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
      </div>
    </div>
  );
}
