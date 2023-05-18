import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {styles} from './_app/@lib/styles/styles.expandable';
import ApproachOne from './_app/components/ApproachOne';
import ApproachTwo from './_app/components/ApproachTwo';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ApproachOne />
        <ApproachTwo />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
