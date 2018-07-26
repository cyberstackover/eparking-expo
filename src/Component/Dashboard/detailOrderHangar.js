import React, { Component } from 'react';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import { Container, Header, Grid, Row, Tab, Tabs, Content, Footer, Left, Title, Thumbnail, FooterTab, List, ListItem, Right, Body, Button, Icon, Text, ScrollableTab ,Card, CardItem } from 'native-base';
import { View,StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';
import GlobalConfig from '../GlobalConfig'
export default class detailOrderHangar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jsonUrl: GlobalConfig.SERVERHOST+'/index.php/api/order/detail/',
      jsonMovementUrl: GlobalConfig.SERVERHOST+'/index.php/api/order/movementStatus/',
      jsonEquipmentUrl: GlobalConfig.SERVERHOST+'/index.php/api/confirm/listconfirmequip/',
      isLoading: true, 
      dataResult: [], 
      movementResult: [], 
      equipmentResult: [], 
      initialPage: 0, 
      activeTab: 1
    }
  }

  componentDidMount(){
    AsyncStorage.getItem("orderDetailId").then((value) => {
      this.setState({ orderId: value });
    })
    AsyncStorage.getItem("tokenUser").then((value) => {
       this.setState({ token: value });
    })
    .then(res => {
      this.loadData(this.state.token);
    });
  }

  //Load Data
  async loadData(token){
    await fetch(this.state.jsonUrl+this.state.orderId,{ 
      method: 'GET',
      headers: {   
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'token': token
            } 
       })
      .then((response) => response.json()).then((responseData) => {
        this.setState({
          dataResult: responseData.response
        });
		this.loadMovement(this.state.token);
      }).catch((error) => {
        this.setState({isLoading: false});
        alert("Order detail not found");
      }).done(); 
  }
  //Load Movement
  async loadMovement(token){
    await fetch(this.state.jsonMovementUrl+this.state.orderId,{ 
      method: 'GET',
      headers: {   
              'Accept': 'application/json',
              'Content-Type': 'application/json', 
              'token': token
            }
       })
      .then((response) => response.json()).then((responseData) => {
        this.setState({
          movementResult: responseData.response
        });
		this.loadEquipment(this.state.token);
      }).catch((error) => {
        this.setState({isLoading: false});
        alert("Movement not found");
      }).done(); 
  }
  //Load Equipment
  async loadEquipment(token){
    await fetch(this.state.jsonEquipmentUrl+this.state.orderId,{ 
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
          equipmentResult: responseData.response
        });
      }).catch((error) => {
        this.setState({isLoading: false});
        alert("Equipment not found");
      }).done(); 
  }
	renderItemDetail(arrItems){
		var Items=<List dataArray={arrItems} renderRow={(item) => 
			<ListItem avatar>  
			  <Body> 
				<Text style={{fontSize:14}}>{item.label}</Text>
				<Text note numberOfLines={1}>{function(item, data){
					if(Array.isArray(item)){
						return data[item[0]]+" - "+data[item[1]];
					}else{
						return data[item];
					}
				}(item.item, this.state.dataResult[0])}</Text>
			  </Body>
			</ListItem>
		}>;
		Items+=</List>
		return Items;
	}
	renderItemMovement(){
		var Items=<List dataArray={this.state.movementResult} renderRow={(item) => 
			<ListItem avatar>  
			  <Body>
				<Text style={{fontSize:14}}>{item.ACTIVITY}</Text>
				<Text note numberOfLines={2}>{item.NAME_PROBLEM}{'\n'}{item.OS_UPDATED_AT}</Text>
			  </Body>
			  <Right>
				<Text style={{fontSize:14}}>{item.OS_UPDATED_BY}</Text>
				<Text note numberOfLines={1}>Confirm By</Text>
			  </Right>
			</ListItem>
		}>;
		Items+=</List>
		return Items;
	}
	renderItemEquipment(){
		var Items=<List dataArray={this.state.equipmentResult} renderRow={(item) => 
			<ListItem> 
			  <Body>
				<Text style={{fontSize:14}}>{item.NAME_CATEGORY}</Text>
				<Text note numberOfLines={1}>CATEGORY</Text>
			  </Body>
			  <Body>
				<Text style={{fontSize:14}}>{item.GSE_TYPE_NAME}</Text>
				<Text note numberOfLines={1}>TYPE</Text>
			  </Body>
			  <Body>
				<Text style={{fontSize:14}}>{item.NAME_GSE_ORDER}</Text>
				<Text note numberOfLines={1}>NAME</Text>
			  </Body>
			</ListItem>
		}>;
		Items+=</List>
		return Items;
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
    const dtShow = this.state.dataResult[0];
	var compIcon;
	const ItemDetail = [
							{label:"URGENCY",item:'NAME_URGENCY'},
							{label:"SWO NUMBER",item:'SWO_ORDER'},
							{label:"MAX. TIME RESPONSE",item:'TIME_RESPONSE_ORDER'},
							{label:"MAINTENANCE TYPE",item:'NAME_MAINTENANCE_TYPE'},
							{label:"EQUIPMENT",item:'NUMBER_EQUIPMENT'},
							{label:"TYPE MOVEMENT",item:'NAME_MOVEMENT_TYPE'},
							{label:"DATE PLAN",item:['DATE_START_ORDER','DATE_END_ORDER']},
							{label:"DATE ACTUAL",item:['DATE_ACTUAL_START','DATE_ACTUAL_END']},
							{label:"ORDER REQUEST",item:'ORDER_REQUEST'},
						];
	if(dtShow.NAME_STATUS=='Waiting Confirm Hanggar'){
		compIcon = '#E2C347';
	}else if(dtShow.NAME_STATUS=='Waiting Response'){
		compIcon = '#BF9939';
	}else if(dtShow.NAME_STATUS=='Waiting Preparation'){
		compIcon = '#4A82F0';
	}else if(dtShow.NAME_STATUS=='Waiting Delivery'){
		compIcon = '#8E64E1';
	}else if(dtShow.NAME_STATUS=='Waiting Validation MCC'){
		compIcon = '#D145D1';
	}else if(dtShow.NAME_STATUS=='Complete'){
		compIcon = '#40B984';
	}else{
		compIcon = '#cccccc';
	}
	
    return (
      <Container>
        <Header style={{ backgroundColor: '#04245b' }}
          androidStatusBarColor="#002f81"> 
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Hangar")}>
              <Icon style={{ color: '#fff' }} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: '#fff' }}>Detail Order</Title>
          </Body>
          <Right /> 
        </Header>
        <Content>
          <List >
            <ListItem avatar>  
              <Left style={{alignItems:'center',justifyContent:'center',padding:5,margin:0,width:40,height:40}}>
                <View style={{alignItems:'center',justifyContent:'center',width:40,height:40,backgroundColor:compIcon,borderRadius:20}}>
					<Icon style={{fontSize:25, width:25, color:'#ffffff',margin:0}} type='Feather' name='alert-circle' />
				</View>
              </Left>
              <Body> 
                <Text style={{fontSize:14, color:'#0187ec'}}>{dtShow.REGISTRY_AIRCRAFT}/{dtShow.NAME_AIRCRAFT_TYPE}/{dtShow.MOVEMENT_FROM}</Text>
                <Text note numberOfLines={2}>{dtShow.DATE_START_ORDER}{'\n'}{dtShow.NAME_MAINTENANCE_TYPE}{'\n'}</Text>
                <Text note numberOfLines={1} style={{color:compIcon}}>{dtShow.NAME_STATUS}</Text>
              </Body>
            </ListItem>
          </List>
		  <View>
			<Tabs tabBarUnderlineStyle={{backgroundColor:'#E2C347'}} tabBarPosition="top" initialPage={this.state.initialPage} page={this.state.activeTab}>
				<Tab heading="DETAIL" tabStyle={{backgroundColor: '#ffffff'}} textStyle={{color: '#aaaaaa'}} activeTabStyle={{backgroundColor: '#ffffff'}} activeTextStyle={{color: '#aaaaaa', fontWeight: 'normal'}}>
					{this.renderItemDetail(ItemDetail)}
				</Tab>
				<Tab heading="STATUS" tabStyle={{backgroundColor: '#ffffff'}} textStyle={{color: '#aaaaaa'}} activeTabStyle={{backgroundColor: '#ffffff'}} activeTextStyle={{color: '#aaaaaa', fontWeight: 'normal'}}>
					{this.renderItemMovement()}
				</Tab>
				<Tab heading="EQUIPMENT" tabStyle={{backgroundColor: '#ffffff'}} textStyle={{color: '#aaaaaa'}} activeTabStyle={{backgroundColor: '#ffffff'}} activeTextStyle={{color: '#aaaaaa', fontWeight: 'normal'}}>
					{this.renderItemEquipment()}
				</Tab>
			</Tabs>
		   </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 40,
    color : '#ffff',
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  distance: {
    paddingTop: 5,
  },
});