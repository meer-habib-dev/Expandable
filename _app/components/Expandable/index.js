import React, {useContext, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from '../../styles/styles.expandable';

const ExpandableContext = React.createContext();

const Expandable = ({children, onPress, expanded}) => {
  const requiredComponents = [
    {
      key: 'ExpandableHeader',
      error: 'Expandable.Header',
    },
    {
      key: 'ExpandableIcon',
      error: 'Expandable.Icon',
    },
    {
      key: 'ExpandableBody',
      error: 'Expandable.Body',
    },
  ];

  const childComponents = React.Children.toArray(children).map(
    child => child.type.name,
  );

  const missingComponents = requiredComponents.filter(
    component => !childComponents.includes(component.key),
  );
  if (missingComponents.length > 0) {
    throw new Error(
      `Missing required components in Expandable: ${missingComponents
        .map(item => item.error)
        .join(', ')}`,
    );
  }

  const header = useRef(null);
  const icon = useRef(null);
  const body = useRef(null);

  const [singleExpanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    onPress ? onPress() : setExpanded(expand => !expand);
  };
  const modExpanded = onPress ? expanded : singleExpanded;
  // Extract the Expandable.Header component's text (React.Children.toArray(children))
  const renderText = comp => {
    return React.Children.toArray(children)
      .filter(child => child.type === comp)
      .map(child => child.props.children)
      .join('');
  };
  const expandedIcon = modExpanded
    ? require('../../Assets/images/minus.png')
    : require('../../Assets/images/plus.png');
  return (
    <ExpandableContext.Provider
      value={{header, icon, body, toggleExpanded, modExpanded, expandedIcon}}>
      <View>
        <ExpandableHeader>{renderText(Expandable.Header)}</ExpandableHeader>
        {modExpanded && (
          <ExpandableBody>{renderText(Expandable.Body)}</ExpandableBody>
        )}
      </View>
    </ExpandableContext.Provider>
  );
};

const ExpandableHeader = ({children}) => {
  const context = useContext(ExpandableContext);

  if (context?.header === undefined || context?.header === null) {
    throw new Error(
      'Expandable.Header must be used inside the Expandable component.',
    );
  }

  return (
    <TouchableOpacity
      onPress={context?.toggleExpanded}
      style={styles.titleWrapper}>
      <Text style={styles.title}>{children}</Text>
      <ExpandableIcon />
    </TouchableOpacity>
  );
};

const ExpandableIcon = () => {
  const context = useContext(ExpandableContext);

  if (!context?.icon) {
    throw new Error(
      'Expandable.Icon must be used inside the Expandable component.',
    );
  }

  return (
    <View ref={context?.icon}>
      <Image
        style={styles.icon}
        source={context.expandedIcon}
        resizeMode="cover"
      />
    </View>
  );
};

const ExpandableBody = ({children}) => {
  const context = useContext(ExpandableContext);

  if (!context?.body) {
    throw new Error(
      'Expandable.Body must be used inside the Expandable component.',
    );
  }
  return (
    <View style={styles.descriptionWrapper}>
      <Text ref={context?.body} style={styles.description}>
        {children}
      </Text>
    </View>
  );
};
Expandable.Header = ExpandableHeader;
Expandable.Icon = ExpandableIcon;
Expandable.Body = ExpandableBody;
export default Expandable;
