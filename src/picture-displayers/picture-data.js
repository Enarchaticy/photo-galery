import { Card, IconButton, Input, Typography } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import "./picture-displayers.css";

function datePipe(date) {
  return (
    new Intl.DateTimeFormat("en-US").format(date) +
    " " +
    (date.getHours() < 10 ? "0" : "") +
    date.getHours() +
    ":" +
    (date.getMinutes() < 10 ? "0" : "") +
    date.getMinutes()
  );
}

function Comment(props) {
  return (
    <Card className="comment-card">
      <Typography vartiant="h5">
        {props.children.author}
        <span className="comment-time">
          {datePipe(props.children.createdAt)}
        </span>
      </Typography>

      {props.children.comment}
    </Card>
  );
}

export function PictureData(props) {
  return (
    <Card variant="outlined" className="picture-data">
      Author: <Typography variant="h5">{props.picture.author}</Typography>
      Created at:
      <Typography variant="h6">{datePipe(props.picture.createdAt)}</Typography>
      Comments:
      <br />
      {props.picture.comments.map((comment, index) => (
        <Comment key={index}>{comment}</Comment>
      ))}
      <Input
        onChange={props.onChange}
        value={props.commentTyped}
        className="comment-input"
        placeholder="Write something..."
      />
      <IconButton
        onClick={() => {
          props.onClick();
        }}
        color="primary"
      >
        <SendIcon />
      </IconButton>
    </Card>
  );
}
