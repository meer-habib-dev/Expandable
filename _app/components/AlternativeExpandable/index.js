import React, {memo, useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {styles} from '../../@lib/styles/styles.expandable';

const AlternativeExpandable = ({title, description, onPress, expanded}) => {
  const [singleExpanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    onPress ? onPress() : setExpanded(exp => !exp);
  };
  const modExpanded = onPress ? expanded : singleExpanded;
  const expandedIcon = modExpanded
    ? require('../../@lib/assets/images/minus.png')
    : require('../../@lib/assets/images/plus.png');
  return (
    <View>
      <TouchableOpacity onPress={toggleExpanded} style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.icon} source={expandedIcon} resizeMode="cover" />
      </TouchableOpacity>
      {modExpanded && (
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    </View>
  );
};

export default memo(AlternativeExpandable);
