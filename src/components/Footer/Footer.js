import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <footer className = {`footer`}>
        <p className = {`header__title section-title`}> Footer </p>
        <p className = {`footer-message t-footer`}>
          <AuthConsumer>
            { ( {isAuthorized, email } ) => (
              isAuthorized 
                ? `Вы вошли как ${email}`
                : `Вы гость в этой системе` 
              )
            }
          </AuthConsumer>
        </p>
      </footer>
    );
  }
}

export default Footer;
