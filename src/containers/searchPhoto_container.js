import React, { Component } from 'react';

import Search from '../components/Search/search';
import Photos from '../components/Photos/photos';

import InfiniteScroll from 'react-infinite-scroll-component';
import styles from '../components/SearchPhotos/searchPhoto.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { photoListByQuery } from '../actions';

class SearchPhotoContainer extends Component {

    state = {
        page : 1,
        viewList : [],
        total: 0,
        totalPages: 0,
        hasMore: true,
        listLength: 0,
        query: this.props.match.params.name
    }

    componentWillMount() {
        this.props.photoListByQuery(this.state.page, this.state.query);
    }

    fetchMoreData = () => {
        this.setState({
            page: this.state.page + 1
        })
        this.props.photoListByQuery(this.state.page, this.state.query);
    }

    onSearchHandler = (query) => {
        this.setState({
            page: 1,
            query: query,
            total: 0,
            totalPages: 0,
            hasMore: true,
            listLength: 0,
            viewList: []
        }, function() {
            this.props.photoListByQuery(this.state.page, this.state.query);
        });
    }

    getFirstLetterUpperCase = (lower) => {
        return lower.charAt(0).toUpperCase() + lower.substr(1);
    }

    render() {
        return (
            <div>
                <Search {...this.props} type='searchPage' onSearch={(query) => this.onSearchHandler(query)}/>
                <h1 className={styles.margin_left_75}>{this.getFirstLetterUpperCase(this.state.query)} pictures</h1>
                <h3 className={styles.format_total}>{this.state.total} free {this.state.query} pictures</h3>
                <InfiniteScroll
                    dataLength={this.state.viewList.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Breathe in...Breath out...</h4>}
                    endMessage={
                        <p className={styles.text_align_center}>
                          <b>Yay! You have seen it all</b>
                        </p>
                      }
                >
                    <Photos page={this.state.page} photoList={this.state.viewList}/>
                </InfiniteScroll>
            </div>
        );
    }

    componentWillReceiveProps(newProps) {
        if (newProps != this.props) {
            if (newProps.photos &&  newProps.photos.photoList) {
                this.setState({
                    viewList: [...this.state.viewList, ...newProps.photos.photoList.results],
                    total: newProps.photos.photoList.total,
                    totalPages: newProps.photos.photoList.total_pages
                })
            }
        }
    }
}

const mapStateToProps = (state) =>{
    return {
        photos: state.photos
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        photoListByQuery
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPhotoContainer);