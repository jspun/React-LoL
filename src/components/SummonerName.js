import React, { Component } from 'react'

export default class SummonerName extends Component {

    state = {
        accountID:'',
        profileID:'',
        summonerLevel : '',
        name: '',
        summonerID: '',
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
        const apikey = "RGAPI-1434f867-9ded-44c8-a153-b6b9cf227970";
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        const Summonerurl = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + this.props.name + "?api_key=" + apikey;
        //const mathurl = 


        fetch(proxyurl + Summonerurl)
        .then(response => response.json())
        .then(contents => this.setState({accountID: contents.accountId, profileID: contents.profileIconId, summonerLevel: contents.summonerLevel, name: contents.name, summonerID: contents.id}))
        .catch(() => console.log("Can’t access " + Summonerurl + " response. Blocked by browser?"))


    }
    
    render() {
        let profileIconUrl = "https://ddragon.leagueoflegends.com/cdn/9.3.1/img/profileicon/" + this.state.profileID + ".png"
        console.log(this.state.summonerID)
        return(
            <div className = "container">
                <img src = {profileIconUrl} alt = "SummonerIcon" width = "200px" height = "auto" style={{padding: "40px"}}/>
                <div className = "SummonerInfo" style = {this.getStyle()}>
                    
                    {this.state.name}
                </div> 
                   
            </div>
            
            
            
        )
        
    }
}
