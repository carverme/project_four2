import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Goals(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <h1>Goals</h1>
      <Grid container spacing={24} justify="space-around">
        <Grid item xs={12} sm={12}>
          <Paper id="box1" className={classes.paper}>ONE</Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>TWO</Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>THREE</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Goals.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Goals);
