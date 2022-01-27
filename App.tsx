/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import CalendarModule from './src/modules/calendar-module';

const App = () => {
  const doSomething = () => {
    console.log(CalendarModule.getConstants().DEFAULT_EVENT_NAME);
    console.log(CalendarModule.getConstants().HURRY_BOOL);
    CalendarModule.createCalendarEvent(
      'testName',
      'testLocation',
      (eventId, test) => {
        console.log('EVENT ID: ', eventId);
        console.log('extra param', test);
      },
    );
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <TouchableOpacity onPress={() => doSomething()} style={styles.button}>
        <Text>UPDATE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    color: 'red',
    marginTop: 50,
  },
  mainBackground: {
    height: '100%',
    width: '100%',
  },
});

export default App;
