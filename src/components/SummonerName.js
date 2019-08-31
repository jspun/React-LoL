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
        const apikey = "RGAPI-457f85e1-ec86-4c1a-ac44-21f23a1a15a2";
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
            <div className = "newcontainer" style = {{color: "white"}} >


            
                <img src = {profileIconUrl} alt = "SummonerIcon" width = "25%" height = "25%" className = "centerprofile"></img>
                <p className = "centerprofile">{this.state.name}</p>

            </div> 
        )
    }
}
