import React, {Component} from 'react';
import {fetchGallery} from "../../store/actions/actionsGallery";
import {connect} from "react-redux";


class Gallery extends Component {
    componentDidMount() {
        this.props.fetchGallery()
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}
const mapStateToProps = state => ({
   gallery:state.gallery
});

const mapDispatchToProps = dispatch => ({
   fetchGallery:(gallery) => dispatch(fetchGallery(gallery))
});

export default connect(mapStateToProps, mapDispatchToProps) (Gallery);
