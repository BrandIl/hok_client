import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";

export const dashboard = () => (
  <Card>
    <Title title="Welcome to the administration" />
    <CardContent>Lorem ipsum sic dolor amet...</CardContent>
  </Card>
);
