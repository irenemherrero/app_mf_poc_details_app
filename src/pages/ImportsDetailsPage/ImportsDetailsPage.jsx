import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import Layout from '../../components/Layout/Layout';

export default function ImportsDetailsPage() {

  return (
    <Layout>
        <div><h1>Imports details</h1></div>
        <div>
          <p>Take me deeper</p>
            <Button variant='outlined' component={Link} to="/imports/details/more-details" >
              More details
            </Button>
        </div>
    </Layout>
  );
}