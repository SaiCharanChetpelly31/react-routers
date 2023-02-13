import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export const Books = () => {
    const {id} = useParams();
    const obj = useOutletContext()
  return <div><h1>Books {id} {obj.hello}</h1></div>;
};
