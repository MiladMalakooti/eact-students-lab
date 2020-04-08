import React, { Component } from "react";
import Score from "./Score";

const Student = (props) => {
  let scores = props.scores.map((score) => {
    return <Score date={score.date} score={score.score} />;
  });
  return (
    <div className="student">
      <h3>{props.name}</h3>

      <h3>Bio: {props.bio}</h3>
      {scores}
    </div>
  );
};
export default Student;
