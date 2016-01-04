const LoginMixins = {
  getInitialState: function() {
    return {email: '', password: ''};
  },
  _onChangeEmail: function(event) {
    this.setState({email: event.target.value});
  },
  _onChangePw: function(event) {
    this.setState({password: event.target.value});
  }
};

export default LoginMixins;
