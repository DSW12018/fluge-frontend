import React, { Component } from 'react';

export default class SearchForm extends Component {
  render() {
    return (
      <form action="#" className="probootstrap-form">
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md">
              <div className="form-group">
                <label>ORIGEM</label>
                <select className="form-control">
                  <option value="Australia">Australia</option>
                  <option value="Japan">Japan</option>
                  <option value="United States">United States</option>
                  <option value="Brazil">Brazil</option>
                  <option value="China">China</option>
                  <option value="Israel">Israel</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Canada">Canada</option>
                  <option value="Chile">Chile</option>
                  <option value="Chile">Zimbabwe</option>
                </select>
              </div>
            </div>
            <div className="col-md">
              <div className="form-group">
                <label>DESTINO</label>
                <select className="form-control">
                  <option value="Australia">Australia</option>
                  <option value="Japan">Japan</option>
                  <option value="United States">United States</option>
                  <option value="Brazil">Brazil</option>
                  <option value="China">China</option>
                  <option value="Israel">Israel</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Canada">Canada</option>
                  <option value="Chile">Chile</option>
                  <option value="Chile">Zimbabwe</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md">
              <div className="form-group">
                <label for="probootstrap-date-departure">SAÍDA</label>
                <div className="probootstrap-date-wrap">
                  <span className="icon ion-calendar"></span>
                  <input type="text" id="probootstrap-date-departure" className="form-control" placeholder="" />
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="form-group">
                <label for="probootstrap-date-arrival">CHEGADA</label>
                <div className="probootstrap-date-wrap">
                  <span className="icon ion-calendar"></span>
                  <input type="text" id="probootstrap-date-arrival" className="form-control" placeholder="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md">
              <div className="form-group">
                <label>Adultos</label>
                <select className="form-control">
                  <option value="0">0</option>
                  <option value="1" selected>1</option>
                </select>
              </div>
            </div>
            <div className="col-md">
              <div className="form-group">
                <label>Crianças</label>
                <select className="form-control">
                  <option value="0">0</option>
                  <option value="1">1</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <input type="submit" value="Buscar Voos" className="btn btn-danger btn-block" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
