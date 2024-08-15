import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import {Get} from "./../services/axiosCall";
import apis from "../services/Apis";

import { responseStatus } from "../const/responseStatus";

const useDistrictVoteCount = () => {
    const _selectedDistrict = useSelector((state) => state.district);
    const { selectedDistrict } = _selectedDistrict || {};
    const { code: selectedDistrictCode } = selectedDistrict || {};

    const [districtVoteCount, setDistrictVoteCount] = useState(null);
    const handleDistrictVoteCount = (count) => setDistrictVoteCount(count);

    const fetchVoteCount = () => {
        Get({url: `${apis.DISTRICT_VOTE_COUNT}/${selectedDistrictCode}`}).then(res=>{
            if(responseStatus.SUCCESS === res.status)
            handleDistrictVoteCount(res.data.results)
        })
    };


    useEffect(()=>{
        if(selectedDistrictCode)
            fetchVoteCount()
        else handleDistrictVoteCount(null)
    },[selectedDistrictCode]);

    return { districtVoteCount, handleDistrictVoteCount }
}

export default useDistrictVoteCount;