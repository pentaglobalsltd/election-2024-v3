import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import {Get} from "./../services/axiosCall";
import apis from "../services/Apis";

import { responseStatus } from "../const/responseStatus";

const useDivisionVoteCount = () => {
    const _menu = useSelector((state) => state.menu);
    const { selectedMenu } = _menu;

    const [divisionVoteCount, setDivisionVoteCount] = useState(null);
    const handleDivisionVoteCount = (count) => setDivisionVoteCount(count);

    const fetchVoteCount = () => {
        Get({url: `${apis.DIVISION_VOTE_COUNT}/${selectedMenu}`}).then(res=>{
            if(responseStatus.SUCCESS === res.status)
            handleDivisionVoteCount(res.data.results)
        })
    };


    useEffect(()=>{
        if(Number(selectedMenu)>=0)
            fetchVoteCount()
        else handleDivisionVoteCount(null)
    },[selectedMenu]);

    return { divisionVoteCount, handleDivisionVoteCount }
}

export default useDivisionVoteCount;