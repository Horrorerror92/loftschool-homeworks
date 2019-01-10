import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false ,
    email: 'stu@dent.com',
    password: '123',
    authorizeError: ''
  }

  authorize = (emailInput, passwordInput) => {

    const {email, password} = this.state;

    if (emailInput === email && passwordInput === password) {
      this.setState({
        isAuthorized: true,
        authorizeError: ''
      });
    } else {
      this.setState ({
        authorizeError: 'Email или пароль введён не верно'
      });
    }

  };
  
  logout = () => {
    this.setState({
      isAuthorized: false,
      authorizeError: ''
    })
  }
  
  getProviderValue = () => {
    return {
      email: this.state.email,
      isAuthorized: this.state.isAuthorized,
      authorizeError: this.state.authorizeError,
      authorize: this.authorize,
      logout: this.logout
    }
  }

  
  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
