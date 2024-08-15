import { useEffect, useState } from "react";

import {Get} from "./../services/axiosCall";
import apis from "../services/Apis";

import { responseStatus } from "../const/responseStatus";

const useVoteCount = () => {
    const [voteCount, setVoteCount] = useState(null);

    const fetchVoteCount = () => {
        Get({url: apis.VOTE_COUNT}).then(res=>{
            if(responseStatus.SUCCESS === res.status)
                setVoteCount(res.data)
        })
    };


    useEffect(()=>fetchVoteCount(),[]);

    return { voteCount }
}

export default useVoteCount;