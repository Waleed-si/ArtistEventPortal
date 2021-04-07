import React, { Component } from 'react';
import Artists from '../Artists';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistName: "",
            emptyName: false,
        }
    }

    handleChange = event => {
        this.setState({artistName: event.target.value,emptyName:false});
    }


    handleSearch = () => {
        if(this.state.artistName === ""){
            this.setState({
                emptyName: true
            })
        }
        else{
            console.log(this.state.artistName);
        }
    }

    componentDidMount() {
        fetch("https://rest.bandsintown.com/artists/xyz?app_id=APP_ID")
        .then(response => response.json())
          .then(response => { 
              console.log(response) 
            })
      }



    render() {
        
        return (
            <div>
            <div className="intro-section">
                <h1>
                    Looking for Upcoming Events?
            </h1>
                <h2>
                    You can search for artists or events here.
            </h2>
                <div className="intro-input-container">
                    <div id="artist__form" className="intro-input">
                        { this.state.emptyName ? <div className="error__limits">No artist found</div> : ""}

                        <label htmlFor="siteArtistForm" className="sr-only">Domain entry form for site analysis.</label>
                        <input id="siteArtistForm" onChange={this.handleChange} type="text" placeholder="Enter Artist Name..." />
                        <button  onClick={this.handleSearch}><span>Search</span></button>
                    </div>
                </div>
            </div>
            <Artists />
            </div>
        )
    }
}
export default Home;