'use strict';

import React, { Component } from 'react';
import { Platform, AsyncStorage, FlatList, ActivityIndicator, TouchableHighlight,View,TextInput,TouchableOpacity,ScrollView,ToastAndroid } from 'react-native';
import { Container, Footer, FooterTab, Button, Header, Content, List, ListItem, Body, Item, Input, Left, Right, Icon,  Text, Title, Thumbnail, Toast } from 'native-base';
import { StackNavigator } from 'react-navigation';
import GlobalConfig from '../GlobalConfig'
import Modal from 'react-native-modal';

var thats;

//Feed Item
class FeedItem extends React.PureComponent {
  handleClick(val){
    AsyncStorage.setItem('orderDetailId', val) 
    .then(()=>{
      thats.props.navigation.navigate('detailOrderParking');  
    });
  };
  
  handleConfirm(val,status){
    AsyncStorage.setItem('orderDetailId', val) 
    .then(()=>{
      switch (status.toUpperCase()) {
        case 'WAITING CONFIRM HANGGAR':
        thats.props.navigation.navigate('confirmWaitingHangar'); 
          break;
        case 'WAITING RESPONSE':
        thats.props.navigation.navigate('waitingConfirmResponse');  
          break;
        case 'WAITING PREPARATION':
          thats.props.navigation.navigate('confirmWaitingPreparation');  
          break;
        case 'WAITING DELIVERY':
          thats.props.navigation.navigate('confirmWaitingDelivery');  
          break;
        case 'WAITING VALIDATION MCC':
          thats.props.navigation.navigate('confirmWaitingValidationmcc');  
          break;
        default:
          break;
      }
    });
  };


  constructor(props){
    super(props);
    this.state={
      modalVisible:false,
      menuVisible:false
    }
  }
  _renderpopupmenu()
  {
    if (this.state.menuVisible)
    {
      if (this.props.data.NAME_STATUS=='Complete')
      {
          return (
            <View style={{backgroundColor:'#ffffff',flexDirection:'column',position:'absolute',right:10,top:5,alignItems:'flex-start',
            borderStyle:'solid',borderRadius: 4,borderWidth:2,paddingLeft:5,paddingRight:5,
            borderColor: 'rgba(0, 0, 0, 0.1)'}}>
            <TouchableHighlight onPress={() => this.handleClick(this.props.data.ID_ORDER)}>
              <Text style={{fontSize:13, color:'#666',padding:3}}><Icon style={{fontSize:13, color:'#666'}}  name='md-paper' />  Details</Text>
            </TouchableHighlight>      
            <TouchableHighlight onPress={() => this.props.modalDeleteList(true,this.props.data.ID_ORDER)}>
              <Text style={{fontSize:13, color:'#666',padding:3}}><Icon style={{fontSize:13, color:'#ff0000'}} name='trash' />   Delete</Text>
            </TouchableHighlight>
            </View>
          )
      }else{
            return (
                <View style={{backgroundColor:'#ffffff',flexDirection:'column',position:'absolute',right:10,top:5,alignItems:'flex-start',
                borderStyle:'solid',borderRadius: 4,borderWidth:2,paddingLeft:5,paddingRight:5,
                borderColor: 'rgba(0, 0, 0, 0.1)'}}>
                <TouchableHighlight onPress={() => this.handleClick(this.props.data.ID_ORDER)}>
                  <Text style={{fontSize:13, color:'#666',padding:3}}><Icon style={{fontSize:13, color:'#666'}}  name='md-paper' />  Details</Text>
                </TouchableHighlight>      
                <TouchableHighlight onPress={() => 
                  this.handleConfirm(this.props.data.ID_ORDER,this.props.data.NAME_STATUS)}>
                  <Text style={{fontSize:13, color:'#666',padding:3}}><Icon style={{fontSize:13, color:'#269105'}} name='ios-checkmark-circle' />  Confirm</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.modalDeleteList(true,this.props.data.ID_ORDER)}>
                  <Text style={{fontSize:13, color:'#666',padding:3}}><Icon style={{fontSize:13, color:'#ff0000'}} name='trash' />   Delete</Text>
                </TouchableHighlight>
                </View>
          )
      }
        
    }
  }
  render() {
    const that = this;
    const compMenu = this._renderpopupmenu();
    var compIcon;
    if(this.props.data.NAME_STATUS=='Waiting Confirm Hanggar'){
      compIcon = '#E2C347';
    }else if(this.props.data.NAME_STATUS=='Waiting Response'){
      compIcon = '#BF9939';
    }else if(this.props.data.NAME_STATUS=='Waiting Preparation'){
      compIcon = '#4A82F0';
    }else if(this.props.data.NAME_STATUS=='Waiting Delivery'){
      compIcon = '#8E64E1';
    }else if(this.props.data.NAME_STATUS=='Waiting Validation MCC'){
      compIcon = '#D145D1';
    }else if(this.props.data.NAME_STATUS=='Complete'){
      compIcon = '#40B984';
    }else{
      compIcon = '#cccccc';
    }

    return (
      <List >
        <ListItem avatar onPress={()=>this.setState({menuVisible:false})}>
        <Left style={{alignItems:'center',justifyContent:'center',padding:5,margin:0,width:40,height:40}}>
			<View style={{alignItems:'center',justifyContent:'center',width:40,height:40,backgroundColor:compIcon,borderRadius:20}}>
				<Icon style={{fontSize:25, width:25, color:'#ffffff',margin:0}} type='Feather' name='alert-circle' />
			</View>
          </Left>
          <Body>
            <Text style={{fontSize:13, color:'#0187ec'}}>{this.props.data.REGISTRY_AIRCRAFT}/{this.props.data.NAME_AIRCRAFT_TYPE}/{this.props.data.NAME_HANGAR}/{this.props.data.NAME_LINE_HANGAR}</Text>
            <Text style={{fontSize:13, color:'#7d7d7d'}}>{this.props.data.DATE_START_ORDER}</Text>
            <Text style={{fontSize:13, color:'#7d7d7d'}}>{this.props.data.DESC_MAINTENANCE_TYPE}</Text>
            <Text style={{fontSize:13, color:'#666'}}>{this.props.data.NAME_STATUS}</Text>
          </Body>
          <Right>
            <Button transparent style={{marginRight:-10,}} onPress={()=>this.setState({menuVisible:!this.state.menuVisible})}>
              <Icon style={{fontSize:20, color:'#666'}} name={Platform.OS === 'ios' ? 'ios-more' : 'more'} />
            </Button>
          </Right>
            {compMenu}
        </ListItem>
      </List>
    )
  }
}

export default class order extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      jsonUrl: GlobalConfig.SERVERHOST+'/index.php/api/Order/Search',
      isLoading: true,
      dataResult: [],
      isSearch:false,
      iddelete:null
    }
  }
  componentDidMount(){
    AsyncStorage.getItem("tokenUser").then((value) => {
       this.setState({ token: value });
    })
    .then(res => {
      this.loadData(this.state.token);
    });
  }

  //Reload Data
  onRefresh() {
    this.setState({ isLoading: true }, function() { this.loadData(this.state.token) });
  }

  //Load Other Data
  loadMore() {
    // alert('Load More Data');
  }
   
  modalDelete(item,id){
    this.setState({modalVisible:item});
    this.setState({iddelete:id});
  }

  deleteData(id)
  {
    fetch(GlobalConfig.SERVERHOST+"/index.php/api/order/delete",{
      method: 'POST',
      headers: {   
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'token': this.state.token
            },
        body: JSON.stringify({
          id_order: id,
        }),
       })
      .then((response) => response.json()).then((responseData) => {
        this.setState({
          isLoading: false,
        });
        ToastAndroid.showWithGravityAndOffset(
          'Order has been deleted!',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
        this.loadData(this.state.token);
        this.setState({modalVisible:false})        
      }).catch((error) => {
        alert("Error Connection");
      }).done();  
  }
  //Load Data
  async loadData(token){
    await fetch(this.state.jsonUrl,{
      method: 'GET',
      headers: {   
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'token': token
            }
       })
      .then((response) => response.json()).then((responseData) => {
        this.setState({
          isLoading: false,
          dataResult: responseData.response
        });
      }).catch((error) => {
        alert("Error Connection");
      }).done(); 
  }

  //Render Feed Item
  _renderItem = ({item}) => (
    <FeedItem data={item} modalDeleteList={(item,id)=>this.modalDelete(item,id)}/> 
  );

  _renderHeadTitle() {
    if (this.state.isSearch){
      return ([<TextInput placeholder="Search" style={{color:"black",backgroundColor:"white",width:200}}/>
              ,<Icon  style={{color:'#fff'}} name="ios-close" />])
    }else{
      return ([<Title style={{color:'#fff'}}>Planned Order Swift</Title>,<Icon style={{color:'#fff'}} name="ios-search" />])
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const compSearch = this._renderHeadTitle();
    thats = this;
    return (
      <Container>
        <Modal isVisible={this.state.modalVisible}
               onBackdropPress   ={()=>this.modalDelete(false)}
               onBackButtonPress ={()=>this.modalDelete(false)}
                >
            <View style={{ backgroundColor: 'white',
                            padding: 20,
                            borderRadius: 4,
                            borderColor: 'rgba(0, 0, 0, 0.1)'}}>
            <Text style={{fontWeight:'bold',paddingBottom:10}}>Delete</Text>
            <Text style={{color:'#a8a6a6',alignSelf:'center'}}>Are you sure to delete the order?</Text>
            <View style={{flexDirection:'row',alignContent:'space-between',justifyContent:'flex-end'}}>              
                <Button transparent={true} 
                        style={{paddingRight:10}}
                        onPress={() => this.deleteData(this.state.iddelete)}> 
                    <Text>YES</Text>
                </Button>
                <Button transparent={true} 
                        onPress={() => this.setState({ modalVisible: false })}>
                    <Text>CANCEL</Text>
                </Button>
            </View>
          </View>
        </Modal>
        <Header style={{ backgroundColor: '#04245b' }}
          androidStatusBarColor="#002f81">
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon  style={{color:'#fff'}} name={Platform.OS === 'ios' ? 'ios-menu' : 'menu'} />
            </Button>
          </Left>
           <Body> 
            {compSearch[0]}
          </Body>
          <Right>
          <Button small transparent onPress={() =>this.setState({isSearch:!this.state.isSearch})}>
            {compSearch[1]}
          </Button>
          <Button small transparent onPress={() => this.props.navigation.navigate('createOrderParking')}>
            <Icon style={{color:'#fff'}} name="add" />   
          </Button>
          </Right> 
        </Header>
        <Content>
        { (this.state.isLoading) ? 
          <ActivityIndicator style={{marginTop:15}}/>
          : 
          <FlatList
            data={ this.state.dataResult }
            refreshing={this.state.isLoading} 
            onRefresh={() => this.onRefresh()}
            renderItem={this._renderItem} 
            keyExtractor={(item, index) => index.toString()}
            onEndReached={(x) => {this.loadMore()}}
          />
        }
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: '#fff' }}>
            <Button vertical
             onPress={() => navigate("Dashboard")}
            >
              <Icon name={Platform.OS === 'ios' ? 'ios-apps' : 'apps'} style={{ color: '#808080' }}/>
              <Text style={{ color: '#808080' }}>Dashboard</Text>
            </Button>
            <Button vertical 
            onPress={() => navigate("Order")} 
            >
              <Icon  name={Platform.OS === 'ios' ? 'ios-clipboard' : 'ios-clipboard'}/>
              <Text>Order</Text>
            </Button>
            <Button vertical active
            onPress={() => navigate("Swift")}
            >
              <Icon  active name={Platform.OS === 'ios' ? 'ios-folder-open' : 'folder-open'} style={{ color: '#808080' }}/>
              <Text style={{ color: '#808080' }}>Swift</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


