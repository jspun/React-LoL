import React, { Component } from 'react'

export default class SummonerName extends Component {

    state = {
        summonerID:''

    };

    componentDidMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + this.props.name + "?api_key=RGAPI-ca1f4d68-d7e4-4dcf-a5d4-1389ec5eaf6f";

        fetch(proxyurl + url)
        .then(response => response.text())
        .then(contents => console.log(contents))
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
            

    }
    
    render() {
        
        return(
            <div>
                
            </div>
            
        )
        
    }
}
