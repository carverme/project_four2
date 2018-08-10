import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class Project extends Component {
  render() {
    return (
      <div className="Project">
        <div>
          <Paper className="paper">
            <div id="tracker-box" class="mdc-card">
              <div id="card-title" class="my-card__media mdc-card__media mdc-card__media--16-9">
                <div class="mdc-card__media-content">Progress Chart</div>
                  <div clsas="project-list">
                    <p>Project 1<bk>25 minutes</bk></p>
                    <p>Project 2<bk>15 minutes</bk></p>
                    <p>Project 3<bk>5 minutes</bk></p>
                    <p>Project 4<bk>2 hours</bk></p>
                    <p>Project 5<bk>30 minutes</bk></p>
                    <p>Project 6<bk>10 hours</bk></p>
                  </div>
                <div class="mdc-card__action-buttons">
                  <button class="mdc-button mdc-card__action mdc-card__action--button">Click to add</button>
                  <button class="mdc-button mdc-card__action mdc-card__action--button">Click to delete</button>
                </div>
              </div>
              <div class="mdc-card__actions">
              </div>
            </div>

    			</Paper>
        </div>
      </div>
    );
  }
}

export default Project;
