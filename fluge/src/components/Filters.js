import React, { Component } from 'react';

export default class Filters extends Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    const { target } = event;
    const { name, value } =  target;
    this.props.applyFilter(name, value);
  }

  render() {
    const { shiftFilter } = this.props;
    return (
      <div className="card probootstrap-animate fadeInUp probootstrap-animated">
        <div className="card-body">
          <h5>Filtrar Voos</h5>
        </div>
        <div className="card-header">Turno</div>
        <div className="card-body">
          <p>
            <input
              type="checkbox"
              className="mr-3"
              onChange={this.handleFilterChange}
              name="shiftFilter"
              value="evening"
              checked={(shiftFilter === 'evening')}
            />
            Manhã (05h - 12h)
          </p>
          <p>
            <input
              type="checkbox"
              className="mr-3"
              onChange={this.handleFilterChange}
              name="shiftFilter"
              value="afternoon"
              checked={(shiftFilter === 'afternoon')}
            />
            Tarde (12h - 18h)
          </p>
          <p>
            <input
              type="checkbox"
              className="mr-3"
              onChange={this.handleFilterChange}
              name="shiftFilter"
              value="night"
              checked={(shiftFilter === 'night')}
            />
            Noite (18h - 05h)
          </p>
        </div>
      </div>
    );
  }
}
