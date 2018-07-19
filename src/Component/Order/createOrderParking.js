import React, { Component } from 'react';
import { Container, Header, Content, Title, async, Footer, FooterTab, Button, Picker, Text, List, ListItem, Item, Input, Form, Body, Left, ScrollableTab ,Card, CardItem, Label, Icon, Right, Textarea} from 'native-base';
import { View, StyleSheet, TouchableOpacity, DatePickerAndroid} from 'react-native';
var that;
import { StackNavigator } from 'react-navigation';
export default class createOrderParking extends Component {

  constructor(props) {
    super(props)
    this.state = { initialPage: 0, 
                   activeTab: 1,
                   pcs_selected:'',
                   urgency_selected:'',
                   at_selected:'',
                   registry_selected:'',
                   swo_number:'',
                   equipment_selected:'',
                   max_time_response:'',
                   max_time_response_selected:'',
                   station_selected:'',
                   mt_selected:'',
                   mfrom_selected:'',
                   mto_selected:'',
                   start_date_plan:'',
                   start_date_plan_selected:'',
                   end_date_plan:'',
                   end_date_plan_selected:'',
                   note:'',
                  }
                  that = this;  
  }
  onValueChangePcs(value) {
    this.setState({
      pcs_selected: value
    });
  }
  onValueChangeUrgency(value) {
    this.setState({
      urgency_selected: value
    });
  }
  onValueChangeAt(value) {
    this.setState({
      at_selected: value
    });
  }
  onValueChangeRegistry(value) {
    this.setState({
      registry_selected: value
    });
  }
  onValueChangeEquipment(value) {
    this.setState({
      equipment_selected: value
    });
  }
  onValueChangeMaxTime(value) {
    this.setState({
      max_time_response_selected: value
    });
  }
  onValueChangeStation(value) {
    this.setState({
      station_selected: value
    });
  }
  onValueChangeMt(value) {
    this.setState({
      mt_selected: value
    });
  }
  onValueChangeMfrom(value) {
    this.setState({
      mfrom_selected: value
    });
  }
  onValueChangeMto(value) {
    this.setState({
      mto_selected: value
    });
  }
  
  async selectedMaxTime(){
		try {
			if(this.state.max_time_response_selected){
				var datex = new Date(this.state.max_time_response_selected);
			}else{
				var datex = new Date();
			}
			const {action, year, month, day} = await DatePickerAndroid.open({
				date: datex
			});
			if (action !== DatePickerAndroid.dismissedAction) {
				var date = new Date(year, month, day);
				this.setState({max_time_response_selected:date,max_time_response:date.toLocaleDateString()});
			}
		} catch ({code, message}) {
			console.warn('Cannot open date picker', message);
		}
  }
  async selectedDateStart(){
		try {
			if(this.state.start_date_plan_selected){
				var datex = new Date(this.state.start_date_plan_selected);
			}else{
				var datex = new Date();
			}
			const {action, year, month, day} = await DatePickerAndroid.open({
				date: datex
			});
			if (action !== DatePickerAndroid.dismissedAction) {
				var date = new Date(year, month, day);
				this.setState({start_date_plan_selected:date,start_date_plan:date.toLocaleDateString()});
			}
		} catch ({code, message}) {
			console.warn('Cannot open date picker', message);
		}
  }
  async selectedDateEnd(){
		try {
			if(this.state.end_date_plan_selected){
				var datex = new Date(this.state.end_date_plan_selected);
			}else{
				var datex = new Date();
			}
			const {action, year, month, day} = await DatePickerAndroid.open({
				date: datex
			});
			if (action !== DatePickerAndroid.dismissedAction) {
				var date = new Date(year, month, day);
				this.setState({end_date_plan_selected:date,end_date_plan:date.toLocaleDateString()});
			}
		} catch ({code, message}) {
			console.warn('Cannot open date picker', message);
		}
	}  
  render() {
    const { navigate } = this.props.navigation;
    var styles = {
			container: {
				alignItems: 'stretch',
				flex: 1
			},
			body: {
				width:'100%',
				flex:1,
				alignItems:'center',
				justifyContent:'center',
				backgroundColor: '#FFFFFF',
			},
			primaryButton: {
				margin: 10,
				justifyContent:'center',
				padding: 15,
				alignSelf:'center',
				backgroundColor:"#16a085",
				width:150
			},
			listItem: {
				padding:0,
				borderBottomWidth:0,
				marginBottom:0,
				marginTop:0,
				paddingTop:5,
				paddingBottom:0
			},
			label: {
				fontSize:12
			},
			picker: {
				width: '100%',
			}
		}
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
            <Title>Create Order Parking</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
           <Item stackedLabel>
              <Label>PCS</Label>
                <Picker
                  note
                  mode="dropdown"
                  style={{ width: '100%' }}
                  selectedValue={this.state.pcs_selected}
                  onValueChange={this.onValueChangePcs.bind(this)}
                >
                  <Picker.Item label="Select PCS" value="key0" />
                  <Picker.Item label="PCS" value="key1" />
                  <Picker.Item label="Non PCS" value="key2" />
                </Picker>
            </Item>
            <Item stackedLabel>
              <Label>URGENCY</Label>
              <Picker
                  note
                  mode="dropdown"
                  style={{ width: '100%' }}
                  selectedValue={this.state.urgency_selected}
                  onValueChange={this.onValueChangeUrgency.bind(this)}
                >
                  <Picker.Item label="Select Urgency" value="key0" />
                  <Picker.Item label="Base" value="key1" />
                  <Picker.Item label="Line" value="key2" />
                </Picker>
            </Item>
            <Item stackedLabel>
              <Label>AIRCRAFT TYPE</Label>
              <Picker
                  note
                  mode="dropdown"
                  style={{ width: '100%' }}
                  selectedValue={this.state.at_selected}
                  onValueChange={this.onValueChangeAt.bind(this)}
                >
                  <Picker.Item label="Select Aircraft Type" value="key0" />
                  <Picker.Item label="Boeing 777-200ER" value="key1" />
                  <Picker.Item label="Airbus A330" value="key2" />
                  <Picker.Item label="Boeing 737-800" value="key3" />
                </Picker>
            </Item>
            <Item stackedLabel>
              <Label>AIRCRAFT REGISTRY</Label>
              <Picker
                  note
                  mode="dropdown"
                  style={{ width: '100%' }}
                  selectedValue={this.state.registry_selected}
                  onValueChange={this.onValueChangeRegistry.bind(this)}
                >
                  <Picker.Item label="Select Registry" value="key0" />
                  <Picker.Item label="PK-GNJ" value="key1" />
                  <Picker.Item label="PK-202" value="key2" />
                  <Picker.Item label="PK-201" value="key3" />
                </Picker>
            </Item>
            <Item stackedLabel>
              <Label>EQUIPMENT</Label>
              <Picker
                  note
                  mode="dropdown"
                  style={{ width: '100%' }}
                  selectedValue={this.state.equipment_selected}
                  onValueChange={this.onValueChangeEquipment.bind(this)}
              >
                  <Picker.Item label="Select Equipment" value="key0" />
              </Picker>
            </Item>           
            <Item stackedLabel>
              <Label>MAX TIME RESPONSE</Label>
                 <TouchableOpacity onPress={()=>{this.selectedMaxTime()}}>
									<Text style={{fontSize:16}}> {this.state.max_time_response}</Text>
								</TouchableOpacity>
            </Item>
            <Item stackedLabel>
              <Label>STATION</Label>
              <Picker
                  note
                  mode="dropdown"
                  style={{ width: '100%' }}
                  selectedValue={this.state.station_selected}
                  onValueChange={this.onValueChangeStation.bind(this)}
              >
                  <Picker.Item label="Select Station" value="key0" />
                  <Picker.Item label="El Tari Airport" value="key1" />
                  <Picker.Item label="Soekarno Hatta Airport" value="key2" />
                  <Picker.Item label="Juanda Airport" value="key3" />
              </Picker>
            </Item>
            <Item stackedLabel>
              <Label>MOVEMENT TYPE</Label>
              <Picker
                  note
                  mode="dropdown"
                  style={{ width: '100%' }}
                  selectedValue={this.state.mt_selected}
                  onValueChange={this.onValueChangeMt.bind(this)}
              >
                  <Picker.Item label="Select Movement" value="key0" />
              </Picker>
            </Item>            
            <Item stackedLabel>
              <Label>MOVEMENT FROM</Label>
              <Picker
                  note
                  mode="dropdown"
                  style={{ width: '100%' }}
                  selectedValue={this.state.mfrom_selected}
                  onValueChange={this.onValueChangeMfrom.bind(this)}
              >
                  <Picker.Item label="Select Movement From" value="key0" />
              </Picker>
            </Item>
            <Item stackedLabel>
              <Label>MOVEMENT TO</Label>
              <Picker
                  note
                  mode="dropdown"
                  style={{ width: '100%' }}
                  selectedValue={this.state.mto_selected}
                  onValueChange={this.onValueChangeMto.bind(this)}
              >
                  <Picker.Item label="Select Movement" value="key0" />
              </Picker>
            </Item>
            <Item stackedLabel>
              <Label>START DATE PLAN</Label>
                <TouchableOpacity onPress={()=>{this.selectedDateStart()}}>
									<Text style={{fontSize:16}}> {this.state.start_date_plan}</Text>
								</TouchableOpacity> 
            </Item>
            <Item stackedLabel>
              <Label>END DATE PLAN</Label>
              <TouchableOpacity onPress={()=>{this.selectedDateEnd()}}>
									<Text style={{fontSize:16}}> {this.state.end_date_plan}</Text>
								</TouchableOpacity> 
            </Item>      
            <Item stackedLabel>
              <Label>NOTE</Label>
              <Textarea bordered style={{ width: '70%' }}/>
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 , backgroundColor:"green"}}>
            <Text>Create</Text>
          </Button>					
        </Content>                
        <Footer>
          <FooterTab style={{ backgroundColor: '#fff' }}>
            <Button vertical
            onPress={() => navigate("Dashboard")}>
              <Icon name="apps" style={{ color: '#808080' }}/>
              <Text style={{ color: '#808080' }}>Dashboard</Text>
            </Button>
            <Button vertical active
             onPress={() => navigate("Order")}>
              <Icon active name="ios-clipboard"/>
              <Text>Order</Text>
            </Button>
            <Button vertical 
             onPress={() => navigate("Master")}>
              <Icon  name="ios-folder-open" style={{ color: '#808080' }}/>
              <Text style={{ color: '#808080' }}>Master</Text>
            </Button>
          </FooterTab>
        </Footer>
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