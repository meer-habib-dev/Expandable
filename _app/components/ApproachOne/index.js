import {Text} from 'react-native';
import React, {memo} from 'react';
import ExpandableGroup from '../ExpandableGroup';
import Expandable from '../Expandable';
import {styles} from '../../styles/styles.expandable';
import {reactNativeQuestions} from '../../Assets/data/accordionData';

const ApproachOne = () => {
  return (
    <>
      <Text style={styles.sectionText}>Approach One</Text>
      <ExpandableGroup>
        {reactNativeQuestions.map((item, index) => (
          <Expandable key={index}>
            <Expandable.Header>{item.title}</Expandable.Header>
            <Expandable.Icon />
            <Expandable.Body>{item.des}</Expandable.Body>
          </Expandable>
        ))}
      </ExpandableGroup>

      <Expandable>
        <Expandable.Header>Meer Habib (React Native)</Expandable.Header>
        <Expandable.Icon />
        <Expandable.Body>
          Meet Meer Habib, an enthusiastic learner exploring the realm of React
          Native. With a deep interest in mobile app development, Meer is eager
          to build intuitive and dynamic applications. Keep an eye out for their
          future contributions to the React Native community!
        </Expandable.Body>
      </Expandable>
    </>
  );
};
export default memo(ApproachOne);
