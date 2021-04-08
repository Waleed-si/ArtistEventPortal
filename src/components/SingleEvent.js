import React, { Component } from 'react';

class SingleEvent extends Component {

    // Function to validate date to display as per wireframe given

    validDate = (date) => {
        let onlydate = date.split("T");
        let dateSpliter = onlydate[0].split("-");
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return dateSpliter[2] + ' ' + monthNames[parseInt(dateSpliter[1])] + ', ' + dateSpliter[0];
    }

    render() {
        const { event } = this.props;
        return (
            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div className="single-event">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 pl-0 pr-0">
                        <h4>Event Detials</h4>
                    </div>

                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 pl-0 pr-0 d-flex mt-2">
                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 pl-0">
                            <div className="detail-head">Country</div>
                            <div className="detail-text">{event.venue.country}</div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 pr-0">
                            <div className="detail-head">City</div>
                            <div className="detail-text">{event.venue.city}</div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 pl-0 pr-0 d-flex mt-4">
                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 pl-0">
                            <div className="detail-head">Venue</div>
                            <div className="detail-text">{event.venue.name}</div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 pr-0">
                            <div className="detail-head">Date</div>
                            <div className="detail-text">{this.validDate(event.datetime)}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleEvent;