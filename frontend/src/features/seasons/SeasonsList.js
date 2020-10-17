import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectAllSeasons,
  selectSeasonById,
  selectFirstSeason
} from "./seasonsSlice";
import { Select } from "../../components/Select/Select";

export const SeasonsList = React.memo(({ valueChanged }) => {
  const allSeasons = useSelector(selectAllSeasons);
  return (
    <Select
      list={{
        id: "seasons",
        title: "season",
        data: allSeasons,
        changeFunc: valueChanged
      }}
    />
  );
});
