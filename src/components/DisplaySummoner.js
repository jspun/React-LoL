import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class DisplaySummoner extends Component {
    render() {
        console.log(this.props.displaysummoner.title)
        return (
            <div>
                <h1>PlayerInfo</h1>
                <p>{this.props.displaysummoner.title}</p>
            </div>
        )
    }
}

DisplaySummoner.propTypes ={
    displaysummoner: PropTypes.object.isRequired
} 