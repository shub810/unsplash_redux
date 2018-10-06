import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import styles from './search.css';

import { Redirect, Link } from 'react-router-dom';

class Search extends Component {

    state = {
        search: this.props.match ? this.props.match.params.name : '',
        redirect: false
    }

    onChangeHandler = (e) => {
        this.setState({
            search: e.target.value
        })
        e.preventDefault();
    }

    onKeyPressHandler = (e) => {
        if (e.key === 'Enter') {
            if (this.props.type === 'searchPage') {
                this.props.onSearch(this.state.search);
            }
            else if (this.props.type === 'homePage') {
                this.setState({
                    redirect: true
                })
            }
        }
    }

    componentDidMount() {
        this.setState({
            redirect: false
        })
    }

    render() {       
        if (this.state.redirect && this.props.type === 'homePage') {
            return <Redirect to={`/search/photos/${this.state.search}`}/>
        }

        return (
            <div className={styles.text_align_center}>
                <span className={styles.search_icon}>
                    <Glyphicon glyph="search"/>
                </span>
                <span>
                    <input 
                            className={styles.btn_search} 
                            type="text" 
                            value={this.state.search} 
                            onChange={(e) => this.onChangeHandler(e)} 
                            onKeyPress={(e) => this.onKeyPressHandler(e)}
                            placeholder="Search free high-resolution photos" />
                </span>
            </div>
        );
    }
}

export default Search;