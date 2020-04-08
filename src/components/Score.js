import React, { Component } from 'react'

const Score = props => {
  return (
    <>
      <p>Date: {props.date}</p>
      <p>Score: {props.score}</p>
    </>
  );
}
export default Score;