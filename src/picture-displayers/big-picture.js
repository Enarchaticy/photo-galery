import { Fab } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { PictureData } from "./picture-data";
import "./picture-displayers.css";

function PictureWithArrows(props) {
  return (
    <div className="picture-with-arrows">
      <Fab
        size="small"
        disabled={props.disabled === "left" || props.disabled === "both"}
        onClick={() => props.onClick("left")}
      >
        {<ChevronLeftIcon />}
      </Fab>
      <img
        className="big-picture"
        src={props.picture.src}
        alt={props.picture.alt}
      />
      <Fab
        size="small"
        disabled={props.disabled === "right" || props.disabled === "both"}
        onClick={() => props.onClick("right")}
      >
        {<ChevronRightIcon />}
      </Fab>
    </div>
  );
}

export default function BigPictureContainer(props) {
  return (
    <div className="big-picture-container">
      <PictureWithArrows
        picture={props.picture}
        disabled={props.disabled}
        onClick={props.changePicture}
      ></PictureWithArrows>
      <PictureData
        picture={props.picture}
        commentTyped={props.commentTyped}
        onChange={props.commentChange}
        onClick={props.sendComment}
      />
    </div>
  );
}
