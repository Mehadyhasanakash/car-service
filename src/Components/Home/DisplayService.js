import React from 'react';

const DisplayService = ({car, hendalClicke}) => {
  
    const { title, thumbnailUrl,id} = car
    return (
        <div className="col">
        <div className="card">
          <img src={thumbnailUrl} className="card-img-top img-fluid" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card id: {id}</h5>
            <h5 className="card-title">Card title: {title}</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <button onClick={()=> hendalClicke()} type="button" className="btn btn-primary">Click me</button>
        </div>
        
      </div>
    );
};

export default DisplayService;