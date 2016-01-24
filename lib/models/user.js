'use strict';

/**
 * User model
 *
 * @function publicView: return object for suitable for public viewing
 */
class User {
  constructor(props) {
    this.props = props;
  }

  publicView() {
    return {
      email: this.props.email,
      lunch_form: this.props.lunch_form
    };
  }
}

module.exports = User;
