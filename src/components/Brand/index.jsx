import React from 'react';
import moment from 'moment';
import { Flex, Space, Image, Typography } from 'antd';

import { logoStruct, headlineStruct } from './struct';

import IUBImg from './images/iub.png';

const { Title, Text } = Typography;
const { logoSection, logo } = logoStruct;
const { headlineSection, headline } = headlineStruct;

export const BrandLogo = () => {
  return (
    <div {...logoSection}>
      <Flex>
        <Space>
          <Image {...logo} src={IUBImg} />
          <Text>Independent University, Bangladesh</Text>
        </Space>
      </Flex>
    </div>
  );
};

export const BrandHeadline = () => {
  return (
    <Flex {...headlineSection}>
      <Title {...headline}>Annual Performance Appraisal</Title>
      <Text>{moment(new Date()).format('MMMM - DD, YYYY')}</Text>
    </Flex>
  );
};
