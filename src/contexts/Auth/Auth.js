import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    isAutorized: false ,
    email: 'stu@dent.com',
    password: '123',
    authorizeError: ''
  }

  autorize = (emailInput, passwordInput) => {

    const {email, password} = this.state;

    if (emailInput === email && passwordInput === password) {
      this.setState({
        isAutorized: true,
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
      isAutorized: false,
      authorizeError: ''
    })
  }
  
  getProviderValue = () => {
    return {
      email: this.state.email,
      isAutorized: this.state.isAutorized,
      authorizeError: this.state.authorizeError,
      autorize: this.autorize,
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
