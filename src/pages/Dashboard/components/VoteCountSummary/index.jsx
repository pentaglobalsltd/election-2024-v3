import React from 'react';
import { Affix, Statistic, Card } from 'antd';

import { toBN } from 'react-en-bn';
import totalVoteCounts from '../../../../staticData/totalCounts.json';
import './styles.css';

const VoteCountSummary = () => {
  const {
    total_voter: totalVoter,
    male_voter: maleVoter,
    female_voter: femaleVoter,
    hijra_voter: hijraVoter,
  } = totalVoteCounts || {};

  return (
    <Affix>
      <Card
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        {totalVoter ? (
          <Statistic
            className="vote"
            title="মোট ভোটার"
            value={totalVoter}
            formatter={(value) => toBN(value.toLocaleString('en-US'))}
            valueStyle={{
              color: '#3d7bf2',
              fontWeight: 'bold',
            }}
          />
        ) : (
          <></>
        )}

        <hr />
        <div className="flex-container">
          {maleVoter ? (
            <Statistic
              className="vote"
              title="পুরুষ ভোটার"
              value={maleVoter}
              formatter={(value) => toBN(value.toLocaleString('en-US'))}
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
              value={femaleVoter}
              formatter={(value) => toBN(value.toLocaleString('en-US'))}
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
              value={hijraVoter}
              formatter={(value) => toBN(value.toLocaleString('en-US'))}
              valueStyle={{
                color: '#3f8600',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            />
          ) : (
            <></>
          )}
        </div>
      </Card>
    </Affix>
  );
};

export default VoteCountSummary;
