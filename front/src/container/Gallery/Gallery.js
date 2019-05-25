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
                    <CardBody key={galleries.id}>
                        <CardImg top width="100%" src={galleries.image} alt="Card image cap" />
                        <CardTitle>{galleries.title}</CardTitle>
                        <CardTitle>{galleries.user}</CardTitle>
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
