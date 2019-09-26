import React from "react";

export const onRenderBody = ({setHeadComponents}) => {
  setHeadComponents([
    <link key="roboto" rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />,
    <link key="material-icon" rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  ]);
}
