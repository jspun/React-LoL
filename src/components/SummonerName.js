import React, { Component } from 'react'

export default class SummonerName extends Component {

    state = {
        summonerID:''

    };

    componentDidMount(){
        fetch("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + this.props.name + "?api_key=RGAPI-ca1f4d68-d7e4-4dcf-a5d4-1389ec5eaf6f",
        {mode :'no-cors',
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true} )
        .then(results => {

            return results.json();
            ``
  

            })
            

    }
    
    render() {
        
        return(
            <div>
                
            </div>
            
        )
        
    }
}
