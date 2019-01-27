import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import {getData, getIsLoading} from '../../modules/User';
import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const { data, isLoading } = this.props;

    if(!data) {
      return <p> Информация о пользователе не найдена </p>
    }

    if (isLoading) {
      return <p> Загрузка информации о пользователе </p>  
    }
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю

    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
            <img className={styles.image} src={data.avatar_url} alt="user info" />
        </div>
        <div>
            <p className='t-user-name'>{data.name}</p>
            <p className='t-user-bio'>{data.bio}</p>
        </div>
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  data: getData(state),
  isLoading: getIsLoading(state)
}))(UserInfo);
