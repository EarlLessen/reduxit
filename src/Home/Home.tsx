import * as React from 'react';
import {View, Text, Button, ScrollView, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {createName, clear} from '@src/action';
import faker from '@faker-js/faker';
import Toast from 'react-native-toast-message';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// @ts-ignore
const HomeScreen = ({allNames: listOfNames = [], onCreatePressed, onClear}) => {
  const navigation = useNavigation();
  const showSuccess = () => {
    Toast.show({
      type: 'success',
      text1: '👍 New name added.',
      position: 'top',
      visibilityTime: 1000,
    });
  };
  const showClearPrompt = () => {
    Alert.alert(
      'Clear',
      'Are you sure you want to clear all names?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => onClear()},
      ],
      {cancelable: false},
    );
  };
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'column', height: '100%'}}>
        <ScrollView>
          <View>
            {listOfNames.map((aName, index) => (
              <Text key={index} style={{fontSize: 30}}>
                {index + 1}. {aName.text}
              </Text>
            ))}
          </View>
        </ScrollView>
        <View style={{height: 120}}>
          <Button
            title="Add new name"
            onPress={() => {
              onCreatePressed(faker.name.findName());
              showSuccess();
            }}
          />
          <Button
            title={'Clear'}
            onPress={() => {
              showClearPrompt();
            }}
          />
          <Button
            title={'Navigate Away'}
            onPress={() => {
              // @ts-ignore
              navigation.navigate('Room');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = state => ({
  allNames: state.allNames,
});
const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(createName(text)),
  onClear: () => dispatch(clear()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
