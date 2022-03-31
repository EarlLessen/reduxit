import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';

const RoomScreen = ({allNames: listOfNames = []}) => {
  return (
    <ScrollView>
      <View>
        {listOfNames.map((aName, index) => (
          <Text key={index} style={{fontSize: 30, color: 'blue'}}>
            {index + 1}. {aName.text}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};
const mapStateToProps = state => ({
  allNames: state.allNames,
});
export default connect(mapStateToProps)(RoomScreen);
