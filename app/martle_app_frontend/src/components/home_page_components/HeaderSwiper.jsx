import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from '../base_components/Pagination';
import { Link } from 'react-router-dom';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
    root: {
        position: 'relative',
    },
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
    },
    slide1: {
        backgroundColor: '#FEA900',
    },
    slide2: {
        backgroundColor: '#B3DC4A',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
    },
};

export default class HeaderSwiper extends React.Component {
    state = {
        index: 0,
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render() {
        const { index } = this.state;

        return (
            <div style={styles.root} className="mt-28 sm:mt-36 m-auto w-HeaderSwiper h-100 border-2 border-white">
                <Link to="/product">
                    <AutoPlaySwipeableViews
                        index={index}
                        onChangeIndex={this.handleChangeIndex}
                        enableMouseEvents
                    >
                        <div className='h-96' style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
                        <div className='h-96' style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
                        <div className='h-96' style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
                    </AutoPlaySwipeableViews>
                    <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
                </Link>
            </div>
        );
    }
}