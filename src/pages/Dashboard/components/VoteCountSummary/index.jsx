import React from 'react';
import { Affix, Statistic, Card, Flex } from 'antd';

import { toBN } from 'react-en-bn';
import totalVoteCounts from '../../../../staticData/totalCounts.json';

const VoteCountSummary = () => {
  const {
    total_voter: totalVoter,
    male_voter: maleVoter,
    female_voter: femaleVoter,
    hijra_voter: hijraVoter,
  } = totalVoteCounts || {};

  return (
    <Affix>
      <Card>
        {totalVoter ? (
          <Statistic
            className="vote"
            title="মোট ভোটার"
            value={toBN(totalVoter)}
            valueStyle={{
              color: '#3d7bf2',
              fontWeight: 'bold',
            }}
            separator=","
          />
        ) : (
          <></>
        )}

        <hr />
        <Flex gap="16px">
          {maleVoter ? (
            <Statistic
              className="vote"
              title="পুরুষ ভোটার"
              value={toBN(maleVoter)}
              valueStyle={{
                color: '#3f8600',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            />
          ) : (
            <></>
          )}

          {femaleVoter ? (
            <Statistic
              className="vote"
              title="মহিলা ভোটার"
              value={toBN(femaleVoter)}
              valueStyle={{
                color: '#3f8600',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            />
          ) : (
            <></>
          )}

          {hijraVoter ? (
            <Statistic
              className="vote"
              title="হিজড়া ভোটার"
              value={toBN(hijraVoter)}
              valueStyle={{
                color: '#3f8600',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            />
          ) : (
            <></>
          )}
        </Flex>
      </Card>
    </Affix>
  );
};

export default VoteCountSummary;
