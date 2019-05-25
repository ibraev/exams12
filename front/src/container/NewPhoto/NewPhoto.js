import React, {Component, Fragment} from 'react';
import PhotoForm from "../../components/PhotoForm/PhotoForm";
import {createGallery} from "../../store/actions/actionsGallery";
import {connect} from "react-redux";

class NewPhoto extends Component {
    createGallery = data => {
        this.props.createGallery(data).then(() => {
            this.props.history.push('/')
        })
    };

    render() {
        return (
            <Fragment>
                <PhotoForm onSubmit={this.createGallery}/>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
   createGallery: () => dispatch(createGallery())
});

export default connect(null, mapDispatchToProps) (NewPhoto)
