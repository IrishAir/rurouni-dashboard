import React from 'react';

export default function StatCard(props) {
  return (
    <div className="card flex">
      <div>
        <img src={props.src} alt={props.src} />
      </div>
      <div className="card-info">
        <p className="light card-lable">{props.lable}</p>
        <p className='title'>{props.title}</p>
      </div>
  </div>
  )
}