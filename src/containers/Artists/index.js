import React, { Component } from 'react';
import SingleArtist from '../../components/SingleArtist';

class Artists extends Component{
    
    render(){
        const {artistDetails} = this.props;
        return(
            <div className="container artist-listing-section">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <span className="counter">{artistDetails.length}</span><span className="result-text">Result Found for <strong>"{artistDetails[0].name}"</strong></span>
                    </div>
                </div>
                <div className="row mt-4">
                    {artistDetails.map((artist , index) =><SingleArtist key = {index} artist = {artist} />)}
                </div>
            </div>
        );
    }
}

export default Artists;