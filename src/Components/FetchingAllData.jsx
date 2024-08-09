import React from "react";
import { useEffect } from "react";
import fetchData from "../Utilities/FetchingData";
import { useDispatch, useSelector } from "react-redux";
import { StoreAllDataActions } from "../Store/StoreAllData";
import { LoadingAction } from "../Store/Loading";

const FetchingAllData = () => {
  const dispatch = useDispatch();

  const Loading = useSelector((store) => store.Loading);

  const query= useSelector(store=>store.WritingQuery)
  useEffect(() => {
    if(Loading.oneTimeFetchDone) return;
    dispatch(LoadingAction.FechingStart())
    fetchData(`search/?q=New${query}`).then(({contents
    }) => {
      dispatch(StoreAllDataActions.addData(contents));
      dispatch(LoadingAction.FechingDone())
      dispatch(LoadingAction.OneTimeFetchDone())
    });
  }, [query]);


return <>
</>
};

export default FetchingAllData;

