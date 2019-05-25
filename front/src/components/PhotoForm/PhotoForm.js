import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input} from "reactstrap";

class PhotoForm extends Component {
    state = {
        title: '',
        image:''
    };

    submitFormHandler = event => {
        event.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });
        this.props.onSubmit(formData);
    };
    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };
    render() {
        return (
            <Form>
                <FormGroup row>
                    <h2>New photo</h2>
                    <Col sm={10}>
                        <Input
                            type="text" required
                            name="title" id="title"
                            value={this.state.title}
                            onChange={this.inputChangeHandler}
                        />
                        <Input
                            type="file"
                            name="image" id="image"
                            onChange={this.fileChangeHandler}
                        />

                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{offset:2, size: 10}}>
                        <Button type="submit" color="primary">Save</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default PhotoForm;
