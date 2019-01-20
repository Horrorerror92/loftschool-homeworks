// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';
import style from './Outbox.module.css';

class OutboxList extends Component {
  
  render () {
    
    return (
      <div className = {style.content}>
        <h3 className = {style.title}>Outbox</h3>
        <MailList className="t-outbox-list" emails={this.props.data.outbox} type="outbox" />
      </div>

    )
  }
}

export default withData(OutboxList);