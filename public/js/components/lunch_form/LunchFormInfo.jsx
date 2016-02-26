import Color from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';
import React from 'react';

const LunchFormInfo = React.createClass({
  render: function() {
    return(
      <div>
        <p style={{fontSize: '2em', textAlign: 'center'}}
        >USDA National School Lunch Program</p>
        <div>
          <RaisedButton
            backgroundColor={Color.green500}
            label='Begin My Application'
            labelColor='white'
            onClick={this.props.nextPage}
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '200px'
            }}/>
        </div>
      </div>
    );
  }
});

export default LunchFormInfo;
