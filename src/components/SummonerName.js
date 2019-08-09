import React, { Component } from 'react'

export default class SummonerName extends Component {

    state = {
        summonerID:'',
        profileID:''
    };

    componentDidMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + this.props.name + "?api_key=RGAPI-224d5e49-ea7d-4413-96b6-40efe7d0c637";

        fetch(proxyurl + url)
        .then(response => response.json())
        .then(contents => this.setState({summonerID: contents.accountId, profileID: contents.profileIconId}))
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
        

    }
    
    render() {
        return(
            <div>
                <p></p>
                
            </div>
            
        )
        
    }
}
