import React from 'react';
import { Thumbnail, Grid, Row, Col, Button, Glyphicon, Image } from 'react-bootstrap';
import styles from './photos.css';
import { INDEX_OF_PHOTOS } from '../../config';

const Photos = (props) => {
    
    const rowCol = INDEX_OF_PHOTOS;

    const getThumbnail = (item) => {
        return (
            <Thumbnail className={styles.border_none} src={item.urls.raw} alt = "242x200">
                <h4><Image className={styles.margin_right_5} src={item.user.profile_image.small} circle /> {item.user.first_name}</h4>
                <p>{item.description}</p>
                <p>
                    <Button bsStyle="primary">
                        <Glyphicon className={styles.margin_right_5} glyph="heart" /> {item.likes}
                    </Button>
                </p>
            </Thumbnail >
        )
    }

    const getColImage = (start, end) => {
        const filteredList = props.photoList.filter((item, id) => {
            return id >= start && id < end;
        });
        return filteredList.map((item) => {
            return (
                <Col key={item.id} xs={12} md={12}>
                    {getThumbnail(item)}
                </Col>
            )
        })
    }
    
    const getRowImage = () => {
        return [...Array(props.page)].map((_, i) => {
            return (
                <Grid key={i}>
                    <Col xs={6} md={4}>
                        <Row>
                            {getColImage(rowCol[0] + 9 * i, rowCol[1] + 9 * i)}
                        </Row>
                    </Col>

                    <Col xs={6} md={4}>
                        <Row>
                            {getColImage(rowCol[1] + 9 * i, rowCol[2] + 9 * i)}
                        </Row>
                    </Col>
                    <Col xs={6} md={4}>
                        <Row>
                            {getColImage(rowCol[2] + 9 * i, rowCol[3] + 9 * i)}
                        </Row>
                    </Col>
                </Grid>
            )
        })
    }

    return (
        <div>
            {getRowImage()}
        </div>
    );
};

export default Photos;