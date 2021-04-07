import React, { Component } from 'react';
import SingleArtist from '../../components/SingleArtist';
import SingleEvent from '../../components/SingleEvent';

class ArtistsEvents extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }   
    }

    render(){
        return(
            <div className="container artist-listing-section">
                <div className="row mb-3 ">
                    Back
                </div>
                <div className="row">
                    <SingleArtist />
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <span className="counter">3</span><span className="result-text">upcoming events</span>
                    </div>
                </div>
                <div className="row mt-2">
                    <SingleEvent />
                    <SingleEvent />
                    <SingleEvent />
                </div>
            </div>
        );
    }
}

export default ArtistsEvents;