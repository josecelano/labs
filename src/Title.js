import React, {Component} from 'react';
import styles from './title.css';

class Title extends Component {
    render() {
        return (
            <h1 className={styles.title}>{this.props.text}</h1>
        )
    }
}

export default Title;