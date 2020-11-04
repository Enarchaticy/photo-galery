import { Button, Dialog, DialogTitle, Input } from "@material-ui/core";
import "./frame.css";

export function PictureManipulatorDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Fill the form</DialogTitle>
      <div className="dialog-inputs-container">
        <Input
          className="dialog-input"
          placeholder="image source"
          value={props.imageSource}
          onChange={(e) => props.imageSourceHandler(e)}
        />
        <br />
        <Input
          className="dialog-input"
          placeholder="alt"
          value={props.imageAlt}
          onChange={(e) => props.imageAltHandler(e)}
        />
        <br />
        <Button
          className="dialog-button"
          variant="contained"
          color="primary"
          onClick={() => {
            props.sendImage();
            setTimeout(() => handleClose());
          }}
        >
          Send
        </Button>
      </div>
    </Dialog>
  );
}
