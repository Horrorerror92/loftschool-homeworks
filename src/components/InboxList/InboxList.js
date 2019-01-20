// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';
import style from './Inbox.module.css';

class InboxList extends Component {
  
  render () {
    
    return (
      <div className = {style.content}>
        <h3 className = {style.title}>Inbox</h3>
        <MailList className="t-inbox-list" emails={this.props.data.inbox} type="inbox" />
      </div>

    )
  }
}

export default withData(InboxList);