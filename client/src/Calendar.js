import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {MDCRipple} from '@material/ripple';


class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        <div>
          <Paper className="paper">
    				<h3>ONE Calendar</h3>

            <div id="tracker-box" class="mdc-card">
              <div class="mdc-card__media mdc-card__media--square">
              <div class="mdc-card__media-content">CALENDAR TRACKER</div>
              </div>
              <div id="card-title" class="my-card__media mdc-card__media mdc-card__media--16-9">
                <div class="mdc-card__media-content">Title</div>
              </div>
              <div class="mdc-card__actions">
                <div class="mdc-card__action-buttons">
                  <button class="mdc-button mdc-card__action mdc-card__action--button">Click to add</button>
                  <button class="mdc-button mdc-card__action mdc-card__action--button">Click to delete</button>
                </div>
                <div class="mdc-card__action-icons">
                  <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</button>
                  <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="More options">more_vert</button>
                </div>
              </div>
            </div>

    			</Paper>
        </div>
        <div className="root">
          <Grid container >
            <Grid item xs={12}>
              <p className="grid" >GRID in Calendar</p>
            </Grid>
          </Grid>
          <Grid container spacing={24} className="name">
          </Grid>
        </div>
      </div>
    );
  }
}

export default Calendar;
