import React, { Component } from 'react';

import axios from 'axios';

class Connectivity extends Component {

    state = {
        connected: true,
    }

    componentDidMount() {
        this.checkConnectivity();
    }

    checkConnectivity() {
        setInterval(() => {
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
                .then(response => {
                    this.setState({ connected: true });
                }).catch(err => {
                    this.setState({ connected: false });
                })
        }, 5000)
    }

    render() {
        return (
            this.props.render({
                connected: this.state.connected
            })
        );
    }

}

export default Connectivity;