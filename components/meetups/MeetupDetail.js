import classes from "./MeetupDetail.module.css";
import MyImage from "./MeetupImage";

function MeetupDetail(props) {

  return (
    <section className={classes.detail}>
      <MyImage src={props.src} alt={props.alt}/>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
