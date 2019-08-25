import React, { Component } from 'react'

export default class SummonerName extends Component {

    state = {
        accountID:'',
        profileID:'',
        summonerLevel : '',
        name: '',
        summonerID: '',
        ranks: [],

    };

    getStyle = () =>{
        return {
            font: "sans-serif",
            fontSize: "20px",
            padding: "40px",
            align: "center",
            heigh: "20px"
        }
    }

    componentDidMount(){
        const apikey = "RGAPI-c38f0961-5af8-44e1-880a-fa8188458b2f";
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        const Summonerurl = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + this.props.name + "?api_key=" + apikey;
        

        
        var result = fetch(proxyurl + Summonerurl)
        .then(response => response.json())
        .then(function(contents){
            console.log(contents)
            var accountID = contents.id
            const Leagueurl = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + accountID+ "?api_key=" + apikey;
            this.setState({accountID: contents.accountId, profileID: contents.profileIconId, summonerLevel: contents.summonerLevel, name: contents.name, summonerID: contents.id})
            return fetch(proxyurl + Leagueurl);
        }.bind(this))
        .then(function(response2){
            return response2.json()
        })
        .catch((error) => console.log(error))
        
        result.then(r=> 
            this.setState({ranks: r})
        )
        

    }
    
    render() {
        
        let profileIconUrl = "https://opgg-static.akamaized.net/images/profile_icons/profileIcon" + this.state.profileID + ".jpg"
        console.log(this.state.ranks)
        return(
            <div className = "container">
                <img src = {profileIconUrl} alt = "SummonerIcon" width = "25%" height = "25%" style={{padding: "40px"}}/>
                <div className = "SummonerInfo" style = {this.getStyle()}>
                    
                    {this.state.name}
                </div> 
                   
            </div>
            
            
            
        )
        
    }
}
