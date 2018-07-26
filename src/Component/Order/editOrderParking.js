'use strict';

import React, { Component } from 'react';
import { AsyncStorage, FlatList, ActivityIndicator, TouchableHighlight, Dimensions } from 'react-native';
import { Container, Footer, FooterTab,Textarea, Button, Header, DatePicker, Content, Form, Picker, Label, Body, Item, Input, Left, Right, Icon,  Text, Title, Thumbnail } from 'native-base';
import { StackNavigator } from 'react-navigation';
import GlobalConfig from '../GlobalConfig'

var fullwidth = Dimensions.get('window').width-10;
export default class editOrderParking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonUrl: GlobalConfig.SERVERHOST+'/index.php/api/',
            isLoading: true,
            // Get Data
            dataResult: [],
            listMaintenanceType: [],
            listMovementType: [],
            listEquipment: [],
            listUrgency: [],
            listHangar: [],
            listAircraftType: [],
            // Post Data
            no_order:'1',
            id_aircraft:'',
            id_maintenance_type:'',
            no_id_line:'1',
            id_line_hangar:'1',
            id_movement_type:'',
            id_urgency:'',
            id_equipment:'',
            swo_order:'',
            time_response_order:'',
            date_start:'',
            date_end:'',
            id_movement_from:'',
            id_movement_to:'',
            note_order:'',
            id_order:'', 
            user_id:''
        } 
        this.setResponseTime = this.setResponseTime.bind(this);
        this.setStartDate = this.setStartDate.bind(this);
        this.setEndDate = this.setEndDate.bind(this);
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
    //Load Data
    async loadData(token){
        // Maintenance Type
        await fetch(this.state.jsonUrl+'MaintenanceType/listMaintenanceType',{ 
            method: 'GET',
            headers: {   
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': token
                    }
        })
        .then((response) => response.json()).then((responseData) => {
            this.setState({
                listMaintenanceType: responseData.response
            });
        }).catch((error) => { 
            this.setState({isLoading: false});
            alert("Maintenance Type Not Found"); 
        }).done(); 
        
        // Equipment Type
        await fetch(this.state.jsonUrl+'Equipment/listEquipment',{  
            method: 'GET',
            headers: {   
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': token
                    }
        })
        .then((response) => response.json()).then((responseData) => {
            this.setState({
                listEquipment: responseData.response
            });
        }).catch((error) => {
            this.setState({isLoading: false});
            alert("Equipment Not Found");
        }).done(); 
        
        //Aircraft Type
        await fetch(this.state.jsonUrl+'AircraftType/listAircraftType',{ 
            method: 'GET',
            headers: {     
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': token 
                    }
        }) 
        .then((response) => response.json()).then((responseData) => {
            this.setState({
                listAircraftType: responseData.response
            });
        }).catch((error) => {
            this.setState({isLoading: false});
            alert("Aircraft Type Not Found");
        }).done(); 
         
        // Movement Type
        await fetch(this.state.jsonUrl+'MovementType/listMovementType',{ 
            method: 'GET',
            headers: {   
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': token
                    }
        })
        .then((response) => response.json()).then((responseData) => {
            this.setState({
                listMovementType: responseData.response
            });  
        }).catch((error) => {
            this.setState({isLoading: false});
            alert("Movement Type Not Found");
        }).done(); 
        
        // Urgency
        await fetch(this.state.jsonUrl+'Urgency/listUrgency',{ 
            method: 'GET',
            headers: {   
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': token
                    } 
        })
        .then((response) => response.json()).then((responseData) => {
            this.setState({
                listUrgency: responseData.response
            });
        }).catch((error) => {
            this.setState({isLoading: false});
            alert("Urgency Not Found");
        }).done(); 

        // Line Hanggar
        await fetch(this.state.jsonUrl+'Hangar/listHangar',{   
            method: 'GET',
            headers: {      
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': token
                    }
        })
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                listHangar: responseData.response
            });
        }).catch((error) => { 
            this.setState({isLoading: false});
            alert("Line Hanggar Not Found");
        }).done(); 

        //Detail
        await fetch(this.state.jsonUrl+'order/detail/'+this.state.orderId,{ 
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
                dataResult: responseData.response,
                id_aircraft:responseData.response[0].ID_AIRCRAFT_TYPE,
                id_maintenance_type:responseData.response[0].ID_MAINTENANCE_TYPE,
                id_movement_type:responseData.response[0].ID_MOVEMENT_TYPE,
                id_urgency:responseData.response[0].ID_URGENCY,
                id_equipment:responseData.response[0].ID_EQUIPMENT,
                swo_order:responseData.response[0].SWO_ORDER,
                time_response_order:responseData.response[0].TIME_RESPONSE_ORDER,
                date_start:responseData.response[0].DATE_START_ORDER,
                date_end:responseData.response[0].DATE_END_ORDER,
                id_movement_from:responseData.response[0].MOVEMENT_FROM_ID,
                id_movement_to:responseData.response[0].MOVEMENT_TO_ID,
                note_order:responseData.response[0].NOTE_ORDER,
                id_order:responseData.response[0].ID_ORDER,  
            });
        }).catch((error) => {
            this.setState({isLoading: false});
            alert("Error Connection");
        }).done(); 
    }
    
    //Post Data
    async postData(){ 
        await fetch(this.state.jsonUrl+'Order/update',{
            method: 'POST',
            headers: {   
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': this.state.token
                    },
            body: JSON.stringify({ 
                no_order: this.state.no_order, //Ambil dari mana?
                id_aircraft: this.state.id_aircraft,
                id_maintenance_type: this.state.id_maintenance_type,
                no_id_line: this.state.no_id_line, //Ambil dari mana?
                id_line_hangar:this.state.no_id_line, //Ambil dari mana?
                id_movement_type: this.state.id_movement_type,
                id_urgency: this.state.id_urgency,
                id_equipment: this.state.id_equipment, 
                swo_order: this.state.swo_order,
                time_response_order: this.state.time_response_order,
                date_start: this.state.date_start,
                date_end: this.state.date_end,
                movement_from: this.state.id_movement_from,
                movement_to: this.state.id_movement_to,
                note_order: this.state.note_order,
                id_order: this.state.id_order,
                user_id: this.state.user_id,
            }) 
        })
        .then((response) => response.json())
        .then((responseData) => {
            if (responseData.status == true) {
                this.props.navigation.navigate('detailOrderParking'); 
            }else{
               alert(responseData.response);
            }  
        }).done(); 
    } 

    // Onchange Urgency Picker 
    onValueChangeIdUrgency(value) {  
        this.setState({
            id_urgency:value
        });
    }

    // Onchange Aircraft Picker 
    onValueChangeIdAircraft(value) {  
        this.setState({
            id_aircraft:value
        });
    }

    // Onchange Maintenance Type Picker 
    onValueChangeIdMaintenanceType(value) {  
        this.setState({
            id_maintenance_type:value
        });
    }

    // Onchange Equipment Picker 
    onValueChangeIdEquipment(value) {  
        this.setState({
            id_equipment:value
        });
    }

    // Onchange Movement Type Picker 
    onValueChangeIdMovementType(value) {  
        this.setState({
            id_movement_type:value
        });
    }
    
    // Onchange Movement From Picker 
    onValueChangeIdMovementFrom(value) {
        this.setState({
            id_movement_from:value
        });
    }

    // Onchange Movement To Picker 
    onValueChangeIdMovementTo(value) {  
        this.setState({ 
            id_movement_to:value
        });
    }
    
    // Onchange Response Time Picker 
    setResponseTime(newDate) {
        var date = new Date(newDate);
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var dt = date.getDate();
        var seconds = date.getSeconds();
        var minutes = date.getMinutes();
        var hour = date.getHours();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        this.setState({ time_response_order : year+'-'+month+'-'+dt+' '+hour+':'+minutes+':'+seconds });
    }

    // Onchange Start Date Picker 
    setStartDate(newDate) {
        var date = new Date(newDate);
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var dt = date.getDate();
        var seconds = date.getSeconds();
        var minutes = date.getMinutes();
        var hour = date.getHours();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        this.setState({ date_start : year+'-'+month+'-'+dt+' '+hour+':'+minutes+':'+seconds });
    }

    // Onchange End Date Picker 
    setEndDate(newDate) {
        var date = new Date(newDate);
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var dt = date.getDate();
        var seconds = date.getSeconds();
        var minutes = date.getMinutes();
        var hour = date.getHours();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        this.setState({ date_end : year+'-'+month+'-'+dt+' '+hour+':'+minutes+':'+seconds });
    }

  render() {
    if (this.state.isLoading) {
      return (
        <Body style={{flex: 1}}>
          <ActivityIndicator />
        </Body>
      );
    }

    //Aircraft Picker Item
    let listAircraftTypeItem = this.state.listAircraftType.map( (s, i) => {
        return <Picker.Item key={i} value={s.ID_AIRCRAFT_TYPE} label={s.NAME_AIRCRAFT_TYPE} />
    });

    //Maintenance Type Picker Item
    let listMaintenanceTypeItem = this.state.listMaintenanceType.map( (s, i) => {
        return <Picker.Item key={i} value={s.ID_MAINTENANCE_TYPE} label={s.NAME_MAINTENANCE_TYPE} />
    });

    //Urgency Picker Item
    let listUrgencyItem = this.state.listUrgency.map( (s, i) => {
        return <Picker.Item key={i} value={s.ID_URGENCY} label={s.NAME_URGENCY} />
    });

    //Equipment Picker Item
    let listEquipmentItem = this.state.listEquipment.map( (s, i) => { 
        return <Picker.Item key={i} value={s.ID_EQUIPMENT} label={s.DESC_EQUIPMENT} />
    }); 

    //Movement Type Picker Item
    let listMovementTypeItem = this.state.listMovementType.map( (s, i) => {
        return <Picker.Item key={i} value={s.ID_MOVEMENT_TYPE} label={s.NAME_MOVEMENT_TYPE} />
    });

    //Movement From Picker Item
    let listMovementFromItem = this.state.listHangar.map( (s, i) => {
        return <Picker.Item key={i} value={s.ID_LINE_HANGAR} label={s.LINE_HANGAR_FORMAT} />
    });

    //Movement To Picker Item
    let listMovementToItem = this.state.listHangar.map( (s, i) => {
        return <Picker.Item key={i} value={s.ID_LINE_HANGAR} label={s.LINE_HANGAR_FORMAT} />
    });

    const { navigate } = this.props.navigation; 
    return (
        <Container>
            <Header style={{ backgroundColor: '#04245b' }}
            androidStatusBarColor="#002f81"> 
            <Left>
                <Button
                transparent
                onPress={() => this.props.navigation.navigate("detailOrderParking")}>
                <Icon style={{ color: '#fff' }} name="arrow-back" />
                </Button>
            </Left>
            <Body> 
                <Title style={{ color: '#fff' }}>Edit Order Parking</Title>
            </Body>
            <Right /> 
            </Header>
            <Content>
                <Form style={{width:'96%'}}>
                    <Item stackedLabel> 
                        <Label>URGENCY</Label>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: fullwidth }}
                            placeholder="Select Aircraft Type"
                            placeholderStyle={{ color: "#bfc6ea" }} 
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.id_urgency}
                            onValueChange={this.onValueChangeIdUrgency.bind(this)}
                            >
                            {listUrgencyItem}
                        </Picker> 
                    </Item>
                    <Item stackedLabel>
                        <Label>AIRCRAFT</Label>
                        <Picker 
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: fullwidth }}
                            placeholder="Select Aircraft Type"
                            placeholderStyle={{ color: "#bfc6ea" }} 
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.id_aircraft}
                            onValueChange={this.onValueChangeIdAircraft.bind(this)}
                        > 
                            {listAircraftTypeItem}
                        </Picker> 
                    </Item>  
                    <Item stackedLabel>
                        <Label>MAINTENANCE TYPE</Label>
                        <Picker 
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: fullwidth }}
                            placeholder="Select Maintenance Type"
                            placeholderStyle={{ color: "#bfc6ea" }} 
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.id_maintenance_type}
                            onValueChange={this.onValueChangeIdMaintenanceType.bind(this)}
                        > 
                            {listMaintenanceTypeItem}
                        </Picker> 
                    </Item> 
                    <Item stackedLabel>
                        <Label>EQUIPMENT</Label>
                        <Picker 
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: fullwidth }}
                            placeholder="Select Equipment Type"
                            placeholderStyle={{ color: "#bfc6ea" }} 
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.id_equipment}
                            onValueChange={this.onValueChangeIdEquipment.bind(this)}
                        > 
                            {listEquipmentItem}
                        </Picker> 
                    </Item>
                    <Item stackedLabel>
                        <Label>MOVEMENT TYPE</Label>
                        <Picker 
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: fullwidth }}
                            placeholder="Select Movement Type"
                            placeholderStyle={{ color: "#bfc6ea" }} 
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.id_movement_type}
                            onValueChange={this.onValueChangeIdMovementType.bind(this)}
                        > 
                            {listMovementTypeItem}
                        </Picker> 
                    </Item>
                    <Item stackedLabel>
                        <Label>MOVEMENT FROM</Label>
                        <Picker 
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: fullwidth }}
                            placeholder="Select Movement From"
                            placeholderStyle={{ color: "#bfc6ea" }} 
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.id_movement_from}
                            onValueChange={this.onValueChangeIdMovementFrom.bind(this)}
                        > 
                            {listMovementFromItem}
                        </Picker> 
                    </Item>
                    <Item stackedLabel>
                        <Label>MOVEMENT TO</Label>
                        <Picker 
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: fullwidth }}
                            placeholder="Select Movement TO"
                            placeholderStyle={{ color: "#bfc6ea" }} 
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.id_movement_to}
                            onValueChange={this.onValueChangeIdMovementTo.bind(this)}
                        > 
                            {listMovementToItem}
                        </Picker>   
                    </Item>
                    <Item stackedLabel>
                        <Label>SWO ORDER</Label>
                        <Input value={this.state.swo_order} onChangeText={(text) => this.setState({swo_order:text})}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>TIME RESPONSE ORDER</Label>
                        <DatePicker
                            defaultDate={new Date(this.state.time_response_order)} 
                            locale={"en"} 
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText={this.state.time_response_order}
                            textStyle={{ color: "black" }}
                            placeHolderTextStyle={{ color: "black" }}
                            onDateChange={this.setResponseTime}
                            />
                    </Item>
                    <Item stackedLabel>
                        <Label>START DATE PLAN</Label>
                        <DatePicker
                            defaultDate={new Date(this.state.date_start)} 
                            locale={"en"} 
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText={this.state.date_start}
                            textStyle={{ color: "black" }}
                            placeHolderTextStyle={{ color: "black" }}
                            onDateChange={this.setStartDate}
                            />
                    </Item>
                    <Item stackedLabel>
                        <Label>END DATE PLAN</Label> 
                        <DatePicker
                            defaultDate={new Date(this.state.date_end)} 
                            locale={"en"} 
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText={this.state.date_end}
                            textStyle={{ color: "black" }}
                            placeHolderTextStyle={{ color: "black" }}
                            onDateChange={this.setEndDate}
                            />
                    </Item>
                    <Item stackedLabel>
                        <Label>NOTE</Label>  
                        <Textarea bordered style={{ width: '100%',marginBottom:15,marginTop:15 }} value={this.state.note_order} onChangeText={(text) => this.setState({note_order:text})}/>
                    </Item>
                </Form> 	
                <Button block style={{ margin: 15, marginTop: 50 , backgroundColor:"green"}} onPress={() => this.postData()}>
                    <Text>Edit</Text>
                </Button>
            </Content>
      </Container>
    );
  }
}

