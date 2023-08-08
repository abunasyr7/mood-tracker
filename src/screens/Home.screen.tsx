import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {MoodPicker} from '../components/MoodPicker';
import {useAppContext} from '../App.provider';

export const Home: React.FC = () => {
  const appContext = useAppContext();

  const imageUrl =
    'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

  return (
    <View style={styles.container}>
      <Image style={{flex: 1}} source={{uri: imageUrl}} />
      <View style={[StyleSheet.absoluteFill, {justifyContent: 'center'}]}>
        <MoodPicker handleSelectMood={appContext.handleSelectMood} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
