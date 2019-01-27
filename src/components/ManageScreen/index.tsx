import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<{}>;
}

class ManageScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ManageScreen</Text>
      </View>
    );
  }
}

export default ManageScreen;
