'use strict';

import React, { Component } from 'react';
import { AsyncStorage, FlatList, ActivityIndicator, TouchableHighlight,View,TextInput,TouchableOpacity,ScrollView,ToastAndroid,StyleSheet } from 'react-native';
import { Container, Footer, FooterTab, Button, Header, Content, Body, Item, Input, Left, Right, Icon,  Text, Title, Thumbnail, Toast,Tab, Tabs,Form,Label,Picker,Textarea  } from 'native-base';
import { StackNavigator } from 'react-navigation';
import GlobalConfig from '../GlobalConfig'

var thats;
export default class waitingResponse extends Component {
    constructor(props) {
      super(props); 
      this.state = {
        jsonUrl: GlobalConfig.SERVERHOST,
        token:'',
        id_problem : null,
        id_status : null,
        id_gsecategory : null,
        name_gsecategory:null,
        id_gsetype:null,
        is_newproblem:false,
        inputproblem:'',
        inputdescproblem:'',
        setactivetab:0,
        listproblem : [],
        liststatus : [],
        listgsecategory:[],
        listgsetype:[],
        listname_number:[],
      }
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
    
    //handlesaveProblem
    saveproblem()
    {
        alert(this.state.inputproblem)
    }
    // Onchange Problem 
    onValueChangeProblem(value) {  
        this.setState({
            id_problem:value
        });
    }

    // Onchange Status 
    onValueChangeStatus(value) {  
        this.setState({
            id_status:value
        });
    }
    
    // onchange GSECategory
    onValueChangeGSECategory(value,index){
        this.setState({
            id_gsecategory:value,
            listname_number:[],
            listgsetype:[]
        });
        
        if (this.state.listgsecategory.length>0)
        {
            this.setState({
                name_gsecategory:(this.state.listgsecategory[index].NAME_CATEGORY).toUpperCase()
            });
        }
        // Status list gseType  
        var url = this.state.jsonUrl+'/index.php/api/gseType/byIdCategory/'+value;
         fetch(url,{
            method: 'GET',
            headers: {   
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': this.state.token
                    }
        })
        .then((response) => response.json()).then((responseData) => {
            this.setState({
                listgsetype: responseData.response
            });
            // name/member list
            if (this.state.name_gsecategory != null)
            {
                if (this.state.listgsetype.length>0)
                {
                    this.onValueChangeGSEType(this.state.listgsetype[0].ID_GSE_TYPE)
                    this.setState({id_gsetype:this.state.listgsetype[0].ID_GSE_TYPE})
                }
            }
        }).catch((error) => { 
            alert("GSE Type Not Found"); 
        }).done(); 
    }


    onValueChangeGSEType(value)
    {
        this.setState({
            id_gsetype:value,
            listname_number:[]
        });
        // name/number list
        var url2;
        if (this.state.name_gsecategory!=null)
        {
            if ((this.state.name_gsecategory).toUpperCase()=="EMPLOYEE")
            {
                var url2 = this.state.jsonUrl+'/index.php/api/employee/listgsetype/'+value;
            }else if((this.state.name_gsecategory).toUpperCase()=="EQUIPMENT"){
                var url2 = this.state.jsonUrl+'/index.php/api/equipment/listgsetype/'+value;
            }else if((this.state.name_gsecategory).toUpperCase()=="TOWBAR"){
                var url2 = this.state.jsonUrl+'/index.php/api/towbar/listgsetype/'+value;
            }
            
            fetch(url2,{
                method: 'GET',
                headers: {   
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'token': this.state.token
                        }
            })
            .then((response) => response.json()).then((responseData) => {
                this.setState({
                    listname_number: responseData.response
                });
            }).catch((error) => { 
                alert("Name or Member Not Found"); 
            }).done(); 
        }
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
        
        // Status list
        await fetch(this.state.jsonUrl+'/index.php/api/status/liststatus/order-confirm',{ 
            method: 'GET',
            headers: {   
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': token
                    }
        })
        .then((response) => response.json()).then((responseData) => {
            this.setState({
                liststatus: responseData.response
            });
        }).catch((error) => { 
            alert("Status Data Not Found"); 
        }).done(); 

        // Status list gseCategory
        await fetch(this.state.jsonUrl+'/index.php/api/gseCategory/listgsecategory',{ 
            method: 'GET',
            headers: {   
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': token
                    }
        })
        .then((response) => response.json()).then((responseData) => {
            this.setState({
                listgsecategory: responseData.response
            });
            this.onValueChangeGSECategory(this.state.listgsecategory[0].ID_CATEGORY,0)
            this.setState({id_gsecategory:this.state.listgsecategory[0].ID_CATEGORY})
        }).catch((error) => { 
            alert("GSE Category Not Found"); 
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
        if (this.state.isLoading) {
            return (
              <Body style={{flex: 1}}>
                <ActivityIndicator />
              </Body>
            );
          }

          //Problem Picker Item
            let listproblemItem = this.state.listproblem.map( (s, i) => {
                return <Picker.Item key={i} value={s.ID_PROBLEM} label={s.NAME_PROBLEM} />
            });

            //Problem Status Item
            let liststatusItem = this.state.liststatus.map( (s, i) => {
                return <Picker.Item key={i} value={s.ID_STATUS} label={s.NAME_STATUS} />
            });

            //GSE Category Item
            let listgsecategoryItem = this.state.listgsecategory.map( (s, i) => {
                return <Picker.Item key={i} value={s.ID_CATEGORY} label={s.NAME_CATEGORY} />
            });

            //GSE Type Item
            let listgsetypeItem = this.state.listgsetype.map( (s, i) => {
                return <Picker.Item key={i} value={s.ID_GSE_TYPE} label={s.GSE_TYPE_NAME} />
            });

            //list name/number
            var listname_numberItem
            if (this.state.name_gsecategory!=null)
            {   
                if ((this.state.name_gsecategory).toUpperCase()=='EQUIPMENT')
                {
                    listname_numberItem = this.state.listname_number.map( (s, i) => {
                        return <Picker.Item key={i} value={s.ID_EQUIPMENT} label={s.NUMBER_EQUIPMENT} />
                    });
                }else if ((this.state.name_gsecategory).toUpperCase()=='EMPLOYEE')
                {
                    listname_numberItem = this.state.listname_number.map( (s, i) => {
                        return <Picker.Item key={i} value={s.ID_EMPLOYEE} label={s.NAME_EMPLOYEE} />
                    });
                }else if ((this.state.name_gsecategory).toUpperCase()=='TOWBAR')
                {   
                     listname_numberItem = this.state.listname_number.map( (s, i) => {
                        return <Picker.Item key={i} value={s.ID_TOWBAR} label={s.NUMBER_TOWBAR} />
                    });
                }
                
            }
            
            let uiproblem = this.setnewproblem(listproblemItem)
            
        return (
            <Container>
                    <Header style={{ backgroundColor: '#04245b' }}
                    androidStatusBarColor="#002f81"
                    >
                    <Left>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("Order")}>
                        <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Confirm Response</Title>
                    </Body>
                    </Header>
                    <Content>
                        <Tabs 
                            tabBarUnderlineStyle={{ backgroundColor:'#04245b' }}
                            initialPage={0}
                            page={this.state.setactivetab}
                            locked={true}
                            tabStyle={{backgroundColor:'#04245b'}}
                            >
                            <Tab heading="Problem and Note">
                            <ScrollView>
                            <Form style={{width:'96%'}}>
                                    {uiproblem[0]}
                                    {uiproblem[1]}
                                    <View style={styles.stackedform}>
                                    <Label style={styles.labeltext}>Note</Label>
                                        <Textarea rowSpan={5} bordered placeholder="Notes"  style={{width:'100%'}}/>
                                    </View>                                                
                                    <View style={styles.stackedform}>
                                    <Label style={styles.labeltext}>Status</Label>
                                        <Picker
                                            mode="dropdown"
                                            placeholder="Select Problem"
                                            placeholderStyle={{ color: "#bfc6ea" }} 
                                            placeholderIconColor="#007aff"
                                            selectedValue={this.state.id_status}
                                            onValueChange={this.onValueChangeStatus.bind(this)}
                                            >
                                            <Picker.Item value="" label="Choose Status" />
                                            {liststatusItem}
                                        </Picker> 
                                    </View>
                                    <View style={{flexDirection:'row',alignSelf:'center',padding:10,marginLeft:10}}>
                                    <Button block style={{backgroundColor:'#2ff424',marginRight:40,width:130}}
                                    onPress={()=>this.setState({setactivetab:1})}
                                    > 
                                        <Text>Next</Text>
                                    </Button>
                                    <Button block style={{backgroundColor:'#063299',width:130}}
                                    onPress={() => this.props.navigation.navigate("Order")}
                                    > 
                                        <Text>Cancel</Text>
                                    </Button>
                                    </View>
                                </Form> 
                                </ScrollView>    
                            </Tab>
                            <Tab heading="Operator and Equipment">
                            <ScrollView>
                            <Form style={{width:'96%'}}>
                                <View style={styles.stackedform}>
                                    <Label style={styles.labeltext}>GSE Category</Label>
                                        <Picker
                                            mode="dropdown"
                                            placeholder="Select Problem"
                                            placeholderStyle={{ color: "#bfc6ea" }} 
                                            placeholderIconColor="#007aff"
                                            selectedValue={this.state.id_gsecategory}
                                            onValueChange={(itemValue, itemIndex)=>this.onValueChangeGSECategory(itemValue, itemIndex)}
                                            >
                                            {listgsecategoryItem}
                                        </Picker> 
                                    </View>
                                    <View style={styles.stackedform}>
                                        <Label style={styles.labeltext}>GSE Type</Label>
                                        <Picker
                                            mode="dropdown"
                                            placeholder="Select Problem"
                                            placeholderStyle={{ color: "#bfc6ea" }} 
                                            placeholderIconColor="#007aff"
                                            selectedValue={this.state.id_gsetype}
                                            onValueChange={this.onValueChangeGSEType.bind(this)}
                                            >
                                            {listgsetypeItem}
                                        </Picker> 
                                    </View>
                                    <View style={styles.stackedform}>
                                    <Label style={styles.labeltext}>Name / Number</Label>
                                        <Picker
                                            mode="dropdown"
                                            placeholder="Select Problem"
                                            placeholderStyle={{ color: "#bfc6ea" }} 
                                            placeholderIconColor="#007aff"
                                            selectedValue={this.state.id_problem}
                                            onValueChange={this.onValueChangeProblem.bind(this)}
                                            >
                                            {listname_numberItem}
                                        </Picker> 
                                    </View>
                                    <Button style={{backgroundColor:'#b22323',alignSelf:'center',marginLeft:10,marginTop:10}}> 
                                        <Text>Add</Text>
                                    </Button>
                                    <View style={styles.stackedform}>
                                    <Label style={styles.labeltext}>Equipment and Operator</Label>
                                    <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
                                        <Text style={styles.borderColumn}>Category</Text>
                                        <Text style={styles.borderColumn}>Type</Text>
                                        <Text style={styles.borderColumn}>Name</Text>
                                        <Text style={styles.borderColumn}>Action</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'row',alignSelf:'center',padding:10,marginLeft:10}}>
                                    <Button block style={{backgroundColor:'#2ff424',marginRight:40,width:130}}> 
                                        <Text>Done</Text>
                                    </Button>
                                    <Button block style={{backgroundColor:'#063299',width:130}}
                                    onPress={() => this.props.navigation.navigate("Order")}
                                    > 
                                        <Text>Cancel</Text>
                                    </Button>
                                    </View>
                                </Form>
                            </ScrollView>
                            </Tab>
                        </Tabs>
                    </Content>
                    <Footer>
                    <FooterTab style={{ backgroundColor: '#fff' }}>
                        <Button vertical
                        onPress={() => navigate("Dashboard")}
                        >
                        <Icon name="apps" style={{ color: '#808080' }}/>
                        <Text style={{ color: '#808080' }}>Dashboard</Text>
                        </Button>
                        <Button vertical active
                        onPress={() => navigate("Order")}
                        >
                        <Icon active name="ios-clipboard"/>
                        <Text>Order</Text>
                        </Button>
                        <Button vertical 
                        onPress={() => navigate("Swift")}
                        >
                        <Icon  name="ios-folder-open" style={{ color: '#808080' }}/>
                        <Text style={{ color: '#808080' }}>Swift</Text>
                        </Button>
                    </FooterTab>
                    </Footer>
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