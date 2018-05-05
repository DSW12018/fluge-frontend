import React from 'react';

const Home = () => (
  <section className="probootstrap-cover overflow-hidden relative" data-stellar-background-ratio="0.5"  id="section-home">
   <div className="overlay"></div>
   <div className="container">
     <div className="row align-items-center">
       <div className="col-md">
         <h2 className="heading mb-2 display-4 font-light">Explore The World With Ease</h2>
         <p className="lead mb-5">Hope u like it!</p>
         <p className="probootstrap-animate">
           <a href="onepage.html" role="button" className="btn btn-primary p-3 mr-3 pl-5 pr-5 text-uppercase d-lg-inline d-md-inline d-sm-block d-block mb-3">See OnePage Verion</a>
         </p>
       </div>
       <div className="col-md">
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
             <div className="row mb-5">
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
             <div className="row">
               <div className="col-md">
                 <input type="submit" value="Submit" className="btn btn-primary btn-block" />
               </div>
             </div>
           </div>
         </form>
       </div>
     </div>
   </div>

 </section>
);

export default Home;
