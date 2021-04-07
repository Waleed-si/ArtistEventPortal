import React, { Component } from 'react';

class SingleArtist extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }   
    }

    render(){
        return(
            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div className="single-artist">
                    <img className="img-fluid" src="https://photos.bandsintown.com/thumb/8479721.jpeg" alt="Maroon 5" />
                    <h3>Maroon 5</h3>
                    <a target="_blank" rel="noreferrer" href="http://www.facebook.com/5330548481">facebook.com/5330548481</a>
                </div>
            </div>
        );
    }
}

export default SingleArtist;