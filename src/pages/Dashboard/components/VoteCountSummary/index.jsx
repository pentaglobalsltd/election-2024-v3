import React from 'react';
import { Affix, Statistic, Card, Flex } from 'antd';

import { toBN } from 'react-en-bn';

import useVoteCount from '../../../../hooks/useVoteCount';

const VoteCountSummary = () => {
  const { voteCount } = useVoteCount();
  const {
    invalid_vote: invalidVote,
    total_vote: totalVote,
    valid_vote: validVote,
  } = voteCount || {};

  return (
    <Affix>
      <Card>
        {totalVote ? (
          <Statistic
            className="vote"
            title="মোট ভোট"
            value={toBN(totalVote)}
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
          {totalVote ? (
            <Statistic
              className="vote"
              title="বৈধ ভোট"
              value={toBN(validVote)}
              valueStyle={{
                color: '#3f8600',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            />
          ) : (
            <></>
          )}

          {totalVote ? (
            <Statistic
              className="vote"
              title="অবৈধ ভোট"
              value={toBN(invalidVote)}
              valueStyle={{
                color: '#ff8399',
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
