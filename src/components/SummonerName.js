import React, { Component } from 'react'

export default class SummonerName extends Component {

    state = {
        summonerID:'',
        profileID:'',
        summonerLevel : '',
        name: '',
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
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + this.props.name + "?api_key=RGAPI-058b696d-54f7-4a91-876f-06da56578f3b";

        fetch(proxyurl + url)
        .then(response => response.json())
        .then(contents => this.setState({summonerID: contents.accountId, profileID: contents.profileIconId, summonerLevel: contents.summonerLevel, name: contents.name}))
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
        

    }
    
    render() {
        let profileIconUrl = "http://ddragon.leagueoflegends.com/cdn/9.3.1/img/profileicon/" + this.state.profileID + ".png"
        return(
            <div className = "container">
                <img src = {profileIconUrl} alt = "SummonerIcon" width = "200px" height = "auto" style={{padding: "40px"}}/>
                <div className = "SummonerPhoto" style = {this.getStyle()}>
                    
                    {this.state.name}
                </div> 
                   
            </div>
            
            
            
        )
        
    }
}
