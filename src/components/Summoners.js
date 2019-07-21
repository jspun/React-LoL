import React from 'react';
import SummonerItem from './SummonerItem';
import PropTypes from 'prop-types';

class Summoners extends React.Component {
    
    
    
    render() {
        
        return this.props.summoners.map(summoner  => (
            <SummonerItem key = {summoner.id} summoner = {summoner} isDeleted = {this.props.isDeleted}></SummonerItem>
        ));
    }
}

//PropTypes
Summoners.propTypes = {
    summoners: PropTypes.array.isRequired 
}

export default Summoners;
