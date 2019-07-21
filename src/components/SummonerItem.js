import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class SummonerItem extends Component {
    
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    }
   

    render() {
        const {id,title} = this.props.summoner;
        return (
            <div style = {this.getStyle()}>
                
               <p>
                <span onClick = {this.props.isDeleted.bind(this,id)} >x</span>
               {title}
               </p> 
            </div>
        )
    }
}
//PropTypes
SummonerItem.propTypes = {
    summoner: PropTypes.object.isRequired 
}



export default SummonerItem;
