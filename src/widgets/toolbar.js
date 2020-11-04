
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Fab, Toolbar, Typography } from "@material-ui/core";

const toolbarStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      marginRight: theme.spacing(0),
    },
    filler: {
      flexGrow: 1,
    },
  }));

export default function Tools(props) {
    const classes = toolbarStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography edge="start" variant="h6" className={classes.title}>
              Welcome{" "}
              {props.isLoggedIn ? localStorage.getItem("userName") : "stranger"}!
            </Typography>
            <Typography className={classes.filler}></Typography>
            {props.isLoggedIn && (
              <Fab
                edge="start"
                size="small"
                className={classes.menuButton}
                onClick={props.onClick}
              >
                <ExitToAppIcon />
              </Fab>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }