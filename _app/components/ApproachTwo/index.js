import {Text, View} from 'react-native';
import React, {memo} from 'react';
import ExpandableGroup from '../ExpandableGroup';
import AlternativeExpandable from '../AlternativeExpandable';
import {styles} from '../../@lib/styles/styles.expandable';
import {flutterQuestions} from '../../@lib/assets/data/accordionData';

const ApproachTwo = () => {
  return (
    <>
      <Text style={styles.sectionText}>Approach Two</Text>
      <ExpandableGroup>
        {flutterQuestions.map((item, index) => (
          <AlternativeExpandable
            key={index}
            title={item.title}
            description={item.des}
          />
        ))}
      </ExpandableGroup>
      <AlternativeExpandable
        title={'Meer Habib (Flutter)'}
        description={
          'Meet Meer Habib, a passionate learner diving into the world of Flutter. With a love for mobile app development, Meer is excited to create innovative and user-friendly applications. Stay tuned for their future contributions to the Flutter community!'
        }
      />
      <View style={styles.space} />
    </>
  );
};

export default memo(ApproachTwo);
