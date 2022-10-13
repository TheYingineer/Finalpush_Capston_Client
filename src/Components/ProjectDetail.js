import React from "react";
import { Container, Paper, Chip } from "@mui/material";
import indvProject from "../indvProject.json";
import { useParams } from "react-router-dom";

const ProjectDetail = (props) => {
  const id = useParams().id;
  const indivProjectJson = indvProject.find((c) => c.id === Number(id));
  console.log(indivProjectJson);

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="individual-paper">
        <h1> {indivProjectJson.product_name}</h1>
        {/* {Object.keys(indivProjectJson).map((key, idx) => { */}
        {/* // return <Chip label={`${key}: ${indivProjectJson[key]}`}></Chip>; */}
        {/* })} */}

        <div>
          <h3>{indivProjectJson.product_description}</h3>
          <h3>{indivProjectJson.metal_thickness}</h3>
          <br></br>
          <h3>{indivProjectJson.price}</h3>
          <img src={indivProjectJson.pic} alt="test pic" />
        </div>
      </Paper>
    </Container>
  );
};

export default ProjectDetail;
