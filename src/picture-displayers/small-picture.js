import "./picture-displayers.css"

export default function SmallPicture(props) {
    return (
      <img
        className={
          props.picture.author === localStorage.getItem("userName")
            ? "owned-small-picture"
            : "small-picture"
        }
        src={props.picture.src}
        alt={props.picture.alt}
        onClick={() => props.onClick(props.picture.index)}
      />
    );
  }