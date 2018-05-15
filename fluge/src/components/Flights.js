import React from 'react';
import { graphql } from 'react-apollo';
import FlightCard from './FlightCard';
import gql from 'graphql-tag';
import Filters from '../containers/Filters';

const SEARCH_FLIGHT_QUERY = gql`
  query flights($origin: String!, $destination: String!){
    flights(
      origin: $origin,
      destination: $destination
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
  _fetchFlights = async () => {
    const { origin, destination } = this.props;
    await this.props.flightsQuery({
      variables: {
        origin,
        destination
      }
    })
  }

  componentDidMount() {
    // this._fetchFlights();
  }

  render() {
    const { flightsQuery } = this.props;

    if (flightsQuery && flightsQuery.loading) {
      return <div>Loading</div>
    }

    // 2
    if (flightsQuery && flightsQuery.error) {
      console.log(flightsQuery.error);
      return <div>Error</div>
    }

    const flights = flightsQuery.flights.map(flight => <FlightCard flight={flight} />);

    return (
      <div>
        <section className="probootstrap-cover overflow-hidden relative" data-stellar-background-ratio="0.5" id="section-home">
          <div className="overlay"></div>
            <div className="container">
            </div>
          </section>
          <section className="probootstrap_section bg-light">
              <div className="container">
                <div className="row text-center mb-5 probootstrap-animate fadeInUp probootstrap-animated">
                  <div className="col-md-12">
                    <h2 className="display-4 border-bottom probootstrap-section-heading">Brasília (BSB) -> Rio de Janeiro (SDU)</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <Filters />
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

// const withData = graphql(COMPANY_QUERY, {
//   options: (ownProps) => ({ variables: { companyId: ownProps.params.companyId } }),
//   props: ({ data: { loading, companyByCompanyId, error } }) => ({
//     loading,
//     error,
//     company: companyByCompanyId,
//   }),
// });


export default graphql(SEARCH_FLIGHT_QUERY, {
  options: (ownProps) => ({
    variables: {
      origin: ownProps.match.params.origin,
      destination: ownProps.match.params.destination
    }
  }),
  name: 'flightsQuery' })(Flight);
