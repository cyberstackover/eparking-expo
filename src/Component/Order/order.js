'use strict';

import React, { Component } from 'react';
import { AsyncStorage, FlatList, ActivityIndicator, TouchableHighlight,View,TextInput } from 'react-native';
import { Container, Footer, FooterTab, Button, Header, Content, List, ListItem, Body, Item, Input, Left, Right, Icon,  Text, Title, Thumbnail } from 'native-base';
import { StackNavigator } from 'react-navigation';
import GlobalConfig from '../GlobalConfig'


var thats;

//Feed Item
class FeedItem extends React.PureComponent {
  handleClick(val){
    AsyncStorage.setItem('orderDetailId', val) 
    .then(()=>{
      thats.props.navigation.navigate('detailOrderParking');  
    });
  };
  render() {
    const that = this;
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
        <ListItem avatar>
        <Left style={{alignItems:'center',justifyContent:'center',padding:5,margin:0,width:40,height:40}}>
			<View style={{alignItems:'center',justifyContent:'center',width:40,height:40,backgroundColor:compIcon,borderRadius:20}}>
				<Icon style={{fontSize:25, width:25, color:'#ffffff',margin:0}} type='Feather' name='alert-circle' />
			</View>
          </Left>
          <Body>
            <Text style={{fontSize:14, color:'#0187ec'}}>{this.props.data.REGISTRY_AIRCRAFT}/{this.props.data.NAME_AIRCRAFT_TYPE}/{this.props.data.NAME_HANGAR}/{this.props.data.NAME_LINE_HANGAR}</Text>
            <Text style={{fontSize:14, color:'#7d7d7d'}}>{this.props.data.DATE_START_ORDER}</Text>
            <Text style={{fontSize:14, color:'#7d7d7d'}}>{this.props.data.DESC_MAINTENANCE_TYPE}</Text>
            <Text style={{fontSize:14, color:'#666'}}>{this.props.data.NAME_STATUS}</Text>
          </Body>
          <Right> 
            <Button transparent style={{marginRight:-10,}} onPress={() => this.handleClick(that.props.data.ID_ORDER)}>
              <Icon  style={{fontSize:20, color:'#666'}} name='more' />
            </Button>
          </Right>
        </ListItem>
      </List>
    )
  }
}

export default class order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonUrl: GlobalConfig.SERVERHOST+'/index.php/api/order/search',
      isLoading: true,
      dataResult: [],
      isSearch:false,

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
    <FeedItem data={item}/> 
  );

  _renderHeadTitle() {
    if (this.state.isSearch){
      return ([<TextInput placeholder="Search" style={{color:"black",backgroundColor:"white",width:200}}/>
              ,<Icon name="ios-close" />])
    }else{
      return ([<Title>Parking Order</Title>,<Icon name="ios-search" />])
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <Body style={{flex: 1}}>
          <ActivityIndicator />
        </Body>
      );
    }
    const { navigate } = this.props.navigation;
    const compSearch = this._renderHeadTitle();
    thats = this;
    return (
      <Container>
        <Header style={{ backgroundColor: '#04245b' }}
          androidStatusBarColor="#002f81">
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
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
            <Icon name="add" /> 
          </Button>
          </Right>
        </Header>
        <Content>
        <FlatList
          data={ this.state.dataResult }
          refreshing={this.state.isLoading}
          onRefresh={() => this.onRefresh()}
          renderItem={this._renderItem} 
          keyExtractor={(item, index) => index.toString()}
          onEndReached={(x) => {this.loadMore()}}
        />
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
            onPress={() => navigate("Master")}
            >
              <Icon  name="ios-folder-open" style={{ color: '#808080' }}/>
              <Text style={{ color: '#808080' }}>Master</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


