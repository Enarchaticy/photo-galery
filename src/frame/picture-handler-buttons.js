import { Fab } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { PictureManipulatorDialog } from "./dialog";
import "./frame.css";

export function PictureHandlerButtons(props) {
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    props.setModifyPicture();
    setOpen(false);
  };

  return (
    <div className="picture-handler-buttons-container">
      {props.bigPicture !== null && (
        <Fab
          className="picture-handler-buttons"
          onClick={() => props.showPicture(null)}
        >
          <KeyboardBackspaceIcon />
        </Fab>
      )}
      {props.isMyPicture && (
        <div>
          <Fab
            className="picture-handler-buttons"
            color="primary"
            onClick={() => props.deletePicture(props.bigPicture)}
          >
            <DeleteIcon />
          </Fab>
          <Fab
            className="picture-handler-buttons"
            color="primary"
            onClick={() => {
              props.modifyPicture(props.bigPicture);
              setOpen(true);
            }}
          >
            <CreateIcon />
          </Fab>
        </div>
      )}
      <Fab
        className="picture-handler-buttons"
        color="primary"
        onClick={() => setOpen(true)}
      >
        <AddIcon />
      </Fab>
      <PictureManipulatorDialog
        open={open}
        imageSource={props.imageSource}
        imageSourceHandler={props.imageSourceHandler}
        imageAlt={props.imageAlt}
        imageAltHandler={props.imageAltHandler}
        sendImage={props.sendImage}
        onClose={handleClose}
      />
    </div>
  );
}
