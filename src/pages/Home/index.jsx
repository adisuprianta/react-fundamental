import React from 'react';
import Image from '../../assets/images/gambar.png';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-primary">Ini adalah Landing Page</h1>
        <img src={Image} alt="" />
      </>
    );
  }
}
