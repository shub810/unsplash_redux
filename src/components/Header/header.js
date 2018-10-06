import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Search from '../Search/search';
import styles from './header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <Jumbotron className={styles.padding_lr_10}>
                    <h1>Unsplash!</h1>
                    <p>
                        Beautiful, free photos.<br />
                        Gifted by the world’s most generous community of photographers
                    </p>
                    <Search type='homePage' {...this.props} />
                </Jumbotron>
            </div>
        );
    }
}

export default Header;