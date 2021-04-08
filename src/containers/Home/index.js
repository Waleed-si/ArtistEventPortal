import React, { Component } from 'react';
import Artists from '../Artists';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistName: "",
            emptyName: false,
            noRecordFound: false,
            artistsList: []
        }
    }

    // Event trigger when user type artist name
    handleChange = event => {
        this.setState({ artistName: event.target.value, emptyName: false, noRecordFound: false });
    }

    //Event trigger when user click on search button after entering artist name
    handleSearch = () => {
        if (this.state.artistName === "") { this.setState({ emptyName: true }) }
        else {
            fetch(`https://rest.bandsintown.com/artists/${this.state.artistName}?app_id=APP_ID`)
                .then(response => response.json())
                .then(response => {
                    if (response === "") { this.setState({ noRecordFound: true }) }
                    else {
                        let details = [];
                        details.push(response);
                        this.setState({ artistsList: details });
                    }
                })
        }
    }


    render() {
        const { noRecordFound, emptyName, artistsList } = this.state;
        return (
            <div>
                <div className="intro-section">
                    <h1>Looking for Upcoming Events?</h1>
                    <h2>You can search for artists or events here.</h2>
                    <div className="intro-input-container">
                        <div id="artist__form" className="intro-input">
                            {emptyName ? <div className="error__limits">Enter artist name</div> : ""}
                            {noRecordFound ? <div className="error__limits">No artist found against this name</div> : ""}
                            <label htmlFor="siteArtistForm" className="sr-only">Domain entry form for site analysis.</label>
                            <input id="siteArtistForm" onChange={this.handleChange} type="text" placeholder="Enter Artist Name..." />
                            <button onClick={this.handleSearch}><span>Search</span></button>
                        </div>
                    </div>
                </div>
                { (artistsList.length !== 0) ? <Artists artistDetails={artistsList} /> : ""}
            </div>
        )
    }
}
export default Home;