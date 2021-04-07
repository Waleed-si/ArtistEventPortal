import React, { Component } from 'react';
import SingleArtist from '../../components/SingleArtist';

class Artists extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }   
    }

    render(){
        return(
            <div className="container artist-listing-section">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <span className="counter">3</span><span className="result-text">Results Found for <strong>"Maroon 5"</strong></span>
                    </div>
                </div>
                <div className="row">
                    <SingleArtist />
                    <SingleArtist />
                    <SingleArtist />
                </div>
            </div>
        );
    }
}

export default Artists;