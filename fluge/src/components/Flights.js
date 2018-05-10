import React from 'react';
import { graphql } from 'react-apollo'
import FlightCard from './FlightCard';
import gql from 'graphql-tag'

const SEARCH_FLIGHT_QUERY = gql`
  query {
    flights(
      origin_id: "e57bfbf4-f9e9-43c7-927d-64f28813cd14",
      destination_id: "ad275667-ff3c-4794-a089-0038a07f992b"
    ) {
      airline {
        iata,
        name
      },
      flight_number,
      departure,
      arrival,
      duration,
      origin {
        iata,
    	  name
      },
      destination {
        iata,
        name
      }
    }
  }
`
class Flight extends React.Component {
  render() {
    const { flightsQuery } = this.props;

    if (flightsQuery && flightsQuery.loading) {
      return <div>Loading</div>
    }

    // 2
    if (flightsQuery && flightsQuery.error) {
      return <div>Error</div>
    }

    const flights = flightsQuery.flights.map(flight => <FlightCard flight={flight} />);

    return (
      <div>
        <section className="probootstrap-cover overflow-hidden relative" data-stellar-background-ratio="0.5" id="section-home">
          <div className="overlay"></div>
            <div className="container">
              <div className="row align-items-center text-center">
                <div className="col-md">
                  <h2 className="heading mb-2 display-4 font-light probootstrap-animate">Get In Touch</h2>
                  <p className="lead mb-5 probootstrap-animate">Hope u like it! another free template by <a href="https://uicookies.com/" target="_blank">uicookies.com</a> Under License <a href="https://uicookies.com/license" target="_blank">CC 3.0</a></p>
                  <p className="probootstrap-animate">
                    <a href="https://free-template.co/" target="_blank" role="button" className="btn btn-primary p-3 mr-3 pl-5 pr-5 text-uppercase d-lg-inline d-md-inline d-sm-block d-block mb-3">More Templates Here</a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="probootstrap_section bg-light">
              <div className="container">
                <div className="row text-center mb-5 probootstrap-animate fadeInUp probootstrap-animated">
                  <div className="col-md-12">
                    <h2 className="display-4 border-bottom probootstrap-section-heading">Brasília (BSB) ->    x Rio de Janeiro (SDU)</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="card probootstrap-animate fadeInUp probootstrap-animated">
                      <div className="card-body">
                        <h5>Filtrar Voos</h5>
                      </div>
                      <div className="card-header border-0">Companhia Aérea</div>
                      <div className="card-body">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                      </div>
                      <div className="card-header">Turno</div>
                      <div className="card-body">
                        <p>Manhã</p>
                        <p>Tarde</p>
                        <p>Noite</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card alert alert-info">Selecione o voo de ida.</div>
                    <div className="row">
                      <div className="col-md-12">
                        {flights}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>

    );
  }
}

export default graphql(SEARCH_FLIGHT_QUERY, { name: 'flightsQuery' })(Flight);
