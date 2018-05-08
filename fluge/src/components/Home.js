import React from 'react';
import SearchForm from './SearchForm';

const Home = () => (
  <section className="probootstrap-cover overflow-hidden relative" data-stellar-background-ratio="0.5"  id="section-home">
   <div className="overlay"></div>
   <div className="container">
     <div className="row align-items-center">
       <div className="col-md">
         <h2 className="heading mb-2 display-4 font-light">Explore o Brasil com o Fluge</h2>
         <p className="lead mb-5">As melhores opções para sua próxima viagem!</p>
         <p className="probootstrap-animate">
           <a href="onepage.html" role="button" className="btn btn-primary p-3 mr-3 pl-5 pr-5 text-uppercase d-lg-inline d-md-inline d-sm-block d-block mb-3">See OnePage Verion</a>
         </p>
       </div>
       <div className="col-md">
         <SearchForm />
       </div>
     </div>
   </div>

 </section>
);

export default Home;
