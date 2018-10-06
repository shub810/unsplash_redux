import React, { Component } from 'react';
import Photos from '../components/Photos/photos';

import styles from '../components/Home/home.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from '../components/Header/header';

import { connect } from 'react-redux';
import { photoListAll } from '../actions';
import { bindActionCreators } from 'redux';


class HomeContainer extends Component {

    state = {
        page: 1,
        hasMore: true,
        listLength: 0, 
        viewList: []
    }

    componentWillMount() {
        this.props.photoListAll(this.state.page);
    }

    fetchMoreData = () => {
        this.setState({
            page: this.state.page + 1
        })
        this.props.photoListAll(this.state.page);
    }

    render() {
        return (
            <div>
                <Header />
                { 
                    this.state.viewList  ? 
                    <div>
                            <InfiniteScroll
                                dataLength={this.state.viewList}
                                next={this.fetchMoreData}
                                hasMore={this.state.hasMore}
                                loader={<h4>Breathe in...Breath out...</h4>}
                                endMessage={
                                    <p className={styles.text_align_center}>
                                      <b>Yay! You have seen it all</b>
                                    </p>
                                  }
                            >
                                <Photos page={this.state.page} photoList={this.state.viewList} />
                            </InfiniteScroll>
                    </div>
                    :
                    null   
                }
            </div>
        );
    }

    componentWillReceiveProps(newProps) {
        if (newProps != this.props) {
            if (newProps && newProps.photos.photoList) {
                this.setState({
                    viewList: [...this.state.viewList, ...newProps.photos.photoList]
                })
            }
        }
    }

}

const mapStateToProps = (state) => {
    return {
        photos : state.photos
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        photoListAll
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);