import React, {memo, useState} from 'react';

const ExpandableGroup = ({children}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = index => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      onPress: () => handleExpand(index),
      expanded: index === expandedIndex,
    }),
  );
};

export default memo(ExpandableGroup);
