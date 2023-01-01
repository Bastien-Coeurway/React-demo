import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {JSON.parse(props.meetups).map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          src={meetup.src}
          alt={meetup.alt}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
