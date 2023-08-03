import locationicon from "../images/location-icon.png";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <img
          className="card-img"
          src={require(`../images/${props.item.imageUrl}`)}
        ></img>
        <div className="card-details">
          <div className="card-country">
            <img className="location-icon" src={locationicon}></img>
            <p>{props.item.location}</p>
            <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
          </div>
          <h1 className="card-title">{props.item.title}</h1>
          <p className="card-date">
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p className="card-description">{props.item.description}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
