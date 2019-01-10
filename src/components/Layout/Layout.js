import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {

    const {header, footer, children} = this.props;
   
    return (
      <Fragment>
        {this.renderHeader(header)}
        <main className = {`main main--with-footer main--with-header`}>
          <SectionTitle className = {`main__title`}>Main</SectionTitle>
          {children}
        </main>
        {this.renderFooter(footer)}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return HeaderChild ? <HeaderChild/> : null;
  }

  renderFooter(FooterChild) {
    return FooterChild ? <FooterChild/> : null;
  }
  
}

export default Layout;
