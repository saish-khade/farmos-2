// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import SettingsList from 'react-native-settings-list';

class SettingsScreen extends React.Component {
  constructor(){
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {switchValue: false};
  }
  render() {
    var bgColor = '#DCE3F4';
    return (
      <View style={{backgroundColor:'#EFEFF4',flex:1}}>
        <View style={{backgroundColor:'#EFEFF4',flex:1}}>
          <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
          <SettingsList.Item
              icon={<Image style={styles.imageStyle} source={require('./Images/languages.png')}/>}
              title='Change Language'
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() =>this.props.navigation.navigate('LanguageSettingsScreen')}
            />
            
            <SettingsList.Item
              icon={<Image style={styles.imageStyle} source={require('./Images/block-user.png')}/>}
              title='Account Privacy'
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => this.props.navigation.navigate('AccountPrivacy')}
            />
            <SettingsList.Item
              icon={<Image style={styles.imageStyle} source={require('./Images/privacy.png')}/>}
              title='Change Password'
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => this.props.navigation.navigate('ChangePassword')}
            />
            <SettingsList.Item
              icon={
                  <Image style={styles.imageStyle} source={require('./Images/notification.png')}/>
              }
              hasSwitch={true}
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasNavArrow={false}
              title='Notifications'
            />
            <SettingsList.Item
              icon={<Image style={styles.imageStyle} source={require('./Images/monitoring.png')}/>}
              title='Control Center'
              onPress={() => Alert.alert('Route To Control Center Page')}
            />
          </SettingsList>
        </View>
      </View>
    );
  }
  onValueChange(value){
    this.setState({switchValue: value});
  }
};

const styles = StyleSheet.create({
  imageStyle:{
    marginLeft:10,
    alignSelf:'center',
    width:30,
    height:30,
    justifyContent:'center'
  }
});

export default SettingsScreen;