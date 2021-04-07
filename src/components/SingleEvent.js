import React, { Component } from 'react';

class SingleEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div className="single-event">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 pl-0 pr-0">
                        <h4>Event Detials</h4>
                    </div>

                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 pl-0 pr-0 d-flex mt-2">
                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 pl-0">
                            <div className="detail-head">Country</div>
                            <div className="detail-text">Pakistan</div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 pr-0">
                            <div className="detail-head">City</div>
                            <div className="detail-text">Lahore</div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 pl-0 pr-0 d-flex mt-4">
                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 pl-0">
                            <div className="detail-head">Venue</div>
                            <div className="detail-text">Avari Hotel</div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 pr-0">
                            <div className="detail-head">Date</div>
                            <div className="detail-text">07/04/2021</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleEvent;