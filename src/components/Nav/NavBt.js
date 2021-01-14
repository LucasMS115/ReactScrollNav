import React, { Component } from 'react'
import {Link} from 'react-scroll';
import PropTypes from 'prop-types';

export class NavBt extends Component {

    state = {
        color: 'white', //Active color
        color1: 'white',  //Base color
        color2: '#E9D56F',  //Hover color
        location: ""        
    }

    divStyle = () => {
        return{
            margin: ".5rem",
            alignContent: "center",
            justifyContent: "center"
        }
    };

    linkStyle = () => {
        return{
            textDecoration: 'none',
            color: this.state.color,
            fontSize: '1.9rem',
            cursor: 'pointer' 
        }
    };

    mouseEnter = () => {
        this.setState({color: this.state.color2});
    };

    mouseLeave = () => {
        if(this.state.location !== this.props.path) this.setState({color: this.state.color1});
    };

    componentDidMount(){
        const location = window.location.href.split("#")[1];
        if(location === this.props.path) this.setState({color: this.state.color2});
        else this.setState({color: this.state.color1});
        this.setState({ location: location });
    };

    render() {
        return (
            <div>
                <div style={this.divStyle()}> 
                    <Link
                        style={this.linkStyle()}
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseLeave}
                        onClick={this.mouseEnter}
                        to={this.props.path}
                        smooth="true"
                        > {this.props.name} </Link>  
                </div>
            </div>
        )
    }
}

NavBt.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default NavBt;
