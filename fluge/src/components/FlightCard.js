import React, { Component } from 'react';

export default class FlightCard extends Component {
  render() {
    const { flight } = this.props;
    return (
      <div className="card probootstrap-media d-flex align-items-stretch mb-4 probootstrap-animate fadeInUp probootstrap-animated">
        <div className="card-body">
          <h5 className="mb-3">{flight.airline.name} - {flight.airline.iata}{flight.flight_number}</h5>
          <div className="row">
            <div className="col-md">
              <span>
                <b>Origem</b>
              </span>
              <p>
                {flight.origin.iata}
              </p>
            </div>
            <div className="col-md">
              <span>
                <b>Saída</b>
              </span>
              <p>
                {flight.departure}
              </p>
            </div>
            <div className="col-md">
              <span>
                <b>Duração</b>
              </span>
              <p>{flight.duration}</p>
            </div>
            <div className="col-md">
              <span>
                <b>Destino</b>
              </span>
              <p>
                {flight.destination.iata}
              </p>
            </div>
            <div className="col-md">
              <span>
                <b>Chegada</b>
              </span>
              <p>
                {flight.arrival}
              </p>
            </div>
            <div className="col-md">
              <h5 className="text-nowrap">R$ 230,00</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
