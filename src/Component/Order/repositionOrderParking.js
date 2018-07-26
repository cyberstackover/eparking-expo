'use strict';

import React, { Component } from 'react';
import { AsyncStorage, FlatList, ActivityIndicator, TouchableHighlight, Dimensions } from 'react-native';
import { Container, Footer, FooterTab,Textarea, Button, Header, DatePicker, Content, Form, Picker, Label, Body, Item, Input, Left, Right, Icon,  Text, Title, Thumbnail, View } from 'native-base';
import { StackNavigator } from 'react-navigation';
import GlobalConfig from '../GlobalConfig'

var fullwidth = Dimensions.get('window').width-10;
export default class repositionOrderParking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonUrl: GlobalConfig.SERVERHOST+'/index.php/api/',
            isLoading: true,
            station:'',
            movement:''
            
        } 
    }
    
    componentDidMount(){
        
    }
    
    // Onchange value station
    onValueChangeStation(value) {   
        this.setState({
            selected: value
          });
    }

    // Onchange value movement 
    onValueChangeMovement(value) {   
        this.setState({
            selected: value
          });
    }
    
    
  render() { 
    
    const { navigate } = this.props.navigation; 
    return (
        <Container>
            <Header style={{ backgroundColor: '#04245b' }}
            androidStatusBarColor="#002f81"> 
            <Left>
                <Button
                transparent
                onPress={() => this.props.navigation.navigate("Order")}>
                <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body> 
                <Title style={{ color: '#fff' }}>Reposition</Title>
            </Body>
            <Right /> 
            </Header>
            <Content>
                <Form style={{width:'96%'}}>
                    <Item stackedLabel> 
                        <Label>STATION</Label>
                        <Picker 
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: fullwidth }}
                            placeholder="Select Problem"
                            placeholderStyle={{ color: "#bfc6ea" }} 
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.station}
                            onValueChange={this.onValueChangeStation.bind(this)}
                            >
                            <Picker.Item label="Soekarno Hatta" value="key0" />
                            <Picker.Item label="Juanda" value="key1" />
                            <Picker.Item label="Halim Perdana Kusuma" value="key2" />     
                        </Picker> 
                    </Item>
                   
                    <Item stackedLabel> 
                        <Label>MOVEMENT TO</Label>
                        <Picker 
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: fullwidth }}
                            placeholder="Select Problem"
                            placeholderStyle={{ color: "#bfc6ea" }} 
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.movement}
                            onValueChange={this.onValueChangeMovement.bind(this)}
                            >
                            <Picker.Item label="Select movement to" value="key0" />
                            <Picker.Item label="test" value="key1" />
                            <Picker.Item label="test 2" value="key2" />     
                        </Picker> 
                    </Item>
                </Form>
                <View  style={{flexDirection:'row',alignSelf:'center',padding:10,marginLeft:10}}> 	
                    <Button block style={{backgroundColor:'#2ff424',marginRight:40,width:130}}> 
                            <Text>Save</Text>
                    </Button>
                    <Button block style={{backgroundColor:'#063299',width:130}}> 
                            <Text>Cancel</Text>
                    </Button>
                </View>
            </Content>
      </Container>
    );
  }
}

