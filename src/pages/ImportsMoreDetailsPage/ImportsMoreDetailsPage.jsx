import React from "react";
import { Button } from "@material-ui/core";

import { Link } from "react-router-dom";
import Layout from '../../components/Layout/Layout';

export default function ImportsMoreDetailsPage() {

  return (
    <Layout>
        <div><h1>Imports more details</h1></div>
        <div>This is where the secrets are</div>
        <div> 
          <Button variant='outlined' component={Link} to="/" >
             Take me Home
          </Button>
        </div>
    </Layout>
  );
}