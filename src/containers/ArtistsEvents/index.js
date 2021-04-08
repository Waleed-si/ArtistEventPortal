import React, { Component } from 'react';
import SingleArtist from '../../components/SingleArtist';
import SingleEvent from '../../components/SingleEvent';
import { withRouter } from 'react-router-dom';

class ArtistsEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventsList: [],
            eventsStatus: false
        }
    }

    //React Lifecycle Method where we can get all events list from given API
    componentDidMount = () => {
        fetch(`https://rest.bandsintown.com/artists/${this.props.location.state.detail.name}/events?app_id=APP_ID`)
            .then(response => response.json())
            .then(response => {
                if (response === "") {
                    this.setState({ eventsStatus: true })
                }
                else {
                    this.setState({ eventsList: response })
                }
            })
    }



    render() {
        const { eventsStatus, eventsList } = this.state;
        return (
            <div className="container artist-listing-section">
                <div className="row mb-3 ">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <span onClick={() => this.props.history.goBack()} className="back-link">&#60; Back</span>
                    </div>
                </div>
                <div className="row mt-5">
                    <SingleArtist artist={this.props.location.state.detail} />
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        {eventsStatus ?
                            <span><span className="result-text">There are no upcoming events</span></span> :
                            <span><span className="counter">{eventsList.length}</span><span className="result-text">upcoming events</span></span>
                        }
                    </div>
                </div>
                <div className="row mt-2">
                    {eventsList.map((event, index) => <SingleEvent key={index} event={event} />)}
                </div>
            </div>
        );
    }
}

export default withRouter(ArtistsEvents);