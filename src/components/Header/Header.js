import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button'
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <header className = {`header`}>
        <p className = {`header__title section-title`}>Header</p>
        <div className = {`header__content`}>
          <AuthConsumer>
            {
              ({isAuthorized, email, logout}) => (
                isAuthorized && (
                  <div className = {`header-menu`}> 
                    <p className = {`header-menu__email header-email t-header-email`}>
                      {email}
                    </p>
                    <Button className = {`header-menu__button t-logout`} onClick={logout}>
                      Выйти
                    </Button>
                  </div>

              )
            )         
          }  
          </AuthConsumer>
          
        </div>
      </header>
    );
    
  }
}

export default Header;
