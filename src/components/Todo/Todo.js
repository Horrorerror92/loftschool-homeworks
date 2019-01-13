
import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({
    inputValue: event.target.value
    });
  };

  createNewRecordByEnter = event => {
    if(event.key === 'Enter') {
      this.createNewRecord();
    }
  };
    
  toggleRecordComplete = event => {};

  createNewRecord = () => {};

  render() {

    const { savedData } = this.props;
    return (
      <Card title = {`Список дел`}>
      <div className = {`todo t-todo-list`}>
        {this.renderEmptyRecord()}
        {savedData.map(this.renderRecord)}
      </div>
    </Card>
    );
  }

  renderEmptyRecord() {
    return (
      <div className = {`todo-item todo-item-new`}>
          <input 
            className = {`todo-input t-input`} 
            placeholder =  {`Введите задачу`} 
            value = {this.state.inputValue}
            onChange = {this.handleChange}
            onKeyPress = {this.createNewRecordByEnter}
          />
          <span 
            className = {`plus t-plus`} 
            onClick={this.createNewRecord}
          >
            +
          </span>
        </div>    
    );
  }

  renderRecord = record => {
    return;
  };
}

export default withLocalstorage('todo-app', [])(Todo);