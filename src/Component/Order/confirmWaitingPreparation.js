'use strict';

import React, { Component } from 'react';
import { AsyncStorage, FlatList, ActivityIndicator, TouchableHighlight,View,TextInput,TouchableOpacity,ScrollView,ToastAndroid,StyleSheet,Dimensions } from 'react-native';
import { Container, Footer, FooterTab, Button, Header, Content, Body, Item, Input, Left, Right, Icon,  Text, Title, Thumbnail, Toast,Tab, Tabs,Form,Label,Picker,Textarea  } from 'native-base';
import { StackNavigator } from 'react-navigation';
import GlobalConfig from '../GlobalConfig'

var thats;
var fullwidth = Dimensions.get('window').width-10;
export default class confirmWaitingPreparation extends Component {
    constructor(props) {
      super(props); 
      this.state = {
        jsonUrl: GlobalConfig.SERVERHOST,
        id_problem:null,
        is_newproblem:false,
        inputproblem:'',
        inputdescproblem:'',
        listproblem:[],
      }
    }

    // Onchange Problem 
    onValueChangeProblem(value) {  
        this.setState({
            id_problem:value
        });
    }

    //Set New Problem
    setnewproblem(listproblemItem){
        if (this.state.is_newproblem){
            return (
                [<View style={styles.stackedform}>
                                <Label style={styles.labeltext}>New Problem</Label>
                                <TextInput style={{borderColor:'#b3b5b7',borderWidth:1}} placeholder="Type Problem"
                                     onChangeText={(item)=>this.setState({inputnameproblem:item})}
                                    />
                                    <Textarea rowSpan={5} bordered placeholderTextColor='#b3b5b7' placeholder="Description Problem"  style={{width:'100%'}}
                                    onChangeText={(item)=>this.setState({inputdescproblem:item})}
                                    />
                                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                                    <Button style={{backgroundColor:'#b22323',alignSelf:'flex-start',marginLeft:20,marginTop:10}}
                                    iconLeft
                                    onPress={()=>this.savenewproblem()}
                                    > 
                                        <Icon type="MaterialIcons" name='save' />
                                        <Text>Save</Text>
                                    </Button>
                                    <Button style={{backgroundColor:'#818284',alignSelf:'flex-start',marginLeft:20,marginTop:10}}
                                    iconLeft
                                    onPress={()=>this.setState({is_newproblem:false})}
                                    > 
                                        <Icon name='ios-close-circle' />
                                        <Text>Cancel</Text>
                                    </Button>
                                    </View>
                                </View>,]
            )
        }else{
            return(
                [<View style={styles.stackedform}>
                    <Label style={styles.labeltext}>Problem</Label>
                            <Picker
                                mode="dropdown"
                                placeholder="Select Problem"
                                placeholderStyle={{ color: "#bfc6ea" }} 
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.id_problem}
                                onValueChange={this.onValueChangeProblem.bind(this)}
                                >
                                <Picker.Item value="" label="Choose Problem" />
                                {listproblemItem}
                            </Picker> 
                    </View>,
                <Button style={{backgroundColor:'#b22323',alignSelf:'flex-start',marginLeft:20,marginTop:10}}
                iconLeft
                onPress={()=>this.setState({is_newproblem:true})}
                > 
                    <Icon name='ios-add' />
                    <Text>Add New Problem</Text>
                </Button>]
            )
        }
    }

    //Save New Problem
    savenewproblem(){
        var formdata = new FormData();
        formdata.append("name_problem", this.state.inputnameproblem)
        formdata.append("desc_problem",this.state.inputdescproblem)
        fetch(GlobalConfig.SERVERHOST+"/index.php/api/problem/add",{
            method: 'POST',
            headers: { 
                    'token': this.state.token
                  },
              body: formdata,
             })
            .then((response) => response.json()).then((responseData) => {
              this.setState({
                isLoading: false,
              });
              this.setState({inputnameproblem:'',inputdescproblem:''})
              this.setState({is_newproblem:false})
              ToastAndroid.showWithGravityAndOffset(
                'Problem has been saved!',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
              );
              this.loadData(this.state.token);
            }).catch((error) => {
              alert("Error Connection");
            }).done();  
    }

    async loadData(token){
        // Problem list
        await fetch(this.state.jsonUrl+'/index.php/api/problem/listproblem',{ 
            method: 'GET',
            headers: {   
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': token
                    }
        })
        .then((response) => response.json()).then((responseData) => {
            this.setState({
                listproblem: responseData.response
            });
        }).catch((error) => { 
            alert("Problem Data Not Found"); 
        }).done(); 
    }

    componentDidMount(){
        AsyncStorage.getItem("orderDetailId").then((value) => {
            this.setState({ orderId: value });
        })
        AsyncStorage.getItem("dataUser").then((value) => {
            var userdata = JSON.parse(value);
            this.setState({ user_id: userdata.id_user });
        })
        AsyncStorage.getItem("tokenUser").then((value) => {
            this.setState({ token: value });
        })
        .then(res => {
            this.loadData(this.state.token);
        });
    }

    render() { 
        const { navigate } = this.props.navigation; 
        //Problem Picker Item
        let listproblemItem = this.state.listproblem.map( (s, i) => {
            return <Picker.Item key={i} value={s.ID_PROBLEM} label={s.NAME_PROBLEM} />
        });
        let uiproblem = this.setnewproblem(listproblemItem)
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
                    <Title style={{fontSize:14}}>
                    Confirmation Preparation End</Title>
                </Body>
                </Header>
                <Content>
                    <Form style={{width:'96%'}}>
                    {uiproblem[0]}
                    {uiproblem[1]}
                            <View style={styles.stackedform}>
                                <Label style={styles.labeltext}>Note</Label>
                                <Textarea rowSpan={5} bordered placeholder="Notes"  style={{width:'100%'}}/>
                            </View>                                                
                            <View style={{flexDirection:'row',alignSelf:'center',padding:10,marginLeft:10}}>
                            <Button block style={{backgroundColor:'#2ff424',marginRight:40,width:130}}> 
                                <Text style={styles.labeltext}>Confirmation</Text>
                            </Button>
                            <Button block style={{backgroundColor:'#063299',width:130}}
                            onPress={() => this.props.navigation.navigate("Order")}
                            >
                                <Text style={styles.labeltext}>Cancel</Text>
                            </Button>
                            </View>
                    </Form>
                </Content>
          </Container>
        );
      }
}

const styles = StyleSheet.create({
    stackedform:{
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:10,
        marginLeft:20,
        paddingBottom: 5,
    },
    borderColumn:{
        flex:1,
        borderColor:'#000000',
        borderStyle:'solid',
        borderWidth:1,
        textAlign:'center'
    },
    labeltext:{
        fontSize: 13,
    }
});