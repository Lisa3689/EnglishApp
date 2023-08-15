import React from "react";
import { useParams } from "react-router-dom";
import CardPage from "../CardPage/CardPage";

const AllCardsPage = () => {
  const { cardId } = useParams;
  console.log(cardId);

  return (
    <>
      <CardPage />
    </>
  );
};

export default AllCardsPage;
