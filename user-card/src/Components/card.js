import React from "react";
import Followers from "./followers"
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 800,
      margin: "0 0 8% 0"
    },
    media: {
      height: 0,
      paddingTop: "100%" 
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    title: {
        fontSize: "40rem"
    }
  }));




const UserCard = (props) => {

    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
    <>
    <Card className={classes.root}>
      <h2> {props.users.name}</h2>
      <CardMedia
        className={classes.media}
        image={props.users.avatar_url}
      />
      <CardContent> 
        <p><a href={props.users.html_url}>{props.users.login}</a> </p>
        <p>Location: {props.users.location}</p>
        <p>Bio: {props.users.bio}</p>
      </CardContent>
      <CardActions disableSpacing>
          <p>Followers</p>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        > 
          <ExpandMoreSharpIcon />
        </IconButton>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        {props.followers.map(follower => {
        return (
          <Followers 
          key={follower.id} 
          users={props.users} 
          followers={follower}/> 
          )})}   
        </CardContent>
      </Collapse>
    </Card>
    </>
    )
};

export default UserCard;