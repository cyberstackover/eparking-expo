'use strict';

import React, { Component } from 'react';
import { AsyncStorage, FlatList, ActivityIndicator, TouchableHighlight, Dimensions } from 'react-native';
import { Container, Footer, FooterTab,Textarea, Button, Header, DatePicker, Content, Form, Picker, Label, Body, Item, Input, Left, Right, Icon,  Text, Title, Thumbnail, View } from 'native-base';
import { StackNavigator } from 'react-navigation';
import GlobalConfig from '../GlobalConfig'

var fullwidth = Dimensions.get('window').width-10;
export default class confirmWaitingHangar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonUrl: GlobalConfig.SERVERHOST+'/index.php/api/',
            isLoading: true,
            problem:'',
            statusConfirm:''
            
        } 
    }
    
    componentDidMount(){
        
    }
    
    // Onchange value problem 
    onValueChangeProblem(value) {   
        this.setState({
            selected: value
          });
    }

    // Onchange value status 
    onValueChangeStatus(value) {   
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
                <Title style={{ color: '#fff' }}>Create Order Parking</Title>
            </Body>
            <Right>  
            </Right> 
            </Header>
            <Content>
                <Form style={{width:'96%'}}>
                    <Item stackedLabel> 
                        <Label>PROBLEM *</Label>
                        <Picker 
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: fullwidth }}
                            placeholder="Select Problem"
                            placeholderStyle={{ color: "#bfc6ea" }} 
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.problem}
                            onValueChange={this.onValueChangeProblem.bind(this)}
                            >
                            <Picker.Item label="No Problem" value="key0" />
                            <Picker.Item label="Fixing" value="key1" />
                            <Picker.Item label="On Progress" value="key2" />     
                        </Picker> 
                    </Item>
                   
                    <Item stackedLabel>
                        <Label>NOTE</Label>  
                        <Textarea bordered style={{ width: '100%',marginBottom:15,marginTop:15 }} value={this.state.note_order} onChangeText={(text) => this.setState({note_order:text})}/>
                    </Item>

                    <Item stackedLabel> 
                        <Label>Status *</Label>
                        <Picker 
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: fullwidth }}
                            placeholder="Select Problem"
                            placeholderStyle={{ color: "#bfc6ea" }} 
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.statusConfirm}
                            onValueChange={this.onValueChangeStatus.bind(this)}
                            >
                            <Picker.Item label="No Problem" value="key0" />
                            <Picker.Item label="Fixing" value="key1" />
                            <Picker.Item label="On Progress" value="key2" />     
                        </Picker> 
                    </Item>
                </Form>
                <View  style={{flexDirection:'row',alignSelf:'center',padding:10,marginLeft:10}}> 	
                    <Button block onPress={() => this.props.navigation.navigate("repositionOrderParking")} style={{ margin: 15, marginTop: 50 , backgroundColor:"green"}}>
                        <Text>Create</Text>
                    </Button>
                    <Button block style={{ margin: 15, marginTop: 50 , backgroundColor:"red"}}>
                        <Text>Cancel</Text>
                    </Button>
                </View>
            </Content>
      </Container>
    );
  }
}

