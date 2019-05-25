import React, {Component} from 'react';
import {fetchGallery} from "../../store/actions/actionsGallery";
import {connect} from "react-redux";
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";


class Gallery extends Component {
    componentDidMount() {
        this.props.fetchGallery()
    }
    render() {
        return (
            <Card>
                {this.props.gallery.map(galleries => (
                    <CardBody key={galleries._id}>
                        <CardImg top width="100%" src={'http://localhost:8001/uploads/' + galleries.image} alt="Card image cap" />
                        <CardTitle><h3>{galleries.title}</h3></CardTitle>
                        <CardTitle><strong>By: {galleries.user}</strong></CardTitle>
                    </CardBody>
                ))}
            </Card>

        );
    }
}
const mapStateToProps = state => ({
   gallery:state.gallery.gallery
});

const mapDispatchToProps = dispatch => ({
   fetchGallery:(gallery) => dispatch(fetchGallery(gallery))
});

export default connect(mapStateToProps, mapDispatchToProps) (Gallery);
