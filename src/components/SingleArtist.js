import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SingleArtist extends Component {
   
    // Event trigger on clicking individual artist

    artistClick = (artist) => {
        this.props.history.push({
            pathname: '/artists-events',
            state: { detail: artist }
        })
    }


    // Function to validate url to display as per wireframe given

    validFacebookUrl = (url) => {
        let newUrl = url.split("www.");
        return newUrl[1];
    }

    render() {
        const { artist } = this.props;
        return (
            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div className="single-artist d-flex align-items-center" onClick={() => this.artistClick(artist)}>
                    <div>
                        <img className="img-fluid" src={artist.thumb_url} alt={artist.name} />
                    </div>
                    <div className="d-flex flex-column pl-3 pr-3">
                        <h3>{artist.name}</h3>
                        <a target="_blank" rel="noreferrer" href={artist.facebook_page_url}>{this.validFacebookUrl(artist.facebook_page_url)}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SingleArtist);