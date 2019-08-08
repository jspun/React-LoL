import React, { Component } from 'react'

export default class SummonerName extends Component {

    fetchName = () => {
        let url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + this.props.name + "?api_key=RGAPI-ca1f4d68-d7e4-4dcf-a5d4-1389ec5eaf6f"

        fetch(url)
        .then(function(response){
            return response.json
        })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson));
            return JSON.stringify(myJson)
          });
    }
    
    render() {
        
        return(
            <div>
                {this.fetchName()}
            </div>
            
        )
        
    }
}
