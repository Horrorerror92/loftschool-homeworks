import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {getData, getIsLoading} from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { data , isLoading} = this.props;
    
    if(!data) {
      return <p> Нет информации о подписчиках </p>
    }

    if (isLoading) {
      return <p> Загрузка информации о подписчиках </p>  
    }

    return (
      <div className={cx(styles.root, 't-followers')}>
       {data.map(follower => (
        <div key={follower.id} className={styles.follower}>
          <img className={styles.followerImg} src={follower.avatar_url} alt="follower img" />
          <p className={styles.followerLogin}>{follower.login}</p>
        </div>
        ))}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  data: getData(state),
  isLoading: getIsLoading(state)
}))(Followers);
