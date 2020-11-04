import "./login.css";
import { Card, Typography, Input, Button } from "@material-ui/core";

export default function Login(props) {
  return (
    <Card raised className="login-card">
      <Typography color="textSecondary" align="left" varient="subtitle1">
        Login
      </Typography>
      <Input
        className="login-input"
        placeholder="Username"
        onChange={props.onChange}
      />
      <Button
        className="login-button"
        color="primary"
        variant="outlined"
        onClick={props.onClick}
      >
        Login
      </Button>
    </Card>
  );
}
