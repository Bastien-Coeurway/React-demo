import Image from "next/image";
import classes from './MeetupImage.module.css'

const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  function MyImage (props) {
    return (
      <Image className={classes.detail}
        loader={myLoader}
        src={props.src}
        alt={props.alt}
        width={1548}
        height={1149}
      />
    );
  };

  export default MyImage;