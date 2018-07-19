'use strict';

import React, { Component } from 'react';
import { AsyncStorage, FlatList, ActivityIndicator, TouchableHighlight } from 'react-native';
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
   
    return (
      <List >
        <ListItem avatar>
          <Left> 
            <Thumbnail source={{ uri: 'https://flutter.io/images/flutter-mark-square-100.png' }} />
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

export default class hanggar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonUrl: GlobalConfig.SERVERHOST+'/index.php/api/order/hangar/2',
      isLoading: true,
      dataResult: [],

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

  render() {
    if (this.state.isLoading) {
      return (
        <Body style={{flex: 1}}>
          <ActivityIndicator />
        </Body>
      );
    }
    thats = this;
    return (
      <Container>
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
      </Container>
    );
  }
}

