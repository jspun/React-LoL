import React, { Component } from 'react'
import SummonerStats from './SummonerStats';
import SummonerName from './SummonerName';


export default class DisplaySummoner extends Component {

    state = {
        apikey : "RGAPI-ca1f4d68-d7e4-4dcf-a5d4-1389ec5eaf6f",
        accountID : '',
        matchlist : [],
        summonerName: '',

    }

    render() {
        
        return (
            <div>
                <SummonerName name = {(JSON.parse(localStorage.getItem("List")))[0].title}></SummonerName>

            </div>
        )
    }
}
