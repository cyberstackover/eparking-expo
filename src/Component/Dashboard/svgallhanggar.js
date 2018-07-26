import React, { Component } from 'react';
import { AsyncStorage, View, StyleSheet, Dimensions} from 'react-native';
import { Container, Header, Content, Tab, Tabs, Left, Button, TabHeading, Body,Text,Title, ScrollableTab ,Card, CardItem, Icon, Right, Footer,FooterTab } from 'native-base';
import GlobalConfig from '../GlobalConfig'

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    // Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

var thats;
export default class svgallhanggar extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  countLoad: 0,
		  jsonUrlHangar: GlobalConfig.SERVERHOST+'/index.php/api/hangar/availability/hangar/',
		  jsonUrlParkir: GlobalConfig.SERVERHOST+'/index.php/api/hangar/availability/parkir/',
		  jsonUrlWashing: GlobalConfig.SERVERHOST+'/index.php/api/hangar/availability/washing/',
		  isLoading: true,
		  dataResult: {H1:[],H2:[],H3:[],H4L:[],H4R:[],P1:[],P2:[],P3:[],P4S:[],P4U:[],W1:[],W2:[]},
		}
		thats=this;
	}
	componentDidMount(){
		AsyncStorage.getItem("tokenUser").then((value) => {
		   this.setState({ token: value });
		})
		.then(res => {
		  this.loadData(this.state.token);
		});
	}
	async loadData(token){
		await fetch(this.state.jsonUrlHangar+"1",{ method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'token': token } })
		.then((response) => response.json()).then((responseData) => { var dataCon = this.state.dataResult; dataCon.H1=responseData.response; this.setState({ countLoad: this.state.countLoad+1, isLoading: false, dataResult: dataCon }); }).catch((error) => { alert("Error Connection "); }).done(); 
		await fetch(this.state.jsonUrlHangar+"2/desc",{ method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'token': token } })
		.then((response) => response.json()).then((responseData) => { var dataCon = this.state.dataResult; dataCon.H2=responseData.response; this.setState({ countLoad: this.state.countLoad+1, isLoading: false, dataResult: dataCon }); }).catch((error) => { alert("Error Connection "); }).done(); 
		await fetch(this.state.jsonUrlHangar+"3",{ method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'token': token } })
		.then((response) => response.json()).then((responseData) => { var dataCon = this.state.dataResult; dataCon.H3=responseData.response; this.setState({ countLoad: this.state.countLoad+1, isLoading: false, dataResult: dataCon }); }).catch((error) => { alert("Error Connection "); }).done(); 
		await fetch(this.state.jsonUrlHangar+"4/desc",{ method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'token': token } })
		.then((response) => response.json()).then((responseData) => { var dataCon = this.state.dataResult; dataCon.H4L=responseData.response; this.setState({ countLoad: this.state.countLoad+1, isLoading: false, dataResult: dataCon }); }).catch((error) => { alert("Error Connection "); }).done(); 
		await fetch(this.state.jsonUrlHangar+"4/asc",{ method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'token': token } })
		.then((response) => response.json()).then((responseData) => { var dataCon = this.state.dataResult; dataCon.H4R=responseData.response; this.setState({ countLoad: this.state.countLoad+1, isLoading: false, dataResult: dataCon }); }).catch((error) => { alert("Error Connection "); }).done(); 
		
		await fetch(this.state.jsonUrlParkir+"1",{ method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'token': token } })
		.then((response) => response.json()).then((responseData) => { var dataCon = this.state.dataResult; dataCon.P1=responseData.response; this.setState({ countLoad: this.state.countLoad+1, isLoading: false, dataResult: dataCon }); }).catch((error) => { alert("Error Connection "); }).done(); 
		await fetch(this.state.jsonUrlParkir+"2",{ method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'token': token } })
		.then((response) => response.json()).then((responseData) => { var dataCon = this.state.dataResult; dataCon.P2=responseData.response; this.setState({ countLoad: this.state.countLoad+1, isLoading: false, dataResult: dataCon }); }).catch((error) => { alert("Error Connection "); }).done(); 
		await fetch(this.state.jsonUrlParkir+"3",{ method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'token': token } })
		.then((response) => response.json()).then((responseData) => { var dataCon = this.state.dataResult; dataCon.P3=responseData.response; this.setState({ countLoad: this.state.countLoad+1, isLoading: false, dataResult: dataCon }); }).catch((error) => { alert("Error Connection "); }).done(); 
		await fetch(this.state.jsonUrlParkir+"4/selatan",{ method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'token': token } })
		.then((response) => response.json()).then((responseData) => { var dataCon = this.state.dataResult; dataCon.P4S=responseData.response; this.setState({ countLoad: this.state.countLoad+1, isLoading: false, dataResult: dataCon }); }).catch((error) => { alert("Error Connection "); }).done(); 
		await fetch(this.state.jsonUrlParkir+"4/utara",{ method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'token': token } })
		.then((response) => response.json()).then((responseData) => { var dataCon = this.state.dataResult; dataCon.P4U=responseData.response; this.setState({ countLoad: this.state.countLoad+1, isLoading: false, dataResult: dataCon }); }).catch((error) => { alert("Error Connection "); }).done(); 
		
		await fetch(this.state.jsonUrlWashing+"1",{ method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'token': token } })
		.then((response) => response.json()).then((responseData) => { var dataCon = this.state.dataResult; dataCon.W1=responseData.response; this.setState({ countLoad: this.state.countLoad+1, isLoading: false, dataResult: dataCon }); }).catch((error) => { alert("Error Connection "); }).done(); 
		await fetch(this.state.jsonUrlWashing+"2",{ method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'token': token } })
		.then((response) => response.json()).then((responseData) => { var dataCon = this.state.dataResult; dataCon.W2=responseData.response; this.setState({ countLoad: this.state.countLoad+1, isLoading: false, dataResult: dataCon }); }).catch((error) => { alert("Error Connection "); }).done(); 
		
	}
	getColor(objects,line,slot){
		var result=[];
		var color="green";
		if(this.state.dataResult[objects]){
			// get Line
			result = this.searchValue(this.state.dataResult[objects],line);
			if(result.length>0){
				// get slot
				result = this.searchValue(result,slot);
				if(result.length>0){
					// get order
					if(result.ORDER.length>0){
						color = result.ORDER[0].COLOR_STATUS;
					}
				}
			}
		}
		return color;
	}
	searchValue(objects,toSearch){
		var results=[];
		for(var i=0; i<objects.length; i++) {
			for(key in objects[i]) {
				if(objects[i][key]==toSearch) {
				  results.push(objects[i]);
				}
			}
		}
		return results;
	}
	handleClick(val){
		AsyncStorage.setItem('HanggarActiveId', val) 
		.then(()=>{
		  thats.props.navigation.navigate('Hangar');  
		});
	};
	renderSVG(){
		if(this.state.countLoad>11){
			// alert(JSON.stringify(this.state.dataResult));
			const {height, width} = Dimensions.get('window');
			return (
			<Svg height={width/1.0909090909090909090909090909091} width={width/1.0909090909090909090909090909091} style={{backgroundColor:'#1A3560'}} >
				<G id="Layer_x0020_1" scale={width/1600}>
				  <G id="_2283315412800">
				   <Rect fill="#1A3560" width="1423" height="825" rx="12" ry="11"/>
				   <Polygon fill="#0E1C37" stroke="#373435" stroke-width="0.561699" points="0,646 1424,646 1424,692 0,692 "/>
				   <Polygon fill="#0E1C37" stroke="#373435" stroke-width="0.561699" points="978,0 978,650 918,650 918,0 "/>
				   <Polygon fill="#0E1C37" stroke="#373435" stroke-width="0.561699" points="291,242 918,242 918,280 291,280 "/>
				   <Polygon fill="#0E1C37" stroke="#373435" stroke-width="0.561699" points="1370,0 1370,650 1323,650 1323,0 "/>
				   <Line fill="none" stroke="white" stroke-width="0.561699" stroke-dasharray="2.808497 8.425490" x1="0" y1="669" x2="1424" y2= "669" />
				   <Line fill="none" stroke="white" stroke-width="0.561699" stroke-dasharray="2.808497 8.425490" x1="948" y1="0" x2="948" y2= "650" />
				   <Line fill="none" stroke="white" stroke-width="0.561699" stroke-dasharray="2.808497 8.425490" x1="291" y1="261" x2="918" y2= "261" />
				   <Line fill="none" stroke="white" stroke-width="0.561699" stroke-dasharray="2.808497 8.425490" x1="1346" y1="0" x2="1346" y2= "650" />
				   <Polygon fill="none" stroke="orange" stroke-width="0.242639" points="0,657 1424,657 1424,684 0,684 "/>
				   <Polyline fill="none" stroke="orange" stroke-width="0.242639" points="918,275 291,275 291,248 918,248 "/>
				  </G>
				  <G id="_2283315416128">
				   <Path fill="white" d="M70 95c0,1 0,3 0,5 -1,4 0,7 1,7 1,0 2,-3 2,-7 1,-2 0,-4 0,-5l-3 0z"/>
				   <Path fill="white" d="M70 96c0,0 0,0 0,1l3 0c0,0 0,-1 0,-1l-3 0z"/>
				   <Path fill="white" d="M70 95c0,0 0,1 0,1l3 0c0,0 0,-1 0,-1l-3 0z"/>
				   <Path fill="white" d="M71 107c1,0 2,-3 2,-7 1,-2 0,-4 0,-5l-1 0 -1 12z"/>
				   <Path fill="white" d="M72 97l1 0c0,0 0,-1 0,-1l-1 0 0 1z"/>
				   <Path fill="white" d="M72 96l1 0c0,0 0,-1 0,-1l-1 0 0 1z"/>
				   <Path fill="white" d="M61 87c0,-2 1,-4 2,-4l-1 41c-1,-4 -2,-9 -2,-13l1 -24z"/>
				   <Path fill="white" d="M65 87c0,-2 -1,-4 -2,-4l-1 41c1,-4 2,-8 3,-13l0 -24z"/>
				   <Path fill="white" d="M63 86c-1,0 -2,1 -2,1 0,-1 1,-2 2,-2l0 1z"/>
				   <Path fill="white" d="M63 86c1,0 1,1 2,1 -1,-1 -1,-2 -2,-2l0 1z"/>
				   <Path fill="white" d="M53 107c2,0 2,-3 3,-7 0,-2 -1,-4 -1,-5l-1 0 -1 12z"/>
				   <Path fill="white" d="M54 96l1 0c0,0 0,0 0,0l-1 0 0 0z"/>
				   <Path fill="white" d="M54 96l1 0c0,-1 0,-1 0,-1l-1 0 0 1z"/>
				   <Path fill="white" d="M53 107c-1,0 -1,-4 -1,-7 0,-2 0,-4 0,-5l2 0 -1 12z"/>
				   <Path fill="white" d="M54 96l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
				   <Path fill="white" d="M54 96l-2 0c0,-1 0,-1 0,-1l2 0 0 1z"/>
				   <Path fill="white" d="M61 94l-16 12 0 5 15 -7c2,-6 2,-9 1,-10z"/>
				   <Path fill="white" d="M45 104c0,0 0,2 0,5 0,2 0,4 0,4 -1,0 -1,-2 -1,-4 0,-3 0,-5 1,-5z"/>
				   <Path fill="white" d="M64 94l16 13 0 5 -15 -8c-2,-6 -2,-9 -1,-10z"/>
				   <Path fill="white" d="M80 105c0,0 0,2 0,4 -1,3 0,5 0,5 0,0 1,-2 1,-5 0,-2 -1,-4 -1,-4z"/>
				   <Path fill="white" d="M61 119c0,0 -6,5 -6,5l0 2 7 -3 -1 -4z"/>
				   <Path fill="white" d="M63 119c0,0 6,5 6,5l0 2 -7 -3 1 -4z"/>
				   <Path fill="white" d="M62 115c0,0 0,1 -1,3 0,1 0,3 1,4l0 4 0 -11z"/>
				   <Path fill="white" d="M62 115c1,0 1,1 1,3 0,1 0,3 0,4l-1 4 0 -11z"/>
				  </G>
				  <G id="_2283315432192">
				   <Path fill="white" d="M246 100c-1,2 -1,5 -1,8 0,5 1,9 2,10 2,0 3,-5 3,-10 0,-3 0,-6 0,-7l-4 -1z"/>
				   <Path fill="white" d="M245 102c0,0 0,0 0,1l5 0c0,0 0,-1 0,-1l-5 0z"/>
				   <Path fill="white" d="M246 100c0,1 0,1 -1,2l5 0c0,0 0,-1 0,-1l-4 -1z"/>
				   <Path fill="white" d="M247 118c2,0 3,-5 3,-10 0,-3 0,-6 0,-7l-2 0 -1 17z"/>
				   <Path fill="white" d="M248 103l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
				   <Path fill="white" d="M248 102l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
				   <Path fill="white" d="M232 89c0,-4 1,-6 3,-6l-1 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
				   <Path fill="white" d="M238 89c0,-4 -1,-6 -3,-6l-1 59c2,-6 3,-12 4,-19l0 -34z"/>
				   <Path fill="white" d="M235 87c-1,0 -2,2 -2,2 0,-2 1,-3 2,-4l0 2z"/>
				   <Path fill="white" d="M235 87c2,0 2,2 3,2 -1,-1 -1,-3 -3,-4l0 2z"/>
				   <Path fill="white" d="M222 117c1,0 2,-4 3,-10 0,-3 -1,-5 -1,-7l-2 0 0 17z"/>
				   <Path fill="white" d="M222 102l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
				   <Path fill="white" d="M222 102l2 0c0,-1 0,-2 0,-2l-2 0 0 2z"/>
				   <Path fill="white" d="M222 117c-2,0 -3,-4 -3,-10 0,-3 0,-5 1,-7l2 0 0 17z"/>
				   <Path fill="white" d="M222 102l-3 0c1,0 1,0 1,0l2 0 0 0z"/>
				   <Path fill="white" d="M222 102l-2 0c0,-1 0,-2 0,-2l2 0 0 2z"/>
				   <Path fill="white" d="M233 99l-24 17 0 8 22 -11c3,-8 3,-13 2,-14z"/>
				   <Path fill="white" d="M209 114c0,0 1,2 1,6 0,3 -1,6 -1,6 -1,0 -1,-3 -1,-6 0,-4 1,-6 1,-6z"/>
				   <Path fill="white" d="M237 99l23 19 0 7 -22 -12c-2,-8 -2,-13 -1,-14z"/>
				   <Path fill="white" d="M260 115c0,0 -1,3 -1,6 0,3 0,6 1,6 0,0 1,-2 1,-6 0,-3 0,-6 -1,-6z"/>
				   <Path fill="white" d="M233 135c0,0 -9,7 -9,7l0 3 9 -5 0 -5z"/>
				   <Path fill="white" d="M235 135c0,0 9,7 9,7l0 3 -9 -5 0 -5z"/>
				   <Path fill="white" d="M234 129c0,0 -1,2 -1,4 0,2 0,4 0,7l1 5 0 -16z"/>
				   <Path fill="white" d="M234 129c1,0 1,2 1,4 0,2 0,4 0,7l-1 5 0 -16z"/>
				  </G>
				  <G id="_2283315371200">
				   <Path fill="white" d="M188 106c0,2 -1,4 -1,7 0,5 1,10 3,10 1,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-4 0z"/>
				   <Path fill="white" d="M188 107c0,1 0,1 0,1l5 0c0,0 -1,0 -1,0l-4 -1z"/>
				   <Path fill="white" d="M188 106c0,0 0,1 0,1l4 1c0,-1 0,-2 0,-2l-4 0z"/>
				   <Path fill="white" d="M190 123c1,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-2 0 0 17z"/>
				   <Path fill="white" d="M190 108l3 0c0,0 -1,-1 -1,-1l-2 0 0 1z"/>
				   <Path fill="white" d="M190 108l2 0c0,-1 0,-2 0,-2l-2 0 0 2z"/>
				   <Path fill="white" d="M174 89c1,-4 2,-6 4,-6l-2 59c-1,-6 -2,-12 -3,-19l1 -34z"/>
				   <Path fill="white" d="M181 89c0,-4 -2,-6 -3,-6l-2 59c2,-6 4,-12 4,-19l1 -34z"/>
				   <Path fill="white" d="M178 87c-2,0 -3,2 -3,2 0,-2 1,-3 3,-4l0 2z"/>
				   <Path fill="white" d="M178 87c1,0 2,2 2,2 0,-1 -1,-3 -2,-4l0 2z"/>
				   <G>
					<Path fill="white" d="M164 122c2,0 3,-4 3,-9 0,-3 0,-6 -1,-8l-2 0 0 17z"/>
					<Path fill="white" d="M164 108l3 0c0,-1 0,-1 0,-1l-3 0 0 1z"/>
					<Path fill="white" d="M164 107l3 0c-1,-1 -1,-1 -1,-2l-2 0 0 2z"/>
					<Path fill="white" d="M164 122c-2,0 -3,-4 -3,-9 0,-3 1,-6 1,-8l2 0 0 17z"/>
					<Path fill="white" d="M164 108l-2 0c0,-1 0,-1 0,-1l2 0 0 1z"/>
					<Path fill="white" d="M164 107l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
				   </G>
				   <Path fill="white" d="M151 116c1,0 1,3 1,7 0,3 0,6 -1,6 0,0 -1,-3 -1,-6 1,-4 1,-7 1,-7z"/>
				   <Path fill="white" d="M203 117c-1,0 -1,3 -1,7 0,3 0,6 0,6 1,0 1,-3 1,-6 0,-4 0,-7 0,-7z"/>
				   <Path fill="white" d="M175 135c0,0 -9,7 -9,7l0 3 10 -5 -1 -5z"/>
				   <Path fill="white" d="M178 135c0,0 9,7 9,7l-1 3 -9 -5 1 -5z"/>
				   <Path fill="white" d="M177 129c-1,0 -1,2 -2,4 0,2 0,4 1,7l0 5 1 -16z"/>
				   <Path fill="white" d="M177 129c0,0 1,2 1,4 0,2 0,4 -1,7l-1 5 1 -16z"/>
				   <Path fill="white" d="M195 110c0,2 -1,4 -1,6 0,4 1,7 2,7 1,0 2,-3 3,-7 0,-2 -1,-4 -1,-6l-3 0z"/>
				   <Path fill="white" d="M195 112c0,0 0,0 0,0l3 0c0,0 0,0 0,0l-3 0z"/>
				   <Path fill="white" d="M195 110c0,1 0,1 0,2l3 0c0,-1 0,-1 0,-2l-3 0z"/>
				   <Path fill="white" d="M196 123c1,0 2,-3 3,-7 0,-2 -1,-4 -1,-6l-1 0 -1 13z"/>
				   <Path fill="white" d="M197 112l1 0c0,0 0,0 0,0l-1 0 0 0z"/>
				   <Path fill="white" d="M197 112l1 0c0,-1 0,-1 0,-2l-1 0 0 2z"/>
				   <Path fill="white" d="M156 110c0,2 0,4 0,6 0,4 0,7 2,7 1,0 2,-3 2,-7 0,-2 0,-4 -1,-6l-3 0z"/>
				   <Path fill="white" d="M156 112c0,0 0,0 0,0l4 0c-1,0 -1,0 -1,0l-3 0z"/>
				   <Path fill="white" d="M156 110c0,1 0,1 0,2l3 0c0,-1 0,-1 0,-2l-3 0z"/>
				   <Path fill="white" d="M158 123c1,0 2,-3 2,-7 0,-2 0,-4 -1,-6l-1 0 0 13z"/>
				   <Path fill="white" d="M158 112l2 0c-1,0 -1,0 -1,0l-1 0 0 0z"/>
				   <Path fill="white" d="M158 112l1 0c0,-1 0,-1 0,-2l-1 0 0 2z"/>
				   <Path fill="white" d="M175 102l-23 17 0 7 22 -11c2,-8 3,-12 1,-13z"/>
				   <Path fill="white" d="M180 102l22 18 0 7 -22 -11c-2,-9 -2,-13 0,-14z"/>
				  </G>
				  <Path fill="white" fill-rule="nonzero" d="M215 73l0 -6 2 0c1,0 2,0 2,0 0,0 0,1 0,1 0,0 0,1 0,1 0,0 0,0 -1,0l0 0c1,1 1,1 1,1 1,0 1,1 1,1 0,1 -1,1 -1,1 0,1 -1,1 -2,1l-2 0zm1 -5l0 1 1 0c0,0 1,0 1,0 0,0 0,0 0,-1 0,0 0,0 -1,0l-1 0zm0 2l0 2 1 0c0,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,-1 0,0 0,0 -1,0l-1 0z"/>
				  <Path id="1" fill="white" fill-rule="nonzero" d="M225 67c0,1 -1,1 -1,2 0,0 0,1 -1,1 0,1 0,1 0,1 0,1 0,1 0,2l-2 0c0,-1 0,-1 1,-2 0,0 0,0 0,-1 0,0 0,-1 1,-1 0,-1 0,-1 0,-1l-3 0 0 -1 5 0 0 0z"/>
				  <Path id="2" fill="white" fill-rule="nonzero" d="M230 67c0,1 -1,1 -1,2 0,0 0,1 0,1 -1,1 -1,1 -1,1 0,1 0,1 0,2l-2 0c1,-1 1,-1 1,-2 0,0 0,0 0,-1 0,0 1,-1 1,-1 0,-1 0,-1 1,-1l-3 0 0 -1 4 0 0 0z"/>
				  <Path id="3" fill="white" fill-rule="nonzero" d="M235 67c0,1 0,1 -1,2 0,0 0,1 0,1 0,1 0,1 -1,1 0,1 0,1 0,2l-1 0c0,-1 0,-1 0,-2 0,0 0,0 0,-1 1,0 1,-1 1,-1 0,-1 0,-1 1,-1l-3 0 0 -1 4 0 0 0z"/>
				  <Polygon id="4" fill="white" fill-rule="nonzero" points="239,71 236,71 236,70 239,70 "/>
				  <Path id="5" fill="white" fill-rule="nonzero" d="M240 73l0 -2c0,1 1,1 1,1 1,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,-1 0,0 -1,0 -1,0l-1 0 0 -1 1 0c1,0 1,0 1,-1 0,0 0,0 -1,0 0,0 -1,0 -1,0l0 -1c0,0 1,-1 1,-1 1,0 2,1 2,1 0,0 0,1 0,1 0,1 0,1 -1,2l0 0c1,0 1,0 1,0 1,0 1,1 1,1 0,1 -1,1 -1,1 0,1 -1,1 -2,1 0,0 -1,0 -1,0z"/>
				  <Path id="6" fill="white" fill-rule="nonzero" d="M247 73c-2,0 -2,-1 -2,-3 0,-1 0,-2 0,-3 1,0 1,-1 2,-1 1,0 2,2 2,4 0,1 0,2 0,2 -1,1 -1,1 -2,1zm0 -5c-1,0 -1,0 -1,2 0,1 0,2 1,2 0,0 1,-1 1,-2 0,-2 0,-2 -1,-2z"/>
				  <Path id="7" fill="white" fill-rule="nonzero" d="M252 73c-1,0 -2,-1 -2,-3 0,-1 0,-2 0,-3 1,0 1,-1 2,-1 2,0 2,2 2,4 0,1 0,2 0,2 -1,1 -1,1 -2,1zm0 -5c0,0 -1,0 -1,2 0,1 1,2 1,2 1,0 1,-1 1,-2 0,-2 0,-2 -1,-2z"/>
				  <Path fill="white" fill-rule="nonzero" d="M157 73l0 -6 2 0c1,0 2,0 2,0 0,0 1,1 1,1 0,0 -1,1 -1,1 0,0 0,0 -1,0l0 0c1,1 1,1 1,1 1,0 1,1 1,1 0,1 0,1 -1,1 0,1 -1,1 -1,1l-3 0zm2 -5l0 1 0 0c0,0 1,0 1,0 0,0 0,0 0,-1 0,0 0,0 -1,0l0 0zm0 2l0 2 0 0c1,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,-1 0,0 0,0 -1,0l0 0z"/>
				  <Path id="1" fill="white" fill-rule="nonzero" d="M167 67c0,1 -1,1 -1,2 0,0 0,1 0,1 -1,1 -1,1 -1,1 0,1 0,1 0,2l-2 0c1,-1 1,-1 1,-2 0,0 0,0 0,-1 0,0 1,-1 1,-1 0,-1 0,-1 1,-1l-3 0 0 -1 4 0 0 0z"/>
				  <Path id="2" fill="white" fill-rule="nonzero" d="M172 67l0 4 0 0 0 1 0 0 0 1 -2 0 0 -1 -2 0 0 -2c0,0 0,0 0,0 1,-1 1,-1 1,-1 0,-1 0,-1 1,-1 0,-1 0,-1 0,-1l2 0zm-3 4l1 0 0 -3c0,1 0,1 0,1 0,0 0,0 0,0 -1,1 -1,1 -1,1 0,0 0,0 0,1z"/>
				  <Path id="3" fill="white" fill-rule="nonzero" d="M177 67c0,1 0,1 0,2 -1,0 -1,1 -1,1 0,1 0,1 0,1 -1,1 -1,1 -1,2l-1 0c0,-1 0,-1 0,-2 0,0 0,0 1,-1 0,0 0,-1 0,-1 0,-1 1,-1 1,-1l-3 0 0 -1 4 0 0 0z"/>
				  <Polygon id="4" fill="white" fill-rule="nonzero" points="181,71 178,71 178,70 181,70 "/>
				  <Path id="5" fill="white" fill-rule="nonzero" d="M185 67l0 4 1 0 0 1 -1 0 0 1 -1 0 0 -1 -3 0 0 -2c1,0 1,0 1,0 1,-1 1,-1 1,-1 0,-1 0,-1 1,-1 0,-1 0,-1 0,-1l1 0zm-2 4l1 0 0 -3c0,1 0,1 0,1 0,0 0,0 0,0 -1,1 -1,1 -1,1 0,0 0,0 0,1z"/>
				  <Path id="6" fill="white" fill-rule="nonzero" d="M189 73c-1,0 -2,-1 -2,-3 0,-1 0,-2 0,-3 1,0 1,-1 2,-1 2,0 2,2 2,4 0,1 0,2 0,2 -1,1 -1,1 -2,1zm0 -5c-1,0 -1,0 -1,2 0,1 0,2 1,2 1,0 1,-1 1,-2 0,-2 0,-2 -1,-2z"/>
				  <Path id="7" fill="white" fill-rule="nonzero" d="M194 73c-1,0 -2,-1 -2,-3 0,-1 0,-2 1,-3 0,0 1,-1 1,-1 2,0 3,2 3,4 0,1 -1,2 -1,2 0,1 -1,1 -2,1zm0 -5c0,0 -1,0 -1,2 0,1 1,2 1,2 1,0 1,-1 1,-2 0,-2 0,-2 -1,-2z"/>
				  <Path fill="white" fill-rule="nonzero" d="M105 73l-2 0 0 -2 -3 0 0 2 -2 0 3 -6 1 0 3 6zm-3 -3l0 -2c0,0 0,0 0,0l-1 0c0,0 0,0 0,0l0 2 1 0z"/>
				  <Path id="1" fill="white" fill-rule="nonzero" d="M105 73l0 -2c1,1 1,1 2,1 0,0 0,0 0,0 1,0 1,-1 1,-1 0,0 0,0 -1,-1 0,0 0,0 -1,0l0 0 0 -1 0 0c1,0 2,0 2,-1 0,0 -1,0 -1,0 -1,0 -1,0 -2,0l0 -1c1,0 1,-1 2,-1 1,0 1,1 1,1 1,0 1,1 1,1 0,1 0,1 -1,2l0 0c0,0 1,0 1,0 0,0 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 -2,1 -1,0 -1,0 -2,0z"/>
				  <Path id="2" fill="white" fill-rule="nonzero" d="M110 73l0 -2c1,1 1,1 2,1 0,0 0,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,-1 -1,0 -1,0 -1,0l-1 0 0 -1 1 0c0,0 1,0 1,-1 0,0 -1,0 -1,0 -1,0 -1,0 -1,0l0 -1c0,0 1,-1 1,-1 1,0 1,1 2,1 0,0 0,1 0,1 0,1 0,1 -1,2l0 0c0,0 1,0 1,0 0,0 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 -2,1 -1,0 -1,0 -2,0z"/>
				  <Path id="3" fill="white" fill-rule="nonzero" d="M118 73c-2,0 -3,-1 -3,-3 0,-1 1,-2 1,-3 0,0 1,-1 2,-1 1,0 2,2 2,4 0,1 0,2 -1,2 0,1 -1,1 -1,1zm0 -5c-1,0 -1,0 -1,2 0,1 0,2 1,2 0,0 0,-1 0,-2 0,-2 0,-2 0,-2z"/>
				  <Polygon id="4" fill="white" fill-rule="nonzero" points="123,71 121,71 121,70 123,70 "/>
				  <Path id="5" fill="white" fill-rule="nonzero" d="M124 73l0 -2c1,1 1,1 2,1 0,0 0,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,-1 -1,0 -1,0 -1,0l-1 0 0 -1 1 0c0,0 1,0 1,-1 0,0 -1,0 -1,0 -1,0 -1,0 -1,0l0 -1c0,0 1,-1 1,-1 1,0 1,1 2,1 0,0 0,1 0,1 0,1 0,1 -1,2l0 0c0,0 1,0 1,0 0,0 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 -2,1 -1,0 -1,0 -2,0z"/>
				  <Path id="6" fill="white" fill-rule="nonzero" d="M132 73c-2,0 -3,-1 -3,-3 0,-1 0,-2 1,-3 0,0 1,-1 2,-1 1,0 2,2 2,4 0,1 0,2 -1,2 0,1 -1,1 -1,1zm0 -5c-1,0 -1,0 -1,2 0,1 0,2 1,2 0,0 0,-1 0,-2 0,-2 0,-2 0,-2z"/>
				  <Path id="7" fill="white" fill-rule="nonzero" d="M137 73c-2,0 -3,-1 -3,-3 0,-1 1,-2 1,-3 0,0 1,-1 2,-1 1,0 2,2 2,4 0,1 0,2 -1,2 0,1 -1,1 -1,1zm0 -5c-1,0 -1,0 -1,2 0,1 0,2 1,2 0,0 1,-1 1,-2 0,-2 -1,-2 -1,-2z"/>
				  <Path fill="white" fill-rule="nonzero" d="M43 73l0 -6 2 0c1,0 1,0 2,0 0,0 0,1 0,1 0,0 0,1 0,1 0,0 -1,0 -1,0l0 0c0,1 1,1 1,1 0,0 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 -2,1l-2 0zm1 -5l0 1 1 0c0,0 0,0 0,0 1,0 1,0 1,-1 0,0 -1,0 -1,0l-1 0zm0 2l0 2 1 0c0,0 0,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,-1 -1,0 -1,0 -1,0l-1 0z"/>
				  <Path id="1" fill="white" fill-rule="nonzero" d="M53 67c-1,1 -1,1 -1,2 0,0 -1,1 -1,1 0,1 0,1 0,1 0,1 0,1 -1,2l-1 0c0,-1 0,-1 0,-2 0,0 1,0 1,-1 0,0 0,-1 0,-1 1,-1 1,-1 1,-1l-3 0 0 -1 5 0 0 0z"/>
				  <Path id="2" fill="white" fill-rule="nonzero" d="M53 73l0 -2c1,1 1,1 2,1 0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,-1 -1,0 -1,0 -1,0l-1 0 0 -1 1 0c0,0 1,0 1,-1 0,0 -1,0 -1,0 -1,0 -1,0 -1,0l0 -1c0,0 1,-1 1,-1 1,0 1,1 2,1 0,0 0,1 0,1 0,1 0,1 -1,2l0 0c0,0 1,0 1,0 0,0 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 -2,1 -1,0 -1,0 -2,0z"/>
				  <Path id="3" fill="white" fill-rule="nonzero" d="M63 67c0,1 -1,1 -1,2 0,0 0,1 0,1 -1,1 -1,1 -1,1 0,1 0,1 0,2l-2 0c0,-1 1,-1 1,-2 0,0 0,0 0,-1 0,0 1,-1 1,-1 0,-1 0,-1 0,-1l-3 0 0 -1 5 0 0 0z"/>
				  <Polygon id="4" fill="white" fill-rule="nonzero" points="66,71 64,71 64,70 66,70 "/>
				  <Path id="5" fill="white" fill-rule="nonzero" d="M67 71c0,0 0,0 0,0 0,0 0,-1 1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 -1,-1 -1,-1 0,0 0,0 1,-1 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,-1 0,-1 1,0 1,1 1,1 1,0 1,0 1,0 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,1 0,1 0,0 0,0 -1,1 1,0 1,0 1,0 0,0 0,0 0,0 0,0 1,0 1,1 0,0 0,0 0,0 0,0 0,1 0,1 -1,0 -1,0 -1,0 0,1 0,1 -1,1 0,0 0,0 -1,0 0,0 0,0 0,0 -1,0 -1,0 -1,-1 0,0 -1,0 -1,0 0,0 0,-1 0,-1zm2 0c0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0zm0 -3c0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 -1,-1 0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0z"/>
				  <Path id="6" fill="white" fill-rule="nonzero" d="M75 73c-2,0 -3,-1 -3,-3 0,-1 1,-2 1,-3 0,0 1,-1 2,-1 1,0 2,2 2,4 0,1 0,2 -1,2 0,1 -1,1 -1,1zm0 -5c-1,0 -1,0 -1,2 0,1 0,2 1,2 0,0 0,-1 0,-2 0,-2 0,-2 0,-2z"/>
				  <Path id="7" fill="white" fill-rule="nonzero" d="M80 73c-2,0 -2,-1 -2,-3 0,-1 0,-2 0,-3 1,0 1,-1 2,-1 1,0 2,2 2,4 0,1 0,2 -1,2 0,1 -1,1 -1,1zm0 -5c-1,0 -1,0 -1,2 0,1 0,2 1,2 0,0 1,-1 1,-2 0,-2 -1,-2 -1,-2z"/>
				  <G id="_2283315408960">
				   <Path fill="white" d="M129 99c0,2 -1,4 -1,7 0,5 1,9 3,9 1,0 2,-4 3,-9 0,-3 -1,-5 -1,-7l-4 0z"/>
				   <Path fill="#344354" d="M129 101c0,0 0,0 0,0l4 0c0,0 0,0 0,0l-4 0z"/>
				   <Path fill="#FEFEFE" d="M129 99c0,1 0,1 0,2l4 0c0,-1 0,-1 0,-2l-4 0z"/>
				   <Path fill="white" d="M131 115c1,0 2,-4 3,-9 0,-3 -1,-5 -1,-7l-2 0 0 16z"/>
				   <Path fill="#323B46" d="M131 101l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
				   <Path fill="#EEEEEF" d="M131 101l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
				   <Path fill="#FEFEFE" d="M116 89c1,-4 2,-6 3,-6l-1 55c-1,-6 -2,-12 -2,-18l0 -31z"/>
				   <Path fill="white" d="M122 89c0,-4 -1,-6 -3,-6l-1 55c2,-6 3,-12 4,-18l0 -31z"/>
				   <Path fill="#6DA6D0" d="M119 87c-1,0 -2,1 -2,2 0,-2 1,-3 2,-4l0 2z"/>
				   <Path fill="#5287AF" d="M119 87c2,0 2,1 3,2 -1,-2 -1,-3 -3,-4l0 2z"/>
				   <Path fill="white" d="M107 114c1,0 2,-4 3,-9 0,-2 -1,-5 -1,-6l-2 0 0 15z"/>
				   <Path fill="#323B46" d="M107 101l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
				   <Path fill="#DBDBDF" d="M107 100l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
				   <Path fill="white" d="M107 114c-2,0 -3,-4 -3,-9 0,-2 1,-5 1,-6l2 0 0 15z"/>
				   <Path fill="#344354" d="M107 101l-2 0c0,-1 0,-1 0,-1l2 0 0 1z"/>
				   <Path fill="#FEFEFE" d="M107 100l-2 0c0,0 0,-1 0,-1l2 0 0 1z"/>
				   <Path fill="white" d="M117 98l-21 16 -1 7 21 -11c2,-7 2,-11 1,-12z"/>
				   <Path fill="#FEFEFE" d="M95 111c1,0 1,3 1,6 0,3 -1,6 -1,6 0,0 -1,-3 -1,-6 0,-3 1,-6 1,-6z"/>
				   <Path fill="white" d="M121 98l21 17 0 6 -20 -10c-2,-8 -2,-12 -1,-13z"/>
				   <Path fill="#EEEEEF" d="M142 112c0,0 0,3 0,6 0,3 0,6 0,6 1,0 1,-3 1,-6 0,-3 0,-6 -1,-6z"/>
				   <Path fill="#FEFEFE" d="M117 131c0,0 -8,6 -8,6l0 3 9 -4 -1 -5z"/>
				   <Path fill="#EEEEEF" d="M120 131c-1,0 8,7 8,7l0 3 -9 -5 1 -5z"/>
				   <Path fill="#EEEEEF" d="M119 125c-1,1 -1,2 -2,4 0,2 0,4 1,7l0 5 1 -16z"/>
				   <Path fill="#DBDBDF" d="M119 125c0,1 0,2 0,4 0,2 0,4 0,7l-1 5 1 -16z"/>
				   <Line fill="none" stroke="#344354" stroke-width="0.561699" stroke-linecap="round" stroke-linejoin="round" x1="120" y1="102" x2="142" y2= "117" />
				   <Line fill="none" stroke="#344354" stroke-width="0.561699" stroke-linecap="round" stroke-linejoin="round" x1="118" y1="102" x2="96" y2= "117" />
				  </G>
				  <Path fill="white" fill-rule="nonzero" d="M42 45l0 -15 2 0 0 15 -2 0zm1 0l0 -2 8 0 0 2 -8 0z"/>
				  <Path id="1" fill="white" fill-rule="nonzero" d="M58 45c-2,0 -3,0 -4,-1 0,-1 -1,-2 -1,-4l0 -1c0,-1 1,-2 1,-3 1,-1 2,-2 4,-2 1,0 2,1 3,2 0,1 1,2 1,4l0 0 -7 0 0 -1 5 0 0 0c0,-1 -1,-2 -1,-2 0,-1 -1,-1 -1,-1 -1,0 -2,0 -2,1 -1,0 -1,1 -1,2l0 1c0,1 0,2 1,2 0,1 1,1 2,1 1,0 1,0 2,-1l0 0 1 1 0 0c0,1 -1,1 -1,2 -1,0 -2,0 -2,0z"/>
				  <Path id="2" fill="white" fill-rule="nonzero" d="M68 49c-1,0 -2,0 -2,0 -1,-1 -1,-1 -2,-2l2 -1c0,1 1,1 2,1 1,0 1,0 2,0 0,-1 0,-1 0,-2l0 -10 2 0 0 10c0,1 0,2 -1,3 -1,1 -2,1 -3,1zm0 -4c-1,0 -2,0 -3,-1 -1,-1 -1,-2 -1,-3l0 -2c0,-2 0,-3 1,-3 1,-1 1,-2 3,-2 0,0 1,1 1,1 1,0 1,1 1,1l0 2c0,0 0,0 0,-1 0,0 0,0 -1,0 0,-1 0,-1 -1,-1 0,0 -1,0 -1,1 -1,0 -1,1 -1,2l0 2c0,1 0,1 1,2 0,0 1,0 1,0 1,0 1,0 1,0 1,0 1,-1 1,-1 0,0 0,-1 0,-1l0 2c0,1 0,1 -1,1 0,1 -1,1 -1,1z"/>
				  <Path id="3" fill="white" fill-rule="nonzero" d="M80 45c-2,0 -3,0 -4,-1 0,-1 -1,-2 -1,-4l0 -1c0,-1 0,-2 1,-3 1,-1 2,-2 3,-2 2,0 3,1 3,2 1,1 1,2 1,4l0 0 -6 0 0 -1 5 0 0 0c0,-1 -1,-2 -1,-2 0,-1 -1,-1 -2,-1 0,0 -1,0 -1,1 -1,0 -1,1 -1,2l0 1c0,1 0,2 1,2 0,1 1,1 2,1 0,0 1,0 2,-1l0 0 1 1 0 0c0,1 -1,1 -1,2 -1,0 -2,0 -2,0z"/>
				  <Path id="4" fill="white" fill-rule="nonzero" d="M86 45l0 -10 2 0 0 10 -2 0zm6 0l0 -6c0,-1 0,-2 0,-2 0,0 -1,-1 -2,-1 0,0 -1,1 -1,1 -1,0 -1,1 -1,1l0 -2c0,0 1,-1 1,-1 1,0 1,-1 2,-1 1,0 2,1 3,2 0,0 0,1 0,3l0 6 -2 0z"/>
				  <Path id="5" fill="white" fill-rule="nonzero" d="M103 45l0 -15 2 0 0 15 -2 0zm-2 0c-1,0 -2,0 -3,-1 0,-1 -1,-2 -1,-3l0 -2c0,-2 1,-3 1,-3 1,-1 2,-2 3,-2 0,0 1,1 1,1 1,0 1,1 2,1l-1 2c0,0 0,0 0,-1 0,0 0,0 -1,0 0,-1 0,-1 -1,-1 0,0 -1,0 -1,1 -1,0 -1,1 -1,2l0 2c0,1 0,1 1,2 0,0 1,0 1,0 1,0 1,0 1,0 1,0 1,-1 1,-1 0,0 0,-1 0,-1l1 2c-1,1 -1,1 -1,1 -1,1 -1,1 -2,1z"/>
				  <Path id="6" fill="white" fill-rule="nonzero" d="M112 45l0 -2 2 0 0 2 -2 0zm0 -8l0 -2 2 0 0 2 -2 0z"/>
				  <G id="_2283286375840">
				   <Circle fill="red" cx="51" cy="182" r="7"/>
				   <Polygon fill="white" fill-rule="nonzero" points="67,178 67,186 66,186 66,178 "/>
				   <Polygon id="1" fill="white" fill-rule="nonzero" points="69,186 69,178 70,178 74,185 74,185 74,178 75,178 75,186 74,186 70,180 70,180 70,186 "/>
				   <Path id="2" fill="white" fill-rule="nonzero" d="M82 186c-1,0 -2,0 -2,0 -1,-1 -1,-2 -1,-3l0 -5 1 0 0 6c0,0 0,1 0,1 1,0 1,0 2,0 0,0 1,0 1,0 0,0 0,-1 0,-1l0 -6 2 0 0 5c0,1 -1,2 -1,3 -1,0 -1,0 -2,0z"/>
				   <Path id="3" fill="white" fill-rule="nonzero" d="M89 186c-1,0 -1,0 -2,0 0,0 -1,0 -1,-1l0 0 1 0 0 0c0,0 0,0 1,0 0,0 0,0 1,0 0,0 1,0 1,0 0,0 1,0 1,-1l0 0c0,0 0,0 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 -1,0 -1,0 0,0 -1,0 -1,-1 0,0 0,0 0,0 -1,0 -1,-1 -1,-1l0 0c0,-1 1,-2 1,-2 1,0 1,-1 2,-1 1,0 1,0 1,1 1,0 1,0 2,0l0 0 -1 1 0 0c-1,0 -1,-1 -2,-1 0,0 -1,0 -1,1 0,0 -1,0 -1,1l0 0c0,0 0,0 1,0 0,0 0,1 0,1 1,0 1,0 1,0 1,0 1,0 1,0 0,0 1,0 1,0 0,1 0,1 0,1 1,0 1,1 1,1l0 0c0,1 -1,1 -1,2 -1,0 -1,0 -2,0z"/>
				   <Path id="4" fill="white" fill-rule="nonzero" d="M93 186l0 -8 1 0 0 8 -1 0zm1 0l0 -1 4 0 0 1 -4 0zm0 -3l0 -1 4 0 0 1 -4 0zm0 -4l0 -1 4 0 0 1 -4 0z"/>
				   <Circle fill="#40B984" cx="126" cy="182" r="7"/>
				   <Path fill="white" fill-rule="nonzero" d="M140 186l0 -8 1 0 0 8 -1 0zm1 -3l0 -1 4 0 0 1 -4 0zm0 -4l0 -1 4 0 0 1 -4 0z"/>
				   <Path id="1" fill="white" fill-rule="nonzero" d="M147 183l0 -1 3 0c0,0 0,0 1,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 -1,0 -1,-1 -1,-1l-3 0 0 -1 3 0c0,0 1,0 1,1 0,0 1,0 1,0 0,1 0,1 0,2 0,0 0,1 0,1 0,0 -1,1 -1,1 0,0 -1,0 -1,0l-3 0zm0 3l0 -8 1 0 0 8 -1 0zm4 0l-2 -3 1 0 2 3 -1 0z"/>
				   <Path id="2" fill="white" fill-rule="nonzero" d="M154 186l0 -8 1 0 0 8 -1 0zm0 0l0 -1 5 0 0 1 -5 0zm0 -3l0 -1 4 0 0 1 -4 0zm0 -4l0 -1 5 0 0 1 -5 0z"/>
				   <Path id="3" fill="white" fill-rule="nonzero" d="M161 186l0 -8 1 0 0 8 -1 0zm0 0l0 -1 5 0 0 1 -5 0zm0 -3l0 -1 4 0 0 1 -4 0zm0 -4l0 -1 5 0 0 1 -5 0z"/>
				   <Circle fill="#6699FF" cx="192" cy="182" r="7"/>
				   <Polygon fill="white" fill-rule="nonzero" points="207,178 207,186 206,186 206,178 "/>
				   <Polygon id="1" fill="white" fill-rule="nonzero" points="209,186 209,178 210,178 214,184 214,185 214,178 215,178 215,186 214,186 210,180 211,180 211,186 "/>
				   <Path id="2" fill="white" fill-rule="nonzero" d="M222 186c-1,0 -1,0 -2,0 0,0 0,-1 -1,-1 0,-1 0,-1 0,-2l0 -2c0,0 0,-1 0,-1 1,-1 1,-1 1,-1 1,-1 1,-1 2,-1 0,0 1,0 1,1 1,0 1,0 1,1 1,0 1,1 1,1l0 2c0,1 0,1 -1,2 0,0 0,1 -1,1 0,0 -1,0 -1,0zm0 -1c0,0 1,0 1,0 0,-1 1,-1 1,-2l0 -2c0,0 -1,-1 -1,-1 0,-1 -1,-1 -1,-1 -1,0 -1,0 -1,1 -1,0 -1,1 -1,1l0 2c0,1 0,1 1,2 0,0 0,0 1,0z"/>
				   <Path id="3" fill="white" fill-rule="nonzero" d="M227 183l0 -1 3 0c0,0 0,0 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,-1 -1,-1 -1,-1l-3 0 0 -1 3 0c0,0 1,0 1,1 0,0 1,0 1,0 0,1 0,1 0,2 0,0 0,0 0,1 0,0 -1,0 -1,1 0,0 -1,0 -1,0l-3 0zm-1 3l0 -8 2 0 0 8 -2 0zm5 0l-2 -3 1 -1 2 4 -1 0z"/>
				   <Path id="4" fill="white" fill-rule="nonzero" d="M234 186l0 -1 2 0c1,0 1,0 2,0 0,-1 0,-1 0,-2l0 -2c0,0 0,-1 0,-1 -1,-1 -1,-1 -2,-1l-2 0 0 -1 2 0c1,0 2,1 2,1 1,1 1,1 1,2l0 2c0,1 0,2 -1,2 0,1 -1,1 -2,1l-2 0zm0 0l0 -8 1 0 0 8 -1 0z"/>
				   <Path id="5" fill="white" fill-rule="nonzero" d="M241 186l0 -8 1 0 0 8 -1 0zm1 0l0 -1 4 0 0 1 -4 0zm0 -3l0 -1 4 0 0 1 -4 0zm0 -4l0 -1 4 0 0 1 -4 0z"/>
				   <Path id="6" fill="white" fill-rule="nonzero" d="M248 183l0 -1 3 0c0,0 1,0 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,-1 -1,-1 -1,-1l-3 0 0 -1 3 0c1,0 1,0 1,1 1,0 1,0 1,0 0,1 0,1 0,2 0,0 0,0 0,1 0,0 0,0 -1,1 0,0 0,0 -1,0l-3 0zm0 3l0 -8 1 0 0 8 -1 0zm4 0l-2 -3 2 -1 2 4 -2 0z"/>
				  </G>
				  <G id="all_p1_p2">
				   <G id="p1_p2">
					<Path fill="white" stroke="white" stroke-width="0.561699" d="M7 703l704 0c0,0 1,1 1,2l0 105c0,1 -1,1 -1,1l-704 0c-1,0 -1,0 -1,-1l0 -105c0,-1 0,-2 1,-2z"/>
					<Path fill="#1A3560" stroke="white" stroke-width="0.561699" d="M10 706l698 0c1,0 1,0 1,1l0 101c0,1 0,1 -1,1l-698 0c-1,0 -1,0 -1,-1l0 -101c0,-1 0,-1 1,-1z"/>
					<G>
					 <Rect fill="orange" x="311" y="793" width="95.0183" height="16.1759"/>
					 <Path fill="#261902" fill-rule="nonzero" d="M324 802l0 -1 3 0c0,0 0,-1 1,-1 0,0 0,0 0,-1 0,0 0,-1 0,-1 -1,0 -1,0 -1,0l-3 0 0 -1 3 0c0,0 1,0 1,0 0,0 1,1 1,1 0,0 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 0,1 -1,1 -1,1l-3 0zm0 3l0 -8 1 0 0 8 -1 0z"/>
					 <Path id="1" fill="#261902" fill-rule="nonzero" d="M329 805l3 -8 1 0 3 8 -1 0 -2 -7 -3 7 -1 0zm2 -2l0 -1 4 0 0 1 -4 0z"/>
					 <Path id="2" fill="#261902" fill-rule="nonzero" d="M338 801l0 -1 3 0c0,0 0,0 0,0 0,0 1,-1 1,-1 0,0 -1,-1 -1,-1 0,0 0,0 0,0l-3 0 0 -1 3 0c0,0 0,0 1,0 0,0 0,0 0,1 1,0 1,1 1,1 0,0 0,1 -1,1 0,1 0,1 0,1 -1,0 -1,0 -1,0l-3 0zm-1 4l0 -8 1 0 0 8 -1 0zm5 0l-2 -4 1 0 2 4 -1 0z"/>
					 <Path id="3" fill="#261902" fill-rule="nonzero" d="M345 803l0 -2 4 -4 1 0 -5 6zm-1 2l0 -8 2 0 0 8 -2 0zm5 0l-2 -5 1 0 3 5 -2 0z"/>
					 <Polygon id="4" fill="#261902" fill-rule="nonzero" points="353,797 353,805 352,805 352,797 "/>
					 <Path id="5" fill="#261902" fill-rule="nonzero" d="M355 801l0 -1 3 0c0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0l-3 0 0 -1 3 0c1,0 1,0 1,0 1,0 1,0 1,1 0,0 0,1 0,1 0,0 0,1 0,1 0,1 0,1 -1,1 0,0 0,0 -1,0l-3 0zm0 4l0 -8 1 0 0 8 -1 0zm4 0l-2 -4 2 0 2 4 -2 0z"/>
					 <Polygon id="6" fill="#261902" fill-rule="nonzero" points="366,797 366,805 365,805 365,798 363,799 363,797 365,797 "/>
					 <Path id="7" fill="#261902" fill-rule="nonzero" d="M373 805l0 -8 1 0 0 8 -1 0zm-2 0c0,0 -1,0 -1,-1 -1,0 -1,-1 -1,-2l0 -1c0,-1 0,-1 1,-1 0,-1 1,-1 1,-1 1,0 1,0 1,0 0,0 1,1 1,1l0 1c0,0 0,0 0,-1 0,0 -1,0 -1,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,1 -1,1 -1,1l0 1c0,1 1,1 1,1 0,1 0,1 1,1 0,0 0,0 0,0 0,0 1,-1 1,-1 0,0 0,0 0,0l0 1c0,0 0,0 -1,0 0,1 0,1 -1,1z"/>
					 <Path id="8" fill="#261902" fill-rule="nonzero" d="M379 805l0 -4c0,0 0,-1 0,-1 -1,0 -1,0 -1,0 -1,0 -1,0 -2,0l0 0c0,-1 0,-1 0,-1 1,0 1,0 2,0 0,0 1,0 1,0 1,1 1,1 1,2l0 4 -1 0zm-2 0c0,0 -1,0 -1,-1 -1,0 -1,0 -1,-1 0,-1 0,-1 1,-1 0,-1 1,-1 1,-1l2 0 0 1 -2 0c0,0 0,0 0,0 -1,1 -1,1 -1,1 0,0 0,1 1,1 0,0 0,0 1,0 0,0 0,0 0,0 1,0 1,-1 1,-1l0 1c0,0 0,0 0,0 -1,1 -1,1 -1,1 0,0 0,0 -1,0z"/>
					 <Path id="9" fill="#261902" fill-rule="nonzero" d="M382 805l0 -6 1 0 0 6 -1 0zm3 0l0 -4c0,0 0,0 0,-1 0,0 -1,0 -1,0 -1,0 -1,0 -1,0 0,0 0,1 0,1l0 -1c0,0 0,-1 0,-1 1,0 1,0 1,0 1,0 1,0 2,1 0,0 0,0 0,1l0 4 -1 0z"/>
					 <Path id="10" fill="#261902" fill-rule="nonzero" d="M390 805l0 -1 2 -4c1,0 1,0 1,-1 0,0 0,0 0,0l0 0c0,-1 0,-1 0,-1 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 0,0 0,0 0,1l0 0 -2 0 0 0c1,-1 1,-1 1,-2 1,0 1,0 2,0 1,0 1,0 1,0 1,1 1,1 1,2l0 0c0,0 0,0 0,1 0,0 0,0 -1,0l-2 4 3 0 0 1 -4 0z"/>
					</G>
				   </G>
				   <G id="pp1l1">
					<Rect fill="#40B984" x="30" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M46 706l0 3 -2 0 0 -8 3 0c3,0 4,1 4,2 0,1 -1,2 -1,2 -1,1 -2,1 -3,1l-1 0zm0 -4l0 3 1 0c1,0 2,-1 2,-2 0,0 -1,-1 -2,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M56 700l0 9 -2 0 0 -6c0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,0l0 -1c1,0 1,-1 1,-1 1,0 1,0 2,-1l1 0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="63,709 59,709 59,701 60,701 60,707 63,707 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M68 700l0 9 -1 0 0 -6c0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0l0 -1c0,0 1,-1 1,-1 1,0 1,0 1,-1l1 0z"/>
					<G>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M69 743c-1,1 -1,4 -1,7 0,5 1,10 2,10 2,0 3,-5 3,-10 0,-3 0,-6 0,-7l-4 0z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M68 744c0,0 0,1 0,1l5 0c0,0 0,0 0,-1l-5 0z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M69 743c0,0 -1,1 -1,1l5 0c0,0 0,-1 0,-1l-4 0z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M70 760c2,0 3,-5 3,-10 0,-3 0,-6 0,-7l-2 0 -1 17z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M71 745l2 0c0,0 0,0 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M71 744l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M55 731c0,-4 1,-6 3,-6l-1 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M61 731c0,-3 -1,-5 -3,-6l-1 59c2,-6 3,-12 4,-18l0 -35z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M58 730c-1,-1 -2,1 -3,1 1,-1 1,-3 3,-4l0 3z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M58 730c1,-1 2,1 3,2 -1,-2 -1,-4 -3,-5l0 3z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M44 759c2,0 3,-4 3,-10 1,-2 0,-5 0,-7l-2 0 -1 17z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M45 744l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M45 744l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M44 759c-1,0 -2,-4 -2,-10 0,-3 0,-5 1,-7l2 0 -1 17z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M45 744l-3 0c0,0 0,0 1,0l2 0 0 0z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M45 744l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M55 741l-23 18 0 7 22 -11c3,-8 3,-12 1,-14z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M32 756c0,0 1,3 1,6 -1,4 -1,6 -1,6 -1,0 -1,-2 -1,-6 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M60 741l22 19 0 7 -21 -12c-3,-8 -3,-12 -1,-14z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M83 757c0,0 -1,3 -1,6 0,4 0,6 1,6 0,1 1,-2 1,-6 0,-3 -1,-6 -1,-6z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M56 777c0,0 -9,7 -9,7l0 3 9 -4 0 -6z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M58 777c0,0 9,7 9,7l0 3 -10 -4 1 -6z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M57 771c0,0 -1,2 -1,4 0,2 0,4 0,7l1 5 0 -16z"/>
					 <Path fill={this.getColor("P1","LINE 1","Slot 1")} d="M57 771c1,1 1,2 1,4 0,2 0,4 0,7l-1 5 0 -16z"/>
					</G>
				   </G>
				   <G id="pp1l2">
					<Rect fill="#40B984" x="96" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M113 706l0 3 -2 0 0 -8 3 0c2,0 3,1 3,2 0,1 0,2 -1,2 -1,1 -1,1 -2,1l-1 0zm0 -4l0 3 0 0c1,0 2,-1 2,-2 0,0 -1,-1 -2,-1l0 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M122 700l0 9 -2 0 0 -6c0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 -1,0l0 -1c1,0 1,-1 2,-1 0,0 1,0 1,-1l1 0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="130,709 125,709 125,701 127,701 127,707 130,707 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M133 707l3 0 0 2 -5 0 0 -1c0,0 0,0 0,-1 0,0 0,0 0,-1 0,0 1,0 1,0 0,-1 0,-1 1,-1 0,0 0,0 0,0 1,-1 1,-1 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0 -1,0 -1,0 -2,1l0 -2c1,0 1,0 2,0 1,0 1,0 1,0 1,0 1,0 1,0 1,0 1,1 1,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 0,0 -1,1 0,0 0,0 0,0 -1,1 -1,1 -1,1 0,0 0,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0z"/>
					<G>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M135 743c0,1 -1,4 -1,7 0,5 1,10 3,10 1,0 3,-5 3,-10 0,-3 -1,-6 -1,-7l-4 0z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M135 744c0,0 0,1 0,1l4 0c0,0 0,0 0,-1l-4 0z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M135 743c0,0 0,1 0,1l4 0c0,0 0,-1 0,-1l-4 0z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M137 760c1,0 3,-5 3,-10 0,-3 -1,-6 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M137 745l2 0c0,0 0,0 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M137 744l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M121 731c0,-4 2,-6 3,-6l-1 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M128 731c-1,-3 -2,-5 -4,-6l-1 59c2,-6 4,-12 4,-18l1 -35z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M124 730c-1,-1 -2,1 -2,1 0,-1 1,-3 2,-4l0 3z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M124 730c2,-1 3,1 3,2 0,-2 -1,-4 -3,-5l0 3z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M111 759c1,0 3,-4 3,-10 0,-2 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M111 744l3 0c0,0 -1,0 -1,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M111 744l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M111 759c-2,0 -3,-4 -3,-10 0,-3 1,-5 1,-7l2 0 0 17z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M111 744l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M111 744l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M122 741l-23 18 -1 7 23 -11c2,-8 2,-12 1,-14z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M98 756c1,0 1,3 1,6 0,4 -1,6 -1,6 0,0 -1,-2 -1,-6 0,-3 1,-6 1,-6z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M126 741l23 19 0 7 -22 -12c-2,-8 -2,-12 -1,-14z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M149 757c0,0 0,3 -1,6 0,4 1,6 1,6 1,1 1,-2 1,-6 0,-3 0,-6 -1,-6z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M122 777c0,0 -9,7 -9,7l0 3 10 -4 -1 -6z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M125 777c-1,0 8,7 8,7l0 3 -9 -4 1 -6z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M124 771c-1,0 -2,2 -2,4 0,2 0,4 1,7l0 5 1 -16z"/>
					 <Path fill={this.getColor("P1","LINE 2","Slot 1")} d="M124 771c0,1 0,2 1,4 -1,2 -1,4 -1,7l-1 5 1 -16z"/>
					</G>
				   </G>
				   <G id="pp1l3">
					<Rect fill="#40B984" x="163" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M179 706l0 3 -2 0 0 -8 3 0c2,0 3,1 3,2 0,1 0,2 -1,2 0,1 -1,1 -2,1l-1 0zm0 -4l0 3 1 0c1,0 1,-1 1,-2 0,0 0,-1 -1,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M188 700l0 9 -1 0 0 -6c-1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0l0 -1c0,0 1,-1 1,-1 1,0 1,0 1,-1l1 0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="196,709 191,709 191,701 193,701 193,707 196,707 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M197 709l0 -2c1,0 1,1 2,1 0,0 1,0 1,-1 0,0 1,0 1,0 0,-1 -1,-1 -1,-1 0,-1 -1,-1 -1,-1l-1 0 0 -1 1 0c1,0 1,0 1,-1 0,-1 0,-1 -1,-1 -1,0 -1,0 -2,0l0 -1c1,0 2,0 2,0 1,0 2,0 2,0 1,0 1,1 1,2 0,1 0,1 -2,2l0 0c1,0 2,0 2,0 0,1 0,1 0,2 0,0 0,1 0,1 -1,1 -2,1 -3,1 -1,0 -1,0 -2,0z"/>
					<G>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M202 743c-1,1 -1,4 -2,7 0,5 2,10 3,10 2,0 3,-5 3,-10 0,-3 0,-6 -1,-7l-3 0z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M201 744c0,0 0,1 0,1l5 0c0,0 0,0 0,-1l-5 0z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M202 743c-1,0 -1,1 -1,1l5 0c0,0 -1,-1 -1,-1l-3 0z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M203 760c2,0 3,-5 3,-10 0,-3 0,-6 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M203 745l3 0c0,0 0,0 0,-1l-3 0 0 1z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M203 744l3 0c0,0 -1,-1 -1,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M187 731c1,-4 2,-6 4,-6l-1 59c-2,-6 -3,-12 -3,-19l0 -34z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M194 731c0,-3 -1,-5 -3,-6l-1 59c2,-6 3,-12 3,-18l1 -35z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M191 730c-2,-1 -3,1 -3,1 1,-1 1,-3 3,-4l0 3z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M191 730c1,-1 2,1 2,2 0,-2 -1,-4 -2,-5l0 3z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M177 759c2,0 3,-4 3,-10 0,-2 0,-5 -1,-7l-1 0 -1 17z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M178 744l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M178 744l2 0c0,-1 0,-1 -1,-2l-1 0 0 2z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M177 759c-1,0 -2,-4 -2,-10 0,-3 0,-5 1,-7l2 0 -1 17z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M178 744l-3 0c0,0 0,0 0,0l3 0 0 0z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M178 744l-3 0c0,-1 1,-1 1,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M188 741l-23 18 0 7 22 -11c3,-8 3,-12 1,-14z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M165 756c0,0 0,3 0,6 0,4 0,6 -1,6 0,0 0,-2 0,-6 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M193 741l22 19 0 7 -21 -12c-3,-8 -3,-12 -1,-14z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M216 757c-1,0 -1,3 -1,6 0,4 0,6 1,6 0,1 0,-2 0,-6 1,-3 0,-6 0,-6z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M189 777c0,0 -10,7 -10,7l0 3 10 -4 0 -6z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M191 777c0,0 9,7 9,7l0 3 -10 -4 1 -6z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M190 771c-1,0 -1,2 -1,4 0,2 0,4 0,7l1 5 0 -16z"/>
					 <Path fill={this.getColor("P1","LINE 3","Slot 1")} d="M190 771c0,1 1,2 1,4 0,2 0,4 -1,7l0 5 0 -16z"/>
					</G>
				   </G>
				   <G id="pp1l4">
					<Rect fill="#40B984" x="229" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M245 706l0 3 -1 0 0 -8 3 0c2,0 3,1 3,2 0,1 -1,2 -1,2 -1,1 -2,1 -3,1l-1 0zm0 -4l0 3 1 0c1,0 2,-1 2,-2 0,0 -1,-1 -2,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M255 700l0 9 -2 0 0 -6c0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 -1,0 -1,0 -1,0l0 -1c1,0 1,-1 2,-1 0,0 0,0 1,-1l1 0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="263,709 258,709 258,701 260,701 260,707 263,707 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M268 701l0 5 1 0 0 1 -1 0 0 2 -1 0 0 -2 -4 0 0 -1c0,-1 1,-1 1,-1 0,-1 1,-1 1,-2 0,0 1,-1 1,-1 0,0 0,-1 1,-1l1 0zm-3 5l2 0 0 -3c-1,0 -1,0 -1,1 0,0 0,0 0,1 0,0 -1,0 -1,0 0,0 0,1 0,1z"/>
					<G>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M268 743c-1,1 -1,4 -1,7 0,5 1,10 2,10 2,0 3,-5 3,-10 1,-3 0,-6 0,-7l-4 0z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M267 744c0,0 0,1 0,1l5 0c0,0 0,0 0,-1l-5 0z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M268 743c0,0 0,1 -1,1l5 0c0,0 0,-1 0,-1l-4 0z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M269 760c2,0 3,-5 3,-10 1,-3 0,-6 0,-7l-2 0 -1 17z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M270 745l2 0c0,0 0,0 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M270 744l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M254 731c0,-4 1,-6 3,-6l-1 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M260 731c0,-3 -1,-5 -3,-6l-1 59c2,-6 3,-12 4,-18l0 -35z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M257 730c-1,-1 -2,1 -2,1 0,-1 1,-3 2,-4l0 3z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M257 730c2,-1 2,1 3,2 -1,-2 -1,-4 -3,-5l0 3z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M244 759c1,0 3,-4 3,-10 0,-2 -1,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M244 744l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M244 744l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M244 759c-2,0 -3,-4 -3,-10 0,-3 0,-5 1,-7l2 0 0 17z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M244 744l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M244 744l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M255 741l-24 18 0 7 22 -11c3,-8 3,-12 2,-14z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M231 756c0,0 1,3 1,6 0,4 -1,6 -1,6 -1,0 -1,-2 -1,-6 0,-3 1,-6 1,-6z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M259 741l23 19 0 7 -22 -12c-2,-8 -2,-12 -1,-14z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M282 757c0,0 -1,3 -1,6 0,4 0,6 1,6 0,1 1,-2 1,-6 0,-3 0,-6 -1,-6z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M255 777c0,0 -9,7 -9,7l0 3 9 -4 0 -6z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M257 777c0,0 9,7 9,7l0 3 -9 -4 0 -6z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M256 771c0,0 -1,2 -1,4 0,2 0,4 0,7l1 5 0 -16z"/>
					 <Path fill={this.getColor("P1","LINE 4","Slot 1")} d="M256 771c1,1 1,2 1,4 0,2 0,4 0,7l-1 5 0 -16z"/>
					</G>
				   </G>
				   <G id="pp1l5">
					<Rect fill="#40B984" x="295" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M312 706l0 3 -2 0 0 -8 3 0c2,0 3,1 3,2 0,1 0,2 -1,2 0,1 -1,1 -2,1l-1 0zm0 -4l0 3 1 0c1,0 1,-1 1,-2 0,0 0,-1 -1,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M321 700l0 9 -2 0 0 -6c0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0l0 -1c0,0 0,-1 1,-1 0,0 1,0 1,-1l1 0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="329,709 324,709 324,701 326,701 326,707 329,707 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M330 709l0 -2c1,1 1,1 2,1 0,0 1,0 1,-1 0,0 0,0 0,-1 0,0 0,-1 -1,-1 -1,0 -1,0 -2,0l0 -4 5 0 0 1 -3 0 0 2c0,0 0,0 0,0 1,0 2,0 2,0 1,1 1,1 1,2 0,1 0,2 -1,2 0,1 -1,1 -2,1 -1,0 -1,0 -2,0z"/>
					<G>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M334 743c0,1 -1,4 -1,7 0,5 1,10 3,10 1,0 3,-5 3,-10 0,-3 0,-6 -1,-7l-4 0z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M334 744c0,0 0,1 0,1l5 0c0,0 -1,0 -1,-1l-4 0z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M334 743c0,0 0,1 0,1l4 0c0,0 0,-1 0,-1l-4 0z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M336 760c1,0 3,-5 3,-10 0,-3 0,-6 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M336 745l3 0c0,0 -1,0 -1,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M336 744l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M320 731c1,-4 2,-6 4,-6l-2 59c-1,-6 -2,-12 -3,-19l1 -34z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M327 731c0,-3 -2,-5 -3,-6l-2 59c2,-6 4,-12 4,-18l1 -35z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M324 730c-2,-1 -3,1 -3,1 0,-1 1,-3 3,-4l0 3z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M324 730c1,-1 2,1 2,2 0,-2 -1,-4 -2,-5l0 3z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M310 759c2,0 3,-4 3,-10 0,-2 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M310 744l3 0c0,0 0,0 0,0l-3 0 0 0z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M310 744l3 0c-1,-1 -1,-1 -1,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M310 759c-2,0 -3,-4 -3,-10 0,-3 1,-5 1,-7l2 0 0 17z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M310 744l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M310 744l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M321 741l-23 18 0 7 22 -11c2,-8 3,-12 1,-14z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M297 756c1,0 1,3 1,6 0,4 0,6 -1,6 0,0 -1,-2 -1,-6 1,-3 1,-6 1,-6z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M326 741l22 19 0 7 -22 -12c-2,-8 -2,-12 0,-14z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M349 757c-1,0 -1,3 -1,6 0,4 0,6 0,6 1,1 1,-2 1,-6 0,-3 0,-6 0,-6z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M321 777c0,0 -9,7 -9,7l0 3 10 -4 -1 -6z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M324 777c0,0 9,7 9,7l-1 3 -9 -4 1 -6z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M323 771c-1,0 -1,2 -2,4 0,2 0,4 1,7l0 5 1 -16z"/>
					 <Path fill={this.getColor("P1","LINE 5","Slot 1")} d="M323 771c0,1 1,2 1,4 0,2 0,4 -1,7l-1 5 1 -16z"/>
					</G>
				   </G>
				   <G id="pp2l1">
					<Rect fill="#40B984" x="362" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M378 706l0 3 -2 0 0 -8 3 0c2,0 3,1 3,2 0,1 0,2 0,2 -1,1 -2,1 -3,1l-1 0zm0 -4l0 3 1 0c1,0 1,-1 1,-2 0,0 0,-1 -1,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M385 707l4 0 0 2 -6 0 0 -1c0,0 0,0 0,-1 1,0 1,0 1,-1 0,0 0,0 1,0 0,-1 0,-1 0,-1 1,0 1,0 1,0 0,-1 0,-1 0,-1 1,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 0,-1 0,-1 -1,0 -1,0 -1,0 -1,0 -2,0 -2,1l0 -2c0,0 1,0 2,0 0,0 1,0 1,0 0,0 1,0 1,0 0,0 0,1 1,1 0,0 0,1 0,1 0,0 0,1 0,1 -1,0 -1,0 -1,1 0,0 0,0 -1,0 0,1 0,1 0,1 -1,0 -1,0 -1,0 0,0 0,1 0,1 -1,0 -1,0 -1,0 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="395,709 390,709 390,701 392,701 392,707 395,707 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M400 700l0 9 -1 0 0 -6c-1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0l0 -1c0,0 1,-1 1,-1 1,0 1,0 1,-1l1 0z"/>
					<G>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M401 743c-1,1 -1,4 -1,7 -1,5 1,10 2,10 2,0 3,-5 3,-10 0,-3 0,-6 -1,-7l-3 0z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M400 744c0,0 0,1 0,1l5 0c0,0 0,0 0,-1l-5 0z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M401 743c0,0 -1,1 -1,1l5 0c0,0 0,-1 -1,-1l-3 0z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M402 760c2,0 3,-5 3,-10 0,-3 0,-6 -1,-7l-1 0 -1 17z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M403 745l2 0c0,0 0,0 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M403 744l2 0c0,0 0,-1 -1,-1l-1 0 0 1z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M387 731c0,-4 1,-6 3,-6l-1 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M393 731c0,-3 -1,-5 -3,-6l-1 59c2,-6 3,-12 3,-18l1 -35z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M390 730c-1,-1 -2,1 -3,1 1,-1 1,-3 3,-4l0 3z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M390 730c1,-1 2,1 2,2 0,-2 0,-4 -2,-5l0 3z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M376 759c2,0 3,-4 3,-10 0,-2 0,-5 0,-7l-2 0 -1 17z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M377 744l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M377 744l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M376 759c-1,0 -2,-4 -2,-10 0,-3 0,-5 1,-7l2 0 -1 17z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M377 744l-3 0c0,0 0,0 0,0l3 0 0 0z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M377 744l-3 0c1,-1 1,-1 1,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M387 741l-23 18 0 7 22 -11c3,-8 3,-12 1,-14z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M364 756c0,0 1,3 0,6 0,4 0,6 0,6 -1,0 -1,-2 -1,-6 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M392 741l22 19 0 7 -21 -12c-3,-8 -3,-12 -1,-14z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M415 757c-1,0 -1,3 -1,6 0,4 0,6 1,6 0,1 1,-2 1,-6 0,-3 -1,-6 -1,-6z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M388 777c0,0 -9,7 -9,7l0 3 9 -4 0 -6z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M390 777c0,0 9,7 9,7l0 3 -10 -4 1 -6z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M389 771c-1,0 -1,2 -1,4 0,2 0,4 0,7l1 5 0 -16z"/>
					 <Path fill={this.getColor("P2","LINE 1","Slot 1")} d="M389 771c1,1 1,2 1,4 0,2 0,4 -1,7l0 5 0 -16z"/>
					</G>
				   </G>
				   <G id="pp2l2">
					<Rect fill="#40B984" x="428" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M445 706l0 3 -2 0 0 -8 3 0c2,0 3,1 3,2 0,1 0,2 -1,2 -1,1 -1,1 -2,1l-1 0zm0 -4l0 3 0 0c1,0 2,-1 2,-2 0,0 -1,-1 -2,-1l0 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M452 707l3 0 0 2 -5 0 0 -1c0,0 0,0 0,-1 0,0 0,0 0,-1 1,0 1,0 1,0 0,-1 1,-1 1,-1 0,0 0,0 0,0 1,-1 1,-1 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0 -1,0 -1,0 -2,1l0 -2c1,0 1,0 2,0 1,0 1,0 2,0 0,0 0,0 0,0 1,0 1,1 1,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 0,0 -1,1 0,0 0,0 0,0 0,1 -1,1 -1,1 0,0 0,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="462,709 457,709 457,701 459,701 459,707 462,707 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M464 707l4 0 0 2 -6 0 0 -1c0,0 0,0 1,-1 0,0 0,0 0,-1 0,0 1,0 1,0 0,-1 0,-1 1,-1 0,0 0,0 0,0 0,-1 1,-1 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0 -1,0 -2,0 -2,1l0 -2c1,0 1,0 2,0 1,0 1,0 1,0 1,0 1,0 1,0 0,0 1,1 1,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 -1,0 -1,1 0,0 0,0 0,0 -1,1 -1,1 -1,1 0,0 -1,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,0 -1,0 -1,0 -1,0z"/>
					<G>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M467 743c-1,1 -1,4 -1,7 0,5 1,10 3,10 1,0 2,-5 3,-10 0,-3 -1,-6 -1,-7l-4 0z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M467 744c0,0 0,1 -1,1l5 0c0,0 0,0 0,-1l-4 0z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M467 743c0,0 0,1 0,1l4 0c0,0 0,-1 0,-1l-4 0z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M469 760c1,0 2,-5 3,-10 0,-3 -1,-6 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M469 745l2 0c0,0 0,0 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M469 744l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M453 731c0,-4 2,-6 3,-6l-1 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M460 731c-1,-3 -2,-5 -4,-6l-1 59c2,-6 3,-12 4,-18l1 -35z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M456 730c-1,-1 -2,1 -2,1 0,-1 1,-3 2,-4l0 3z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M456 730c2,-1 3,1 3,2 0,-2 -1,-4 -3,-5l0 3z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M443 759c1,0 3,-4 3,-10 0,-2 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M443 744l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M443 744l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M443 759c-2,0 -3,-4 -3,-10 0,-3 1,-5 1,-7l2 0 0 17z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M443 744l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M443 744l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M454 741l-23 18 -1 7 22 -11c3,-8 3,-12 2,-14z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M430 756c1,0 1,3 1,6 0,4 -1,6 -1,6 -1,0 -1,-2 -1,-6 0,-3 1,-6 1,-6z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M458 741l23 19 0 7 -22 -12c-2,-8 -2,-12 -1,-14z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M481 757c0,0 -1,3 -1,6 0,4 1,6 1,6 0,1 1,-2 1,-6 0,-3 0,-6 -1,-6z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M454 777c0,0 -9,7 -9,7l0 3 10 -4 -1 -6z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M456 777c0,0 9,7 9,7l0 3 -9 -4 0 -6z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M455 771c0,0 -1,2 -1,4 0,2 0,4 1,7l0 5 0 -16z"/>
					 <Path fill={this.getColor("P2","LINE 2","Slot 1")} d="M455 771c1,1 1,2 1,4 0,2 0,4 0,7l-1 5 0 -16z"/>
					</G>
				   </G>
				   <G id="pp2l3">
					<Rect fill="#40B984" x="494" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M511 706l0 3 -2 0 0 -8 3 0c2,0 3,1 3,2 0,1 0,2 -1,2 0,1 -1,1 -2,1l-1 0zm0 -4l0 3 1 0c1,0 1,-1 1,-2 0,0 0,-1 -1,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M518 707l3 0 0 2 -5 0 0 -1c0,0 0,0 0,-1 0,0 0,0 1,-1 0,0 0,0 0,0 1,-1 1,-1 1,-1 0,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 1,0 0,-1 0,-1 0,-1 0,0 -1,-1 -1,-1 0,0 0,0 -1,0 0,0 -1,0 -2,1l0 -2c1,0 2,0 3,0 0,0 1,0 1,0 0,0 1,0 1,0 0,0 0,1 0,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 0,0 0,1 0,0 -1,0 -1,0 0,1 0,1 -1,1 0,0 0,0 0,0 0,0 -1,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="528,709 523,709 523,701 525,701 525,707 528,707 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M529 709l0 -2c1,0 1,1 2,1 0,0 1,0 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,-1 -1,-1 -1,-1l-1 0 0 -1 1 0c1,0 1,0 1,-1 0,-1 0,-1 -1,-1 -1,0 -1,0 -2,0l0 -1c1,0 2,0 2,0 1,0 2,0 2,0 1,0 1,1 1,2 0,1 -1,1 -2,2l0 0c1,0 1,0 2,0 0,1 0,1 0,2 0,0 0,1 -1,1 0,1 -1,1 -2,1 -1,0 -1,0 -2,0z"/>
					<G>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M533 743c0,1 -1,4 -1,7 0,5 1,10 3,10 2,0 3,-5 3,-10 0,-3 0,-6 -1,-7l-4 0z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M533 744c0,0 0,1 0,1l5 0c0,0 0,0 0,-1l-5 0z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M533 743c0,0 0,1 0,1l5 0c-1,0 -1,-1 -1,-1l-4 0z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M535 760c2,0 3,-5 3,-10 0,-3 0,-6 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M535 745l3 0c0,0 0,0 0,-1l-3 0 0 1z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M535 744l3 0c-1,0 -1,-1 -1,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M519 731c1,-4 2,-6 4,-6l-1 59c-2,-6 -3,-12 -3,-19l0 -34z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M526 731c0,-3 -1,-5 -3,-6l-1 59c2,-6 3,-12 3,-18l1 -35z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M523 730c-2,-1 -3,1 -3,1 0,-1 1,-3 3,-4l0 3z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M523 730c1,-1 2,1 2,2 0,-2 -1,-4 -2,-5l0 3z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M509 759c2,0 3,-4 3,-10 0,-2 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M509 744l3 0c0,0 0,0 0,0l-3 0 0 0z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M509 744l3 0c0,-1 -1,-1 -1,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M509 759c-1,0 -3,-4 -2,-10 0,-3 0,-5 1,-7l1 0 0 17z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M509 744l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M509 744l-2 0c0,-1 0,-1 1,-2l1 0 0 2z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M520 741l-23 18 0 7 22 -11c2,-8 3,-12 1,-14z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M497 756c0,0 0,3 0,6 0,4 0,6 -1,6 0,0 0,-2 0,-6 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M525 741l22 19 0 7 -22 -12c-2,-8 -2,-12 0,-14z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M548 757c-1,0 -1,3 -1,6 0,4 0,6 0,6 1,1 1,-2 1,-6 0,-3 0,-6 0,-6z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M521 777c0,0 -10,7 -10,7l0 3 10 -4 0 -6z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M523 777c0,0 9,7 9,7l0 3 -10 -4 1 -6z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M522 771c-1,0 -1,2 -1,4 0,2 0,4 0,7l0 5 1 -16z"/>
					 <Path fill={this.getColor("P2","LINE 3","Slot 1")} d="M522 771c0,1 1,2 1,4 0,2 0,4 -1,7l-1 5 1 -16z"/>
					</G>
				   </G>
				   <G id="pp2l4">
					<Rect fill="#40B984" x="561" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M577 706l0 3 -1 0 0 -8 2 0c3,0 4,1 4,2 0,1 -1,2 -1,2 -1,1 -2,1 -3,1l-1 0zm0 -4l0 3 1 0c1,0 2,-1 2,-2 0,0 -1,-1 -2,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M584 707l4 0 0 2 -6 0 0 -1c0,0 0,0 1,-1 0,0 0,0 0,-1 0,0 1,0 1,0 0,-1 0,-1 1,-1 0,0 0,0 0,0 0,-1 0,-1 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,-1 0,-1 -1,0 -1,0 -1,0 -1,0 -2,0 -2,1l0 -2c0,0 1,0 2,0 1,0 1,0 1,0 1,0 1,0 1,0 0,0 1,1 1,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 -1,0 -1,1 0,0 0,0 0,0 -1,1 -1,1 -1,1 0,0 -1,0 -1,0 0,0 0,1 0,1 0,0 0,0 -1,0 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="595,709 590,709 590,701 591,701 591,707 595,707 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M600 701l0 5 1 0 0 1 -1 0 0 2 -1 0 0 -2 -4 0 0 -1c0,-1 1,-1 1,-1 0,-1 1,-1 1,-2 0,0 1,-1 1,-1 0,0 0,-1 0,-1l2 0zm-3 5l2 0 0 -3c-1,0 -1,0 -1,1 0,0 0,0 0,1 -1,0 -1,0 -1,0 0,0 0,1 0,1z"/>
					<G>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M600 743c-1,1 -1,4 -1,7 0,5 1,10 2,10 2,0 3,-5 3,-10 0,-3 0,-6 0,-7l-4 0z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M599 744c0,0 0,1 0,1l5 0c0,0 0,0 0,-1l-5 0z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M600 743c0,0 0,1 -1,1l5 0c0,0 0,-1 0,-1l-4 0z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M601 760c2,0 3,-5 3,-10 0,-3 0,-6 0,-7l-2 0 -1 17z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M602 745l2 0c0,0 0,0 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M602 744l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M586 731c0,-4 1,-6 3,-6l-1 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M592 731c0,-3 -1,-5 -3,-6l-1 59c2,-6 3,-12 4,-18l0 -35z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M589 730c-1,-1 -2,1 -3,1 1,-1 1,-3 3,-4l0 3z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M589 730c1,-1 2,1 3,2 -1,-2 -1,-4 -3,-5l0 3z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M575 759c2,0 3,-4 4,-10 0,-2 -1,-5 -1,-7l-2 0 -1 17z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M576 744l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M576 744l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M575 759c-1,0 -2,-4 -2,-10 0,-3 0,-5 1,-7l2 0 -1 17z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M576 744l-3 0c0,0 0,0 1,0l2 0 0 0z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M576 744l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M586 741l-23 18 0 7 22 -11c3,-8 3,-12 1,-14z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M563 756c0,0 1,3 1,6 0,4 -1,6 -1,6 -1,0 -1,-2 -1,-6 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M591 741l22 19 0 7 -21 -12c-3,-8 -3,-12 -1,-14z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M614 757c0,0 -1,3 -1,6 0,4 0,6 1,6 0,1 1,-2 1,-6 0,-3 -1,-6 -1,-6z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M587 777c0,0 -9,7 -9,7l0 3 9 -4 0 -6z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M589 777c0,0 9,7 9,7l0 3 -10 -4 1 -6z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M588 771c0,0 -1,2 -1,4 0,2 0,4 0,7l1 5 0 -16z"/>
					 <Path fill={this.getColor("P2","LINE 4","Slot 1")} d="M588 771c1,1 1,2 1,4 0,2 0,4 0,7l-1 5 0 -16z"/>
					</G>
				   </G>
				   <G id="pp2l5">
					<Rect fill="#40B984" x="627" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M644 706l0 3 -2 0 0 -8 3 0c2,0 3,1 3,2 0,1 0,2 -1,2 -1,1 -1,1 -2,1l-1 0zm0 -4l0 3 0 0c1,0 2,-1 2,-2 0,0 -1,-1 -2,-1l0 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M651 707l3 0 0 2 -5 0 0 -1c0,0 0,0 0,-1 0,0 0,0 0,-1 1,0 1,0 1,0 0,-1 1,-1 1,-1 0,0 0,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,-1 0,-1 0,0 0,0 -1,0 -1,0 -1,0 -2,1l0 -2c1,0 2,0 3,0 0,0 0,0 1,0 0,0 0,0 1,0 0,0 0,1 0,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 0,0 0,1 -1,0 -1,0 -1,0 0,1 -1,1 -1,1 0,0 0,0 0,0 -1,0 -1,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="661,709 656,709 656,701 658,701 658,707 661,707 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M662 709l0 -2c0,1 1,1 2,1 0,0 1,0 1,-1 0,0 0,0 0,-1 0,0 0,-1 -2,-1 0,0 0,0 -1,0l0 -4 5 0 0 1 -3 0 0 2c0,0 0,0 0,0 1,0 2,0 2,0 1,1 1,1 1,2 0,1 0,2 -1,2 0,1 -1,1 -2,1 -1,0 -2,0 -2,0z"/>
					<G>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M666 743c0,1 -1,4 -1,7 0,5 1,10 3,10 1,0 3,-5 3,-10 0,-3 -1,-6 -1,-7l-4 0z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M666 744c0,0 0,1 0,1l4 0c0,0 0,0 0,-1l-4 0z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M666 743c0,0 0,1 0,1l4 0c0,0 0,-1 0,-1l-4 0z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M668 760c1,0 3,-5 3,-10 0,-3 -1,-6 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M668 745l2 0c0,0 0,0 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M668 744l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M652 731c1,-4 2,-6 4,-6l-2 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M659 731c-1,-3 -2,-5 -3,-6l-2 59c2,-6 4,-12 4,-18l1 -35z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M655 730c-1,-1 -2,1 -2,1 0,-1 1,-3 2,-4l0 3z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M655 730c2,-1 3,1 3,2 0,-2 -1,-4 -3,-5l0 3z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M642 759c1,0 3,-4 3,-10 0,-2 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M642 744l3 0c0,0 0,0 -1,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M642 744l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M642 759c-2,0 -3,-4 -3,-10 0,-3 1,-5 1,-7l2 0 0 17z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M642 744l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M642 744l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M653 741l-23 18 -1 7 23 -11c2,-8 2,-12 1,-14z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M629 756c1,0 1,3 1,6 0,4 -1,6 -1,6 0,0 -1,-2 -1,-6 0,-3 1,-6 1,-6z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M658 741l22 19 0 7 -22 -12c-2,-8 -2,-12 0,-14z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M680 757c0,0 0,3 -1,6 0,4 1,6 1,6 1,1 1,-2 1,-6 0,-3 0,-6 -1,-6z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M653 777c0,0 -9,7 -9,7l0 3 10 -4 -1 -6z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M656 777c-1,0 8,7 8,7l0 3 -9 -4 1 -6z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M655 771c-1,0 -2,2 -2,4 0,2 0,4 1,7l0 5 1 -16z"/>
					 <Path fill={this.getColor("P2","LINE 5","Slot 1")} d="M655 771c0,1 1,2 1,4 -1,2 -1,4 -1,7l-1 5 1 -16z"/>
					</G>
				   </G>
				  </G>
				  <G id="all_p3_bottom">
				   <G id="p3s">
					<Path fill="white" stroke="white" stroke-width="0.561699" d="M983 703l353 0c1,0 1,1 1,2l0 105c0,1 0,1 -1,1l-353 0c-1,0 -1,0 -1,-1l0 -105c0,-1 0,-2 1,-2z"/>
					<Path fill="#1A3560" d="M984 704l351 0c1,0 1,1 1,2l0 103c0,1 0,1 -1,1l-351 0c0,0 -1,0 -1,-1l0 -103c0,-1 1,-2 1,-2z"/>
				   </G>
				   <G id="pp3sl1">
					<Rect fill="#40B984" x="995" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M1012 706l0 3 -2 0 0 -8 3 0c2,0 3,1 3,2 0,1 0,2 -1,2 -1,1 -1,1 -2,1l-1 0zm0 -4l0 3 0 0c1,0 2,-1 2,-2 0,0 -1,-1 -2,-1l0 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1017 709l0 -2c0,0 1,1 2,1 0,0 1,0 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,-1 -1,-1 -2,-1l0 0 0 -1 0 0c1,0 2,0 2,-1 0,-1 0,-1 -1,-1 -1,0 -1,0 -2,0l0 -1c1,0 1,0 2,0 1,0 2,0 2,0 1,0 1,1 1,2 0,1 -1,1 -2,2l0 0c1,0 1,0 2,0 0,1 0,1 0,2 0,0 0,1 -1,1 0,1 -1,1 -2,1 -1,0 -2,0 -2,0z"/>
					<Path id="2" fill="white" fill-rule="nonzero" d="M1024 709l0 -2c0,0 0,0 1,0 0,1 0,1 1,1 0,0 0,0 0,0 1,0 1,-1 1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,-1 -1,-1 0,0 -1,0 -1,-1 0,0 -1,0 -1,-1 0,0 1,-1 1,-1 0,0 0,-1 0,-1 1,0 1,0 1,0 1,0 1,0 2,0 0,0 1,0 1,0 0,0 1,0 1,0l0 2c0,-1 0,-1 -1,-1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 -1,1 -1,1 0,0 0,0 1,0 0,0 0,0 0,1 0,0 0,0 0,0 1,0 1,0 1,0 0,0 1,0 1,1 0,0 0,0 1,0 0,0 0,0 0,1 0,0 0,0 0,1 0,0 0,0 0,1 0,0 -1,0 -1,1 0,0 0,0 -1,0 0,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0z"/>
					<Polygon id="3" fill="white" fill-rule="nonzero" points="1035,709 1031,709 1031,701 1032,701 1032,707 1035,707 "/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1040 700l0 9 -1 0 0 -6c0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0l0 -1c0,0 1,-1 1,-1 1,0 1,0 1,-1l1 0z"/>
					<G>
					 <Path fill="magenta" d="M1034 743c0,1 -1,4 -1,7 0,5 1,10 3,10 1,0 3,-5 3,-10 0,-3 -1,-6 -1,-7l-4 0z"/>
					 <Path fill="magenta" d="M1034 744c0,0 0,1 0,1l4 0c0,0 0,0 0,-1l-4 0z"/>
					 <Path fill="magenta" d="M1034 743c0,0 0,1 0,1l4 0c0,0 0,-1 0,-1l-4 0z"/>
					 <Path fill="magenta" d="M1036 760c1,0 3,-5 3,-10 0,-3 -1,-6 -1,-7l-2 0 0 17z"/>
					 <Path fill="magenta" d="M1036 745l2 0c0,0 0,0 0,-1l-2 0 0 1z"/>
					 <Path fill="magenta" d="M1036 744l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill="magenta" d="M1020 731c0,-4 2,-6 3,-6l-1 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
					 <Path fill="magenta" d="M1027 731c-1,-3 -2,-5 -4,-6l-1 59c2,-6 4,-12 4,-18l1 -35z"/>
					 <Path fill="magenta" d="M1023 730c-1,-1 -2,1 -2,1 0,-1 1,-3 2,-4l0 3z"/>
					 <Path fill="magenta" d="M1023 730c2,-1 3,1 3,2 0,-2 -1,-4 -3,-5l0 3z"/>
					 <Path fill="magenta" d="M1010 759c1,0 3,-4 3,-10 0,-2 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill="magenta" d="M1010 744l3 0c-1,0 -1,0 -1,0l-2 0 0 0z"/>
					 <Path fill="magenta" d="M1010 744l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill="magenta" d="M1010 759c-2,0 -3,-4 -3,-10 0,-3 1,-5 1,-7l2 0 0 17z"/>
					 <Path fill="magenta" d="M1010 744l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill="magenta" d="M1010 744l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
					 <Path fill="magenta" d="M1021 741l-23 18 -1 7 23 -11c2,-8 2,-12 1,-14z"/>
					 <Path fill="magenta" d="M997 756c1,0 1,3 1,6 0,4 -1,6 -1,6 0,0 -1,-2 -1,-6 0,-3 1,-6 1,-6z"/>
					 <Path fill="magenta" d="M1025 741l23 19 0 7 -22 -12c-2,-8 -2,-12 -1,-14z"/>
					 <Path fill="magenta" d="M1048 757c0,0 -1,3 -1,6 0,4 1,6 1,6 1,1 1,-2 1,-6 0,-3 0,-6 -1,-6z"/>
					 <Path fill="magenta" d="M1021 777c0,0 -9,7 -9,7l0 3 10 -4 -1 -6z"/>
					 <Path fill="magenta" d="M1024 777c-1,0 8,7 8,7l0 3 -9 -4 1 -6z"/>
					 <Path fill="magenta" d="M1022 771c0,0 -1,2 -1,4 0,2 0,4 1,7l0 5 0 -16z"/>
					 <Path fill="magenta" d="M1022 771c1,1 1,2 1,4 0,2 0,4 0,7l-1 5 0 -16z"/>
					</G>
				   </G>
				   <G id="pp3sl2">
					<Rect fill="#40B984" x="1064" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M1081 706l0 3 -2 0 0 -8 3 0c2,0 3,1 3,2 0,1 -1,2 -1,2 -1,1 -2,1 -3,1l0 0zm0 -4l0 3 0 0c1,0 2,-1 2,-2 0,0 -1,-1 -2,-1l0 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1086 709l0 -2c0,0 1,1 2,1 0,0 0,0 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,-1 -1,-1 -2,-1l0 0 0 -1 0 0c1,0 2,0 2,-1 0,-1 -1,-1 -1,-1 -1,0 -1,0 -2,0l0 -1c1,0 1,0 2,0 1,0 2,0 2,0 1,0 1,1 1,2 0,1 -1,1 -2,2l0 0c1,0 1,0 1,0 1,1 1,1 1,2 0,0 0,1 -1,1 0,1 -1,1 -2,1 -1,0 -2,0 -2,0z"/>
					<Path id="2" fill="white" fill-rule="nonzero" d="M1092 709l0 -2c1,0 1,0 2,0 0,1 0,1 1,1 0,0 0,0 0,0 0,0 1,-1 1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,-1 -1,-1 0,0 -1,0 -1,-1 0,0 -1,0 -1,-1 0,0 0,-1 1,-1 0,0 0,-1 0,-1 1,0 1,0 1,0 1,0 1,0 2,0 0,0 0,0 1,0 0,0 0,0 1,0l0 2c0,-1 -1,-1 -1,-1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,1 0,1 0,1 0,0 0,0 0,0 1,0 1,0 1,1 0,0 0,0 0,0 0,0 1,0 1,0 0,0 1,0 1,1 0,0 0,0 0,0 1,0 1,0 1,1 0,0 0,0 0,1 0,0 0,0 0,1 0,0 -1,0 -1,1 0,0 -1,0 -1,0 0,0 -1,0 -1,0 -1,0 -1,0 -2,0 0,0 0,0 -1,0z"/>
					<Polygon id="3" fill="white" fill-rule="nonzero" points="1104,709 1099,709 1099,701 1101,701 1101,707 1104,707 "/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1107 707l4 0 0 2 -6 0 0 -1c0,0 0,0 0,-1 0,0 1,0 1,-1 0,0 0,0 0,0 1,-1 1,-1 1,-1 0,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 0,-1 -1,-1 0,0 0,0 -1,0 0,0 -1,0 -2,1l0 -2c1,0 2,0 3,0 0,0 1,0 1,0 0,0 1,0 1,0 0,0 0,1 0,1 0,0 1,1 1,1 0,0 -1,1 -1,1 0,0 0,0 0,1 0,0 -1,0 -1,0 0,1 0,1 -1,1 0,0 0,0 0,0 0,0 0,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0z"/>
					<G>
					 <Path fill="magenta" d="M1103 743c-1,1 -1,4 -1,7 0,5 1,10 3,10 1,0 2,-5 3,-10 0,-3 -1,-6 -1,-7l-4 0z"/>
					 <Path fill="magenta" d="M1103 744c0,0 0,1 -1,1l5 0c0,0 0,0 0,-1l-4 0z"/>
					 <Path fill="magenta" d="M1103 743c0,0 0,1 0,1l4 0c0,0 0,-1 0,-1l-4 0z"/>
					 <Path fill="magenta" d="M1105 760c1,0 2,-5 3,-10 0,-3 -1,-6 -1,-7l-2 0 0 17z"/>
					 <Path fill="magenta" d="M1105 745l2 0c0,0 0,0 0,-1l-2 0 0 1z"/>
					 <Path fill="magenta" d="M1105 744l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill="magenta" d="M1089 731c0,-4 1,-6 3,-6l-1 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
					 <Path fill="magenta" d="M1096 731c-1,-3 -2,-5 -4,-6l-1 59c2,-6 3,-12 4,-18l1 -35z"/>
					 <Path fill="magenta" d="M1092 730c-1,-1 -2,1 -2,1 0,-1 1,-3 2,-4l0 3z"/>
					 <Path fill="magenta" d="M1092 730c2,-1 3,1 3,2 -1,-2 -1,-4 -3,-5l0 3z"/>
					 <Path fill="magenta" d="M1079 759c1,0 3,-4 3,-10 0,-2 -1,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill="magenta" d="M1079 744l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill="magenta" d="M1079 744l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill="magenta" d="M1079 759c-2,0 -3,-4 -3,-10 0,-3 1,-5 1,-7l2 0 0 17z"/>
					 <Path fill="magenta" d="M1079 744l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill="magenta" d="M1079 744l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
					 <Path fill="magenta" d="M1090 741l-23 18 -1 7 22 -11c3,-8 3,-12 2,-14z"/>
					 <Path fill="magenta" d="M1066 756c1,0 1,3 1,6 0,4 -1,6 -1,6 -1,0 -1,-2 -1,-6 0,-3 1,-6 1,-6z"/>
					 <Path fill="magenta" d="M1094 741l23 19 0 7 -22 -12c-2,-8 -2,-12 -1,-14z"/>
					 <Path fill="magenta" d="M1117 757c0,0 -1,3 -1,6 0,4 1,6 1,6 0,1 1,-2 1,-6 0,-3 0,-6 -1,-6z"/>
					 <Path fill="magenta" d="M1090 777c0,0 -9,7 -9,7l0 3 10 -4 -1 -6z"/>
					 <Path fill="magenta" d="M1092 777c0,0 9,7 9,7l0 3 -9 -4 0 -6z"/>
					 <Path fill="magenta" d="M1091 771c0,0 -1,2 -1,4 0,2 0,4 0,7l1 5 0 -16z"/>
					 <Path fill="magenta" d="M1091 771c1,1 1,2 1,4 0,2 0,4 0,7l-1 5 0 -16z"/>
					</G>
				   </G>
				   <G id="pp3sl3">
					<Rect fill="#40B984" x="1133" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M1149 706l0 3 -1 0 0 -8 3 0c2,0 3,1 3,2 0,1 -1,2 -1,2 -1,1 -2,1 -3,1l-1 0zm0 -4l0 3 1 0c1,0 2,-1 2,-2 0,0 -1,-1 -2,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1155 709l0 -2c0,0 1,1 2,1 0,0 0,0 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,-1 -1,-1 -2,-1l-1 0 0 -1 1 0c1,0 2,0 2,-1 0,-1 -1,-1 -1,-1 -1,0 -2,0 -2,0l0 -1c1,0 1,0 2,0 1,0 1,0 2,0 0,0 1,1 1,2 0,1 -1,1 -2,2l0 0c1,0 1,0 1,0 1,1 1,1 1,2 0,0 0,1 -1,1 -1,1 -1,1 -2,1 -1,0 -2,0 -2,0z"/>
					<Path id="2" fill="white" fill-rule="nonzero" d="M1161 709l0 -2c1,0 1,0 1,0 1,1 1,1 2,1 0,0 0,0 0,0 0,0 1,-1 1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 -1,-1 -1,-1 0,0 -1,0 -1,-1 -1,0 -1,0 -1,-1 0,0 0,-1 1,-1 0,0 0,-1 0,-1 1,0 1,0 1,0 1,0 1,0 2,0 0,0 0,0 1,0 0,0 0,0 1,0l0 2c-1,-1 -1,-1 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 1,0 1,1 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 1,1 0,0 0,0 0,0 1,0 1,0 1,1 0,0 0,0 0,1 0,0 0,0 0,1 0,0 -1,0 -1,1 0,0 -1,0 -1,0 0,0 -1,0 -1,0 -1,0 -1,0 -2,0 0,0 0,0 -1,0z"/>
					<Polygon id="3" fill="white" fill-rule="nonzero" points="1173,709 1168,709 1168,701 1170,701 1170,707 1173,707 "/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1174 709l0 -2c1,0 1,1 2,1 0,0 1,0 1,-1 0,0 1,0 1,0 0,-1 -1,-1 -1,-1 0,-1 -1,-1 -1,-1l-1 0 0 -1 1 0c1,0 1,0 1,-1 0,-1 0,-1 -1,-1 -1,0 -1,0 -2,0l0 -1c1,0 2,0 2,0 1,0 2,0 2,0 1,0 1,1 1,2 0,1 0,1 -2,2l0 0c1,0 2,0 2,0 0,1 0,1 0,2 0,0 0,1 0,1 -1,1 -2,1 -3,1 -1,0 -1,0 -2,0z"/>
					<G>
					 <Path fill="magenta" d="M1172 743c-1,1 -1,4 -1,7 0,5 1,10 2,10 2,0 3,-5 3,-10 1,-3 0,-6 0,-7l-4 0z"/>
					 <Path fill="magenta" d="M1171 744c0,0 0,1 0,1l5 0c0,0 0,0 0,-1l-5 0z"/>
					 <Path fill="magenta" d="M1172 743c0,0 0,1 -1,1l5 0c0,0 0,-1 0,-1l-4 0z"/>
					 <Path fill="magenta" d="M1173 760c2,0 3,-5 3,-10 1,-3 0,-6 0,-7l-2 0 -1 17z"/>
					 <Path fill="magenta" d="M1174 745l2 0c0,0 0,0 0,-1l-2 0 0 1z"/>
					 <Path fill="magenta" d="M1174 744l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill="magenta" d="M1158 731c0,-4 1,-6 3,-6l-1 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
					 <Path fill="magenta" d="M1164 731c0,-3 -1,-5 -3,-6l-1 59c2,-6 3,-12 4,-18l0 -35z"/>
					 <Path fill="magenta" d="M1161 730c-1,-1 -2,1 -2,1 0,-1 1,-3 2,-4l0 3z"/>
					 <Path fill="magenta" d="M1161 730c2,-1 2,1 3,2 -1,-2 -1,-4 -3,-5l0 3z"/>
					 <Path fill="magenta" d="M1148 759c1,0 3,-4 3,-10 0,-2 -1,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill="magenta" d="M1148 744l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill="magenta" d="M1148 744l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill="magenta" d="M1148 759c-2,0 -3,-4 -3,-10 0,-3 0,-5 1,-7l2 0 0 17z"/>
					 <Path fill="magenta" d="M1148 744l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill="magenta" d="M1148 744l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
					 <Path fill="magenta" d="M1159 741l-24 18 0 7 22 -11c3,-8 3,-12 2,-14z"/>
					 <Path fill="magenta" d="M1135 756c0,0 1,3 1,6 0,4 -1,6 -1,6 -1,0 -1,-2 -1,-6 0,-3 1,-6 1,-6z"/>
					 <Path fill="magenta" d="M1163 741l23 19 0 7 -22 -12c-2,-8 -2,-12 -1,-14z"/>
					 <Path fill="magenta" d="M1186 757c0,0 -1,3 -1,6 0,4 0,6 1,6 0,1 1,-2 1,-6 0,-3 0,-6 -1,-6z"/>
					 <Path fill="magenta" d="M1159 777c0,0 -9,7 -9,7l0 3 9 -4 0 -6z"/>
					 <Path fill="magenta" d="M1161 777c0,0 9,7 9,7l0 3 -9 -4 0 -6z"/>
					 <Path fill="magenta" d="M1160 771c0,0 -1,2 -1,4 0,2 0,4 0,7l1 5 0 -16z"/>
					 <Path fill="magenta" d="M1160 771c1,1 1,2 1,4 0,2 0,4 0,7l-1 5 0 -16z"/>
					</G>
				   </G>
				   <G id="pp3sl4">
					<Rect fill="#40B984" x="1202" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M1218 706l0 3 -1 0 0 -8 2 0c3,0 4,1 4,2 0,1 -1,2 -1,2 -1,1 -2,1 -3,1l-1 0zm0 -4l0 3 1 0c1,0 2,-1 2,-2 0,0 -1,-1 -2,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1224 709l0 -2c0,0 1,1 1,1 1,0 1,0 2,-1 0,0 0,0 0,0 0,-1 0,-1 -1,-1 0,-1 0,-1 -1,-1l-1 0 0 -1 1 0c1,0 2,0 2,-1 0,-1 -1,-1 -2,-1 0,0 -1,0 -1,0l0 -1c0,0 1,0 2,0 1,0 1,0 2,0 0,0 1,1 1,2 0,1 -1,1 -2,2l0 0c0,0 1,0 1,0 1,1 1,1 1,2 0,0 0,1 -1,1 -1,1 -1,1 -2,1 -1,0 -2,0 -2,0z"/>
					<Path id="2" fill="white" fill-rule="nonzero" d="M1230 709l0 -2c1,0 1,0 1,0 1,1 1,1 1,1 1,0 1,0 1,0 0,0 0,-1 1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 -1,-1 -1,-1 -1,0 -1,0 -1,-1 -1,0 -1,0 -1,-1 0,0 0,-1 0,-1 1,0 1,-1 1,-1 0,0 1,0 1,0 1,0 1,0 1,0 1,0 1,0 2,0 0,0 0,0 0,0l0 2c0,-1 0,-1 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 1,1 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 1,1 0,0 0,0 0,0 0,0 1,0 1,1 0,0 0,0 0,1 0,0 0,0 0,1 -1,0 -1,0 -1,1 0,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 -2,0 0,0 0,0 -1,0z"/>
					<Polygon id="3" fill="white" fill-rule="nonzero" points="1242,709 1237,709 1237,701 1239,701 1239,707 1242,707 "/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1248 701l0 5 1 0 0 1 -1 0 0 2 -2 0 0 -2 -3 0 0 -1c0,-1 0,-1 1,-1 0,-1 0,-1 1,-2 0,0 0,-1 0,-1 1,0 1,-1 1,-1l2 0zm-4 5l2 0 0 -3c0,0 0,0 0,1 0,0 -1,0 -1,1 0,0 0,0 0,0 0,0 -1,1 -1,1z"/>
					<G>
					 <Path fill="magenta" d="M1241 743c-1,1 -1,4 -1,7 0,5 1,10 2,10 2,0 3,-5 3,-10 0,-3 0,-6 0,-7l-4 0z"/>
					 <Path fill="magenta" d="M1240 744c0,0 0,1 0,1l5 0c0,0 0,0 0,-1l-5 0z"/>
					 <Path fill="magenta" d="M1241 743c0,0 0,1 -1,1l5 0c0,0 0,-1 0,-1l-4 0z"/>
					 <Path fill="magenta" d="M1242 760c2,0 3,-5 3,-10 0,-3 0,-6 0,-7l-2 0 -1 17z"/>
					 <Path fill="magenta" d="M1243 745l2 0c0,0 0,0 0,-1l-2 0 0 1z"/>
					 <Path fill="magenta" d="M1243 744l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill="magenta" d="M1227 731c0,-4 1,-6 3,-6l-1 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
					 <Path fill="magenta" d="M1233 731c0,-3 -1,-5 -3,-6l-1 59c2,-6 3,-12 4,-18l0 -35z"/>
					 <Path fill="magenta" d="M1230 730c-1,-1 -2,1 -3,1 1,-1 1,-3 3,-4l0 3z"/>
					 <Path fill="magenta" d="M1230 730c1,-1 2,1 3,2 -1,-2 -1,-4 -3,-5l0 3z"/>
					 <Path fill="magenta" d="M1216 759c2,0 3,-4 4,-10 0,-2 -1,-5 -1,-7l-2 0 -1 17z"/>
					 <Path fill="magenta" d="M1217 744l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill="magenta" d="M1217 744l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill="magenta" d="M1216 759c-1,0 -2,-4 -2,-10 0,-3 0,-5 1,-7l2 0 -1 17z"/>
					 <Path fill="magenta" d="M1217 744l-3 0c0,0 0,0 1,0l2 0 0 0z"/>
					 <Path fill="magenta" d="M1217 744l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
					 <Path fill="magenta" d="M1227 741l-23 18 0 7 22 -11c3,-8 3,-12 1,-14z"/>
					 <Path fill="magenta" d="M1204 756c0,0 1,3 1,6 0,4 -1,6 -1,6 -1,0 -1,-2 -1,-6 0,-3 0,-6 1,-6z"/>
					 <Path fill="magenta" d="M1232 741l22 19 0 7 -21 -12c-3,-8 -3,-12 -1,-14z"/>
					 <Path fill="magenta" d="M1255 757c0,0 -1,3 -1,6 0,4 0,6 1,6 0,1 1,-2 1,-6 0,-3 -1,-6 -1,-6z"/>
					 <Path fill="magenta" d="M1228 777c0,0 -9,7 -9,7l0 3 9 -4 0 -6z"/>
					 <Path fill="magenta" d="M1230 777c0,0 9,7 9,7l0 3 -10 -4 1 -6z"/>
					 <Path fill="magenta" d="M1229 771c0,0 -1,2 -1,4 0,2 0,4 0,7l1 5 0 -16z"/>
					 <Path fill="magenta" d="M1229 771c1,1 1,2 1,4 0,2 0,4 0,7l-1 5 0 -16z"/>
					</G>
				   </G>
				   <G id="pp3sl5">
					<Rect fill="#40B984" x="1271" y="696" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M1287 706l0 3 -2 0 0 -8 3 0c2,0 3,1 3,2 0,1 0,2 0,2 -1,1 -2,1 -3,1l-1 0zm0 -4l0 3 1 0c1,0 2,-1 2,-2 0,0 -1,-1 -2,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1292 709l0 -2c1,0 2,1 2,1 1,0 1,0 1,-1 1,0 1,0 1,0 0,-1 0,-1 -1,-1 0,-1 0,-1 -1,-1l-1 0 0 -1 1 0c1,0 2,0 2,-1 0,-1 -1,-1 -2,-1 0,0 -1,0 -1,0l0 -1c0,0 1,0 2,0 1,0 1,0 2,0 0,0 0,1 0,2 0,1 0,1 -1,2l0 0c0,0 1,0 1,0 1,1 1,1 1,2 0,0 -1,1 -1,1 -1,1 -2,1 -3,1 0,0 -1,0 -2,0z"/>
					<Path id="2" fill="white" fill-rule="nonzero" d="M1299 709l0 -2c0,0 1,0 1,0 1,1 1,1 1,1 1,0 1,0 1,0 0,0 0,-1 0,-1 1,0 1,0 1,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 -1,0 -1,0 0,0 0,0 0,0 -1,0 -1,-1 -1,-1 -1,0 -1,0 -1,-1 -1,0 -1,0 -1,-1 0,0 0,-1 0,-1 0,0 1,-1 1,-1 0,0 1,0 1,0 0,0 1,0 1,0 1,0 1,0 1,0 1,0 1,0 1,0l0 2c0,-1 0,-1 0,-1 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,1 1,0 1,0 1,0 0,0 0,0 1,0 0,0 0,0 0,1 1,0 1,0 1,0 0,0 0,0 1,1 0,0 0,0 0,1 0,0 0,0 -1,1 0,0 0,0 0,1 -1,0 -1,0 -1,0 -1,0 -1,0 -2,0 0,0 0,0 -1,0 0,0 -1,0 -1,0z"/>
					<Polygon id="3" fill="white" fill-rule="nonzero" points="1311,709 1306,709 1306,701 1308,701 1308,707 1311,707 "/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1312 709l0 -2c1,1 1,1 2,1 0,0 1,0 1,-1 0,0 0,0 0,-1 0,0 0,-1 -1,-1 -1,0 -1,0 -2,0l0 -4 5 0 0 1 -3 0 0 2c0,0 0,0 1,0 0,0 1,0 2,0 0,1 0,1 0,2 0,1 0,2 -1,2 0,1 -1,1 -2,1 -1,0 -1,0 -2,0z"/>
					<G>
					 <Path fill="magenta" d="M1310 743c-1,1 -1,4 -1,7 0,5 1,10 2,10 2,0 3,-5 3,-10 0,-3 0,-6 -1,-7l-3 0z"/>
					 <Path fill="magenta" d="M1309 744c0,0 0,1 0,1l5 0c0,0 0,0 0,-1l-5 0z"/>
					 <Path fill="magenta" d="M1310 743c0,0 -1,1 -1,1l5 0c0,0 0,-1 -1,-1l-3 0z"/>
					 <Path fill="magenta" d="M1311 760c2,0 3,-5 3,-10 0,-3 0,-6 -1,-7l-1 0 -1 17z"/>
					 <Path fill="magenta" d="M1312 745l2 0c0,0 0,0 0,-1l-2 0 0 1z"/>
					 <Path fill="magenta" d="M1312 744l2 0c0,0 0,-1 -1,-1l-1 0 0 1z"/>
					 <Path fill="magenta" d="M1296 731c0,-4 1,-6 3,-6l-1 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
					 <Path fill="magenta" d="M1302 731c0,-3 -1,-5 -3,-6l-1 59c2,-6 3,-12 3,-18l1 -35z"/>
					 <Path fill="magenta" d="M1299 730c-1,-1 -2,1 -3,1 1,-1 1,-3 3,-4l0 3z"/>
					 <Path fill="magenta" d="M1299 730c1,-1 2,1 2,2 0,-2 0,-4 -2,-5l0 3z"/>
					 <Path fill="magenta" d="M1285 759c2,0 3,-4 3,-10 0,-2 0,-5 0,-7l-2 0 -1 17z"/>
					 <Path fill="magenta" d="M1286 744l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill="magenta" d="M1286 744l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill="magenta" d="M1285 759c-1,0 -2,-4 -2,-10 0,-3 0,-5 1,-7l2 0 -1 17z"/>
					 <Path fill="magenta" d="M1286 744l-3 0c0,0 0,0 0,0l3 0 0 0z"/>
					 <Path fill="magenta" d="M1286 744l-3 0c1,-1 1,-1 1,-2l2 0 0 2z"/>
					 <Path fill="magenta" d="M1296 741l-23 18 0 7 22 -11c3,-8 3,-12 1,-14z"/>
					 <Path fill="magenta" d="M1273 756c0,0 1,3 0,6 0,4 0,6 0,6 -1,0 -1,-2 -1,-6 0,-3 0,-6 1,-6z"/>
					 <Path fill="magenta" d="M1301 741l22 19 0 7 -21 -12c-3,-8 -3,-12 -1,-14z"/>
					 <Path fill="magenta" d="M1324 757c-1,0 -1,3 -1,6 0,4 0,6 1,6 0,1 1,-2 1,-6 0,-3 -1,-6 -1,-6z"/>
					 <Path fill="magenta" d="M1297 777c0,0 -9,7 -9,7l0 3 9 -4 0 -6z"/>
					 <Path fill="magenta" d="M1299 777c0,0 9,7 9,7l0 3 -10 -4 1 -6z"/>
					 <Path fill="magenta" d="M1298 771c0,0 -1,2 -1,4 0,2 0,4 0,7l1 5 0 -16z"/>
					 <Path fill="magenta" d="M1298 771c1,1 1,2 1,4 0,2 0,4 -1,7l0 5 0 -16z"/>
					</G>
				   </G>
				  </G>
				  <G id="all_h4" onPress={() => this.handleClick("H4")}>
				   <G id="h4">
					<Rect fill="orange" x="1101" y="111" width="95.0183" height="16.1759"/>
					<Path fill="#261902" fill-rule="nonzero" d="M1126 123l0 -8 1 0 0 8 -1 0zm-5 0l0 -8 1 0 0 8 -1 0zm1 -3l0 -2 4 0 0 2 -4 0z"/>
					<Path id="1" fill="#261902" fill-rule="nonzero" d="M1128 123l3 -8 1 0 3 8 -1 0 -3 -6 -2 6 -1 0zm1 -2l0 -1 5 0 0 1 -5 0z"/>
					<Polygon id="2" fill="#261902" fill-rule="nonzero" points="1136,123 1136,115 1137,115 1141,121 1141,121 1141,115 1142,115 1142,123 1141,123 1137,117 1137,117 1137,123 "/>
					<Path id="3" fill="#261902" fill-rule="nonzero" d="M1147 119l2 0 0 1c0,1 0,1 0,2 0,0 -1,0 -1,1 0,0 -1,0 -1,0 -1,0 -2,0 -2,0 0,-1 -1,-1 -1,-1 0,-1 0,-1 0,-2l0 -2c0,-1 0,-1 0,-2 0,0 1,0 1,-1 0,0 1,0 2,0 0,0 0,0 1,0 0,0 0,1 1,1 0,0 0,1 0,1l-1 0c0,0 0,0 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -2,1 0,0 0,0 0,1l0 2c0,1 0,1 0,1 1,1 1,1 2,1 0,0 0,0 1,-1 0,0 0,0 0,-1l0 0 -1 0 0 -1z"/>
					<Path id="4" fill="#261902" fill-rule="nonzero" d="M1154 119l3 0 0 1c0,1 -1,1 -1,2 0,0 0,0 -1,1 0,0 -1,0 -1,0 -1,0 -1,0 -2,0 0,-1 0,-1 -1,-1 0,-1 0,-1 0,-2l0 -2c0,-1 0,-1 0,-2 1,0 1,0 1,-1 1,0 1,0 2,0 0,0 1,0 1,0 0,0 1,1 1,1 0,0 0,1 1,1l-2 0c0,0 0,0 0,-1 -1,0 -1,0 -1,0 -1,0 -1,0 -1,1 -1,0 -1,0 -1,1l0 2c0,1 0,1 1,1 0,1 0,1 1,1 0,0 1,0 1,-1 0,0 0,0 0,-1l0 0 -1 0 0 -1z"/>
					<Path id="5" fill="#261902" fill-rule="nonzero" d="M1157 123l3 -8 1 0 3 8 -1 0 -2 -6 -2 6 -2 0zm2 -2l0 -1 4 0 0 1 -4 0z"/>
					<Path id="6" fill="#261902" fill-rule="nonzero" d="M1166 120l0 -1 3 0c0,0 0,-1 1,-1 0,0 0,0 0,-1 0,0 0,0 0,-1 -1,0 -1,0 -1,0l-3 0 0 -1 3 0c0,0 1,0 1,0 0,0 1,1 1,1 0,0 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 0,0 -1,1 -1,1l-3 0zm0 3l0 -8 1 0 0 8 -1 0zm4 0l-2 -4 1 0 2 4 -1 0z"/>
					<Path id="7" fill="#261902" fill-rule="nonzero" d="M1174 122l0 -1 3 -6 1 0 -2 6 4 0 0 1 -6 0zm4 1l0 -5 1 0 0 5 -1 0z"/>
					<G>
					 <Path fill="white" stroke="white" stroke-width="0.561699" d="M986 127l325 0c3,0 5,2 5,4l0 509c0,2 -2,4 -5,4l-325 0c-2,0 -4,-2 -4,-4l0 -509c0,-2 2,-4 4,-4z"/>
					 <Path fill="#1A3560" d="M989 130l319 0c3,0 5,2 5,4l0 502c0,3 -2,5 -5,5l-319 0c-2,0 -4,-2 -4,-5l0 -502c0,-2 2,-4 4,-4z"/>
					</G>
				   </G>
				   <G id="ph4l16b">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1062.69 145.829)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1050,160 1050,158 1053,158 1053,154 1050,154 1050,153 1058,153 1058,154 1055,154 1055,158 1058,158 1058,160 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1058 166l-5 0 0 1 -1 0 0 -1 -2 0 0 -2 2 0 0 -3 1 0c1,0 1,1 1,1 1,0 1,1 2,1 0,0 1,0 1,1 1,0 1,0 1,0l0 2zm-5 -3l0 1 3 0c0,0 0,0 -1,0 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 0,0 -1,0 -1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1050,173 1050,168 1058,168 1058,170 1052,170 1052,173 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1059 178l-9 0 0 -2 7 0c-1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,0l1 0c0,0 1,1 1,1 0,0 0,1 1,1l0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1053 187c-1,0 -1,0 -1,-1 -1,0 -1,0 -1,0 0,0 -1,-1 -1,-1 0,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 1,-1 1,-1 0,-1 1,-1 1,-1 1,0 1,0 2,0 1,0 1,0 2,0 0,0 1,1 1,1 1,0 1,1 1,1 0,1 1,1 1,2 0,0 -1,1 -1,1l-1 0c0,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,0 0,-1 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0l0 0c0,0 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,1 -1,0 -1,0 -1,1 0,0 -1,0 -1,0zm0 -2c1,0 1,0 1,-1 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,1 0,1 0,1 0,0 0,0 0,0 1,0 1,1 1,1 0,0 0,0 0,0 0,0 1,0 1,0z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M1050 188l8 0 0 3c0,1 0,2 0,2 0,1 -1,1 -2,1 0,0 0,0 -1,-1 0,0 0,0 0,-1l0 0c-1,1 -1,1 -1,2 0,0 -1,0 -1,0 -1,0 -2,0 -2,-1 -1,0 -1,-1 -1,-2l0 -3zm7 2l-2 0 0 1c0,0 0,0 0,1 1,0 1,0 1,0 1,0 1,-1 1,-1l0 -1zm-3 0l-3 0 0 1c0,0 1,1 1,1 0,0 0,0 1,0 0,0 0,0 0,0 1,0 1,-1 1,-1l0 -1z"/>
					<G>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1027 180c-1,-1 -3,-1 -5,-1 -3,0 -6,1 -6,2 0,1 3,2 6,2 2,0 4,-1 5,-1l0 -2z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1026 179c0,0 0,0 0,0l0 3c0,0 0,0 0,0l0 -3z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1027 180c0,-1 0,-1 -1,-1l0 3c1,0 1,0 1,0l0 -2z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1016 181c0,1 3,2 6,2 2,0 4,-1 5,-1l0 -1 -11 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1026 181l0 1c0,0 0,0 0,0l0 -1 0 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1026 181l0 1c1,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1035 170c3,0 4,1 5,2l-41 -1c4,-1 8,-2 13,-2l23 1z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1035 174c3,0 4,-1 5,-2l-41 -1c4,2 8,3 13,3l23 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1037 172c0,-1 -1,-2 -2,-2 2,1 3,1 3,2l-1 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1037 172c0,1 -1,2 -2,2 1,0 3,-1 3,-2l-1 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1016 163c0,1 3,2 7,2 2,0 4,0 5,-1l0 -1 -12 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1026 163l0 2c0,0 1,0 1,-1l0 -1 -1 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1027 163l0 1c0,0 0,0 1,0l0 -1 -1 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1016 163c0,-1 3,-2 7,-2 2,0 4,0 5,1l0 1 -12 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1026 163l0 -2c0,0 1,0 1,0l0 2 -1 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1027 163l0 -2c0,0 1,1 1,1l0 1 -1 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1028 170l-12 -16 -4 0 7 15c6,2 9,2 9,1z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1018 154c0,0 -2,0 -4,0 -2,0 -4,0 -4,0 0,-1 2,-1 4,-1 2,0 4,1 4,1z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1028 174l-12 15 -5 0 8 -15c6,-2 8,-2 9,0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1018 189c0,0 -2,0 -5,0 -2,0 -4,0 -4,0 0,1 2,1 4,1 3,0 5,0 5,-1z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1004 171c0,0 -5,-7 -5,-7l-2 0 3 7 4 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1004 172c0,0 -5,6 -5,6l-3 0 4 -6 4 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1008 171c-1,0 -1,0 -3,0 -1,0 -3,0 -5,0l-4 0 12 0z"/>
					 <Path fill={this.getColor("H4L","LINE 16","SLOT 1")} d="M1008 171c-1,1 -1,1 -3,1 -1,0 -3,0 -5,0l-4 -1 12 0z"/>
					</G>
				   </G>
				   <G id="ph4l16a">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1134.17 145.829)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1122,159 1122,157 1125,157 1125,154 1122,154 1122,152 1130,152 1130,154 1127,154 1127,157 1130,157 1130,159 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1130 166l-5 0 0 1 -2 0 0 -1 -1 0 0 -2 1 0 0 -4 2 0c0,1 0,1 1,1 0,1 1,1 1,1 1,1 1,1 2,1 0,0 0,1 1,1l0 2zm-5 -4l0 2 3 0c-1,0 -1,0 -1,0 0,-1 -1,-1 -1,-1 0,0 0,0 -1,-1 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1122,173 1122,168 1130,168 1130,170 1123,170 1123,173 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1130 178l-8 0 0 -2 6 0c0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,0 -1,0 -1,0 0,0 0,-1 0,-1l2 0c0,1 0,1 0,2 1,0 1,0 1,1l0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1124 186c0,0 0,0 -1,0 0,0 0,0 -1,-1 0,0 0,0 0,-1 0,0 -1,0 -1,-1 0,0 1,-1 1,-1 0,0 0,-1 0,-1 1,0 1,0 2,0 0,-1 1,-1 1,-1 1,0 2,0 2,1 1,0 1,0 2,0 0,1 0,1 1,2 0,0 0,1 0,1 0,1 0,1 0,2l-2 0c0,-1 1,-1 1,-2 0,0 0,0 -1,-1 0,0 0,0 0,0 0,0 -1,-1 -1,-1 0,0 -1,0 -1,0l0 0c1,1 1,1 1,2 0,0 0,1 0,1 0,0 -1,0 -1,1 0,0 0,0 -1,0 0,0 0,0 -1,0zm0 -2c1,0 2,0 2,-1 0,0 0,0 -1,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,0z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M1122 195l0 -2 1 -1 0 -3 -1 0 0 -2 8 3 0 2 -8 3zm3 -3l3 -1c0,0 0,0 0,0l0 0c0,0 0,0 0,0l-3 -1 0 2z"/>
					<G>
					 <Path fill="white" d="M1099 180c-1,-1 -3,-1 -5,-1 -4,0 -7,1 -7,2 0,1 3,2 7,2 2,0 4,-1 5,-1l0 -2z"/>
					 <Path fill="white" d="M1098 179c0,0 0,0 -1,0l0 3c1,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1099 180c0,-1 -1,-1 -1,-1l0 3c0,0 1,0 1,0l0 -2z"/>
					 <Path fill="white" d="M1087 181c0,1 3,2 7,2 2,0 4,-1 5,-1l0 -1 -12 0z"/>
					 <Path fill="white" d="M1097 181l0 1c1,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1098 181l0 1c0,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1107 170c2,0 4,1 4,2l-41 -1c4,-1 9,-2 13,-2l24 1z"/>
					 <Path fill="white" d="M1107 174c2,0 4,-1 4,-2l-41 -1c4,2 9,3 13,3l24 0z"/>
					 <Path fill="white" d="M1108 172c0,-1 -1,-2 -1,-2 1,1 2,1 3,2l-2 0z"/>
					 <Path fill="white" d="M1108 172c0,1 -1,2 -1,2 1,0 2,-1 3,-2l-2 0z"/>
					 <Path fill="white" d="M1088 163c0,1 3,2 6,2 2,0 4,0 5,-1l0 -1 -11 0z"/>
					 <Path fill="white" d="M1098 163l0 2c0,0 0,0 0,-1l0 -1 0 0z"/>
					 <Path fill="white" d="M1098 163l0 1c1,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1088 163c0,-1 3,-2 6,-2 2,0 4,0 5,1l0 1 -11 0z"/>
					 <Path fill="white" d="M1098 163l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1098 163l0 -2c1,0 1,1 1,1l0 1 -1 0z"/>
					 <Path fill="white" d="M1100 170l-12 -16 -5 0 8 15c5,2 8,2 9,1z"/>
					 <Path fill="white" d="M1090 154c0,0 -2,0 -5,0 -2,0 -4,0 -4,0 0,-1 2,-1 5,-1 2,0 4,1 4,1z"/>
					 <Path fill="white" d="M1100 174l-13 15 -5 0 8 -15c6,-2 9,-2 10,0z"/>
					 <Path fill="white" d="M1089 189c0,0 -2,0 -4,0 -3,0 -5,0 -5,0 0,1 2,1 5,1 2,0 4,0 4,-1z"/>
					 <Path fill="white" d="M1075 171c0,0 -4,-7 -4,-7l-3 0 3 7 4 0z"/>
					 <Path fill="white" d="M1075 172c0,0 -5,6 -5,6l-2 0 3 -6 4 0z"/>
					 <Path fill="white" d="M1079 171c0,0 -1,0 -2,0 -2,0 -4,0 -5,0l-4 0 11 0z"/>
					 <Path fill="white" d="M1079 171c0,1 -1,1 -2,1 -2,0 -4,0 -5,0l-4 -1 11 0z"/>
					</G>
				   </G>
				   <G id="ph4l1b">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1232.42 200.948)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1245,184 1245,186 1242,186 1242,189 1245,189 1245,191 1237,191 1237,189 1240,189 1240,186 1237,186 1237,184 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1237 177l5 0 0 -1 1 0 0 1 2 0 0 2 -2 0 0 4 -1 0c0,-1 -1,-1 -1,-1 -1,-1 -1,-1 -2,-1 0,-1 0,-1 -1,-1 0,-1 -1,-1 -1,-1l0 -2zm5 4l0 -2 -3 0c0,0 1,0 1,0 0,0 0,1 1,1 0,0 0,0 0,0 1,1 1,1 1,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1245,170 1245,175 1237,175 1237,173 1244,173 1244,170 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1237 165l8 0 0 2 -6 0c0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,1 0,1l-1 0c0,-1 0,-1 -1,-2 0,0 0,0 0,-1l0 -1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1245 162l-8 0 0 -3c0,-1 0,-1 0,-2 1,0 1,-1 2,-1 0,0 1,0 1,1 0,0 0,0 1,1l0 0c0,-1 0,-1 0,-2 1,0 1,0 2,0 0,0 1,0 1,1 1,0 1,1 1,2l0 3zm-7 -2l2 0 0 -1c0,0 0,0 0,0 0,-1 -1,-1 -1,-1 -1,0 -1,1 -1,2l0 0zm4 0l2 0 0 -1c0,0 0,0 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,1 0,1l0 1z"/>
					<G>
					 <Path fill="white" d="M1268 165c1,0 3,0 5,0 3,0 6,0 6,-1 0,-2 -3,-3 -6,-3 -2,0 -4,1 -5,1l0 3z"/>
					 <Path fill="white" d="M1269 165c0,0 0,0 0,0l0 -3c0,0 0,0 0,0l0 3z"/>
					 <Path fill="white" d="M1268 165c0,0 0,0 1,0l0 -3c-1,0 -1,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1279 164c0,-2 -3,-3 -6,-3 -2,0 -4,1 -5,1l0 1 11 1z"/>
					 <Path fill="white" d="M1269 163l0 -1c0,0 0,0 0,0l0 1 0 0z"/>
					 <Path fill="white" d="M1269 163l0 -1c-1,0 -1,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1260 174c-3,0 -4,-1 -4,-2l41 1c-5,1 -9,2 -14,2l-23 -1z"/>
					 <Path fill="white" d="M1260 170c-3,0 -4,1 -4,2l41 1c-5,-2 -9,-2 -14,-3l-23 0z"/>
					 <Path fill="white" d="M1259 172c-1,1 0,2 1,2 -1,0 -2,-1 -3,-2l2 0z"/>
					 <Path fill="white" d="M1259 172c-1,-1 0,-2 1,-2 -1,0 -2,1 -3,2l2 0z"/>
					 <Path fill="white" d="M1279 181c0,-1 -3,-2 -7,-2 -2,0 -3,0 -5,1l0 1 12 0z"/>
					 <Path fill="white" d="M1269 181l0 -1c0,0 0,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1268 181l0 -1c0,0 0,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1279 181c0,1 -3,2 -7,2 -2,0 -4,0 -5,-1l0 -1 12 0z"/>
					 <Path fill="white" d="M1269 181l0 2c0,0 -1,0 -1,0l0 -2 1 0z"/>
					 <Path fill="white" d="M1268 181l0 2c0,0 0,0 -1,-1l0 -1 1 0z"/>
					 <Path fill="white" d="M1267 174l12 16 5 0 -8 -15c-6,-2 -8,-2 -9,-1z"/>
					 <Path fill="white" d="M1277 190c0,0 2,0 4,0 3,0 4,0 4,0 0,1 -1,1 -4,1 -2,0 -4,-1 -4,-1z"/>
					 <Path fill="white" d="M1267 171l12 -16 5 0 -8 15c-5,2 -8,2 -9,1z"/>
					 <Path fill="white" d="M1277 155c0,0 2,0 5,0 2,0 4,0 4,0 0,0 -2,-1 -4,-1 -3,0 -5,0 -5,1z"/>
					 <Path fill="white" d="M1291 174c0,-1 5,6 5,6l2 0 -3 -7 -4 1z"/>
					 <Path fill="white" d="M1291 172c0,0 5,-6 5,-6l3 0 -4 6 -4 0z"/>
					 <Path fill="white" d="M1287 173c1,0 2,0 3,0 2,0 3,0 5,0l4 0 -12 0z"/>
					 <Path fill="white" d="M1287 173c1,-1 2,-1 3,-1 2,0 3,0 5,0l4 1 -12 0z"/>
					</G>
				   </G>
				   <G id="ph4l1a">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1160.94 200.948)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1174,184 1174,186 1170,186 1170,190 1174,190 1174,191 1165,191 1165,190 1169,190 1169,186 1165,186 1165,184 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1165 178l6 0 0 -1 1 0 0 1 2 0 0 1 -2 0 0 4 -2 0c0,0 0,-1 -1,-1 0,0 -1,-1 -1,-1 0,0 -1,-1 -1,-1 -1,0 -1,0 -2,-1l0 -1zm6 3l0 -2 -3 0c0,1 0,1 0,1 1,0 1,0 1,0 0,1 1,1 1,1 0,0 0,0 1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1174,171 1174,176 1165,176 1165,174 1172,174 1172,171 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1165 166l9 0 0 1 -7 0c0,1 0,1 0,1 1,0 1,0 1,0 0,0 0,1 0,1 0,0 0,0 0,0l-2 0c0,0 0,-1 0,-1 0,-1 -1,-1 -1,-1l0 -1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1174 155l0 2 -2 1 0 3 2 1 0 2 -9 -3 0 -3 9 -3zm-4 3l-2 1c-1,0 -1,0 -1,0l0 1c0,0 0,0 1,0l2 1 0 -3z"/>
					<G>
					 <Path fill="white" d="M1196 165c1,0 3,0 5,0 4,0 7,0 7,-1 0,-2 -3,-3 -7,-3 -2,0 -4,1 -5,1l0 3z"/>
					 <Path fill="white" d="M1197 165c0,0 1,0 1,0l0 -3c0,0 -1,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1196 165c0,0 1,0 1,0l0 -3c0,0 0,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1208 164c0,-2 -3,-3 -7,-3 -2,0 -4,1 -5,1l0 1 12 1z"/>
					 <Path fill="white" d="M1198 163l0 -1c0,0 -1,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1197 163l0 -1c0,0 0,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1188 174c-2,0 -4,-1 -4,-2l41 1c-4,1 -9,2 -13,2l-24 -1z"/>
					 <Path fill="white" d="M1188 170c-2,0 -4,1 -4,2l41 1c-4,-2 -8,-2 -13,-3l-24 0z"/>
					 <Path fill="white" d="M1187 172c0,1 1,2 1,2 -1,0 -2,-1 -2,-2l1 0z"/>
					 <Path fill="white" d="M1187 172c0,-1 1,-2 1,-2 -1,0 -2,1 -2,2l1 0z"/>
					 <Path fill="white" d="M1208 181c0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,1l0 1 12 0z"/>
					 <Path fill="white" d="M1197 181l0 -1c0,0 0,0 0,0l0 1 0 0z"/>
					 <Path fill="white" d="M1197 181l0 -1c0,0 -1,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1208 181c0,1 -3,2 -7,2 -2,0 -4,0 -5,-1l0 -1 12 0z"/>
					 <Path fill="white" d="M1197 181l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill="white" d="M1197 181l0 2c-1,0 -1,0 -1,-1l0 -1 1 0z"/>
					 <Path fill="white" d="M1195 174l12 16 5 0 -7 -15c-6,-2 -9,-2 -10,-1z"/>
					 <Path fill="white" d="M1205 190c0,0 2,0 5,0 2,0 4,0 4,0 0,1 -2,1 -4,1 -3,0 -5,-1 -5,-1z"/>
					 <Path fill="white" d="M1195 171l13 -16 5 0 -8 15c-6,2 -9,2 -10,1z"/>
					 <Path fill="white" d="M1206 155c0,0 2,0 4,0 3,0 5,0 5,0 0,0 -2,-1 -5,-1 -2,0 -4,0 -4,1z"/>
					 <Path fill="white" d="M1220 174c0,-1 5,6 5,6l2 0 -3 -7 -4 1z"/>
					 <Path fill="white" d="M1220 172c0,0 5,-6 5,-6l2 0 -3 6 -4 0z"/>
					 <Path fill="white" d="M1216 173c0,0 1,0 3,0 1,0 3,0 4,0l4 0 -11 0z"/>
					 <Path fill="white" d="M1216 173c0,-1 1,-1 3,-1 1,0 3,0 5,0l3 1 -11 0z"/>
					</G>
				   </G>
				   <Line fill="none" stroke="white" stroke-width="0.561699" x1="1149" y1="134" x2="1149" y2= "608" />
				   <G id="ph4l15b">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1062.69 208.174)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1050,222 1050,220 1053,220 1053,217 1050,217 1050,215 1058,215 1058,217 1055,217 1055,220 1058,220 1058,222 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1058 228l-5 0 0 1 -1 0 0 -1 -2 0 0 -1 2 0 0 -4 1 0c1,1 1,1 1,1 1,1 1,1 2,1 0,1 1,1 1,1 1,0 1,1 1,1l0 1zm-5 -3l0 2 3 0c0,0 0,0 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -1,-1 0,0 -1,0 -1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1050,236 1050,231 1058,231 1058,233 1052,233 1052,236 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1059 241l-9 0 0 -2 7 0c-1,0 -1,0 -1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1l1 0c0,1 1,1 1,1 0,1 0,1 1,2l0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1050 243l2 0c0,1 -1,2 -1,2 0,1 0,1 1,1 0,1 0,1 1,1 0,0 1,-1 1,-2 0,0 0,-1 0,-1l4 0 0 4 -1 0 0 -3 -2 0c0,0 0,1 0,1 0,1 0,1 0,2 -1,0 -1,1 -2,1 -1,0 -2,-1 -2,-1 -1,-1 -1,-2 -1,-3 0,0 0,-1 0,-2z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M1050 250l8 0 0 3c0,1 0,2 0,3 0,0 -1,0 -2,0 0,0 0,0 -1,0 0,0 0,-1 0,-1l0 0c-1,0 -1,1 -1,1 0,0 -1,1 -1,1 -1,0 -2,-1 -2,-1 -1,-1 -1,-2 -1,-2l0 -4zm7 2l-2 0 0 1c0,0 0,1 0,1 1,0 1,0 1,0 1,0 1,0 1,-1l0 -1zm-3 0l-3 0 0 1c0,1 1,1 1,1 0,1 0,1 1,1 0,0 0,0 0,-1 1,0 1,0 1,-1l0 -1z"/>
					<G>
					 <Path fill="white" d="M1027 242c-1,-1 -3,-1 -5,-1 -3,0 -6,1 -6,2 0,1 3,2 6,2 2,0 4,0 5,-1l0 -2z"/>
					 <Path fill="white" d="M1026 242c0,0 0,0 0,-1l0 4c0,0 0,0 0,0l0 -3z"/>
					 <Path fill="white" d="M1027 242c0,0 0,0 -1,0l0 3c1,0 1,0 1,-1l0 -2z"/>
					 <Path fill="white" d="M1016 243c0,1 3,2 6,2 2,0 4,0 5,-1l0 -1 -11 0z"/>
					 <Path fill="white" d="M1026 243l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill="white" d="M1026 243l0 2c1,0 1,0 1,-1l0 -1 -1 0z"/>
					 <Path fill="white" d="M1035 232c3,0 4,1 5,2l-41 0c4,-2 8,-2 13,-2l23 0z"/>
					 <Path fill="white" d="M1035 237c3,-1 4,-1 5,-3l-41 0c4,1 8,2 13,2l23 1z"/>
					 <Path fill="white" d="M1037 234c0,-1 -1,-1 -2,-1 2,0 3,0 3,1l-1 0z"/>
					 <Path fill="white" d="M1037 234c0,1 -1,2 -2,2 1,0 3,0 3,-2l-1 0z"/>
					 <Path fill="white" d="M1016 225c0,1 3,2 7,2 2,0 4,0 5,0l0 -2 -12 0z"/>
					 <Path fill="white" d="M1026 225l0 2c0,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1027 225l0 2c0,0 0,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1016 225c0,-1 3,-2 7,-2 2,0 4,1 5,1l0 1 -12 0z"/>
					 <Path fill="white" d="M1026 225l0 -1c0,0 1,0 1,0l0 1 -1 0z"/>
					 <Path fill="white" d="M1027 225l0 -1c0,0 1,0 1,0l0 1 -1 0z"/>
					 <Path fill="white" d="M1028 233l-12 -16 -4 -1 7 16c6,2 9,2 9,1z"/>
					 <Path fill="white" d="M1018 216c0,1 -2,1 -4,1 -2,0 -4,-1 -4,-1 0,0 2,0 4,0 2,0 4,0 4,0z"/>
					 <Path fill="white" d="M1028 236l-12 15 -5 0 8 -15c6,-1 8,-1 9,0z"/>
					 <Path fill="white" d="M1018 252c0,-1 -2,-1 -5,-1 -2,0 -4,0 -4,1 0,0 2,0 4,0 3,0 5,0 5,0z"/>
					 <Path fill="white" d="M1004 233c0,0 -5,-6 -5,-6l-2 0 3 6 4 0z"/>
					 <Path fill="white" d="M1004 235c0,-1 -5,6 -5,6l-3 0 4 -7 4 1z"/>
					 <Path fill="white" d="M1008 234c-1,-1 -1,-1 -3,-1 -1,0 -3,0 -5,0l-4 1 12 0z"/>
					 <Path fill="white" d="M1008 234c-1,0 -1,0 -3,0 -1,0 -3,0 -5,0l-4 0 12 0z"/>
					</G>
				   </G>
				   <G id="ph4l15a">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1134.17 208.174)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1122,222 1122,220 1125,220 1125,216 1122,216 1122,214 1130,214 1130,216 1127,216 1127,220 1130,220 1130,222 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1130 228l-5 0 0 1 -2 0 0 -1 -1 0 0 -2 1 0 0 -3 2 0c0,0 0,0 1,1 0,0 1,0 1,1 1,0 1,0 2,1 0,0 0,0 1,0l0 2zm-5 -4l0 2 3 0c-1,0 -1,0 -1,0 0,0 -1,0 -1,-1 0,0 0,0 -1,0 0,0 0,-1 0,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1122,235 1122,230 1130,230 1130,232 1123,232 1123,235 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1130 240l-8 0 0 -2 6 0c0,0 0,0 0,0 0,0 0,0 0,-1 -1,0 -1,0 -1,0 0,0 0,0 0,0l2 0c0,0 0,0 0,1 1,0 1,1 1,1l0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1122 243l1 0c0,0 0,1 0,2 0,0 0,1 0,1 0,0 1,0 1,0 1,0 1,0 1,-1 0,-1 0,-1 0,-2l5 0 0 5 -2 0 0 -3 -1 0c0,0 0,0 0,0 0,1 0,2 -1,2 0,1 -1,1 -2,1 -1,0 -1,0 -2,-1 0,0 -1,-1 -1,-2 0,-1 1,-2 1,-2z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M1122 257l0 -2 1 0 0 -3 -1 -1 0 -2 8 3 0 2 -8 3zm3 -3l3 -1c0,0 0,0 0,0l0 0c0,0 0,0 0,0l-3 -1 0 2z"/>
					<G>
					 <Path fill="white" d="M1099 242c-1,-1 -3,-1 -5,-1 -4,0 -7,1 -7,2 0,1 3,2 7,2 2,0 4,0 5,-1l0 -2z"/>
					 <Path fill="white" d="M1098 242c0,0 0,0 -1,-1l0 4c1,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1099 242c0,0 -1,0 -1,0l0 3c0,0 1,0 1,-1l0 -2z"/>
					 <Path fill="white" d="M1087 243c0,1 3,2 7,2 2,0 4,0 5,-1l0 -1 -12 0z"/>
					 <Path fill="white" d="M1097 243l0 2c1,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1098 243l0 2c0,0 1,0 1,-1l0 -1 -1 0z"/>
					 <Path fill="white" d="M1107 232c2,0 4,1 4,2l-41 0c4,-2 9,-2 13,-2l24 0z"/>
					 <Path fill="white" d="M1107 237c2,-1 4,-1 4,-3l-41 0c4,1 9,2 13,2l24 1z"/>
					 <Path fill="white" d="M1108 234c0,-1 -1,-1 -1,-1 1,0 2,0 3,1l-2 0z"/>
					 <Path fill="white" d="M1108 234c0,1 -1,2 -1,2 1,0 2,0 3,-2l-2 0z"/>
					 <Path fill="white" d="M1088 225c0,1 3,2 6,2 2,0 4,0 5,0l0 -2 -11 0z"/>
					 <Path fill="white" d="M1098 225l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill="white" d="M1098 225l0 2c1,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1088 225c0,-1 3,-2 6,-2 2,0 4,1 5,1l0 1 -11 0z"/>
					 <Path fill="white" d="M1098 225l0 -1c0,0 0,0 0,0l0 1 0 0z"/>
					 <Path fill="white" d="M1098 225l0 -1c1,0 1,0 1,0l0 1 -1 0z"/>
					 <Path fill="white" d="M1100 233l-12 -16 -5 -1 8 16c5,2 8,2 9,1z"/>
					 <Path fill="white" d="M1090 216c0,1 -2,1 -5,1 -2,0 -4,-1 -4,-1 0,0 2,0 5,0 2,0 4,0 4,0z"/>
					 <Path fill="white" d="M1100 236l-13 15 -5 0 8 -15c6,-1 9,-1 10,0z"/>
					 <Path fill="white" d="M1089 252c0,-1 -2,-1 -4,-1 -3,0 -5,0 -5,1 0,0 2,0 5,0 2,0 4,0 4,0z"/>
					 <Path fill="white" d="M1075 233c0,0 -4,-6 -4,-6l-3 0 3 6 4 0z"/>
					 <Path fill="white" d="M1075 235c0,-1 -5,6 -5,6l-2 0 3 -7 4 1z"/>
					 <Path fill="white" d="M1079 234c0,-1 -1,-1 -2,-1 -2,0 -4,0 -5,0l-4 1 11 0z"/>
					 <Path fill="white" d="M1079 234c0,0 -1,0 -2,0 -2,0 -4,0 -5,0l-4 0 11 0z"/>
					</G>
				   </G>
				   <G id="ph4l2b">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1232.42 263.293)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1245,246 1245,248 1242,248 1242,251 1245,251 1245,253 1237,253 1237,251 1240,251 1240,248 1237,248 1237,246 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1237 240l5 0 0 -1 1 0 0 1 2 0 0 1 -2 0 0 4 -1 0c0,0 -1,-1 -1,-1 -1,0 -1,-1 -2,-1 0,0 0,-1 -1,-1 0,0 -1,-1 -1,-1l0 -1zm5 3l0 -2 -3 0c0,0 1,1 1,1 0,0 0,0 1,0 0,0 0,1 0,1 1,0 1,0 1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1245,232 1245,237 1237,237 1237,235 1244,235 1244,232 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1244 230l0 -4 1 0 0 6 -1 0c0,0 0,0 -1,0 0,-1 0,-1 -1,-1 0,0 0,0 0,-1 -1,0 -1,0 -1,0 0,-1 0,-1 0,-1 -1,0 -1,0 -1,-1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 -1,0 0,1 0,1 0,1 0,1 0,2 1,2l-2 0c0,0 0,-1 0,-2 0,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,0 1,0 1,-1 0,0 1,0 1,0 0,0 1,0 1,0 0,1 1,1 1,1 0,0 0,0 0,1 1,0 1,0 1,0 0,1 0,1 0,1 1,0 1,0 1,0 0,0 0,1 0,1 0,0 0,0 1,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1245 224l-8 0 0 -3c0,0 0,-1 0,-2 1,0 1,0 2,0 0,0 1,0 1,0 0,0 0,1 1,1l0 0c0,0 0,-1 0,-1 1,-1 1,-1 2,-1 0,0 1,1 1,1 1,1 1,1 1,2l0 3zm-7 -1l2 0 0 -1c0,-1 0,-1 0,-1 0,0 -1,0 -1,0 -1,0 -1,0 -1,1l0 1zm4 0l2 0 0 -1c0,-1 0,-1 -1,-1 0,-1 0,-1 0,-1 -1,0 -1,0 -1,1 0,0 0,0 0,1l0 1z"/>
					<G>
					 <Path fill="white" d="M1268 227c1,0 3,1 5,1 3,0 6,-1 6,-2 0,-1 -3,-2 -6,-2 -2,0 -4,0 -5,0l0 3z"/>
					 <Path fill="white" d="M1269 227c0,0 0,0 0,0l0 -3c0,0 0,0 0,0l0 3z"/>
					 <Path fill="white" d="M1268 227c0,0 0,0 1,0l0 -3c-1,0 -1,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1279 226c0,-1 -3,-2 -6,-2 -2,0 -4,0 -5,0l0 2 11 0z"/>
					 <Path fill="white" d="M1269 226l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1269 226l0 -2c-1,0 -1,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1260 237c-3,-1 -4,-1 -4,-3l41 1c-5,1 -9,2 -14,2l-23 0z"/>
					 <Path fill="white" d="M1260 232c-3,0 -4,1 -4,2l41 1c-5,-1 -9,-2 -14,-2l-23 -1z"/>
					 <Path fill="white" d="M1259 234c-1,1 0,2 1,2 -1,0 -2,-1 -3,-2l2 0z"/>
					 <Path fill="white" d="M1259 234c-1,-1 0,-1 1,-1 -1,0 -2,0 -3,1l2 0z"/>
					 <Path fill="white" d="M1279 244c0,-1 -3,-2 -7,-2 -2,0 -3,0 -5,0l0 1 12 1z"/>
					 <Path fill="white" d="M1269 244l0 -2c0,0 0,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1268 244l0 -2c0,0 0,0 -1,0l0 1 1 1z"/>
					 <Path fill="white" d="M1279 244c0,1 -3,2 -7,2 -2,0 -4,-1 -5,-1l0 -2 12 1z"/>
					 <Path fill="white" d="M1269 244l0 1c0,0 -1,0 -1,0l0 -1 1 0z"/>
					 <Path fill="white" d="M1268 244l0 1c0,0 0,0 -1,0l0 -2 1 1z"/>
					 <Path fill="white" d="M1267 236l12 16 5 0 -8 -15c-6,-2 -8,-2 -9,-1z"/>
					 <Path fill="white" d="M1277 252c0,0 2,0 4,0 3,0 4,0 4,1 0,0 -1,0 -4,0 -2,0 -4,0 -4,-1z"/>
					 <Path fill="white" d="M1267 233l12 -16 5 0 -8 15c-5,2 -8,2 -9,1z"/>
					 <Path fill="white" d="M1277 217c0,0 2,1 5,1 2,0 4,0 4,-1 0,0 -2,0 -4,0 -3,0 -5,0 -5,0z"/>
					 <Path fill="white" d="M1291 236c0,0 5,6 5,6l2 0 -3 -6 -4 0z"/>
					 <Path fill="white" d="M1291 234c0,0 5,-6 5,-6l3 0 -4 7 -4 -1z"/>
					 <Path fill="white" d="M1287 235c1,0 2,1 3,1 2,0 3,0 5,0l4 -1 -12 0z"/>
					 <Path fill="white" d="M1287 235c1,0 2,-1 3,-1 2,0 3,0 5,1l4 0 -12 0z"/>
					</G>
				   </G>
				   <G id="ph4l2a">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1160.94 263.293)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1174,247 1174,248 1170,248 1170,252 1174,252 1174,254 1165,254 1165,252 1169,252 1169,248 1165,248 1165,247 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1165 240l6 0 0 -1 1 0 0 1 2 0 0 2 -2 0 0 3 -2 0c0,0 0,0 -1,-1 0,0 -1,0 -1,-1 0,0 -1,0 -1,0 -1,-1 -1,-1 -2,-1l0 -2zm6 4l0 -2 -3 0c0,0 0,0 0,0 1,0 1,1 1,1 0,0 1,0 1,0 0,0 0,1 1,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1174,233 1174,238 1165,238 1165,236 1172,236 1172,233 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1172 230l0 -3 2 0 0 5 -1 0c0,0 -1,0 -1,0 -1,0 -1,0 -1,0 0,-1 -1,-1 -1,-1 0,0 0,-1 0,-1 -1,0 -1,0 -1,-1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,1 0,1 0,1 0,2l-1 0c-1,-1 -1,-2 -1,-3 0,0 0,0 0,-1 0,0 1,0 1,-1 0,0 0,0 1,0 0,0 0,0 1,0 0,0 0,0 1,0 0,0 0,0 0,0 1,1 1,1 1,1 0,0 0,1 1,1 0,0 0,0 0,0 0,1 0,1 0,1 0,0 1,0 1,0 0,0 0,0 0,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1174 218l0 2 -2 0 0 3 2 1 0 2 -9 -3 0 -2 9 -3zm-4 3l-2 1c-1,0 -1,0 -1,0l0 0c0,0 0,0 1,0l2 1 0 -2z"/>
					<G>
					 <Path fill="white" d="M1196 227c1,0 3,1 5,1 4,0 7,-1 7,-2 0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,0l0 3z"/>
					 <Path fill="white" d="M1197 227c0,0 1,0 1,0l0 -3c0,0 -1,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1196 227c0,0 1,0 1,0l0 -3c0,0 0,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1208 226c0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,0l0 2 12 0z"/>
					 <Path fill="white" d="M1198 226l0 -2c0,0 -1,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1197 226l0 -2c0,0 0,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1188 237c-2,-1 -4,-1 -4,-3l41 1c-4,1 -9,2 -13,2l-24 0z"/>
					 <Path fill="white" d="M1188 232c-2,0 -4,1 -4,2l41 1c-4,-1 -8,-2 -13,-2l-24 -1z"/>
					 <Path fill="white" d="M1187 234c0,1 1,2 1,2 -1,0 -2,-1 -2,-2l1 0z"/>
					 <Path fill="white" d="M1187 234c0,-1 1,-1 1,-1 -1,0 -2,0 -2,1l1 0z"/>
					 <Path fill="white" d="M1208 244c0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,0l0 1 12 1z"/>
					 <Path fill="white" d="M1197 244l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1197 244l0 -2c0,0 -1,0 -1,0l0 1 1 1z"/>
					 <Path fill="white" d="M1208 244c0,1 -3,2 -7,2 -2,0 -4,-1 -5,-1l0 -2 12 1z"/>
					 <Path fill="white" d="M1197 244l0 1c0,0 0,0 0,0l0 -1 0 0z"/>
					 <Path fill="white" d="M1197 244l0 1c-1,0 -1,0 -1,0l0 -2 1 1z"/>
					 <Path fill="white" d="M1195 236l12 16 5 0 -7 -15c-6,-2 -9,-2 -10,-1z"/>
					 <Path fill="white" d="M1205 252c0,0 2,0 5,0 2,0 4,0 4,1 0,0 -2,0 -4,0 -3,0 -5,0 -5,-1z"/>
					 <Path fill="white" d="M1195 233l13 -16 5 0 -8 15c-6,2 -9,2 -10,1z"/>
					 <Path fill="white" d="M1206 217c0,0 2,1 4,1 3,0 5,0 5,-1 0,0 -2,0 -5,0 -2,0 -4,0 -4,0z"/>
					 <Path fill="white" d="M1220 236c0,0 5,6 5,6l2 0 -3 -6 -4 0z"/>
					 <Path fill="white" d="M1220 234c0,0 5,-6 5,-6l2 0 -3 7 -4 -1z"/>
					 <Path fill="white" d="M1216 235c0,0 1,1 3,1 1,0 3,0 4,0l4 -1 -11 0z"/>
					 <Path fill="white" d="M1216 235c0,0 1,-1 3,-1 1,0 3,0 5,1l3 0 -11 0z"/>
					</G>
				   </G>
				   <G id="ph4l14b">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1062.69 270.519)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1050,284 1050,283 1053,283 1053,279 1050,279 1050,277 1058,277 1058,279 1055,279 1055,283 1058,283 1058,284 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1058 291l-5 0 0 1 -1 0 0 -1 -2 0 0 -2 2 0 0 -3 1 0c1,0 1,0 1,1 1,0 1,0 2,1 0,0 1,0 1,0 1,1 1,1 1,1l0 2zm-5 -4l0 2 3 0c0,0 0,0 -1,0 0,0 0,-1 0,-1 -1,0 -1,0 -1,0 0,0 -1,-1 -1,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1050,298 1050,293 1058,293 1058,295 1052,295 1052,298 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1059 303l-9 0 0 -2 7 0c-1,0 -1,0 -1,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,-1l1 0c0,1 1,1 1,2 0,0 0,1 1,1l0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1058 310l-5 0 0 1 -1 0 0 -1 -2 0 0 -1 2 0 0 -4 1 0c1,1 1,1 1,1 1,1 1,1 2,1 0,1 1,1 1,1 1,0 1,1 1,1l0 1zm-5 -3l0 2 3 0c0,0 0,0 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -1,-1 0,0 -1,0 -1,0z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M1050 313l8 0 0 3c0,1 0,1 0,2 0,0 -1,1 -2,1 0,0 0,-1 -1,-1 0,0 0,-1 0,-1l0 0c-1,1 -1,1 -1,1 0,1 -1,1 -1,1 -1,0 -2,0 -2,-1 -1,0 -1,-1 -1,-2l0 -3zm7 2l-2 0 0 0c0,1 0,1 0,1 1,1 1,1 1,1 1,0 1,-1 1,-2l0 0zm-3 0l-3 0 0 1c0,0 1,0 1,1 0,0 0,0 1,0 0,0 0,0 0,0 1,-1 1,-1 1,-1l0 -1z"/>
					<G>
					 <Path fill="white" d="M1027 304c-1,0 -3,0 -5,-1 -3,0 -6,1 -6,2 0,1 3,2 6,2 2,0 4,0 5,0l0 -3z"/>
					 <Path fill="white" d="M1026 304c0,0 0,0 0,0l0 3c0,0 0,0 0,0l0 -3z"/>
					 <Path fill="white" d="M1027 304c0,0 0,0 -1,0l0 3c1,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1016 305c0,1 3,2 6,2 2,0 4,0 5,0l0 -1 -11 -1z"/>
					 <Path fill="white" d="M1026 305l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill="white" d="M1026 305l0 2c1,0 1,0 1,0l0 -1 -1 -1z"/>
					 <Path fill="white" d="M1035 294c3,1 4,2 5,3l-41 -1c4,-1 8,-2 13,-2l23 0z"/>
					 <Path fill="white" d="M1035 299c3,0 4,-1 5,-2l-41 -1c4,1 8,2 13,3l23 0z"/>
					 <Path fill="white" d="M1037 297c0,-1 -1,-2 -2,-2 2,0 3,1 3,2l-1 0z"/>
					 <Path fill="white" d="M1037 297c0,1 -1,1 -2,2 1,-1 3,-1 3,-2l-1 0z"/>
					 <Path fill="white" d="M1016 287c0,1 3,2 7,2 2,1 4,0 5,0l0 -1 -12 -1z"/>
					 <Path fill="white" d="M1026 288l0 1c0,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1027 288l0 1c0,0 0,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1016 287c0,-1 3,-2 7,-1 2,0 4,0 5,0l0 2 -12 -1z"/>
					 <Path fill="white" d="M1026 288l0 -2c0,0 1,0 1,0l0 2 -1 0z"/>
					 <Path fill="white" d="M1027 288l0 -2c0,0 1,0 1,0l0 2 -1 0z"/>
					 <Path fill="white" d="M1028 295l-12 -16 -4 0 7 15c6,2 9,2 9,1z"/>
					 <Path fill="white" d="M1018 279c0,0 -2,0 -4,0 -2,0 -4,0 -4,-1 0,0 2,0 4,0 2,0 4,0 4,1z"/>
					 <Path fill="white" d="M1028 298l-12 16 -5 0 8 -15c6,-2 8,-2 9,-1z"/>
					 <Path fill="white" d="M1018 314c0,0 -2,-1 -5,-1 -2,0 -4,1 -4,1 0,0 2,0 4,1 3,0 5,-1 5,-1z"/>
					 <Path fill="white" d="M1004 295c0,0 -5,-6 -5,-6l-2 0 3 7 4 -1z"/>
					 <Path fill="white" d="M1004 297c0,0 -5,6 -5,6l-3 0 4 -7 4 1z"/>
					 <Path fill="white" d="M1008 296c-1,0 -1,-1 -3,-1 -1,0 -3,0 -5,1l-4 0 12 0z"/>
					 <Path fill="white" d="M1008 296c-1,1 -1,1 -3,1 -1,0 -3,0 -5,-1l-4 0 12 0z"/>
					</G>
				   </G>
				   <G id="ph4l14a">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1134.17 270.519)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1122,284 1122,282 1125,282 1125,279 1122,279 1122,277 1130,277 1130,279 1127,279 1127,282 1130,282 1130,284 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1130 290l-5 0 0 1 -2 0 0 -1 -1 0 0 -1 1 0 0 -4 2 0c0,0 0,1 1,1 0,0 1,1 1,1 1,0 1,1 2,1 0,0 0,0 1,1l0 1zm-5 -3l0 2 3 0c-1,-1 -1,-1 -1,-1 0,0 -1,0 -1,0 0,0 0,-1 -1,-1 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1122,297 1122,293 1130,293 1130,294 1123,294 1123,297 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1130 302l-8 0 0 -1 6 0c0,0 0,-1 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,-1 0,0 0,0 0,0l2 0c0,0 0,1 0,1 1,1 1,1 1,1l0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1130 310l-5 0 0 1 -2 0 0 -1 -1 0 0 -2 1 0 0 -3 2 0c0,0 0,0 1,1 0,0 1,0 1,1 1,0 1,0 2,1 0,0 0,0 1,0l0 2zm-5 -4l0 2 3 0c-1,0 -1,0 -1,0 0,0 -1,0 -1,-1 0,0 0,0 -1,0 0,0 0,-1 0,-1z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M1122 319l0 -2 1 0 0 -3 -1 -1 0 -2 8 3 0 3 -8 2zm3 -3l3 0c0,-1 0,-1 0,-1l0 0c0,0 0,0 0,0l-3 -1 0 2z"/>
					<G>
					 <Path fill="white" d="M1099 304c-1,0 -3,0 -5,-1 -4,0 -7,1 -7,2 0,1 3,2 7,2 2,0 4,0 5,0l0 -3z"/>
					 <Path fill="white" d="M1098 304c0,0 0,0 -1,0l0 3c1,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1099 304c0,0 -1,0 -1,0l0 3c0,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1087 305c0,1 3,2 7,2 2,0 4,0 5,0l0 -1 -12 -1z"/>
					 <Path fill="white" d="M1097 305l0 2c1,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1098 305l0 2c0,0 1,0 1,0l0 -1 -1 -1z"/>
					 <Path fill="white" d="M1107 294c2,1 4,2 4,3l-41 -1c4,-1 9,-2 13,-2l24 0z"/>
					 <Path fill="white" d="M1107 299c2,0 4,-1 4,-2l-41 -1c4,1 9,2 13,3l24 0z"/>
					 <Path fill="white" d="M1108 297c0,-1 -1,-2 -1,-2 1,0 2,1 3,2l-2 0z"/>
					 <Path fill="white" d="M1108 297c0,1 -1,1 -1,2 1,-1 2,-1 3,-2l-2 0z"/>
					 <Path fill="white" d="M1088 287c0,1 3,2 6,2 2,1 4,0 5,0l0 -1 -11 -1z"/>
					 <Path fill="white" d="M1098 288l0 1c0,0 0,0 0,0l0 -1 0 0z"/>
					 <Path fill="white" d="M1098 288l0 1c1,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1088 287c0,-1 3,-2 6,-1 2,0 4,0 5,0l0 2 -11 -1z"/>
					 <Path fill="white" d="M1098 288l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1098 288l0 -2c1,0 1,0 1,0l0 2 -1 0z"/>
					 <Path fill="white" d="M1100 295l-12 -16 -5 0 8 15c5,2 8,2 9,1z"/>
					 <Path fill="white" d="M1090 279c0,0 -2,0 -5,0 -2,0 -4,0 -4,-1 0,0 2,0 5,0 2,0 4,0 4,1z"/>
					 <Path fill="white" d="M1100 298l-13 16 -5 0 8 -15c6,-2 9,-2 10,-1z"/>
					 <Path fill="white" d="M1089 314c0,0 -2,-1 -4,-1 -3,0 -5,1 -5,1 0,0 2,0 5,1 2,0 4,-1 4,-1z"/>
					 <Path fill="white" d="M1075 295c0,0 -4,-6 -4,-6l-3 0 3 7 4 -1z"/>
					 <Path fill="white" d="M1075 297c0,0 -5,6 -5,6l-2 0 3 -7 4 1z"/>
					 <Path fill="white" d="M1079 296c0,0 -1,-1 -2,-1 -2,0 -4,0 -5,1l-4 0 11 0z"/>
					 <Path fill="white" d="M1079 296c0,1 -1,1 -2,1 -2,0 -4,0 -5,-1l-4 0 11 0z"/>
					</G>
				   </G>
				   <G id="ph4l3b">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1232.42 325.638)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1245,308 1245,310 1242,310 1242,314 1245,314 1245,316 1237,316 1237,314 1240,314 1240,310 1237,310 1237,308 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1237 302l5 0 0 -1 1 0 0 1 2 0 0 2 -2 0 0 3 -1 0c0,0 -1,0 -1,-1 -1,0 -1,0 -2,-1 0,0 0,0 -1,-1 0,0 -1,0 -1,0l0 -2zm5 4l0 -2 -3 0c0,0 1,0 1,0 0,0 0,0 1,1 0,0 0,0 0,0 1,0 1,0 1,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1245,295 1245,300 1237,300 1237,298 1244,298 1244,295 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1245 294l-2 0c1,-1 1,-1 1,-2 0,0 0,-1 0,-1 -1,0 -1,-1 -1,-1 -1,0 -1,1 -1,1 0,0 0,1 0,1l0 1 -2 0 0 -1c0,-1 0,-1 -1,-1 -1,0 -1,0 -1,1 0,1 0,1 1,2l-2 0c0,-1 0,-2 0,-2 0,-1 0,-2 0,-2 1,-1 1,-1 2,-1 1,0 1,0 2,2l0 0c0,-1 0,-2 0,-2 1,0 1,0 2,0 0,0 1,0 2,0 0,1 0,2 0,3 0,1 0,1 0,2z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1245 287l-8 0 0 -3c0,-1 0,-2 0,-2 1,-1 1,-1 2,-1 0,0 1,0 1,0 0,1 0,1 1,2l0 0c0,-1 0,-1 0,-2 1,0 1,0 2,0 0,0 1,0 1,0 1,1 1,2 1,3l0 3zm-7 -2l2 0 0 -1c0,0 0,-1 0,-1 0,0 -1,0 -1,0 -1,0 -1,0 -1,1l0 1zm4 0l2 0 0 -1c0,0 0,-1 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,1 0,1l0 1z"/>
					<G>
					 <Path fill="white" d="M1268 289c1,1 3,1 5,1 3,0 6,-1 6,-2 0,-1 -3,-2 -6,-2 -2,0 -4,0 -5,1l0 2z"/>
					 <Path fill="white" d="M1269 290c0,0 0,0 0,0l0 -4c0,0 0,0 0,0l0 4z"/>
					 <Path fill="white" d="M1268 289c0,0 0,0 1,1l0 -4c-1,0 -1,1 -1,1l0 2z"/>
					 <Path fill="white" d="M1279 288c0,-1 -3,-2 -6,-2 -2,0 -4,0 -5,1l0 1 11 0z"/>
					 <Path fill="white" d="M1269 288l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1269 288l0 -2c-1,0 -1,1 -1,1l0 1 1 0z"/>
					 <Path fill="white" d="M1260 299c-3,0 -4,-1 -4,-2l41 1c-5,1 -9,1 -14,2l-23 -1z"/>
					 <Path fill="white" d="M1260 294c-3,1 -4,1 -4,3l41 1c-5,-2 -9,-3 -14,-3l-23 -1z"/>
					 <Path fill="white" d="M1259 297c-1,1 0,1 1,2 -1,-1 -2,-1 -3,-2l2 0z"/>
					 <Path fill="white" d="M1259 297c-1,-1 0,-2 1,-2 -1,0 -2,1 -3,2l2 0z"/>
					 <Path fill="white" d="M1279 306c0,-1 -3,-2 -7,-2 -2,0 -3,0 -5,1l0 1 12 0z"/>
					 <Path fill="white" d="M1269 306l0 -2c0,0 0,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1268 306l0 -2c0,0 0,0 -1,1l0 1 1 0z"/>
					 <Path fill="white" d="M1279 306c0,1 -3,2 -7,2 -2,0 -4,0 -5,-1l0 -1 12 0z"/>
					 <Path fill="white" d="M1269 306l0 2c0,0 -1,-1 -1,-1l0 -1 1 0z"/>
					 <Path fill="white" d="M1268 306l0 1c0,0 0,0 -1,0l0 -1 1 0z"/>
					 <Path fill="white" d="M1267 298l12 16 5 1 -8 -16c-6,-1 -8,-2 -9,-1z"/>
					 <Path fill="white" d="M1277 315c0,-1 2,-1 4,-1 3,0 4,1 4,1 0,0 -1,1 -4,0 -2,0 -4,0 -4,0z"/>
					 <Path fill="white" d="M1267 295l12 -15 5 0 -8 15c-5,1 -8,1 -9,0z"/>
					 <Path fill="white" d="M1277 279c0,1 2,1 5,1 2,0 4,0 4,0 0,-1 -2,-1 -4,-1 -3,0 -5,0 -5,0z"/>
					 <Path fill="white" d="M1291 298c0,0 5,7 5,7l2 0 -3 -7 -4 0z"/>
					 <Path fill="white" d="M1291 297c0,0 5,-7 5,-7l3 1 -4 6 -4 0z"/>
					 <Path fill="white" d="M1287 297c1,1 2,1 3,1 2,0 3,0 5,0l4 0 -12 -1z"/>
					 <Path fill="white" d="M1287 297c1,0 2,0 3,0 2,0 3,0 5,0l4 1 -12 -1z"/>
					</G>
				   </G>
				   <G id="ph4l3a">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1160.94 325.638)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1174,309 1174,311 1170,311 1170,314 1174,314 1174,316 1165,316 1165,314 1169,314 1169,311 1165,311 1165,309 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1165 302l6 0 0 -1 1 0 0 1 2 0 0 2 -2 0 0 4 -2 0c0,-1 0,-1 -1,-1 0,-1 -1,-1 -1,-1 0,-1 -1,-1 -1,-1 -1,0 -1,-1 -2,-1l0 -2zm6 4l0 -2 -3 0c0,0 0,0 0,1 1,0 1,0 1,0 0,0 1,0 1,1 0,0 0,0 1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1174,295 1174,300 1165,300 1165,298 1172,298 1172,295 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1173 294l-1 0c0,0 0,-1 0,-2 0,0 0,0 0,-1 0,0 0,0 -1,0 0,0 0,0 -1,1 0,0 0,0 0,1l0 1 -1 0 0 -1c0,-1 -1,-2 -1,-2 -1,0 -1,1 -1,2 0,0 0,1 0,1l-1 0c-1,0 -1,-1 -1,-2 0,-1 0,-1 1,-2 0,0 1,-1 1,-1 1,0 2,1 2,2l0 0c0,-1 1,-1 1,-1 0,-1 1,-1 1,-1 1,0 2,0 2,1 1,1 1,1 1,2 0,1 0,2 -1,2z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1174 280l0 2 -2 1 0 3 2 0 0 2 -9 -3 0 -2 9 -3zm-4 3l-2 1c-1,0 -1,0 -1,0l0 0c0,0 0,0 1,0l2 1 0 -2z"/>
					<G>
					 <Path fill="white" d="M1196 289c1,1 3,1 5,1 4,0 7,-1 7,-2 0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,1l0 2z"/>
					 <Path fill="white" d="M1197 290c0,0 1,0 1,0l0 -4c0,0 -1,0 -1,0l0 4z"/>
					 <Path fill="white" d="M1196 289c0,0 1,0 1,1l0 -4c0,0 0,1 -1,1l0 2z"/>
					 <Path fill="white" d="M1208 288c0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,1l0 1 12 0z"/>
					 <Path fill="white" d="M1198 288l0 -2c0,0 -1,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1197 288l0 -2c0,0 0,1 -1,1l0 1 1 0z"/>
					 <Path fill="white" d="M1188 299c-2,0 -4,-1 -4,-2l41 1c-4,1 -9,1 -13,2l-24 -1z"/>
					 <Path fill="white" d="M1188 294c-2,1 -4,1 -4,3l41 1c-4,-2 -8,-3 -13,-3l-24 -1z"/>
					 <Path fill="white" d="M1187 297c0,1 1,1 1,2 -1,-1 -2,-1 -2,-2l1 0z"/>
					 <Path fill="white" d="M1187 297c0,-1 1,-2 1,-2 -1,0 -2,1 -2,2l1 0z"/>
					 <Path fill="white" d="M1208 306c0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,1l0 1 12 0z"/>
					 <Path fill="white" d="M1197 306l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1197 306l0 -2c0,0 -1,0 -1,1l0 1 1 0z"/>
					 <Path fill="white" d="M1208 306c0,1 -3,2 -7,2 -2,0 -4,0 -5,-1l0 -1 12 0z"/>
					 <Path fill="white" d="M1197 306l0 2c0,0 0,-1 0,-1l0 -1 0 0z"/>
					 <Path fill="white" d="M1197 306l0 1c-1,0 -1,0 -1,0l0 -1 1 0z"/>
					 <Path fill="white" d="M1195 298l12 16 5 1 -7 -16c-6,-1 -9,-2 -10,-1z"/>
					 <Path fill="white" d="M1205 315c0,-1 2,-1 5,-1 2,0 4,1 4,1 0,0 -2,1 -4,0 -3,0 -5,0 -5,0z"/>
					 <Path fill="white" d="M1195 295l13 -15 5 0 -8 15c-6,1 -9,1 -10,0z"/>
					 <Path fill="white" d="M1206 279c0,1 2,1 4,1 3,0 5,0 5,0 0,-1 -2,-1 -5,-1 -2,0 -4,0 -4,0z"/>
					 <Path fill="white" d="M1220 298c0,0 5,7 5,7l2 0 -3 -7 -4 0z"/>
					 <Path fill="white" d="M1220 297c0,0 5,-7 5,-7l2 1 -3 6 -4 0z"/>
					 <Path fill="white" d="M1216 297c0,1 1,1 3,1 1,0 3,0 4,0l4 0 -11 -1z"/>
					 <Path fill="white" d="M1216 297c0,0 1,0 3,0 1,0 3,0 5,0l3 1 -11 -1z"/>
					</G>
				   </G>
				   <G id="ph4l13b">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1062.69 332.863)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1050,347 1050,345 1053,345 1053,341 1050,341 1050,340 1058,340 1058,341 1055,341 1055,345 1058,345 1058,347 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1058 353l-5 0 0 1 -1 0 0 -1 -2 0 0 -1 2 0 0 -4 1 0c1,0 1,1 1,1 1,0 1,1 2,1 0,0 1,1 1,1 1,0 1,0 1,0l0 2zm-5 -3l0 2 3 0c0,-1 0,-1 -1,-1 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 0,0 -1,0 -1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1050,360 1050,355 1058,355 1058,357 1052,357 1052,360 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1059 365l-9 0 0 -1 7 0c-1,-1 -1,-1 -1,-1 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,0l1 0c0,0 1,1 1,1 0,1 0,1 1,1l0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1050 368l2 0c0,1 -1,1 -1,2 0,0 0,1 1,1 0,0 0,0 0,0 1,0 1,0 1,0 1,0 1,-1 1,-1l0 -1 1 0 0 1c0,1 0,1 1,1 1,0 1,0 1,-1 0,-1 0,-1 0,-2l1 0c0,1 1,2 1,2 0,1 -1,2 -1,2 0,1 -1,1 -2,1 -1,0 -1,-1 -2,-2l0 0c0,1 0,1 0,2 -1,0 -1,0 -2,0 0,0 -1,0 -1,-1 -1,0 -1,-1 -1,-2 0,-1 0,-1 0,-2z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M1050 375l8 0 0 3c0,1 0,2 0,2 0,1 -1,1 -2,1 0,0 0,0 -1,-1 0,0 0,0 0,-1l0 0c-1,1 -1,1 -1,2 0,0 -1,0 -1,0 -1,0 -2,0 -2,-1 -1,0 -1,-1 -1,-2l0 -3zm7 2l-2 0 0 1c0,0 0,0 0,1 1,0 1,0 1,0 1,0 1,0 1,-1l0 -1zm-3 0l-3 0 0 1c0,0 1,1 1,1 0,0 0,0 1,0 0,0 0,0 0,0 1,0 1,-1 1,-1l0 -1z"/>
					<G>
					 <Path fill="white" d="M1027 367c-1,-1 -3,-1 -5,-1 -3,0 -6,1 -6,2 0,1 3,2 6,2 2,0 4,0 5,-1l0 -2z"/>
					 <Path fill="white" d="M1026 366c0,0 0,0 0,0l0 3c0,0 0,0 0,0l0 -3z"/>
					 <Path fill="white" d="M1027 367c0,-1 0,-1 -1,-1l0 3c1,0 1,0 1,0l0 -2z"/>
					 <Path fill="white" d="M1016 368c0,1 3,2 6,2 2,0 4,0 5,-1l0 -1 -11 0z"/>
					 <Path fill="white" d="M1026 368l0 1c0,0 0,0 0,0l0 -1 0 0z"/>
					 <Path fill="white" d="M1026 368l0 1c1,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1035 357c3,0 4,1 5,2l-41 -1c4,-1 8,-2 13,-2l23 1z"/>
					 <Path fill="white" d="M1035 361c3,0 4,-1 5,-2l-41 -1c4,2 8,3 13,3l23 0z"/>
					 <Path fill="white" d="M1037 359c0,-1 -1,-1 -2,-2 2,1 3,1 3,2l-1 0z"/>
					 <Path fill="white" d="M1037 359c0,1 -1,2 -2,2 1,0 3,-1 3,-2l-1 0z"/>
					 <Path fill="white" d="M1016 350c0,1 3,2 7,2 2,0 4,0 5,-1l0 -1 -12 0z"/>
					 <Path fill="white" d="M1026 350l0 2c0,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1027 350l0 2c0,-1 0,-1 1,-1l0 -1 -1 0z"/>
					 <Path fill="white" d="M1016 350c0,-1 3,-2 7,-2 2,0 4,0 5,1l0 1 -12 0z"/>
					 <Path fill="white" d="M1026 350l0 -2c0,0 1,0 1,0l0 2 -1 0z"/>
					 <Path fill="white" d="M1027 350l0 -2c0,0 1,1 1,1l0 1 -1 0z"/>
					 <Path fill="white" d="M1028 357l-12 -16 -4 0 7 15c6,2 9,2 9,1z"/>
					 <Path fill="white" d="M1018 341c0,0 -2,1 -4,0 -2,0 -4,0 -4,0 0,0 2,-1 4,-1 2,0 4,1 4,1z"/>
					 <Path fill="white" d="M1028 361l-12 15 -5 0 8 -15c6,-2 8,-2 9,0z"/>
					 <Path fill="white" d="M1018 376c0,0 -2,0 -5,0 -2,0 -4,0 -4,0 0,1 2,1 4,1 3,0 5,0 5,-1z"/>
					 <Path fill="white" d="M1004 358c0,0 -5,-7 -5,-7l-2 0 3 7 4 0z"/>
					 <Path fill="white" d="M1004 359c0,0 -5,6 -5,6l-3 0 4 -6 4 0z"/>
					 <Path fill="white" d="M1008 358c-1,0 -1,0 -3,0 -1,0 -3,0 -5,0l-4 0 12 0z"/>
					 <Path fill="white" d="M1008 358c-1,1 -1,1 -3,1 -1,0 -3,0 -5,0l-4 -1 12 0z"/>
					</G>
				   </G>
				   <G id="ph4l13a">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1134.17 332.863)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1122,346 1122,344 1125,344 1125,341 1122,341 1122,339 1130,339 1130,341 1127,341 1127,344 1130,344 1130,346 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1130 353l-5 0 0 1 -2 0 0 -1 -1 0 0 -2 1 0 0 -4 2 0c0,1 0,1 1,1 0,1 1,1 1,1 1,1 1,1 2,1 0,1 0,1 1,1l0 2zm-5 -4l0 2 3 0c-1,0 -1,0 -1,0 0,-1 -1,-1 -1,-1 0,0 0,0 -1,0 0,-1 0,-1 0,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1122,360 1122,355 1130,355 1130,357 1123,357 1123,360 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1130 365l-8 0 0 -2 6 0c0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,0 -1,0 -1,0 0,0 0,-1 0,-1l2 0c0,1 0,1 0,2 1,0 1,0 1,1l0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1122 367l1 0c0,1 0,2 0,2 0,1 0,1 0,1 0,1 1,1 1,1 0,0 1,0 1,-1 0,0 0,0 0,-1l0 -1 2 0 0 1c0,1 0,2 1,2 0,0 1,-1 1,-2 0,0 -1,-1 -1,-1l2 0c0,0 0,1 0,2 0,1 0,1 -1,2 0,0 0,0 -1,0 -1,0 -2,0 -2,-1l0 0c0,0 0,1 -1,1 0,1 -1,1 -1,1 -1,0 -1,-1 -2,-1 0,-1 -1,-1 -1,-2 0,-1 1,-2 1,-3z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M1122 382l0 -2 1 -1 0 -3 -1 0 0 -2 8 3 0 2 -8 3zm3 -3l3 -1c0,0 0,0 0,0l0 0c0,0 0,0 0,0l-3 -1 0 2z"/>
					<G>
					 <Path fill="white" d="M1099 367c-1,-1 -3,-1 -5,-1 -4,0 -7,1 -7,2 0,1 3,2 7,2 2,0 4,0 5,-1l0 -2z"/>
					 <Path fill="white" d="M1098 366c0,0 0,0 -1,0l0 3c1,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1099 367c0,-1 -1,-1 -1,-1l0 3c0,0 1,0 1,0l0 -2z"/>
					 <Path fill="white" d="M1087 368c0,1 3,2 7,2 2,0 4,0 5,-1l0 -1 -12 0z"/>
					 <Path fill="white" d="M1097 368l0 1c1,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1098 368l0 1c0,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1107 357c2,0 4,1 4,2l-41 -1c4,-1 9,-2 13,-2l24 1z"/>
					 <Path fill="white" d="M1107 361c2,0 4,-1 4,-2l-41 -1c4,2 9,3 13,3l24 0z"/>
					 <Path fill="white" d="M1108 359c0,-1 -1,-1 -1,-2 1,1 2,1 3,2l-2 0z"/>
					 <Path fill="white" d="M1108 359c0,1 -1,2 -1,2 1,0 2,-1 3,-2l-2 0z"/>
					 <Path fill="white" d="M1088 350c0,1 3,2 6,2 2,0 4,0 5,-1l0 -1 -11 0z"/>
					 <Path fill="white" d="M1098 350l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill="white" d="M1098 350l0 2c1,-1 1,-1 1,-1l0 -1 -1 0z"/>
					 <Path fill="white" d="M1088 350c0,-1 3,-2 6,-2 2,0 4,0 5,1l0 1 -11 0z"/>
					 <Path fill="white" d="M1098 350l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1098 350l0 -2c1,0 1,1 1,1l0 1 -1 0z"/>
					 <Path fill="white" d="M1100 357l-12 -16 -5 0 8 15c5,2 8,2 9,1z"/>
					 <Path fill="white" d="M1090 341c0,0 -2,1 -5,0 -2,0 -4,0 -4,0 0,0 2,-1 5,-1 2,0 4,1 4,1z"/>
					 <Path fill="white" d="M1100 361l-13 15 -5 0 8 -15c6,-2 9,-2 10,0z"/>
					 <Path fill="white" d="M1089 376c0,0 -2,0 -4,0 -3,0 -5,0 -5,0 0,1 2,1 5,1 2,0 4,0 4,-1z"/>
					 <Path fill="white" d="M1075 358c0,0 -4,-7 -4,-7l-3 0 3 7 4 0z"/>
					 <Path fill="white" d="M1075 359c0,0 -5,6 -5,6l-2 0 3 -6 4 0z"/>
					 <Path fill="white" d="M1079 358c0,0 -1,0 -2,0 -2,0 -4,0 -5,0l-4 0 11 0z"/>
					 <Path fill="white" d="M1079 358c0,1 -1,1 -2,1 -2,0 -4,0 -5,0l-4 -1 11 0z"/>
					</G>
				   </G>
				   <G id="ph4l4b">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1232.42 387.983)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1245,371 1245,373 1242,373 1242,376 1245,376 1245,378 1237,378 1237,376 1240,376 1240,373 1237,373 1237,371 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1237 364l5 0 0 -1 1 0 0 1 2 0 0 2 -2 0 0 4 -1 0c0,-1 -1,-1 -1,-1 -1,-1 -1,-1 -2,-1 0,-1 0,-1 -1,-1 0,-1 -1,-1 -1,-1l0 -2zm5 4l0 -2 -3 0c0,0 1,0 1,0 0,1 0,1 1,1 0,0 0,0 0,0 1,1 1,1 1,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1245,357 1245,362 1237,362 1237,360 1244,360 1244,357 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1237 351l5 0 0 -1 1 0 0 1 2 0 0 2 -2 0 0 4 -1 0c0,-1 -1,-1 -1,-1 -1,-1 -1,-1 -2,-1 0,-1 0,-1 -1,-1 0,0 -1,-1 -1,-1l0 -2zm5 4l0 -2 -3 0c0,0 1,0 1,1 0,0 0,0 1,0 0,0 0,0 0,1 1,0 1,0 1,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1245 349l-8 0 0 -3c0,-1 0,-1 0,-2 1,0 1,-1 2,-1 0,0 1,0 1,1 0,0 0,0 1,1l0 0c0,-1 0,-1 0,-2 1,0 1,0 2,0 0,0 1,0 1,1 1,0 1,1 1,2l0 3zm-7 -2l2 0 0 -1c0,0 0,0 0,0 0,-1 -1,-1 -1,-1 -1,0 -1,1 -1,2l0 0zm4 0l2 0 0 -1c0,0 0,0 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,1 0,1 0,1l0 1z"/>
					<G>
					 <Path fill="white" d="M1268 352c1,0 3,0 5,0 3,0 6,0 6,-1 0,-2 -3,-2 -6,-3 -2,0 -4,1 -5,1l0 3z"/>
					 <Path fill="white" d="M1269 352c0,0 0,0 0,0l0 -3c0,0 0,0 0,0l0 3z"/>
					 <Path fill="white" d="M1268 352c0,0 0,0 1,0l0 -3c-1,0 -1,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1279 351c0,-2 -3,-2 -6,-3 -2,0 -4,1 -5,1l0 1 11 1z"/>
					 <Path fill="white" d="M1269 350l0 -1c0,0 0,0 0,0l0 1 0 0z"/>
					 <Path fill="white" d="M1269 350l0 -1c-1,0 -1,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1260 361c-3,0 -4,-1 -4,-2l41 1c-5,1 -9,2 -14,2l-23 -1z"/>
					 <Path fill="white" d="M1260 357c-3,0 -4,1 -4,2l41 1c-5,-2 -9,-2 -14,-3l-23 0z"/>
					 <Path fill="white" d="M1259 359c-1,1 0,2 1,2 -1,0 -2,-1 -3,-2l2 0z"/>
					 <Path fill="white" d="M1259 359c-1,-1 0,-2 1,-2 -1,1 -2,1 -3,2l2 0z"/>
					 <Path fill="white" d="M1279 368c0,-1 -3,-2 -7,-2 -2,0 -3,1 -5,1l0 1 12 0z"/>
					 <Path fill="white" d="M1269 368l0 -1c0,0 0,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1268 368l0 -1c0,0 0,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1279 368c0,2 -3,2 -7,2 -2,0 -4,0 -5,-1l0 -1 12 0z"/>
					 <Path fill="white" d="M1269 368l0 2c0,0 -1,0 -1,0l0 -2 1 0z"/>
					 <Path fill="white" d="M1268 368l0 2c0,0 0,0 -1,-1l0 -1 1 0z"/>
					 <Path fill="white" d="M1267 361l12 16 5 0 -8 -15c-6,-2 -8,-2 -9,-1z"/>
					 <Path fill="white" d="M1277 377c0,0 2,0 4,0 3,0 4,0 4,0 0,1 -1,1 -4,1 -2,0 -4,-1 -4,-1z"/>
					 <Path fill="white" d="M1267 358l12 -16 5 0 -8 15c-5,2 -8,2 -9,1z"/>
					 <Path fill="white" d="M1277 342c0,0 2,0 5,0 2,0 4,0 4,0 0,0 -2,-1 -4,-1 -3,0 -5,0 -5,1z"/>
					 <Path fill="white" d="M1291 361c0,-1 5,6 5,6l2 0 -3 -7 -4 1z"/>
					 <Path fill="white" d="M1291 359c0,0 5,-6 5,-6l3 0 -4 6 -4 0z"/>
					 <Path fill="white" d="M1287 360c1,0 2,0 3,0 2,0 3,1 5,0l4 0 -12 0z"/>
					 <Path fill="white" d="M1287 360c1,-1 2,-1 3,-1 2,0 3,0 5,0l4 1 -12 0z"/>
					</G>
				   </G>
				   <G id="ph4l4a">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1160.94 387.983)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1174,371 1174,373 1170,373 1170,377 1174,377 1174,378 1165,378 1165,377 1169,377 1169,373 1165,373 1165,371 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1165 365l6 0 0 -1 1 0 0 1 2 0 0 1 -2 0 0 4 -2 0c0,0 0,-1 -1,-1 0,0 -1,-1 -1,-1 0,0 -1,-1 -1,-1 -1,0 -1,0 -2,-1l0 -1zm6 3l0 -2 -3 0c0,1 0,1 0,1 1,0 1,0 1,0 0,1 1,1 1,1 0,0 0,0 1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1174,358 1174,363 1165,363 1165,361 1172,361 1172,358 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1165 352l6 0 0 -1 1 0 0 1 2 0 0 2 -2 0 0 3 -2 0c0,0 0,0 -1,-1 0,0 -1,0 -1,-1 0,0 -1,0 -1,-1 -1,0 -1,0 -2,0l0 -2zm6 4l0 -2 -3 0c0,0 0,0 0,0 1,0 1,0 1,1 0,0 1,0 1,0 0,0 0,0 1,1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1174 342l0 2 -2 1 0 3 2 1 0 2 -9 -3 0 -3 9 -3zm-4 3l-2 1c-1,0 -1,0 -1,1l0 0c0,0 0,0 1,0l2 1 0 -3z"/>
					<G>
					 <Path fill="white" d="M1196 352c1,0 3,0 5,0 4,0 7,0 7,-1 0,-2 -3,-2 -7,-3 -2,0 -4,1 -5,1l0 3z"/>
					 <Path fill="white" d="M1197 352c0,0 1,0 1,0l0 -3c0,0 -1,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1196 352c0,0 1,0 1,0l0 -3c0,0 0,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1208 351c0,-2 -3,-2 -7,-3 -2,0 -4,1 -5,1l0 1 12 1z"/>
					 <Path fill="white" d="M1198 350l0 -1c0,0 -1,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1197 350l0 -1c0,0 0,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1188 361c-2,0 -4,-1 -4,-2l41 1c-4,1 -9,2 -13,2l-24 -1z"/>
					 <Path fill="white" d="M1188 357c-2,0 -4,1 -4,2l41 1c-4,-2 -8,-2 -13,-3l-24 0z"/>
					 <Path fill="white" d="M1187 359c0,1 1,2 1,2 -1,0 -2,-1 -2,-2l1 0z"/>
					 <Path fill="white" d="M1187 359c0,-1 1,-2 1,-2 -1,1 -2,1 -2,2l1 0z"/>
					 <Path fill="white" d="M1208 368c0,-1 -3,-2 -7,-2 -2,0 -4,1 -5,1l0 1 12 0z"/>
					 <Path fill="white" d="M1197 368l0 -1c0,0 0,0 0,0l0 1 0 0z"/>
					 <Path fill="white" d="M1197 368l0 -1c0,0 -1,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1208 368c0,2 -3,2 -7,2 -2,0 -4,0 -5,-1l0 -1 12 0z"/>
					 <Path fill="white" d="M1197 368l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill="white" d="M1197 368l0 2c-1,0 -1,0 -1,-1l0 -1 1 0z"/>
					 <Path fill="white" d="M1195 361l12 16 5 0 -7 -15c-6,-2 -9,-2 -10,-1z"/>
					 <Path fill="white" d="M1205 377c0,0 2,0 5,0 2,0 4,0 4,0 0,1 -2,1 -4,1 -3,0 -5,-1 -5,-1z"/>
					 <Path fill="white" d="M1195 358l13 -16 5 0 -8 15c-6,2 -9,2 -10,1z"/>
					 <Path fill="white" d="M1206 342c0,0 2,0 4,0 3,0 5,0 5,0 0,0 -2,-1 -5,-1 -2,0 -4,0 -4,1z"/>
					 <Path fill="white" d="M1220 361c0,-1 5,6 5,6l2 0 -3 -7 -4 1z"/>
					 <Path fill="white" d="M1220 359c0,0 5,-6 5,-6l2 0 -3 6 -4 0z"/>
					 <Path fill="white" d="M1216 360c0,0 1,0 3,0 1,0 3,1 4,0l4 0 -11 0z"/>
					 <Path fill="white" d="M1216 360c0,-1 1,-1 3,-1 1,0 3,0 5,0l3 1 -11 0z"/>
					</G>
				   </G>
				   <G id="ph4l12b">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1062.69 395.208)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1050,409 1050,407 1053,407 1053,404 1050,404 1050,402 1058,402 1058,404 1055,404 1055,407 1058,407 1058,409 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1058 416l-5 0 0 1 -1 0 0 -1 -2 0 0 -2 2 0 0 -4 1 0c1,1 1,1 1,1 1,1 1,1 2,1 0,1 1,1 1,1 1,0 1,1 1,1l0 2zm-5 -4l0 2 3 0c0,0 0,0 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -1,-1 0,0 -1,0 -1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1050,423 1050,418 1058,418 1058,420 1052,420 1052,423 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1059 428l-9 0 0 -2 7 0c-1,0 -1,0 -1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1l1 0c0,1 1,1 1,1 0,1 0,1 1,2l0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1052 432l0 4 -2 0 0 -6 1 0c0,0 1,0 1,0 0,0 1,1 1,1 0,0 0,0 0,1 1,0 1,0 1,0 0,1 0,1 1,1 0,0 0,0 0,0 0,1 0,1 0,1 1,0 1,0 1,0 0,0 1,0 1,0 0,-1 0,-1 0,-1 0,-1 0,-2 -1,-2l2 0c0,0 1,1 1,2 0,0 -1,1 -1,1 0,0 0,1 0,1 0,0 -1,0 -1,0 0,1 0,1 -1,1 0,0 -1,0 -1,-1 0,0 0,0 -1,0 0,0 0,0 0,-1 -1,0 -1,0 -1,0 0,-1 0,-1 0,-1 0,0 -1,0 -1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M1050 437l8 0 0 3c0,1 0,2 0,3 0,0 -1,0 -2,0 0,0 0,0 -1,0 0,0 0,-1 0,-1l0 0c-1,0 -1,1 -1,1 0,0 -1,1 -1,1 -1,0 -2,-1 -2,-1 -1,-1 -1,-1 -1,-2l0 -4zm7 2l-2 0 0 1c0,0 0,1 0,1 1,0 1,0 1,0 1,0 1,0 1,-1l0 -1zm-3 0l-3 0 0 1c0,1 1,1 1,1 0,1 0,1 1,1 0,0 0,0 0,-1 1,0 1,0 1,-1l0 -1z"/>
					<G>
					 <Path fill="white" d="M1027 429c-1,-1 -3,-1 -5,-1 -3,0 -6,1 -6,2 0,1 3,2 6,2 2,0 4,0 5,0l0 -3z"/>
					 <Path fill="white" d="M1026 429c0,0 0,0 0,0l0 3c0,0 0,0 0,0l0 -3z"/>
					 <Path fill="white" d="M1027 429c0,0 0,0 -1,0l0 3c1,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1016 430c0,1 3,2 6,2 2,0 4,0 5,0l0 -2 -11 0z"/>
					 <Path fill="white" d="M1026 430l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill="white" d="M1026 430l0 2c1,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1035 419c3,0 4,1 5,3l-41 -1c4,-2 8,-2 13,-2l23 0z"/>
					 <Path fill="white" d="M1035 424c3,0 4,-1 5,-2l-41 -1c4,1 8,2 13,2l23 1z"/>
					 <Path fill="white" d="M1037 421c0,-1 -1,-1 -2,-1 2,0 3,0 3,1l-1 0z"/>
					 <Path fill="white" d="M1037 421c0,1 -1,2 -2,2 1,0 3,0 3,-2l-1 0z"/>
					 <Path fill="white" d="M1016 412c0,1 3,2 7,2 2,0 4,0 5,0l0 -2 -12 0z"/>
					 <Path fill="white" d="M1026 412l0 2c0,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1027 412l0 2c0,0 0,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1016 412c0,-1 3,-2 7,-2 2,0 4,1 5,1l0 1 -12 0z"/>
					 <Path fill="white" d="M1026 412l0 -1c0,0 1,0 1,0l0 1 -1 0z"/>
					 <Path fill="white" d="M1027 412l0 -1c0,0 1,0 1,0l0 1 -1 0z"/>
					 <Path fill="white" d="M1028 420l-12 -16 -4 -1 7 16c6,2 9,2 9,1z"/>
					 <Path fill="white" d="M1018 403c0,1 -2,1 -4,1 -2,0 -4,-1 -4,-1 0,0 2,0 4,0 2,0 4,0 4,0z"/>
					 <Path fill="white" d="M1028 423l-12 15 -5 0 8 -15c6,-1 8,-1 9,0z"/>
					 <Path fill="white" d="M1018 439c0,-1 -2,-1 -5,-1 -2,0 -4,0 -4,1 0,0 2,0 4,0 3,0 5,0 5,0z"/>
					 <Path fill="white" d="M1004 420c0,0 -5,-6 -5,-6l-2 0 3 6 4 0z"/>
					 <Path fill="white" d="M1004 422c0,-1 -5,6 -5,6l-3 0 4 -7 4 1z"/>
					 <Path fill="white" d="M1008 421c-1,-1 -1,-1 -3,-1 -1,0 -3,0 -5,0l-4 1 12 0z"/>
					 <Path fill="white" d="M1008 421c-1,0 -1,1 -3,1 -1,-1 -3,-1 -5,-1l-4 0 12 0z"/>
					</G>
				   </G>
				   <G id="ph4l12a">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1134.17 395.208)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1122,409 1122,407 1125,407 1125,403 1122,403 1122,401 1130,401 1130,403 1127,403 1127,407 1130,407 1130,409 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1130 415l-5 0 0 1 -2 0 0 -1 -1 0 0 -2 1 0 0 -3 2 0c0,0 0,0 1,1 0,0 1,0 1,1 1,0 1,0 2,1 0,0 0,0 1,0l0 2zm-5 -4l0 2 3 0c-1,0 -1,0 -1,0 0,0 -1,0 -1,-1 0,0 0,0 -1,0 0,0 0,0 0,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1122,422 1122,417 1130,417 1130,419 1123,419 1123,422 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1130 427l-8 0 0 -2 6 0c0,0 0,0 0,0 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 0,0 0,0 0,0l2 0c0,0 0,0 0,1 1,0 1,1 1,1l0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1123 432l0 3 -1 0 0 -5 0 0c1,0 1,0 1,0 1,0 1,0 1,0 1,1 1,1 1,1 0,0 0,1 1,1 0,0 0,0 0,0 0,1 0,1 0,1 1,0 1,0 1,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 1,-1 1,-1 0,-1 -1,-1 -1,-2l1 0c1,1 1,2 1,2 0,1 0,1 0,2 0,0 0,0 -1,0 0,1 0,1 0,1 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,-1 0,0 -1,0 -1,0 0,0 0,-1 0,-1 -1,0 -1,0 -1,-1 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M1122 444l0 -2 1 0 0 -3 -1 -1 0 -2 8 3 0 2 -8 3zm3 -3l3 -1c0,0 0,0 0,0l0 0c0,0 0,0 0,0l-3 -1 0 2z"/>
					<G>
					 <Path fill="white" d="M1099 429c-1,-1 -3,-1 -5,-1 -4,0 -7,1 -7,2 0,1 3,2 7,2 2,0 4,0 5,0l0 -3z"/>
					 <Path fill="white" d="M1098 429c0,0 0,0 -1,0l0 3c1,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1099 429c0,0 -1,0 -1,0l0 3c0,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1087 430c0,1 3,2 7,2 2,0 4,0 5,0l0 -2 -12 0z"/>
					 <Path fill="white" d="M1097 430l0 2c1,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1098 430l0 2c0,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1107 419c2,0 4,1 4,3l-41 -1c4,-2 9,-2 13,-2l24 0z"/>
					 <Path fill="white" d="M1107 424c2,0 4,-1 4,-2l-41 -1c4,1 9,2 13,2l24 1z"/>
					 <Path fill="white" d="M1108 421c0,-1 -1,-1 -1,-1 1,0 2,0 3,1l-2 0z"/>
					 <Path fill="white" d="M1108 421c0,1 -1,2 -1,2 1,0 2,0 3,-2l-2 0z"/>
					 <Path fill="white" d="M1088 412c0,1 3,2 6,2 2,0 4,0 5,0l0 -2 -11 0z"/>
					 <Path fill="white" d="M1098 412l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill="white" d="M1098 412l0 2c1,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1088 412c0,-1 3,-2 6,-2 2,0 4,1 5,1l0 1 -11 0z"/>
					 <Path fill="white" d="M1098 412l0 -1c0,0 0,0 0,0l0 1 0 0z"/>
					 <Path fill="white" d="M1098 412l0 -1c1,0 1,0 1,0l0 1 -1 0z"/>
					 <Path fill="white" d="M1100 420l-12 -16 -5 -1 8 16c5,2 8,2 9,1z"/>
					 <Path fill="white" d="M1090 403c0,1 -2,1 -5,1 -2,0 -4,-1 -4,-1 0,0 2,0 5,0 2,0 4,0 4,0z"/>
					 <Path fill="white" d="M1100 423l-13 15 -5 0 8 -15c6,-1 9,-1 10,0z"/>
					 <Path fill="white" d="M1089 439c0,-1 -2,-1 -4,-1 -3,0 -5,0 -5,1 0,0 2,0 5,0 2,0 4,0 4,0z"/>
					 <Path fill="white" d="M1075 420c0,0 -4,-6 -4,-6l-3 0 3 6 4 0z"/>
					 <Path fill="white" d="M1075 422c0,-1 -5,6 -5,6l-2 0 3 -7 4 1z"/>
					 <Path fill="white" d="M1079 421c0,-1 -1,-1 -2,-1 -2,0 -4,0 -5,0l-4 1 11 0z"/>
					 <Path fill="white" d="M1079 421c0,0 -1,1 -2,1 -2,-1 -4,-1 -5,-1l-4 0 11 0z"/>
					</G>
				   </G>
				   <G id="ph4l5b">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1232.42 450.328)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1245,433 1245,435 1242,435 1242,438 1245,438 1245,440 1237,440 1237,438 1240,438 1240,435 1237,435 1237,433 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1237 427l5 0 0 -1 1 0 0 1 2 0 0 1 -2 0 0 4 -1 0c0,0 -1,-1 -1,-1 -1,0 -1,-1 -2,-1 0,0 0,-1 -1,-1 0,0 -1,0 -1,-1l0 -1zm5 3l0 -2 -3 0c0,0 1,1 1,1 0,0 0,0 1,0 0,0 0,1 0,1 1,0 1,0 1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1245,419 1245,424 1237,424 1237,423 1244,423 1244,419 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1245 418l-2 0c1,0 1,-1 1,-1 0,-1 0,-1 -1,-1 0,-1 0,-1 0,-1 -1,0 -2,1 -2,2 0,0 0,1 0,1l-4 0 0 -4 1 0 0 3 2 0c0,-1 0,-1 0,-1 0,-1 0,-2 1,-2 0,-1 1,-1 1,-1 1,0 2,1 2,1 1,1 1,1 1,2 0,1 0,2 0,2z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1245 412l-8 0 0 -3c0,-1 0,-2 0,-3 1,0 1,0 2,0 0,0 1,0 1,0 0,0 0,1 1,1l0 0c0,0 0,-1 0,-1 1,-1 1,-1 2,-1 0,0 1,1 1,1 1,1 1,1 1,2l0 4zm-7 -2l2 0 0 -1c0,-1 0,-1 0,-1 0,0 -1,0 -1,0 -1,0 -1,0 -1,1l0 1zm4 0l2 0 0 -1c0,-1 0,-1 -1,-1 0,-1 0,-1 0,-1 -1,0 -1,0 -1,1 0,0 0,0 0,1l0 1z"/>
					<G>
					 <Path fill="white" d="M1268 414c1,0 3,1 5,1 3,0 6,-1 6,-2 0,-1 -3,-2 -6,-2 -2,0 -4,0 -5,0l0 3z"/>
					 <Path fill="white" d="M1269 414c0,0 0,0 0,0l0 -3c0,0 0,0 0,0l0 3z"/>
					 <Path fill="white" d="M1268 414c0,0 0,0 1,0l0 -3c-1,0 -1,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1279 413c0,-1 -3,-2 -6,-2 -2,0 -4,0 -5,0l0 2 11 0z"/>
					 <Path fill="white" d="M1269 413l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1269 413l0 -2c-1,0 -1,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1260 424c-3,-1 -4,-1 -4,-3l41 1c-5,1 -9,2 -14,2l-23 0z"/>
					 <Path fill="white" d="M1260 419c-3,0 -4,1 -4,2l41 1c-5,-1 -9,-2 -14,-2l-23 -1z"/>
					 <Path fill="white" d="M1259 421c-1,1 0,2 1,2 -1,0 -2,-1 -3,-2l2 0z"/>
					 <Path fill="white" d="M1259 421c-1,-1 0,-1 1,-1 -1,0 -2,0 -3,1l2 0z"/>
					 <Path fill="white" d="M1279 431c0,-1 -3,-2 -7,-2 -2,0 -3,0 -5,0l0 2 12 0z"/>
					 <Path fill="white" d="M1269 431l0 -2c0,0 0,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1268 431l0 -2c0,0 0,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1279 431c0,1 -3,2 -7,2 -2,0 -4,-1 -5,-1l0 -1 12 0z"/>
					 <Path fill="white" d="M1269 431l0 1c0,0 -1,0 -1,0l0 -1 1 0z"/>
					 <Path fill="white" d="M1268 431l0 1c0,0 0,0 -1,0l0 -1 1 0z"/>
					 <Path fill="white" d="M1267 423l12 16 5 0 -8 -15c-6,-2 -8,-2 -9,-1z"/>
					 <Path fill="white" d="M1277 439c0,0 2,0 4,0 3,0 4,0 4,1 0,0 -1,0 -4,0 -2,0 -4,0 -4,-1z"/>
					 <Path fill="white" d="M1267 420l12 -16 5 0 -8 15c-5,2 -8,2 -9,1z"/>
					 <Path fill="white" d="M1277 404c0,0 2,1 5,1 2,0 4,0 4,-1 0,0 -2,0 -4,0 -3,0 -5,0 -5,0z"/>
					 <Path fill="white" d="M1291 423c0,0 5,6 5,6l2 0 -3 -6 -4 0z"/>
					 <Path fill="white" d="M1291 421c0,0 5,-6 5,-6l3 0 -4 7 -4 -1z"/>
					 <Path fill="white" d="M1287 422c1,0 2,1 3,1 2,0 3,0 5,0l4 -1 -12 0z"/>
					 <Path fill="white" d="M1287 422c1,0 2,-1 3,-1 2,0 3,0 5,1l4 0 -12 0z"/>
					</G>
				   </G>
				   <G id="ph4l5a">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1160.94 450.328)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1174,434 1174,435 1170,435 1170,439 1174,439 1174,441 1165,441 1165,439 1169,439 1169,435 1165,435 1165,434 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1165 427l6 0 0 -1 1 0 0 1 2 0 0 2 -2 0 0 3 -2 0c0,0 0,0 -1,-1 0,0 -1,0 -1,-1 0,0 -1,0 -1,0 -1,-1 -1,-1 -2,-1l0 -2zm6 4l0 -2 -3 0c0,0 0,0 0,0 1,0 1,1 1,1 0,0 1,0 1,0 0,0 0,1 1,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1174,420 1174,425 1165,425 1165,423 1172,423 1172,420 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1173 419l-1 0c0,-1 0,-1 0,-2 0,0 0,-1 0,-1 0,0 -1,0 -1,0 -1,0 -1,0 -1,1 0,1 0,1 0,2l-5 0 0 -5 2 0 0 3 1 0c0,0 0,0 0,0 0,-1 1,-2 1,-2 1,-1 1,-1 2,-1 1,0 1,0 2,1 0,0 1,1 1,2 0,1 0,1 -1,2z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1174 405l0 2 -2 0 0 3 2 1 0 2 -9 -3 0 -2 9 -3zm-4 3l-2 1c-1,0 -1,0 -1,0l0 0c0,0 0,0 1,0l2 1 0 -2z"/>
					<G>
					 <Path fill="white" d="M1196 414c1,0 3,1 5,1 4,0 7,-1 7,-2 0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,0l0 3z"/>
					 <Path fill="white" d="M1197 414c0,0 1,0 1,0l0 -3c0,0 -1,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1196 414c0,0 1,0 1,0l0 -3c0,0 0,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1208 413c0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,0l0 2 12 0z"/>
					 <Path fill="white" d="M1198 413l0 -2c0,0 -1,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1197 413l0 -2c0,0 0,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1188 424c-2,-1 -4,-1 -4,-3l41 1c-4,1 -9,2 -13,2l-24 0z"/>
					 <Path fill="white" d="M1188 419c-2,0 -4,1 -4,2l41 1c-4,-1 -8,-2 -13,-2l-24 -1z"/>
					 <Path fill="white" d="M1187 421c0,1 1,2 1,2 -1,0 -2,-1 -2,-2l1 0z"/>
					 <Path fill="white" d="M1187 421c0,-1 1,-1 1,-1 -1,0 -2,0 -2,1l1 0z"/>
					 <Path fill="white" d="M1208 431c0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,0l0 2 12 0z"/>
					 <Path fill="white" d="M1197 431l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1197 431l0 -2c0,0 -1,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1208 431c0,1 -3,2 -7,2 -2,0 -4,-1 -5,-1l0 -1 12 0z"/>
					 <Path fill="white" d="M1197 431l0 1c0,0 0,0 0,0l0 -1 0 0z"/>
					 <Path fill="white" d="M1197 431l0 1c-1,0 -1,0 -1,0l0 -1 1 0z"/>
					 <Path fill="white" d="M1195 423l12 16 5 0 -7 -15c-6,-2 -9,-2 -10,-1z"/>
					 <Path fill="white" d="M1205 439c0,0 2,0 5,0 2,0 4,0 4,1 0,0 -2,0 -4,0 -3,0 -5,0 -5,-1z"/>
					 <Path fill="white" d="M1195 420l13 -16 5 0 -8 15c-6,2 -9,2 -10,1z"/>
					 <Path fill="white" d="M1206 404c0,0 2,1 4,1 3,0 5,0 5,-1 0,0 -2,0 -5,0 -2,0 -4,0 -4,0z"/>
					 <Path fill="white" d="M1220 423c0,0 5,6 5,6l2 0 -3 -6 -4 0z"/>
					 <Path fill="white" d="M1220 421c0,0 5,-6 5,-6l2 0 -3 7 -4 -1z"/>
					 <Path fill="white" d="M1216 422c0,0 1,1 3,1 1,0 3,0 4,0l4 -1 -11 0z"/>
					 <Path fill="white" d="M1216 422c0,0 1,-1 3,-1 1,0 3,0 5,1l3 0 -11 0z"/>
					</G>
				   </G>
				   <G id="ph4l11b">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1062.69 457.553)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1050,471 1050,470 1053,470 1053,466 1050,466 1050,464 1058,464 1058,466 1055,466 1055,470 1058,470 1058,471 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1058 478l-5 0 0 1 -1 0 0 -1 -2 0 0 -2 2 0 0 -3 1 0c1,0 1,0 1,1 1,0 1,0 2,1 0,0 1,0 1,0 1,1 1,1 1,1l0 2zm-5 -4l0 2 3 0c0,0 0,0 -1,0 0,0 0,-1 0,-1 -1,0 -1,0 -1,0 0,0 -1,-1 -1,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1050,485 1050,480 1058,480 1058,482 1052,482 1052,485 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1059 490l-9 0 0 -2 7 0c-1,0 -1,0 -1,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,-1l1 0c0,1 1,1 1,2 0,0 0,1 1,1l0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1059 497l-9 0 0 -2 7 0c-1,0 -1,0 -1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 0,-1 0,-1l1 0c0,1 1,1 1,2 0,0 0,0 1,1l0 1z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M1050 500l8 0 0 3c0,1 0,1 0,2 0,0 -1,1 -2,1 0,0 0,-1 -1,-1 0,0 0,0 0,-1l0 0c-1,1 -1,1 -1,1 0,1 -1,1 -1,1 -1,0 -2,0 -2,-1 -1,0 -1,-1 -1,-2l0 -3zm7 2l-2 0 0 0c0,1 0,1 0,1 1,1 1,1 1,1 1,0 1,-1 1,-2l0 0zm-3 0l-3 0 0 1c0,0 1,0 1,1 0,0 0,0 1,0 0,0 0,0 0,0 1,-1 1,-1 1,-1l0 -1z"/>
					<G>
					 <Path fill="white" d="M1027 491c-1,0 -3,0 -5,-1 -3,0 -6,1 -6,2 0,1 3,2 6,2 2,0 4,0 5,0l0 -3z"/>
					 <Path fill="white" d="M1026 491c0,0 0,0 0,0l0 3c0,0 0,0 0,0l0 -3z"/>
					 <Path fill="white" d="M1027 491c0,0 0,0 -1,0l0 3c1,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1016 492c0,1 3,2 6,2 2,0 4,0 5,0l0 -1 -11 -1z"/>
					 <Path fill="white" d="M1026 493l0 1c0,0 0,0 0,0l0 -1 0 0z"/>
					 <Path fill="white" d="M1026 493l0 1c1,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1035 481c3,1 4,2 5,3l-41 -1c4,-1 8,-2 13,-2l23 0z"/>
					 <Path fill="white" d="M1035 486c3,0 4,-1 5,-2l-41 -1c4,1 8,2 13,3l23 0z"/>
					 <Path fill="white" d="M1037 484c0,-1 -1,-2 -2,-2 2,0 3,1 3,2l-1 0z"/>
					 <Path fill="white" d="M1037 484c0,1 -1,1 -2,2 1,-1 3,-1 3,-2l-1 0z"/>
					 <Path fill="white" d="M1016 474c0,1 3,2 7,2 2,1 4,0 5,0l0 -1 -12 -1z"/>
					 <Path fill="white" d="M1026 475l0 1c0,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1027 475l0 1c0,0 0,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1016 474c0,-1 3,-1 7,-1 2,0 4,0 5,0l0 2 -12 -1z"/>
					 <Path fill="white" d="M1026 475l0 -2c0,0 1,0 1,0l0 2 -1 0z"/>
					 <Path fill="white" d="M1027 475l0 -2c0,0 1,0 1,0l0 2 -1 0z"/>
					 <Path fill="white" d="M1028 482l-12 -16 -4 0 7 15c6,2 9,2 9,1z"/>
					 <Path fill="white" d="M1018 466c0,0 -2,0 -4,0 -2,0 -4,0 -4,0 0,-1 2,-1 4,-1 2,0 4,0 4,1z"/>
					 <Path fill="white" d="M1028 485l-12 16 -5 0 8 -15c6,-2 8,-2 9,-1z"/>
					 <Path fill="white" d="M1018 501c0,0 -2,-1 -5,-1 -2,0 -4,1 -4,1 0,0 2,1 4,1 3,0 5,-1 5,-1z"/>
					 <Path fill="white" d="M1004 482c0,0 -5,-6 -5,-6l-2 0 3 7 4 -1z"/>
					 <Path fill="white" d="M1004 484c0,0 -5,6 -5,6l-3 0 4 -7 4 1z"/>
					 <Path fill="white" d="M1008 483c-1,0 -1,-1 -3,-1 -1,0 -3,0 -5,1l-4 0 12 0z"/>
					 <Path fill="white" d="M1008 483c-1,1 -1,1 -3,1 -1,0 -3,0 -5,-1l-4 0 12 0z"/>
					</G>
				   </G>
				   <G id="ph4l11a">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1134.17 457.553)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1122,471 1122,469 1125,469 1125,466 1122,466 1122,464 1130,464 1130,466 1127,466 1127,469 1130,469 1130,471 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1130 477l-5 0 0 1 -2 0 0 -1 -1 0 0 -1 1 0 0 -4 2 0c0,0 0,1 1,1 0,0 1,1 1,1 1,0 1,1 2,1 0,0 0,0 1,1l0 1zm-5 -3l0 2 3 0c-1,0 -1,-1 -1,-1 0,0 -1,0 -1,0 0,0 0,-1 -1,-1 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1122,485 1122,480 1130,480 1130,481 1123,481 1123,485 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1130 489l-8 0 0 -1 6 0c0,0 0,-1 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,-1 0,0 0,0 0,0l2 0c0,0 0,1 0,1 1,1 1,1 1,1l0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1130 496l-8 0 0 -2 6 0c0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,-1 -1,-1 0,0 0,0 0,0l2 0c0,0 0,1 0,1 1,0 1,1 1,1l0 1z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M1122 507l0 -3 1 0 0 -3 -1 -1 0 -2 8 3 0 3 -8 3zm3 -4l3 0c0,-1 0,-1 0,-1l0 0c0,0 0,0 0,0l-3 -1 0 2z"/>
					<G>
					 <Path fill="white" d="M1099 491c-1,0 -3,0 -5,-1 -4,0 -7,1 -7,2 0,1 3,2 7,2 2,0 4,0 5,0l0 -3z"/>
					 <Path fill="white" d="M1098 491c0,0 0,0 -1,0l0 3c1,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1099 491c0,0 -1,0 -1,0l0 3c0,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1087 492c0,1 3,2 7,2 2,0 4,0 5,0l0 -1 -12 -1z"/>
					 <Path fill="white" d="M1097 493l0 1c1,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1098 493l0 1c0,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1107 481c2,1 4,2 4,3l-41 -1c4,-1 9,-2 13,-2l24 0z"/>
					 <Path fill="white" d="M1107 486c2,0 4,-1 4,-2l-41 -1c4,1 9,2 13,3l24 0z"/>
					 <Path fill="white" d="M1108 484c0,-1 -1,-2 -1,-2 1,0 2,1 3,2l-2 0z"/>
					 <Path fill="white" d="M1108 484c0,1 -1,1 -1,2 1,-1 2,-1 3,-2l-2 0z"/>
					 <Path fill="white" d="M1088 474c0,1 3,2 6,2 2,1 4,0 5,0l0 -1 -11 -1z"/>
					 <Path fill="white" d="M1098 475l0 1c0,0 0,0 0,0l0 -1 0 0z"/>
					 <Path fill="white" d="M1098 475l0 1c1,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1088 474c0,-1 3,-1 6,-1 2,0 4,0 5,0l0 2 -11 -1z"/>
					 <Path fill="white" d="M1098 475l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1098 475l0 -2c1,0 1,0 1,0l0 2 -1 0z"/>
					 <Path fill="white" d="M1100 482l-12 -16 -5 0 8 15c5,2 8,2 9,1z"/>
					 <Path fill="white" d="M1090 466c0,0 -2,0 -5,0 -2,0 -4,0 -4,0 0,-1 2,-1 5,-1 2,0 4,0 4,1z"/>
					 <Path fill="white" d="M1100 485l-13 16 -5 0 8 -15c6,-2 9,-2 10,-1z"/>
					 <Path fill="white" d="M1089 501c0,0 -2,-1 -4,-1 -3,0 -5,1 -5,1 0,0 2,1 5,1 2,0 4,-1 4,-1z"/>
					 <Path fill="white" d="M1075 482c0,0 -4,-6 -4,-6l-3 0 3 7 4 -1z"/>
					 <Path fill="white" d="M1075 484c0,0 -5,6 -5,6l-2 0 3 -7 4 1z"/>
					 <Path fill="white" d="M1079 483c0,0 -1,-1 -2,-1 -2,0 -4,0 -5,1l-4 0 11 0z"/>
					 <Path fill="white" d="M1079 483c0,1 -1,1 -2,1 -2,0 -4,0 -5,-1l-4 0 11 0z"/>
					</G>
				   </G>
				   <G id="ph4l6b">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1232.42 512.672)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1245,495 1245,497 1242,497 1242,501 1245,501 1245,503 1237,503 1237,501 1240,501 1240,497 1237,497 1237,495 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1237 489l5 0 0 -1 1 0 0 1 2 0 0 2 -2 0 0 3 -1 0c0,0 -1,0 -1,-1 -1,0 -1,0 -2,-1 0,0 0,0 -1,-1 0,0 -1,0 -1,0l0 -2zm5 4l0 -2 -3 0c0,0 1,0 1,0 0,0 0,0 1,1 0,0 0,0 0,0 1,0 1,0 1,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1245,482 1245,487 1237,487 1237,485 1244,485 1244,482 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1242 475c1,0 1,0 1,0 1,1 1,1 1,1 1,0 1,1 1,1 0,0 0,1 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 0,1 -1,1 -1,1 0,0 -1,0 -2,0 0,0 -1,0 -2,0 0,0 -1,-1 -1,-1 0,0 -1,-1 -1,-1 0,-1 0,-1 0,-2 0,0 0,-1 0,-1l1 0c0,0 0,1 0,1 0,0 0,1 0,1 0,0 1,0 1,1 0,0 0,0 1,0 0,0 0,0 1,0l0 0c-1,0 -1,-1 -1,-2 0,0 0,0 0,0 0,-1 0,-1 0,-1 1,0 1,-1 1,-1 1,0 1,0 1,0zm0 2c0,0 -1,0 -1,1 0,0 0,0 0,1 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 0,0 1,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 -1,-1 0,0 0,0 0,0 0,0 0,0 -1,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1245 474l-8 0 0 -3c0,-1 0,-2 0,-2 1,-1 1,-1 2,-1 0,0 1,0 1,0 0,1 0,1 1,2l0 0c0,-1 0,-1 0,-2 1,0 1,0 2,0 0,0 1,0 1,0 1,1 1,2 1,3l0 3zm-7 -2l2 0 0 -1c0,0 0,-1 0,-1 0,0 -1,0 -1,0 -1,0 -1,0 -1,1l0 1zm4 0l2 0 0 -1c0,0 0,-1 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,1 0,1l0 1z"/>
					<G>
					 <Path fill="white" d="M1268 476c1,1 3,1 5,1 3,0 6,-1 6,-2 0,-1 -3,-2 -6,-2 -2,0 -4,0 -5,1l0 2z"/>
					 <Path fill="white" d="M1269 477c0,0 0,0 0,0l0 -4c0,0 0,0 0,0l0 4z"/>
					 <Path fill="white" d="M1268 476c0,0 0,0 1,1l0 -4c-1,0 -1,1 -1,1l0 2z"/>
					 <Path fill="white" d="M1279 475c0,-1 -3,-2 -6,-2 -2,0 -4,0 -5,1l0 1 11 0z"/>
					 <Path fill="white" d="M1269 475l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1269 475l0 -2c-1,0 -1,1 -1,1l0 1 1 0z"/>
					 <Path fill="white" d="M1260 486c-3,0 -4,-1 -4,-2l41 1c-5,1 -9,1 -14,2l-23 -1z"/>
					 <Path fill="white" d="M1260 481c-3,1 -4,1 -4,3l41 1c-5,-2 -9,-3 -14,-3l-23 -1z"/>
					 <Path fill="white" d="M1259 484c-1,1 0,1 1,2 -1,-1 -2,-1 -3,-2l2 0z"/>
					 <Path fill="white" d="M1259 484c-1,-1 0,-2 1,-2 -1,0 -2,1 -3,2l2 0z"/>
					 <Path fill="white" d="M1279 493c0,-1 -3,-2 -7,-2 -2,0 -3,0 -5,1l0 1 12 0z"/>
					 <Path fill="white" d="M1269 493l0 -2c0,0 0,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1268 493l0 -2c0,0 0,0 -1,1l0 1 1 0z"/>
					 <Path fill="white" d="M1279 493c0,1 -3,2 -7,2 -2,0 -4,0 -5,-1l0 -1 12 0z"/>
					 <Path fill="white" d="M1269 493l0 2c0,0 -1,0 -1,-1l0 -1 1 0z"/>
					 <Path fill="white" d="M1268 493l0 1c0,0 0,0 -1,0l0 -1 1 0z"/>
					 <Path fill="white" d="M1267 486l12 16 5 0 -8 -16c-6,-1 -8,-2 -9,0z"/>
					 <Path fill="white" d="M1277 502c0,0 2,-1 4,-1 3,0 4,1 4,1 0,0 -1,1 -4,0 -2,0 -4,0 -4,0z"/>
					 <Path fill="white" d="M1267 482l12 -15 5 0 -8 15c-5,1 -8,1 -9,0z"/>
					 <Path fill="white" d="M1277 466c0,1 2,1 5,1 2,0 4,0 4,0 0,-1 -2,-1 -4,-1 -3,0 -5,0 -5,0z"/>
					 <Path fill="white" d="M1291 485c0,0 5,7 5,7l2 0 -3 -7 -4 0z"/>
					 <Path fill="white" d="M1291 484c0,0 5,-6 5,-6l3 0 -4 6 -4 0z"/>
					 <Path fill="white" d="M1287 484c1,1 2,1 3,1 2,0 3,0 5,0l4 0 -12 -1z"/>
					 <Path fill="white" d="M1287 484c1,0 2,0 3,0 2,0 3,0 5,0l4 1 -12 -1z"/>
					</G>
				   </G>
				   <G id="ph4l6a">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1160.94 512.672)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1174,496 1174,498 1170,498 1170,501 1174,501 1174,503 1165,503 1165,501 1169,501 1169,498 1165,498 1165,496 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1165 489l6 0 0 0 1 0 0 0 2 0 0 2 -2 0 0 4 -2 0c0,-1 0,-1 -1,-1 0,-1 -1,-1 -1,-1 0,-1 -1,-1 -1,-1 -1,0 -1,-1 -2,-1l0 -2zm6 4l0 -2 -3 0c0,0 0,0 0,1 1,0 1,0 1,0 0,0 1,0 1,1 0,0 0,0 1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1174,482 1174,487 1165,487 1165,485 1172,485 1172,482 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1171 476c0,0 1,0 1,0 0,0 1,0 1,1 0,0 0,0 1,0 0,1 0,1 0,2 0,0 0,0 -1,1 0,0 0,1 0,1 -1,0 -1,0 -1,0 -1,1 -2,1 -2,1 -1,0 -1,-1 -2,-1 -1,0 -1,0 -2,0 0,-1 0,-1 0,-2 -1,0 -1,-1 -1,-1 0,-1 0,-1 0,-2l2 0c0,1 0,1 0,2 0,0 0,0 0,1 0,0 0,0 0,0 0,0 1,1 1,1 0,0 1,0 1,0l0 0c0,-1 -1,-1 -1,-2 0,0 0,-1 0,-1 1,0 1,0 1,-1 0,0 0,0 1,0 0,0 0,0 1,0zm0 2c-1,0 -1,0 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 1,0 1,0 1,0 0,0 0,0 0,0 1,0 1,0 1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1174 467l0 2 -2 1 0 3 2 0 0 2 -9 -3 0 -2 9 -3zm-4 3l-2 1c-1,0 -1,0 -1,0l0 0c0,0 0,0 1,0l2 1 0 -2z"/>
					<G>
					 <Path fill="white" d="M1196 476c1,1 3,1 5,1 4,0 7,-1 7,-2 0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,1l0 2z"/>
					 <Path fill="white" d="M1197 477c0,0 1,0 1,0l0 -4c0,0 -1,0 -1,0l0 4z"/>
					 <Path fill="white" d="M1196 476c0,0 1,0 1,1l0 -4c0,0 0,1 -1,1l0 2z"/>
					 <Path fill="white" d="M1208 475c0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,1l0 1 12 0z"/>
					 <Path fill="white" d="M1198 475l0 -2c0,0 -1,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1197 475l0 -2c0,0 0,1 -1,1l0 1 1 0z"/>
					 <Path fill="white" d="M1188 486c-2,0 -4,-1 -4,-2l41 1c-4,1 -9,1 -13,2l-24 -1z"/>
					 <Path fill="white" d="M1188 481c-2,1 -4,1 -4,3l41 1c-4,-2 -8,-3 -13,-3l-24 -1z"/>
					 <Path fill="white" d="M1187 484c0,1 1,1 1,2 -1,-1 -2,-1 -2,-2l1 0z"/>
					 <Path fill="white" d="M1187 484c0,-1 1,-2 1,-2 -1,0 -2,1 -2,2l1 0z"/>
					 <Path fill="white" d="M1208 493c0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,1l0 1 12 0z"/>
					 <Path fill="white" d="M1197 493l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1197 493l0 -2c0,0 -1,0 -1,1l0 1 1 0z"/>
					 <Path fill="white" d="M1208 493c0,1 -3,2 -7,2 -2,0 -4,0 -5,-1l0 -1 12 0z"/>
					 <Path fill="white" d="M1197 493l0 2c0,0 0,0 0,-1l0 -1 0 0z"/>
					 <Path fill="white" d="M1197 493l0 1c-1,0 -1,0 -1,0l0 -1 1 0z"/>
					 <Path fill="white" d="M1195 486l12 16 5 0 -7 -16c-6,-1 -9,-2 -10,0z"/>
					 <Path fill="white" d="M1205 502c0,0 2,-1 5,-1 2,0 4,1 4,1 0,0 -2,1 -4,0 -3,0 -5,0 -5,0z"/>
					 <Path fill="white" d="M1195 482l13 -15 5 0 -8 15c-6,1 -9,1 -10,0z"/>
					 <Path fill="white" d="M1206 466c0,1 2,1 4,1 3,0 5,0 5,0 0,-1 -2,-1 -5,-1 -2,0 -4,0 -4,0z"/>
					 <Path fill="white" d="M1220 485c0,0 5,7 5,7l2 0 -3 -7 -4 0z"/>
					 <Path fill="white" d="M1220 484c0,0 5,-6 5,-6l2 0 -3 6 -4 0z"/>
					 <Path fill="white" d="M1216 484c0,1 1,1 3,1 1,0 3,0 4,0l4 0 -11 -1z"/>
					 <Path fill="white" d="M1216 484c0,0 1,0 3,0 1,0 3,0 5,0l3 1 -11 -1z"/>
					</G>
				   </G>
				   <G id="ph4l10b">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1062.69 519.898)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1050,534 1050,532 1053,532 1053,528 1050,528 1050,527 1058,527 1058,528 1055,528 1055,532 1058,532 1058,534 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1058 540l-5 0 0 1 -1 0 0 -1 -2 0 0 -1 2 0 0 -4 1 0c1,0 1,1 1,1 1,0 1,1 2,1 0,0 1,1 1,1 1,0 1,0 1,1l0 1zm-5 -3l0 2 3 0c0,-1 0,-1 -1,-1 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 0,0 -1,0 -1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1050,547 1050,542 1058,542 1058,544 1052,544 1052,547 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1059 552l-9 0 0 -1 7 0c-1,-1 -1,-1 -1,-1 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,0l1 0c0,0 1,1 1,1 0,1 0,1 1,1l0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1050 558c0,-2 1,-3 4,-3 2,0 3,0 3,1 1,0 2,1 2,2 0,2 -2,3 -5,3 -1,0 -2,-1 -3,-1 -1,-1 -1,-1 -1,-2zm7 0c0,-1 -1,-1 -3,-1 -2,0 -3,0 -3,1 0,1 1,1 3,1 2,0 3,0 3,-1z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M1050 562l8 0 0 3c0,1 0,2 0,2 0,1 -1,1 -2,1 0,0 0,0 -1,0 0,-1 0,-1 0,-2l0 0c-1,1 -1,1 -1,2 0,0 -1,0 -1,0 -1,0 -2,0 -2,0 -1,-1 -1,-2 -1,-3l0 -3zm7 2l-2 0 0 1c0,0 0,0 0,1 1,0 1,0 1,0 1,0 1,0 1,-1l0 -1zm-3 0l-3 0 0 1c0,0 1,1 1,1 0,0 0,0 1,0 0,0 0,0 0,0 1,0 1,-1 1,-1l0 -1z"/>
					<G>
					 <Path fill="white" d="M1027 554c-1,-1 -3,-1 -5,-1 -3,0 -6,1 -6,2 0,1 3,2 6,2 2,0 4,0 5,-1l0 -2z"/>
					 <Path fill="white" d="M1026 553c0,0 0,0 0,0l0 4c0,0 0,-1 0,-1l0 -3z"/>
					 <Path fill="white" d="M1027 554c0,-1 0,-1 -1,-1l0 3c1,0 1,0 1,0l0 -2z"/>
					 <Path fill="white" d="M1016 555c0,1 3,2 6,2 2,0 4,0 5,-1l0 -1 -11 0z"/>
					 <Path fill="white" d="M1026 555l0 2c0,0 0,-1 0,-1l0 -1 0 0z"/>
					 <Path fill="white" d="M1026 555l0 1c1,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1035 544c3,0 4,1 5,2l-41 -1c4,-1 8,-2 13,-2l23 1z"/>
					 <Path fill="white" d="M1035 548c3,0 4,-1 5,-2l-41 -1c4,2 8,3 13,3l23 0z"/>
					 <Path fill="white" d="M1037 546c0,-1 -1,-1 -2,-2 2,1 3,1 3,2l-1 0z"/>
					 <Path fill="white" d="M1037 546c0,1 -1,2 -2,2 1,0 3,-1 3,-2l-1 0z"/>
					 <Path fill="white" d="M1016 537c0,1 3,2 7,2 2,0 4,0 5,-1l0 -1 -12 0z"/>
					 <Path fill="white" d="M1026 537l0 2c0,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1027 537l0 2c0,-1 0,-1 1,-1l0 -1 -1 0z"/>
					 <Path fill="white" d="M1016 537c0,-1 3,-2 7,-2 2,0 4,0 5,1l0 1 -12 0z"/>
					 <Path fill="white" d="M1026 537l0 -2c0,0 1,0 1,0l0 2 -1 0z"/>
					 <Path fill="white" d="M1027 537l0 -2c0,0 1,1 1,1l0 1 -1 0z"/>
					 <Path fill="white" d="M1028 544l-12 -16 -4 0 7 15c6,2 9,2 9,1z"/>
					 <Path fill="white" d="M1018 528c0,0 -2,1 -4,1 -2,-1 -4,-1 -4,-1 0,0 2,-1 4,-1 2,0 4,1 4,1z"/>
					 <Path fill="white" d="M1028 548l-12 15 -5 0 8 -15c6,-2 8,-2 9,0z"/>
					 <Path fill="white" d="M1018 563c0,0 -2,0 -5,0 -2,0 -4,0 -4,0 0,1 2,1 4,1 3,0 5,0 5,-1z"/>
					 <Path fill="white" d="M1004 545c0,0 -5,-7 -5,-7l-2 0 3 7 4 0z"/>
					 <Path fill="white" d="M1004 546c0,0 -5,6 -5,6l-3 0 4 -6 4 0z"/>
					 <Path fill="white" d="M1008 546c-1,-1 -1,-1 -3,-1 -1,0 -3,0 -5,0l-4 0 12 1z"/>
					 <Path fill="white" d="M1008 546c-1,0 -1,0 -3,0 -1,0 -3,0 -5,0l-4 -1 12 1z"/>
					</G>
				   </G>
				   <G id="ph4l10a">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1134.17 519.898)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1122,533 1122,531 1125,531 1125,528 1122,528 1122,526 1130,526 1130,528 1127,528 1127,531 1130,531 1130,533 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1130 540l-5 0 0 1 -2 0 0 -1 -1 0 0 -2 1 0 0 -4 2 0c0,1 0,1 1,1 0,1 1,1 1,1 1,1 1,1 2,1 0,1 0,1 1,1l0 2zm-5 -4l0 2 3 0c-1,0 -1,0 -1,0 0,-1 -1,-1 -1,-1 0,0 0,0 -1,0 0,-1 0,-1 0,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1122,547 1122,542 1130,542 1130,544 1123,544 1123,547 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1130 552l-8 0 0 -2 6 0c0,0 0,0 0,0 0,0 0,-1 0,-1 -1,0 -1,0 -1,0 0,0 0,-1 0,-1l2 0c0,1 0,1 0,2 1,0 1,0 1,1l0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1121 557c0,-2 2,-3 5,-3 1,0 2,0 3,1 1,1 1,1 1,2 0,2 -1,3 -4,3 -2,0 -3,0 -3,-1 -1,0 -2,-1 -2,-2zm8 0c0,-1 -1,-1 -3,-1 -2,0 -3,0 -3,1 0,1 1,1 3,1 2,0 3,0 3,-1z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M1122 569l0 -2 1 -1 0 -3 -1 0 0 -2 8 3 0 2 -8 3zm3 -3l3 -1c0,0 0,0 0,0l0 0c0,0 0,0 0,0l-3 -1 0 2z"/>
					<G>
					 <Path fill="white" d="M1099 554c-1,-1 -3,-1 -5,-1 -4,0 -7,1 -7,2 0,1 3,2 7,2 2,0 4,0 5,-1l0 -2z"/>
					 <Path fill="white" d="M1098 553c0,0 0,0 -1,0l0 4c1,0 1,-1 1,-1l0 -3z"/>
					 <Path fill="white" d="M1099 554c0,-1 -1,-1 -1,-1l0 3c0,0 1,0 1,0l0 -2z"/>
					 <Path fill="white" d="M1087 555c0,1 3,2 7,2 2,0 4,0 5,-1l0 -1 -12 0z"/>
					 <Path fill="white" d="M1097 555l0 2c1,0 1,-1 1,-1l0 -1 -1 0z"/>
					 <Path fill="white" d="M1098 555l0 1c0,0 1,0 1,0l0 -1 -1 0z"/>
					 <Path fill="white" d="M1107 544c2,0 4,1 4,2l-41 -1c4,-1 9,-2 13,-2l24 1z"/>
					 <Path fill="white" d="M1107 548c2,0 4,-1 4,-2l-41 -1c4,2 9,3 13,3l24 0z"/>
					 <Path fill="white" d="M1108 546c0,-1 -1,-1 -1,-2 1,1 2,1 3,2l-2 0z"/>
					 <Path fill="white" d="M1108 546c0,1 -1,2 -1,2 1,0 2,-1 3,-2l-2 0z"/>
					 <Path fill="white" d="M1088 537c0,1 3,2 6,2 2,0 4,0 5,-1l0 -1 -11 0z"/>
					 <Path fill="white" d="M1098 537l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill="white" d="M1098 537l0 2c1,-1 1,-1 1,-1l0 -1 -1 0z"/>
					 <Path fill="white" d="M1088 537c0,-1 3,-2 6,-2 2,0 4,0 5,1l0 1 -11 0z"/>
					 <Path fill="white" d="M1098 537l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1098 537l0 -2c1,0 1,1 1,1l0 1 -1 0z"/>
					 <Path fill="white" d="M1100 544l-12 -16 -5 0 8 15c5,2 8,2 9,1z"/>
					 <Path fill="white" d="M1090 528c0,0 -2,1 -5,1 -2,-1 -4,-1 -4,-1 0,0 2,-1 5,-1 2,0 4,1 4,1z"/>
					 <Path fill="white" d="M1100 548l-13 15 -5 0 8 -15c6,-2 9,-2 10,0z"/>
					 <Path fill="white" d="M1089 563c0,0 -2,0 -4,0 -3,0 -5,0 -5,0 0,1 2,1 5,1 2,0 4,0 4,-1z"/>
					 <Path fill="white" d="M1075 545c0,0 -4,-7 -4,-7l-3 0 3 7 4 0z"/>
					 <Path fill="white" d="M1075 546c0,0 -5,6 -5,6l-2 0 3 -6 4 0z"/>
					 <Path fill="white" d="M1079 546c0,-1 -1,-1 -2,-1 -2,0 -4,0 -5,0l-4 0 11 1z"/>
					 <Path fill="white" d="M1079 546c0,0 -1,0 -2,0 -2,0 -4,0 -5,0l-4 -1 11 1z"/>
					</G>
				   </G>
				   <G id="ph4l7b">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1232.42 575.017)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1245,558 1245,560 1242,560 1242,563 1245,563 1245,565 1237,565 1237,563 1240,563 1240,560 1237,560 1237,558 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1237 551l5 0 0 -1 1 0 0 1 2 0 0 2 -2 0 0 4 -1 0c0,-1 -1,-1 -1,-1 -1,-1 -1,-1 -2,-1 0,-1 0,-1 -1,-1 0,-1 -1,-1 -1,-1l0 -2zm5 4l0 -2 -3 0c0,0 1,0 1,0 0,1 0,1 1,1 0,0 0,0 0,0 1,1 1,1 1,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1245,544 1245,549 1237,549 1237,547 1244,547 1244,544 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1238 538c1,0 1,0 2,1 0,0 1,0 1,0 1,1 2,1 2,1 1,0 1,0 2,0l0 2c-1,0 -1,0 -2,0 0,0 -1,-1 -2,-1 0,0 -1,0 -1,-1 -1,0 -1,0 -2,0l0 3 -1 0 0 -5 1 0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1245 536l-8 0 0 -3c0,-1 0,-1 0,-2 1,0 1,-1 2,-1 0,0 1,0 1,1 0,0 0,0 1,1l0 0c0,-1 0,-1 0,-1 1,-1 1,-1 2,-1 0,0 1,0 1,1 1,0 1,1 1,2l0 3zm-7 -2l2 0 0 0c0,-1 0,-1 0,-1 0,-1 -1,-1 -1,-1 -1,0 -1,1 -1,2l0 0zm4 0l2 0 0 -1c0,0 0,0 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,1 0,1 0,1l0 1z"/>
					<G>
					 <Path fill="white" d="M1268 539c1,0 3,0 5,0 3,0 6,0 6,-1 0,-2 -3,-2 -6,-3 -2,0 -4,1 -5,1l0 3z"/>
					 <Path fill="white" d="M1269 539c0,0 0,0 0,0l0 -3c0,0 0,0 0,0l0 3z"/>
					 <Path fill="white" d="M1268 539c0,0 0,0 1,0l0 -3c-1,0 -1,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1279 538c0,-2 -3,-2 -6,-3 -2,0 -4,1 -5,1l0 1 11 1z"/>
					 <Path fill="white" d="M1269 537l0 -1c0,0 0,0 0,0l0 1 0 0z"/>
					 <Path fill="white" d="M1269 537l0 -1c-1,0 -1,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1260 548c-3,0 -4,-1 -4,-2l41 1c-5,1 -9,2 -14,2l-23 -1z"/>
					 <Path fill="white" d="M1260 544c-3,0 -4,1 -4,2l41 1c-5,-2 -9,-2 -14,-3l-23 0z"/>
					 <Path fill="white" d="M1259 546c-1,1 0,2 1,2 -1,0 -2,-1 -3,-2l2 0z"/>
					 <Path fill="white" d="M1259 546c-1,-1 0,-1 1,-2 -1,1 -2,1 -3,2l2 0z"/>
					 <Path fill="white" d="M1279 555c0,-1 -3,-2 -7,-2 -2,0 -3,1 -5,1l0 1 12 0z"/>
					 <Path fill="white" d="M1269 555l0 -1c0,0 0,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1268 555l0 -1c0,0 0,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1279 555c0,2 -3,2 -7,2 -2,0 -4,0 -5,0l0 -2 12 0z"/>
					 <Path fill="white" d="M1269 555l0 2c0,0 -1,0 -1,0l0 -2 1 0z"/>
					 <Path fill="white" d="M1268 555l0 2c0,0 0,0 -1,0l0 -2 1 0z"/>
					 <Path fill="white" d="M1267 548l12 16 5 0 -8 -15c-6,-2 -8,-2 -9,-1z"/>
					 <Path fill="white" d="M1277 564c0,0 2,0 4,0 3,0 4,0 4,0 0,1 -1,1 -4,1 -2,0 -4,-1 -4,-1z"/>
					 <Path fill="white" d="M1267 545l12 -16 5 0 -8 15c-5,2 -8,2 -9,1z"/>
					 <Path fill="white" d="M1277 529c0,0 2,0 5,0 2,0 4,0 4,0 0,0 -2,-1 -4,-1 -3,0 -5,0 -5,1z"/>
					 <Path fill="white" d="M1291 548c0,-1 5,6 5,6l2 0 -3 -7 -4 1z"/>
					 <Path fill="white" d="M1291 546c0,0 5,-6 5,-6l3 0 -4 6 -4 0z"/>
					 <Path fill="white" d="M1287 547c1,0 2,0 3,0 2,0 3,1 5,0l4 0 -12 0z"/>
					 <Path fill="white" d="M1287 547c1,-1 2,-1 3,-1 2,0 3,0 5,0l4 1 -12 0z"/>
					</G>
				   </G>
				   <G id="ph4l7a">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1160.94 575.017)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1174,558 1174,560 1170,560 1170,564 1174,564 1174,565 1165,565 1165,564 1169,564 1169,560 1165,560 1165,558 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1165 552l6 0 0 -1 1 0 0 1 2 0 0 2 -2 0 0 3 -2 0c0,0 0,-1 -1,-1 0,0 -1,-1 -1,-1 0,0 -1,0 -1,-1 -1,0 -1,0 -2,0l0 -2zm6 3l0 -1 -3 0c0,0 0,0 0,0 1,0 1,0 1,0 0,1 1,1 1,1 0,0 0,0 1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1174,545 1174,550 1165,550 1165,548 1172,548 1172,545 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1166 538c1,1 2,1 2,1 1,0 1,1 2,1 1,0 1,0 2,1 0,0 1,0 2,0l0 2c-1,0 -2,0 -2,-1 -1,0 -1,0 -2,0 -1,0 -1,-1 -2,-1 0,0 -1,-1 -1,-1l0 4 -2 0 0 -6 1 0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1174 529l0 3 -2 0 0 3 2 1 0 2 -9 -3 0 -3 9 -3zm-4 4l-2 0c-1,0 -1,1 -1,1l0 0c0,0 0,0 1,0l2 1 0 -2z"/>
					<G>
					 <Path fill="white" d="M1196 539c1,0 3,0 5,0 4,0 7,0 7,-1 0,-2 -3,-2 -7,-3 -2,0 -4,1 -5,1l0 3z"/>
					 <Path fill="white" d="M1197 539c0,0 1,0 1,0l0 -3c0,0 -1,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1196 539c0,0 1,0 1,0l0 -3c0,0 0,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1208 538c0,-2 -3,-2 -7,-3 -2,0 -4,1 -5,1l0 1 12 1z"/>
					 <Path fill="white" d="M1198 537l0 -1c0,0 -1,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1197 537l0 -1c0,0 0,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1188 548c-2,0 -4,-1 -4,-2l41 1c-4,1 -9,2 -13,2l-24 -1z"/>
					 <Path fill="white" d="M1188 544c-2,0 -4,1 -4,2l41 1c-4,-2 -8,-2 -13,-3l-24 0z"/>
					 <Path fill="white" d="M1187 546c0,1 1,2 1,2 -1,0 -2,-1 -2,-2l1 0z"/>
					 <Path fill="white" d="M1187 546c0,-1 1,-1 1,-2 -1,1 -2,1 -2,2l1 0z"/>
					 <Path fill="white" d="M1208 555c0,-1 -3,-2 -7,-2 -2,0 -4,1 -5,1l0 1 12 0z"/>
					 <Path fill="white" d="M1197 555l0 -1c0,0 0,0 0,0l0 1 0 0z"/>
					 <Path fill="white" d="M1197 555l0 -1c0,0 -1,0 -1,0l0 1 1 0z"/>
					 <Path fill="white" d="M1208 555c0,2 -3,2 -7,2 -2,0 -4,0 -5,0l0 -2 12 0z"/>
					 <Path fill="white" d="M1197 555l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill="white" d="M1197 555l0 2c-1,0 -1,0 -1,0l0 -2 1 0z"/>
					 <Path fill="white" d="M1195 548l12 16 5 0 -7 -15c-6,-2 -9,-2 -10,-1z"/>
					 <Path fill="white" d="M1205 564c0,0 2,0 5,0 2,0 4,0 4,0 0,1 -2,1 -4,1 -3,0 -5,-1 -5,-1z"/>
					 <Path fill="white" d="M1195 545l13 -16 5 0 -8 15c-6,2 -9,2 -10,1z"/>
					 <Path fill="white" d="M1206 529c0,0 2,0 4,0 3,0 5,0 5,0 0,0 -2,-1 -5,-1 -2,0 -4,0 -4,1z"/>
					 <Path fill="white" d="M1220 548c0,-1 5,6 5,6l2 0 -3 -7 -4 1z"/>
					 <Path fill="white" d="M1220 546c0,0 5,-6 5,-6l2 0 -3 6 -4 0z"/>
					 <Path fill="white" d="M1216 547c0,0 1,0 3,0 1,0 3,1 4,0l4 0 -11 0z"/>
					 <Path fill="white" d="M1216 547c0,-1 1,-1 3,-1 1,0 3,0 5,0l3 1 -11 0z"/>
					</G>
				   </G>
				   <G id="ph4l9b">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1062.69 582.243)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1050,596 1050,594 1053,594 1053,591 1050,591 1050,589 1058,589 1058,591 1055,591 1055,594 1058,594 1058,596 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1058 603l-5 0 0 1 -1 0 0 -1 -2 0 0 -2 2 0 0 -4 1 0c1,1 1,1 1,1 1,1 1,1 2,1 0,1 1,1 1,1 1,0 1,1 1,1l0 2zm-5 -4l0 2 3 0c0,0 0,0 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -1,-1 0,0 -1,0 -1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1050,610 1050,605 1058,605 1058,607 1052,607 1052,610 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1055 616c-1,0 -2,0 -2,0 -1,0 -1,0 -2,-1 0,0 -1,0 -1,-1 0,0 0,-1 0,-1 0,-1 0,-2 0,-2l2 0c0,0 -1,1 -1,1 0,1 1,2 1,2 0,0 1,0 2,0l0 0c-1,0 -1,-1 -1,-1 0,-1 0,-1 0,-1 0,-1 1,-1 1,-1 0,0 0,0 1,0 0,-1 0,-1 1,-1 0,0 0,0 1,1 0,0 0,0 1,0 0,0 0,1 0,1 0,0 1,1 1,1 0,1 -1,1 -1,1 0,1 0,1 -1,1 0,1 0,1 -1,1 0,0 -1,0 -1,0zm1 -2c0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,1 -1,1 0,0 0,0 0,0 0,0 0,1 1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1050 618l8 0 0 3c0,1 0,1 0,2 0,0 -1,1 -2,1 0,0 0,-1 -1,-1 0,0 0,-1 0,-1l0 0c-1,1 -1,1 -1,1 0,1 -1,1 -1,1 -1,0 -2,0 -2,-1 -1,0 -1,-1 -1,-2l0 -3zm7 2l-2 0 0 0c0,1 0,1 0,1 1,0 1,1 1,1 1,0 1,-1 1,-2l0 0zm-3 0l-3 0 0 1c0,0 1,0 1,1 0,0 0,0 1,0 0,0 0,0 0,0 1,-1 1,-1 1,-1l0 -1z"/>
					<G>
					 <Path fill="white" d="M1027 616c-1,0 -3,-1 -5,-1 -3,0 -6,1 -6,2 0,1 3,2 6,2 2,0 4,0 5,0l0 -3z"/>
					 <Path fill="white" d="M1026 616c0,0 0,0 0,0l0 3c0,0 0,0 0,0l0 -3z"/>
					 <Path fill="white" d="M1027 616c0,0 0,0 -1,0l0 3c1,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1016 617c0,1 3,2 6,2 2,0 4,0 5,0l0 -2 -11 0z"/>
					 <Path fill="white" d="M1026 617l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill="white" d="M1026 617l0 2c1,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1035 606c3,0 4,1 5,3l-41 -1c4,-2 8,-2 13,-2l23 0z"/>
					 <Path fill="white" d="M1035 611c3,0 4,-1 5,-2l-41 -1c4,1 8,2 13,2l23 1z"/>
					 <Path fill="white" d="M1037 608c0,0 -1,-1 -2,-1 2,0 3,0 3,2l-1 -1z"/>
					 <Path fill="white" d="M1037 608c0,1 -1,2 -2,2 1,0 3,0 3,-1l-1 -1z"/>
					 <Path fill="white" d="M1016 599c0,1 3,2 7,2 2,0 4,0 5,0l0 -2 -12 0z"/>
					 <Path fill="white" d="M1026 599l0 2c0,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1027 599l0 2c0,0 0,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1016 599c0,-1 3,-2 7,-2 2,0 4,1 5,1l0 1 -12 0z"/>
					 <Path fill="white" d="M1026 599l0 -1c0,0 1,0 1,0l0 1 -1 0z"/>
					 <Path fill="white" d="M1027 599l0 -1c0,0 1,0 1,0l0 1 -1 0z"/>
					 <Path fill="white" d="M1028 607l-12 -16 -4 -1 7 16c6,2 9,2 9,1z"/>
					 <Path fill="white" d="M1018 590c0,1 -2,1 -4,1 -2,0 -4,0 -4,-1 0,0 2,0 4,0 2,0 4,0 4,0z"/>
					 <Path fill="white" d="M1028 610l-12 15 -5 0 8 -15c6,-1 8,-1 9,0z"/>
					 <Path fill="white" d="M1018 626c0,-1 -2,-1 -5,-1 -2,0 -4,0 -4,1 0,0 2,0 4,0 3,0 5,0 5,0z"/>
					 <Path fill="white" d="M1004 607c0,0 -5,-6 -5,-6l-2 0 3 6 4 0z"/>
					 <Path fill="white" d="M1004 609c0,0 -5,6 -5,6l-3 0 4 -7 4 1z"/>
					 <Path fill="white" d="M1008 608c-1,-1 -1,-1 -3,-1 -1,0 -3,0 -5,0l-4 1 12 0z"/>
					 <Path fill="white" d="M1008 608c-1,0 -1,1 -3,1 -1,-1 -3,-1 -5,-1l-4 0 12 0z"/>
					</G>
				   </G>
				   <G id="ph4l9a">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 1134.17 582.243)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1122,596 1122,594 1125,594 1125,590 1122,590 1122,588 1130,588 1130,590 1127,590 1127,594 1130,594 1130,596 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1130 602l-5 0 0 1 -2 0 0 -1 -1 0 0 -2 1 0 0 -3 2 0c0,0 0,0 1,1 0,0 1,0 1,1 1,0 1,0 2,1 0,0 0,0 1,0l0 2zm-5 -4l0 2 3 0c-1,0 -1,0 -1,0 0,0 -1,0 -1,-1 0,0 0,0 -1,0 0,0 0,0 0,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1122,609 1122,604 1130,604 1130,606 1123,606 1123,609 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1126 616c-1,0 -1,0 -2,-1 0,0 -1,0 -1,0 -1,-1 -1,-1 -1,-1 0,-1 -1,-1 -1,-2 0,-1 1,-1 1,-2l1 0c0,1 0,1 0,2 0,0 0,1 0,1 1,1 2,1 2,1l0 0c0,-1 0,-1 0,-2 0,0 0,0 0,-1 0,0 0,0 0,-1 0,0 1,0 1,0 0,0 1,0 1,0 1,0 1,0 1,0 1,0 1,0 1,1 0,0 1,0 1,1 0,0 0,0 0,1 0,0 0,1 0,1 0,0 -1,1 -1,1 0,0 -1,0 -1,0 -1,1 -1,1 -2,1zm1 -2c0,0 1,0 1,0 0,0 0,0 0,-1 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,-1 0,-1 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,1 0,0 0,0 1,0 0,0 0,0 0,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1122 624l0 -2 1 0 0 -3 -1 -1 0 -2 8 3 0 2 -8 3zm3 -3l3 -1c0,0 0,0 0,0l0 0c0,0 0,0 0,0l-3 -1 0 2z"/>
					<G>
					 <Path fill="white" d="M1099 616c-1,0 -3,-1 -5,-1 -4,0 -7,1 -7,2 0,1 3,2 7,2 2,0 4,0 5,0l0 -3z"/>
					 <Path fill="white" d="M1098 616c0,0 0,0 -1,0l0 3c1,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1099 616c0,0 -1,0 -1,0l0 3c0,0 1,0 1,0l0 -3z"/>
					 <Path fill="white" d="M1087 617c0,1 3,2 7,2 2,0 4,0 5,0l0 -2 -12 0z"/>
					 <Path fill="white" d="M1097 617l0 2c1,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1098 617l0 2c0,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1107 606c2,0 4,1 4,3l-41 -1c4,-2 9,-2 13,-2l24 0z"/>
					 <Path fill="white" d="M1107 611c2,0 4,-1 4,-2l-41 -1c4,1 9,2 13,2l24 1z"/>
					 <Path fill="white" d="M1108 608c0,0 -1,-1 -1,-1 1,0 2,0 3,2l-2 -1z"/>
					 <Path fill="white" d="M1108 608c0,1 -1,2 -1,2 1,0 2,0 3,-1l-2 -1z"/>
					 <Path fill="white" d="M1088 599c0,1 3,2 6,2 2,0 4,0 5,0l0 -2 -11 0z"/>
					 <Path fill="white" d="M1098 599l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill="white" d="M1098 599l0 2c1,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="white" d="M1088 599c0,-1 3,-2 6,-2 2,0 4,1 5,1l0 1 -11 0z"/>
					 <Path fill="white" d="M1098 599l0 -1c0,0 0,0 0,0l0 1 0 0z"/>
					 <Path fill="white" d="M1098 599l0 -1c1,0 1,0 1,0l0 1 -1 0z"/>
					 <Path fill="white" d="M1100 607l-12 -16 -5 -1 8 16c5,2 8,2 9,1z"/>
					 <Path fill="white" d="M1090 590c0,1 -2,1 -5,1 -2,0 -4,0 -4,-1 0,0 2,0 5,0 2,0 4,0 4,0z"/>
					 <Path fill="white" d="M1100 610l-13 15 -5 0 8 -15c6,-1 9,-1 10,0z"/>
					 <Path fill="white" d="M1089 626c0,-1 -2,-1 -4,-1 -3,0 -5,0 -5,1 0,0 2,0 5,0 2,0 4,0 4,0z"/>
					 <Path fill="white" d="M1075 607c0,0 -4,-6 -4,-6l-3 0 3 6 4 0z"/>
					 <Path fill="white" d="M1075 609c0,0 -5,6 -5,6l-2 0 3 -7 4 1z"/>
					 <Path fill="white" d="M1079 608c0,-1 -1,-1 -2,-1 -2,0 -4,0 -5,0l-4 1 11 0z"/>
					 <Path fill="white" d="M1079 608c0,0 -1,1 -2,1 -2,-1 -4,-1 -5,-1l-4 0 11 0z"/>
					</G>
				   </G>
				   <G id="ph4l8b">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1232.42 637.362)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1245,620 1245,622 1242,622 1242,625 1245,625 1245,627 1237,627 1237,625 1240,625 1240,622 1237,622 1237,620 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1237 614l5 0 0 -1 1 0 0 1 2 0 0 1 -2 0 0 4 -1 0c0,0 -1,-1 -1,-1 -1,0 -1,-1 -2,-1 0,0 0,-1 -1,-1 0,0 -1,0 -1,-1l0 -1zm5 3l0 -2 -3 0c0,0 1,1 1,1 0,0 0,0 1,0 0,0 0,1 0,1 1,0 1,0 1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1245,606 1245,611 1237,611 1237,610 1244,610 1244,606 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1243 606c0,0 -1,0 -1,0 0,0 0,0 0,-1 -1,0 -1,0 -1,0 0,0 0,-1 0,-1 0,1 -1,1 -1,1 0,0 -1,1 -1,1 0,0 -1,-1 -1,-1 0,0 -1,0 -1,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,0 1,0 1,-1 0,0 1,0 1,0 0,0 1,0 1,1 0,0 0,0 1,1 0,-1 0,-1 0,-1 0,0 0,0 1,-1 0,0 0,0 0,0 0,0 1,0 1,0 0,0 1,0 1,0 0,0 0,1 1,1 0,0 0,0 0,1 0,0 0,0 0,1 0,0 0,1 0,1 0,0 0,1 0,1 -1,0 -1,0 -1,1 0,0 -1,0 -1,0zm0 -2c0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 -1,1 -1,1 0,0 0,0 1,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 1,0 1,0zm-4 0c0,0 0,0 0,0 1,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 1,0 0,0 0,0 0,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1245 599l-8 0 0 -3c0,-1 0,-2 0,-3 1,0 1,0 2,0 0,0 1,0 1,0 0,0 0,1 1,1l0 0c0,0 0,-1 0,-1 1,0 1,-1 2,-1 0,0 1,1 1,1 1,1 1,1 1,2l0 4zm-7 -2l2 0 0 -1c0,-1 0,-1 0,-1 0,0 -1,0 -1,0 -1,0 -1,0 -1,1l0 1zm4 0l2 0 0 -1c0,-1 0,-1 -1,-1 0,-1 0,-1 0,-1 -1,0 -1,0 -1,1 0,0 0,0 0,1l0 1z"/>
					<G>
					 <Path fill="white" d="M1268 601c1,0 3,1 5,1 3,0 6,-1 6,-2 0,-1 -3,-2 -6,-2 -2,0 -4,0 -5,0l0 3z"/>
					 <Path fill="white" d="M1269 601c0,0 0,0 0,0l0 -3c0,0 0,0 0,0l0 3z"/>
					 <Path fill="white" d="M1268 601c0,0 0,0 1,0l0 -3c-1,0 -1,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1279 600c0,-1 -3,-2 -6,-2 -2,0 -4,0 -5,0l0 2 11 0z"/>
					 <Path fill="white" d="M1269 600l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1269 600l0 -2c-1,0 -1,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1260 611c-3,-1 -4,-1 -4,-3l41 1c-5,1 -9,2 -14,2l-23 0z"/>
					 <Path fill="white" d="M1260 606c-3,0 -4,1 -4,2l41 1c-5,-1 -9,-2 -14,-2l-23 -1z"/>
					 <Path fill="white" d="M1259 608c-1,1 0,2 1,2 -1,0 -2,0 -3,-2l2 0z"/>
					 <Path fill="white" d="M1259 608c-1,-1 0,-1 1,-1 -1,0 -2,0 -3,1l2 0z"/>
					 <Path fill="white" d="M1279 618c0,-1 -3,-2 -7,-2 -2,0 -3,0 -5,0l0 2 12 0z"/>
					 <Path fill="white" d="M1269 618l0 -2c0,0 0,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1268 618l0 -2c0,0 0,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1279 618c0,1 -3,2 -7,2 -2,0 -4,-1 -5,-1l0 -1 12 0z"/>
					 <Path fill="white" d="M1269 618l0 1c0,0 -1,0 -1,0l0 -1 1 0z"/>
					 <Path fill="white" d="M1268 618l0 1c0,0 0,0 -1,0l0 -1 1 0z"/>
					 <Path fill="white" d="M1267 610l12 16 5 0 -8 -15c-6,-2 -8,-2 -9,-1z"/>
					 <Path fill="white" d="M1277 627c0,-1 2,-1 4,-1 3,0 4,0 4,1 0,0 -1,0 -4,0 -2,0 -4,0 -4,0z"/>
					 <Path fill="white" d="M1267 607l12 -15 5 0 -8 15c-5,1 -8,1 -9,0z"/>
					 <Path fill="white" d="M1277 591c0,0 2,1 5,1 2,0 4,0 4,-1 0,0 -2,0 -4,0 -3,0 -5,0 -5,0z"/>
					 <Path fill="white" d="M1291 610c0,0 5,6 5,6l2 0 -3 -6 -4 0z"/>
					 <Path fill="white" d="M1291 608c0,0 5,-6 5,-6l3 0 -4 7 -4 -1z"/>
					 <Path fill="white" d="M1287 609c1,0 2,1 3,1 2,0 3,0 5,0l4 -1 -12 0z"/>
					 <Path fill="white" d="M1287 609c1,0 2,-1 3,-1 2,0 3,0 5,1l4 0 -12 0z"/>
					</G>
				   </G>
				   <G id="ph4l8a">
					<Rect fill="#40B984" transform="matrix(4.64533E-014 -1.75398 1.75398 4.64533E-014 1160.94 637.362)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Polygon fill="white" fill-rule="nonzero" points="1174,621 1174,622 1170,622 1170,626 1174,626 1174,628 1165,628 1165,626 1169,626 1169,622 1165,622 1165,621 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M1165 614l6 0 0 -1 1 0 0 1 2 0 0 2 -2 0 0 3 -2 0c0,0 0,0 -1,-1 0,0 -1,0 -1,-1 0,0 -1,0 -1,0 -1,-1 -1,-1 -2,-1l0 -2zm6 4l0 -2 -3 0c0,0 0,0 0,0 1,0 1,1 1,1 0,0 1,0 1,0 0,0 0,1 1,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="1174,607 1174,612 1165,612 1165,610 1172,610 1172,607 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M1171 606c0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,-1 -1,0 -1,0 -1,0 0,0 0,0 -1,1 0,0 0,0 -1,0 0,0 0,0 -1,0 0,0 0,0 0,-1 0,0 -1,0 -1,-1 0,0 0,0 0,-1 0,0 0,0 0,-1 0,0 1,0 1,-1 0,0 0,0 0,0 1,0 1,0 1,0 1,0 1,0 1,0 1,0 1,1 1,1 0,0 0,0 1,-1 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,-1 0,-1 1,0 1,1 1,1 1,0 1,0 1,0 0,1 0,1 1,1 0,1 0,1 0,1 0,1 0,1 0,2 -1,0 -1,0 -1,1 0,0 0,0 -1,0 0,0 0,0 -1,0zm0 -1c0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 1,0 1,1 0,0 0,0 0,0zm-3 -1c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,1 1,1 1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M1174 592l0 2 -2 0 0 3 2 1 0 2 -9 -3 0 -2 9 -3zm-4 3l-2 1c-1,0 -1,0 -1,0l0 0c0,0 0,0 1,0l2 1 0 -2z"/>
					<G>
					 <Path fill="white" d="M1196 601c1,0 3,1 5,1 4,0 7,-1 7,-2 0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,0l0 3z"/>
					 <Path fill="white" d="M1197 601c0,0 1,0 1,0l0 -3c0,0 -1,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1196 601c0,0 1,0 1,0l0 -3c0,0 0,0 -1,0l0 3z"/>
					 <Path fill="white" d="M1208 600c0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,0l0 2 12 0z"/>
					 <Path fill="white" d="M1198 600l0 -2c0,0 -1,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1197 600l0 -2c0,0 0,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1188 611c-2,-1 -4,-1 -4,-3l41 1c-4,1 -9,2 -13,2l-24 0z"/>
					 <Path fill="white" d="M1188 606c-2,0 -4,1 -4,2l41 1c-4,-1 -8,-2 -13,-2l-24 -1z"/>
					 <Path fill="white" d="M1187 608c0,1 1,2 1,2 -1,0 -2,0 -2,-2l1 0z"/>
					 <Path fill="white" d="M1187 608c0,-1 1,-1 1,-1 -1,0 -2,0 -2,1l1 0z"/>
					 <Path fill="white" d="M1208 618c0,-1 -3,-2 -7,-2 -2,0 -4,0 -5,0l0 2 12 0z"/>
					 <Path fill="white" d="M1197 618l0 -2c0,0 0,0 0,0l0 2 0 0z"/>
					 <Path fill="white" d="M1197 618l0 -2c0,0 -1,0 -1,0l0 2 1 0z"/>
					 <Path fill="white" d="M1208 618c0,1 -3,2 -7,2 -2,0 -4,-1 -5,-1l0 -1 12 0z"/>
					 <Path fill="white" d="M1197 618l0 1c0,0 0,0 0,0l0 -1 0 0z"/>
					 <Path fill="white" d="M1197 618l0 1c-1,0 -1,0 -1,0l0 -1 1 0z"/>
					 <Path fill="white" d="M1195 610l12 16 5 0 -7 -15c-6,-2 -9,-2 -10,-1z"/>
					 <Path fill="white" d="M1205 627c0,-1 2,-1 5,-1 2,0 4,0 4,1 0,0 -2,0 -4,0 -3,0 -5,0 -5,0z"/>
					 <Path fill="white" d="M1195 607l13 -15 5 0 -8 15c-6,1 -9,1 -10,0z"/>
					 <Path fill="white" d="M1206 591c0,0 2,1 4,1 3,0 5,0 5,-1 0,0 -2,0 -5,0 -2,0 -4,0 -4,0z"/>
					 <Path fill="white" d="M1220 610c0,0 5,6 5,6l2 0 -3 -6 -4 0z"/>
					 <Path fill="white" d="M1220 608c0,0 5,-6 5,-6l2 0 -3 7 -4 -1z"/>
					 <Path fill="white" d="M1216 609c0,0 1,1 3,1 1,0 3,0 4,0l4 -1 -11 0z"/>
					 <Path fill="white" d="M1216 609c0,0 1,-1 3,-1 1,0 3,0 5,1l3 0 -11 0z"/>
					</G>
				   </G>
				  </G>
				  <G id="all_p3_top">
				   <G id="p3">
					<Path fill="white" stroke="white" stroke-width="0.561699" d="M348 78l464 0c1,0 2,1 2,2l0 152c0,1 -1,2 -2,2l-464 0c-2,0 -3,-1 -3,-2l0 -152c0,-1 1,-2 3,-2z"/>
					<Path fill="#1A3560" d="M349 79l462 0c1,0 2,1 2,2l0 150c0,1 -1,2 -2,2l-462 0c-1,0 -2,-1 -2,-2l0 -150c0,-1 1,-2 2,-2z"/>
				   </G>
				   <G id="pp3l1">
					<Rect fill="#40B984" x="377" y="123" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M393 133l0 3 -2 0 0 -9 3 0c2,0 3,1 3,3 0,1 0,1 -1,2 0,0 -1,1 -2,1l-1 0zm0 -4l0 2 1 0c1,0 1,0 1,-1 0,-1 0,-1 -1,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M398 135l0 -1c1,0 1,0 2,0 1,0 1,0 1,0 0,0 1,0 1,-1 0,0 -1,0 -1,-1 0,0 -1,0 -1,0l-1 0 0 -1 1 0c1,0 1,-1 1,-1 0,-1 0,-1 -1,-1 0,0 -1,0 -1,0l0 -1c0,-1 1,-1 2,-1 0,0 1,0 2,1 0,0 0,1 0,1 0,1 0,2 -1,2l0 0c0,0 1,1 1,1 0,0 0,1 0,1 0,1 0,2 0,2 -1,1 -2,1 -3,1 -1,0 -1,0 -2,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="410,136 405,136 405,127 407,127 407,134 410,134 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M415 127l0 9 -2 0 0 -7c0,0 0,0 0,0 0,1 0,1 0,1 -1,0 -1,0 -1,0 0,0 0,0 0,0l0 -2c0,0 1,0 1,0 0,0 1,-1 1,-1l1 0z"/>
					<G>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M416 164c-1,2 -1,4 -2,7 0,6 2,10 3,10 2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-3 0z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M415 165c0,1 0,1 0,1l5 0c0,0 0,0 0,0l-5 -1z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M416 164c-1,0 -1,1 -1,1l5 1c0,-1 -1,-2 -1,-2l-3 0z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M417 181c2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M417 166l3 0c0,0 0,0 0,0l-3 0 0 0z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M417 166l3 0c0,-1 -1,-2 -1,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M401 152c1,-3 2,-5 4,-6l-1 60c-2,-6 -3,-13 -3,-19l0 -35z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M408 153c0,-4 -1,-6 -3,-7l-1 60c2,-6 3,-13 3,-19l1 -34z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M405 151c-2,0 -3,1 -3,2 1,-2 1,-4 3,-4l0 2z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M405 151c1,0 2,1 2,2 0,-2 -1,-4 -2,-4l0 2z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M391 180c2,0 3,-4 3,-9 0,-3 0,-6 -1,-8l-1 0 -1 17z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M392 166l2 0c0,-1 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M392 165l2 0c0,-1 0,-1 -1,-2l-1 0 0 2z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M391 180c-1,0 -2,-4 -2,-9 0,-3 0,-6 1,-8l2 0 -1 17z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M392 166l-3 0c0,-1 0,-1 0,-1l3 0 0 1z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M392 165l-3 0c0,-1 1,-1 1,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M402 163l-23 17 0 7 22 -11c3,-8 3,-12 1,-13z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M379 177c0,0 0,3 0,6 0,4 0,7 -1,7 0,0 0,-3 0,-7 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M407 163l22 18 0 7 -21 -12c-3,-8 -3,-12 -1,-13z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M430 178c-1,0 -1,3 -1,6 0,4 0,7 1,7 0,0 0,-3 0,-7 1,-3 0,-6 0,-6z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M403 198c0,0 -10,7 -10,7l0 3 10 -4 0 -6z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M405 198c0,0 9,7 9,7l0 4 -10 -5 1 -6z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M404 192c-1,1 -1,2 -1,4 0,2 0,5 0,7l1 6 0 -17z"/>
					 <Path fill={this.getColor("P3","LINE 1","Slot 1")} d="M404 192c0,1 1,2 1,4 0,2 0,5 -1,7l0 6 0 -17z"/>
					</G>
				   </G>
				   <G id="pp3l2">
					<Rect fill="#40B984" x="448" y="123" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M464 133l0 3 -2 0 0 -9 3 0c2,0 3,1 3,3 0,1 0,1 -1,2 0,0 -1,1 -2,1l-1 0zm0 -4l0 2 1 0c1,0 1,0 1,-1 0,-1 0,-1 -1,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M469 135l0 -1c1,0 1,0 2,0 1,0 1,0 1,0 0,0 1,0 1,-1 0,0 -1,0 -1,-1 0,0 -1,0 -1,0l-1 0 0 -1 1 0c1,0 1,-1 1,-1 0,-1 0,-1 -1,-1 0,0 -1,0 -2,0l0 -1c1,-1 2,-1 3,-1 0,0 1,0 1,1 1,0 1,1 1,1 0,1 0,2 -1,2l0 0c0,0 1,1 1,1 0,0 0,1 0,1 0,1 0,2 0,2 -1,1 -2,1 -3,1 -1,0 -1,0 -2,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="481,136 476,136 476,127 478,127 478,134 481,134 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M484 134l3 0 0 2 -5 0 0 -1c0,0 0,-1 0,-1 0,0 0,-1 1,-1 0,0 0,-1 0,-1 1,0 1,0 1,0 0,-1 0,-1 1,-1 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 -1,0 0,0 -1,0 -2,0l0 -1c1,-1 2,-1 3,-1 0,0 0,0 1,0 0,0 0,1 1,1 0,0 0,0 0,1 0,0 0,0 0,1 0,0 0,0 0,1 0,0 0,0 0,0 0,1 -1,1 -1,1 0,0 0,0 -1,1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,1 0,1 0,1 0,0 0,0 0,0z"/>
					<G>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M487 164c-1,2 -1,4 -2,7 0,6 1,10 3,10 2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-3 0z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M486 165c0,1 0,1 0,1l5 0c0,0 0,0 0,0l-5 -1z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M487 164c-1,0 -1,1 -1,1l5 1c0,-1 -1,-2 -1,-2l-3 0z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M488 181c2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M488 166l3 0c0,0 0,0 0,0l-3 0 0 0z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M488 166l3 0c0,-1 -1,-2 -1,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M472 152c1,-3 2,-5 4,-6l-1 60c-2,-6 -3,-13 -3,-19l0 -35z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M479 153c0,-4 -1,-6 -3,-7l-1 60c2,-6 3,-13 3,-19l1 -34z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M476 151c-2,0 -3,1 -3,2 1,-2 1,-4 3,-4l0 2z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M476 151c1,0 2,1 2,2 0,-2 -1,-4 -2,-4l0 2z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M462 180c2,0 3,-4 3,-9 0,-3 0,-6 -1,-8l-1 0 -1 17z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M463 166l2 0c0,-1 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M463 165l2 0c0,-1 0,-1 -1,-2l-1 0 0 2z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M462 180c-1,0 -3,-4 -2,-9 0,-3 0,-6 1,-8l2 0 -1 17z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M463 166l-3 0c0,-1 0,-1 0,-1l3 0 0 1z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M463 165l-3 0c0,-1 1,-1 1,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M473 163l-23 17 0 7 22 -11c3,-8 3,-12 1,-13z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M450 177c0,0 0,3 0,6 0,4 0,7 -1,7 0,0 0,-3 0,-7 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M478 163l22 18 0 7 -21 -12c-3,-8 -3,-12 -1,-13z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M501 178c-1,0 -1,3 -1,6 0,4 0,7 0,7 1,0 1,-3 1,-7 1,-3 0,-6 0,-6z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M474 198c0,0 -10,7 -10,7l0 3 10 -4 0 -6z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M476 198c0,0 9,7 9,7l0 4 -10 -5 1 -6z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M475 192c-1,1 -1,2 -1,4 0,2 0,5 0,7l1 6 0 -17z"/>
					 <Path fill={this.getColor("P3","LINE 2","Slot 1")} d="M475 192c0,1 1,2 1,4 0,2 0,5 -1,7l0 6 0 -17z"/>
					</G>
				   </G>
				   <G id="pp3l3">
					<Rect fill="#40B984" x="518" y="123" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M535 133l0 3 -2 0 0 -9 3 0c2,0 3,1 3,3 0,1 0,1 -1,2 0,0 -1,1 -2,1l-1 0zm0 -4l0 2 1 0c1,0 1,0 1,-1 0,-1 0,-1 -1,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M540 135l0 -1c1,0 1,0 2,0 1,0 1,0 1,0 0,0 1,0 1,-1 0,0 -1,0 -1,-1 0,0 -1,0 -1,0l-1 0 0 -1 1 0c1,0 1,-1 1,-1 0,-1 0,-1 -1,-1 0,0 -1,0 -2,0l0 -1c1,-1 2,-1 2,-1 1,0 2,0 2,1 1,0 1,1 1,1 0,1 0,2 -1,2l0 0c0,0 1,1 1,1 0,0 0,1 0,1 0,1 0,2 0,2 -1,1 -2,1 -3,1 -1,0 -1,0 -2,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="552,136 547,136 547,127 549,127 549,134 552,134 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M553 135l0 -1c1,0 1,0 2,0 0,0 1,0 1,0 0,0 0,0 0,-1 0,0 0,0 0,-1 0,0 -1,0 -1,0l-1 0 0 -1 1 0c1,0 1,-1 1,-1 0,-1 0,-1 -1,-1 -1,0 -1,0 -2,0l0 -1c1,-1 2,-1 2,-1 1,0 2,0 2,1 1,0 1,1 1,1 0,1 -1,2 -2,2l0 0c1,0 1,1 2,1 0,0 0,1 0,1 0,1 0,2 -1,2 0,1 -1,1 -2,1 -1,0 -1,0 -2,-1z"/>
					<G>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M558 164c-1,2 -2,4 -2,7 0,6 1,10 3,10 2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-3 0z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M557 165c0,1 0,1 0,1l5 0c0,0 0,0 0,0l-5 -1z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M558 164c-1,0 -1,1 -1,1l5 1c0,-1 -1,-2 -1,-2l-3 0z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M559 181c2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M559 166l3 0c0,0 0,0 0,0l-3 0 0 0z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M559 166l3 0c0,-1 -1,-2 -1,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M543 152c1,-3 2,-5 4,-6l-1 60c-2,-6 -3,-13 -3,-19l0 -35z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M550 153c0,-4 -1,-6 -3,-7l-1 60c2,-6 3,-13 3,-19l1 -34z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M547 151c-2,0 -3,1 -3,2 1,-2 1,-4 3,-4l0 2z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M547 151c1,0 2,1 2,2 0,-2 -1,-4 -2,-4l0 2z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M533 180c2,0 3,-4 3,-9 0,-3 0,-6 -1,-8l-1 0 -1 17z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M534 166l2 0c0,-1 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M534 165l2 0c0,-1 0,-1 -1,-2l-1 0 0 2z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M533 180c-1,0 -3,-4 -2,-9 0,-3 0,-6 1,-8l2 0 -1 17z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M534 166l-3 0c0,-1 0,-1 0,-1l3 0 0 1z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M534 165l-3 0c0,-1 1,-1 1,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M544 163l-23 17 0 7 22 -11c3,-8 3,-12 1,-13z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M521 177c0,0 0,3 0,6 0,4 0,7 -1,7 0,0 0,-3 0,-7 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M549 163l22 18 0 7 -21 -12c-3,-8 -3,-12 -1,-13z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M572 178c-1,0 -1,3 -1,6 0,4 0,7 0,7 1,0 1,-3 1,-7 0,-3 0,-6 0,-6z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M545 198c0,0 -10,7 -10,7l0 3 10 -4 0 -6z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M547 198c0,0 9,7 9,7l0 4 -10 -5 1 -6z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M546 192c-1,1 -1,2 -1,4 0,2 0,5 0,7l1 6 0 -17z"/>
					 <Path fill={this.getColor("P3","LINE 3","Slot 1")} d="M546 192c0,1 1,2 1,4 0,2 0,5 -1,7l0 6 0 -17z"/>
					</G>
				   </G>
				   <G id="pp3l4">
					<Rect fill="#40B984" x="589" y="123" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M606 133l0 3 -2 0 0 -9 3 0c2,0 3,1 3,3 0,1 0,1 -1,2 0,0 -1,1 -2,1l-1 0zm0 -4l0 2 1 0c1,0 1,0 1,-1 0,-1 0,-1 -1,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M611 135l0 -1c1,0 1,0 2,0 1,0 1,0 1,0 0,0 1,0 1,-1 0,0 -1,0 -1,-1 0,0 -1,0 -1,0l-1 0 0 -1 1 0c1,0 1,-1 1,-1 0,-1 0,-1 -1,-1 0,0 -1,0 -2,0l0 -1c1,-1 2,-1 2,-1 1,0 2,0 2,1 1,0 1,1 1,1 0,1 0,2 -1,2l0 0c0,0 1,1 1,1 0,0 0,1 0,1 0,1 0,2 0,2 -1,1 -2,1 -3,1 -1,0 -1,0 -2,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="623,136 618,136 618,127 620,127 620,134 623,134 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M629 127l0 6 1 0 0 1 -1 0 0 2 -2 0 0 -2 -3 0 0 -2c0,0 0,0 1,-1 0,0 0,-1 1,-1 0,0 0,-1 0,-1 1,-1 1,-1 1,-2l2 0zm-4 6l2 0 0 -3c0,0 0,0 0,0 0,1 -1,1 -1,1 0,0 0,1 0,1 -1,0 -1,0 -1,1z"/>
					<G>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M629 164c-1,2 -2,4 -2,7 0,6 1,10 3,10 2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-3 0z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M628 165c0,1 0,1 0,1l5 0c0,0 0,0 0,0l-5 -1z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M629 164c-1,0 -1,1 -1,1l5 1c0,-1 -1,-2 -1,-2l-3 0z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M630 181c2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M630 166l3 0c0,0 0,0 0,0l-3 0 0 0z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M630 166l3 0c0,-1 -1,-2 -1,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M614 152c1,-3 2,-5 4,-6l-1 60c-2,-6 -3,-13 -3,-19l0 -35z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M621 153c0,-4 -1,-6 -3,-7l-1 60c2,-6 3,-13 3,-19l1 -34z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M618 151c-2,0 -3,1 -3,2 1,-2 1,-4 3,-4l0 2z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M618 151c1,0 2,1 2,2 0,-2 -1,-4 -2,-4l0 2z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M604 180c2,0 3,-4 3,-9 0,-3 0,-6 -1,-8l-1 0 -1 17z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M604 166l3 0c0,-1 0,-1 0,-1l-3 0 0 1z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M604 165l3 0c0,-1 0,-1 -1,-2l-1 0 -1 2z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M604 180c-1,0 -3,-4 -2,-9 0,-3 0,-6 1,-8l2 0 -1 17z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M604 166l-2 0c0,-1 0,-1 0,-1l2 0 0 1z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M604 165l-2 0c0,-1 1,-1 1,-2l2 0 -1 2z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M615 163l-23 17 0 7 22 -11c3,-8 3,-12 1,-13z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M592 177c0,0 0,3 0,6 0,4 0,7 -1,7 0,0 0,-3 0,-7 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M620 163l22 18 0 7 -22 -12c-2,-8 -2,-12 0,-13z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M643 178c-1,0 -1,3 -1,6 0,4 0,7 0,7 1,0 1,-3 1,-7 0,-3 0,-6 0,-6z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M616 198c0,0 -10,7 -10,7l0 3 10 -4 0 -6z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M618 198c0,0 9,7 9,7l0 4 -10 -5 1 -6z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M617 192c-1,1 -1,2 -1,4 0,2 0,5 0,7l0 6 1 -17z"/>
					 <Path fill={this.getColor("P3","LINE 4","Slot 1")} d="M617 192c0,1 1,2 1,4 0,2 0,5 -1,7l-1 6 1 -17z"/>
					</G>
				   </G>
				   <G id="pp3l5">
					<Rect fill="#40B984" x="660" y="123" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M677 133l0 3 -2 0 0 -9 3 0c2,0 3,1 3,3 0,1 0,1 -1,2 0,0 -1,1 -2,1l-1 0zm0 -4l0 2 1 0c1,0 1,0 1,-1 0,-1 0,-1 -1,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M682 135l0 -1c1,0 1,0 2,0 1,0 1,0 1,0 0,0 1,0 1,-1 0,0 -1,0 -1,-1 0,0 -1,0 -1,0l-1 0 0 -1 1 0c1,0 1,-1 1,-1 0,-1 0,-1 -1,-1 -1,0 -1,0 -2,0l0 -1c1,-1 2,-1 2,-1 1,0 2,0 2,1 1,0 1,1 1,1 0,1 0,2 -1,2l0 0c0,0 1,1 1,1 0,0 0,1 0,1 0,1 0,2 0,2 -1,1 -2,1 -3,1 -1,0 -1,0 -2,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="694,136 689,136 689,127 691,127 691,134 694,134 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M695 135l0 -1c1,0 1,0 2,0 0,0 1,0 1,0 0,0 0,-1 0,-1 0,-1 0,-1 -1,-1 -1,0 -1,0 -2,0l1 -5 4 0 0 2 -3 0 0 1c0,0 0,0 1,0 0,0 1,1 2,1 0,1 0,1 0,2 0,1 0,1 -1,2 0,0 -1,1 -2,1 -1,0 -1,0 -2,-1z"/>
					<G>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M699 164c0,2 -1,4 -1,7 0,6 1,10 3,10 2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-4 0z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M699 165c0,1 0,1 0,1l5 0c0,0 0,0 0,0l-5 -1z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M699 164c0,0 0,1 0,1l5 1c-1,-1 -1,-2 -1,-2l-4 0z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M701 181c2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M701 166l3 0c0,0 0,0 0,0l-3 0 0 0z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M701 166l3 0c-1,-1 -1,-2 -1,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M685 152c1,-3 2,-5 4,-6l-1 60c-2,-6 -3,-13 -3,-19l0 -35z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M692 153c0,-4 -1,-6 -3,-7l-1 60c2,-6 3,-13 3,-19l1 -34z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M689 151c-2,0 -3,1 -3,2 0,-2 1,-4 3,-4l0 2z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M689 151c1,0 2,1 2,2 0,-2 -1,-4 -2,-4l0 2z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M675 180c2,0 3,-4 3,-9 0,-3 0,-6 -1,-8l-1 0 -1 17z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M675 166l3 0c0,-1 0,-1 0,-1l-3 0 0 1z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M675 165l3 0c0,-1 0,-1 -1,-2l-1 0 -1 2z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M675 180c-1,0 -3,-4 -2,-9 0,-3 0,-6 1,-8l2 0 -1 17z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M675 166l-2 0c0,-1 0,-1 0,-1l2 0 0 1z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M675 165l-2 0c0,-1 0,-1 1,-2l2 0 -1 2z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M686 163l-23 17 0 7 22 -11c3,-8 3,-12 1,-13z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M663 177c0,0 0,3 0,6 0,4 0,7 -1,7 0,0 0,-3 0,-7 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M691 163l22 18 0 7 -22 -12c-2,-8 -2,-12 0,-13z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M714 178c-1,0 -1,3 -1,6 0,4 0,7 0,7 1,0 1,-3 1,-7 0,-3 0,-6 0,-6z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M687 198c0,0 -10,7 -10,7l0 3 10 -4 0 -6z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M689 198c0,0 9,7 9,7l0 4 -10 -5 1 -6z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M688 192c-1,1 -1,2 -1,4 0,2 0,5 0,7l0 6 1 -17z"/>
					 <Path fill={this.getColor("P3","LINE 5","Slot 1")} d="M688 192c0,1 1,2 1,4 0,2 0,5 -1,7l-1 6 1 -17z"/>
					</G>
				   </G>
				   <G id="pp3l6">
					<Rect fill="#40B984" x="731" y="123" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Path fill="white" fill-rule="nonzero" d="M748 133l0 3 -2 0 0 -9 3 0c2,0 3,1 3,3 0,1 0,1 -1,2 0,0 -1,1 -2,1l-1 0zm0 -4l0 2 1 0c1,0 1,0 1,-1 0,-1 0,-1 -1,-1l-1 0z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M753 135l0 -1c1,0 1,0 2,0 1,0 1,0 1,0 0,0 1,0 1,-1 0,0 -1,0 -1,-1 0,0 -1,0 -1,0l-1 0 0 -1 1 0c1,0 1,-1 1,-1 0,-1 0,-1 -1,-1 -1,0 -1,0 -2,0l0 -1c1,-1 2,-1 2,-1 1,0 2,0 2,1 1,0 1,1 1,1 0,1 0,2 -2,2l0 0c1,0 2,1 2,1 0,0 0,1 0,1 0,1 0,2 0,2 -1,1 -2,1 -3,1 -1,0 -1,0 -2,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="765,136 760,136 760,127 762,127 762,134 765,134 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M772 133c0,0 0,1 -1,1 0,0 0,1 0,1 0,0 -1,0 -1,1 0,0 -1,0 -1,0 -1,0 -1,0 -1,-1 -1,0 -1,0 -1,0 -1,-1 -1,-1 -1,-1 0,-1 0,-1 0,-2 0,-1 0,-1 0,-2 0,-1 1,-1 1,-2 0,0 1,0 1,0 0,-1 1,-1 2,-1 0,0 1,0 1,0l0 2c0,0 -1,0 -1,0 -1,0 -1,0 -1,0 0,0 -1,0 -1,0 0,0 0,1 0,1 0,0 0,1 0,1l0 0c0,0 1,-1 1,-1 1,0 1,0 1,0 1,1 1,1 1,1 0,0 0,0 1,1 0,0 0,0 0,1zm-2 0c0,-1 0,-1 -1,-1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 0,0 0,-1 0,-1 0,-1z"/>
					<G>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M770 164c0,2 -1,4 -1,7 0,6 1,10 3,10 2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-4 0z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M770 165c0,1 0,1 0,1l5 0c0,0 0,0 0,0l-5 -1z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M770 164c0,0 0,1 0,1l5 1c-1,-1 -1,-2 -1,-2l-4 0z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M772 181c2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M772 166l3 0c0,0 0,0 0,0l-3 0 0 0z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M772 166l3 0c-1,-1 -1,-2 -1,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M756 152c1,-3 2,-5 4,-6l-1 60c-2,-6 -3,-13 -3,-19l0 -35z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M763 153c0,-4 -1,-6 -3,-7l-1 60c2,-6 3,-13 3,-19l1 -34z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M760 151c-2,0 -3,1 -3,2 0,-2 1,-4 3,-4l0 2z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M760 151c1,0 2,1 2,2 0,-2 -1,-4 -2,-4l0 2z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M746 180c2,0 3,-4 3,-9 0,-3 0,-6 -1,-8l-2 0 0 17z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M746 166l3 0c0,-1 0,-1 0,-1l-3 0 0 1z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M746 165l3 0c0,-1 0,-1 -1,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M746 180c-1,0 -3,-4 -2,-9 0,-3 0,-6 1,-8l1 0 0 17z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M746 166l-2 0c0,-1 0,-1 0,-1l2 0 0 1z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M746 165l-2 0c0,-1 0,-1 1,-2l1 0 0 2z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M757 163l-23 17 0 7 22 -11c3,-8 3,-12 1,-13z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M734 177c0,0 0,3 0,6 0,4 0,7 -1,7 0,0 0,-3 0,-7 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M762 163l22 18 0 7 -22 -12c-2,-8 -2,-12 0,-13z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M785 178c-1,0 -1,3 -1,6 0,4 0,7 0,7 1,0 1,-3 1,-7 0,-3 0,-6 0,-6z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M758 198c0,0 -10,7 -10,7l0 3 10 -4 0 -6z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M760 198c0,0 9,7 9,7l0 4 -10 -5 1 -6z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M759 192c-1,1 -1,2 -1,4 0,2 0,5 0,7l0 6 1 -17z"/>
					 <Path fill={this.getColor("P3","LINE 6","Slot 1")} d="M759 192c0,1 1,2 1,4 0,2 0,5 -1,7l-1 6 1 -17z"/>
					</G>
				   </G>
				  </G>
				  <G id="all_p4">
				   <G id="p4">
					<Path fill="white" stroke="white" stroke-width="0.561699" d="M826 78l79 0c1,0 1,1 1,1l0 154c0,1 0,1 -1,1l-79 0c0,0 -1,0 -1,-1l0 -154c0,0 1,-1 1,-1z"/>
					<Path fill="#1A3560" d="M828 79l76 0c0,0 1,1 1,1l0 151c0,1 -1,1 -1,1l-76 0c-1,0 -2,0 -2,-1l0 -151c0,0 1,-1 2,-1z"/>
				   </G>
				   <G id="pp4l2">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 912.947 97.8508)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Path fill="white" fill-rule="nonzero" d="M903 114l-3 0 0 -1 9 0 0 2c0,3 -1,4 -3,4 -1,0 -2,-1 -2,-1 -1,-1 -1,-2 -1,-3l0 -1zm4 0l-2 0 0 1c0,1 0,2 1,2 1,0 1,-1 1,-2l0 -1z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M909 124l-6 0 0 1 -1 0 0 -1 -2 0 0 -1 2 0 0 -4 1 0c1,0 1,1 2,1 0,0 0,1 1,1 0,0 1,1 1,1 1,0 1,0 2,1l0 1zm-6 -3l0 2 3 0c0,0 0,-1 -1,-1 0,0 0,0 0,0 -1,0 -1,-1 -1,-1 0,0 0,0 -1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="900,132 900,127 909,127 909,128 902,128 902,132 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M909 136l-9 0 0 -1 7 0c0,0 0,-1 -1,-1 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0l2 0c0,0 0,1 0,1 0,1 0,1 1,1l0 1z"/>
					<G>
					 <Path fill="red" d="M872 137c-2,-1 -4,-1 -7,-1 -6,0 -10,1 -10,2 0,2 4,3 10,3 3,0 5,0 7,0l0 -4z"/>
					 <Path fill="red" d="M870 136c0,0 0,0 0,0l0 5c0,0 0,0 0,0l0 -5z"/>
					 <Path fill="red" d="M872 137c0,0 -1,0 -2,-1l0 5c1,0 1,0 2,0l0 -4z"/>
					 <Path fill="red" d="M855 138c0,2 4,3 10,3 3,0 5,0 7,0l0 -2 -17 -1z"/>
					 <Path fill="red" d="M870 139l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill="red" d="M870 139l0 2c1,0 1,0 2,0l0 -2 -2 0z"/>
					 <Path fill="red" d="M884 123c3,0 5,1 5,3l-59 -1c6,-2 13,-3 19,-3l35 1z"/>
					 <Path fill="red" d="M883 129c4,0 6,-1 6,-3l-59 -1c6,2 13,3 19,4l34 0z"/>
					 <Path fill="red" d="M885 126c0,-1 -1,-2 -2,-3 2,1 4,2 4,3l-2 0z"/>
					 <Path fill="red" d="M885 126c0,2 -1,2 -2,3 2,-1 3,-1 4,-3l-2 0z"/>
					 <Path fill="red" d="M856 113c-1,1 4,2 9,3 3,0 6,-1 7,-1l1 -2 -17 0z"/>
					 <Path fill="red" d="M870 113l0 2c0,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill="red" d="M871 113l0 2c0,0 1,0 1,0l1 -2 -2 0z"/>
					 <Path fill="red" d="M856 113c0,-2 4,-3 9,-3 3,0 6,0 8,1l0 2 -17 0z"/>
					 <Path fill="red" d="M870 113l0 -3c1,1 1,1 1,1l0 2 -1 0z"/>
					 <Path fill="red" d="M871 113l0 -2c1,0 1,0 2,0l0 2 -2 0z"/>
					 <Path fill="red" d="M873 124l-17 -24 -7 0 11 22c8,3 12,3 13,2z"/>
					 <Path fill="red" d="M859 100c0,0 -3,1 -6,1 -4,0 -7,-1 -7,-1 0,-1 3,-1 7,-1 3,0 6,1 6,1z"/>
					 <Path fill="red" d="M873 128l-18 23 -7 0 12 -22c8,-2 12,-2 13,-1z"/>
					 <Path fill="red" d="M858 151c0,0 -3,-1 -7,-1 -3,0 -6,0 -6,1 0,0 3,1 6,1 4,0 7,0 7,-1z"/>
					 <Path fill="red" d="M838 124c0,0 -7,-9 -7,-9l-3 0 4 9 6 0z"/>
					 <Path fill="red" d="M838 126c0,0 -7,9 -7,9l-4 0 5 -9 6 0z"/>
					 <Path fill="red" d="M844 125c-1,0 -2,-1 -4,-1 -3,0 -5,0 -7,0l-6 1 17 0z"/>
					 <Path fill="red" d="M844 125c-1,1 -2,1 -4,1 -3,0 -5,0 -8,0l-5 -1 17 0z"/>
					</G>
				   </G>
				   <G id="pp4l1">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 912.947 158.272)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Path fill="white" fill-rule="nonzero" d="M903 175l-3 0 0 -2 9 0 0 3c0,2 -1,3 -3,3 -1,0 -2,0 -2,-1 -1,0 -1,-1 -1,-2l0 -1zm4 0l-2 0 0 1c0,1 0,1 1,1 1,0 1,0 1,-1l0 -1z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M909 185l-6 0 0 1 -1 0 0 -1 -2 0 0 -2 2 0 0 -4 1 0c1,1 1,1 2,1 0,1 0,1 1,1 0,1 1,1 1,1 1,1 1,1 2,1l0 2zm-6 -4l0 2 3 0c0,0 0,0 -1,0 0,0 0,-1 0,-1 -1,0 -1,0 -1,0 0,-1 0,-1 -1,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="900,192 900,187 909,187 909,189 902,189 902,192 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M902 195l0 3 -2 0 0 -5 1 0c0,0 1,0 1,0 0,0 1,0 1,0 0,1 0,1 1,1 0,0 0,1 0,1 0,0 1,0 1,0 0,1 0,1 0,1 0,0 1,0 1,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,-1 0,-1 0,-1 0,-1 -1,-2l2 0c0,1 1,2 1,2 0,1 0,1 0,2 -1,0 -1,0 -1,0 0,1 0,1 -1,1 0,0 0,0 -1,0 0,0 0,0 -1,0 0,0 0,0 0,-1 -1,0 -1,0 -1,0 0,0 -1,-1 -1,-1 0,0 0,0 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0z"/>
					<G>
					 <Path fill="red" d="M872 197c-2,0 -4,-1 -7,-1 -6,0 -10,1 -10,3 0,1 4,3 10,3 3,0 5,0 7,-1l0 -4z"/>
					 <Path fill="red" d="M870 197c0,0 0,0 0,0l0 5c0,0 0,-1 0,-1l0 -4z"/>
					 <Path fill="red" d="M872 197c0,0 -1,0 -2,0l0 4c1,0 1,0 2,0l0 -4z"/>
					 <Path fill="red" d="M855 199c0,1 4,3 10,3 3,0 5,0 7,-1l0 -2 -17 0z"/>
					 <Path fill="red" d="M870 199l0 3c0,0 0,-1 0,-1l0 -2 0 0z"/>
					 <Path fill="red" d="M870 199l0 2c1,0 1,0 2,0l0 -2 -2 0z"/>
					 <Path fill="red" d="M884 183c3,1 5,2 5,4l-59 -2c6,-1 13,-2 19,-3l35 1z"/>
					 <Path fill="red" d="M883 190c4,0 6,-2 6,-3l-59 -2c6,2 13,4 19,4l34 1z"/>
					 <Path fill="red" d="M885 187c0,-2 -1,-3 -2,-3 2,0 4,1 4,3l-2 0z"/>
					 <Path fill="red" d="M885 187c0,1 -1,2 -2,2 2,0 3,-1 4,-2l-2 0z"/>
					 <Path fill="red" d="M856 173c-1,2 4,3 9,3 3,0 6,0 7,-1l1 -2 -17 0z"/>
					 <Path fill="red" d="M870 173l0 3c0,0 1,0 1,0l0 -3 -1 0z"/>
					 <Path fill="red" d="M871 173l0 3c0,-1 1,-1 1,-1l1 -2 -2 0z"/>
					 <Path fill="red" d="M856 173c0,-2 4,-3 9,-3 3,0 6,1 8,1l0 2 -17 0z"/>
					 <Path fill="red" d="M870 173l0 -2c1,0 1,0 1,0l0 2 -1 0z"/>
					 <Path fill="red" d="M871 173l0 -2c1,0 1,0 2,0l0 2 -2 0z"/>
					 <Path fill="red" d="M873 184l-17 -23 -7 0 11 22c8,2 12,3 13,1z"/>
					 <Path fill="red" d="M859 160c0,1 -3,1 -6,1 -4,0 -7,0 -7,-1 0,0 3,-1 7,-1 3,1 6,1 6,1z"/>
					 <Path fill="red" d="M873 189l-18 22 -7 0 12 -22c8,-2 12,-2 13,0z"/>
					 <Path fill="red" d="M858 212c0,-1 -3,-1 -7,-1 -3,0 -6,0 -6,0 0,1 3,1 6,1 4,0 7,0 7,0z"/>
					 <Path fill="red" d="M838 184c0,0 -7,-9 -7,-9l-3 0 4 10 6 -1z"/>
					 <Path fill="red" d="M838 187c0,0 -7,9 -7,9l-4 -1 5 -9 6 1z"/>
					 <Path fill="red" d="M844 186c-1,-1 -2,-1 -4,-2 -3,0 -5,0 -7,1l-6 0 17 1z"/>
					 <Path fill="red" d="M844 186c-1,0 -2,1 -4,1 -3,0 -5,0 -8,-1l-5 -1 17 1z"/>
					</G>
				   </G>
				  </G>
				  <G id="all_h3" onPress={() => this.handleClick("H3")}>
				   <G id="h3">
					<Path fill="white" stroke="white" stroke-width="0.561699" d="M293 288l520 0c1,0 1,1 1,2l0 110c0,1 0,2 -1,2l-520 0c-1,0 -2,-1 -2,-2l0 -110c0,-1 1,-2 2,-2z"/>
					<Path fill="#1A3560" d="M295 290l516 0c1,0 2,1 2,2l0 106c0,1 -1,2 -2,2l-516 0c-1,0 -2,-1 -2,-2l0 -106c0,-1 1,-2 2,-2z"/>
					<G>
					 <Rect fill="orange" x="505" y="289" width="95.0183" height="16.1759"/>
					 <Path fill="#261902" fill-rule="nonzero" d="M529 301l0 -8 1 0 0 8 -1 0zm-4 0l0 -8 1 0 0 8 -1 0zm0 -4l0 -1 5 0 0 1 -5 0z"/>
					 <Path id="1" fill="#261902" fill-rule="nonzero" d="M531 301l3 -8 1 0 3 8 -1 0 -2 -7 -2 7 -2 0zm2 -2l0 -1 4 0 0 1 -4 0z"/>
					 <Polygon id="2" fill="#261902" fill-rule="nonzero" points="539,301 539,293 540,293 544,299 544,299 544,293 545,293 545,301 544,301 540,295 540,295 540,301 "/>
					 <Path id="3" fill="#261902" fill-rule="nonzero" d="M550 296l2 0 0 2c0,0 0,1 0,1 0,1 -1,1 -1,1 0,1 -1,1 -1,1 -1,0 -1,0 -2,-1 0,0 -1,0 -1,-1 0,0 0,0 0,-1l0 -2c0,-1 0,-1 0,-2 0,0 1,-1 1,-1 1,0 1,0 2,0 0,0 0,0 1,0 0,0 0,0 1,1 0,0 0,1 0,1l-1 0c0,0 0,-1 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -2,0 0,1 0,1 0,2l0 2c0,1 0,1 0,1 1,1 1,1 2,1 0,0 0,0 1,-1 0,0 0,-1 0,-1l0 0 -1 0 0 -2z"/>
					 <Path id="4" fill="#261902" fill-rule="nonzero" d="M557 296l2 0 0 2c0,0 0,1 0,1 0,1 0,1 -1,1 0,1 -1,1 -1,1 -1,0 -1,0 -2,-1 0,0 -1,0 -1,-1 0,0 0,0 0,-1l0 -2c0,-1 0,-1 0,-2 0,0 1,-1 1,-1 1,0 1,0 2,0 0,0 1,0 1,0 0,0 1,0 1,1 0,0 0,1 0,1l-1 0c0,0 0,-1 0,-1 -1,0 -1,0 -1,0 -1,0 -1,0 -2,0 0,1 0,1 0,2l0 2c0,1 0,1 0,1 1,1 1,1 2,1 0,0 1,0 1,-1 0,0 0,-1 0,-1l0 0 -1 0 0 -2z"/>
					 <Path id="5" fill="#261902" fill-rule="nonzero" d="M560 301l3 -8 1 0 3 8 -1 0 -2 -7 -3 7 -1 0zm2 -2l0 -1 4 0 0 1 -4 0z"/>
					 <Path id="6" fill="#261902" fill-rule="nonzero" d="M569 297l0 -1 2 0c1,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,0 0,0 -1,0l-2 0 0 -1 2 0c1,0 1,0 1,0 1,0 1,1 1,1 0,0 0,1 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 0,0 0,0 -1,0l-2 0zm-1 4l0 -8 1 0 0 8 -1 0zm4 0l-1 -4 1 0 2 4 -2 0z"/>
					 <Path id="7" fill="#261902" fill-rule="nonzero" d="M579 301c-1,0 -1,0 -2,-1 0,0 0,-1 0,-1l0 0 1 0 0 0c0,0 0,0 0,1 0,0 1,0 1,0 0,0 1,0 1,-1 0,0 0,0 0,0l0 -1c0,0 0,0 0,-1 0,0 -1,0 -1,0l-1 0 0 -1 1 0c0,0 1,0 1,0 0,0 0,-1 0,-1l0 0c0,-1 0,-1 0,-1 -1,0 -1,0 -1,0 0,0 -1,0 -1,0 0,0 0,0 0,1l0 0 -1 0 0 0c0,-1 0,-1 0,-2 1,0 1,0 2,0 1,0 1,0 1,0 1,1 1,1 1,2l0 0c0,0 0,1 0,1 -1,0 -1,0 -1,1 0,0 1,0 1,0 0,0 0,1 0,1l0 1c0,0 0,1 0,1 -1,1 -1,1 -2,1z"/>
					</G>
				   </G>
				   <G id="ph3l1">
					<Rect fill="#40B984" x="350" y="307" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="371,319 370,319 370,316 366,316 366,319 364,319 364,311 366,311 366,314 370,314 370,311 371,311 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M373 319l0 -1c1,0 1,0 2,0 0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0l-1 0 0 -2 1 0c1,0 1,0 1,-1 0,0 0,-1 -1,-1 -1,0 -1,1 -2,1l0 -2c1,0 2,0 2,0 1,0 2,0 2,1 1,0 1,0 1,1 0,1 0,2 -2,2l0 0c1,0 1,0 2,1 0,0 0,1 0,1 0,1 0,1 -1,2 0,0 -1,1 -2,1 -1,0 -1,-1 -2,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="385,319 380,319 380,311 382,311 382,318 385,318 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M390 311l0 8 -2 0 0 -6c0,0 0,0 0,0 0,0 0,0 -1,0 0,1 0,1 0,1 0,0 0,0 -1,0l0 -2c1,0 1,0 2,0 0,-1 1,-1 1,-1l1 0z"/>
					<G>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M389 348c-1,1 -1,4 -1,7 -1,5 1,10 2,10 2,0 3,-5 3,-10 0,-3 0,-5 -1,-7l-3 0z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M388 349c0,0 0,1 0,1l5 0c0,0 0,0 0,-1l-5 0z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M389 348c-1,0 -1,1 -1,1l5 0c0,0 -1,-1 -1,-1l-3 0z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M390 365c2,0 3,-5 3,-10 0,-3 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M390 350l3 0c0,0 0,0 0,-1l-3 0 0 1z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M390 349l3 0c0,0 -1,-1 -1,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M374 336c1,-4 2,-5 4,-6l-1 59c-2,-6 -3,-12 -3,-19l0 -34z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M381 336c0,-3 -1,-5 -3,-6l-1 59c2,-6 3,-12 3,-18l1 -35z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M378 335c-2,-1 -2,1 -3,2 1,-2 1,-4 3,-5l0 3z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M378 335c1,-1 2,1 2,2 0,-2 -1,-4 -2,-5l0 3z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M364 364c2,0 3,-4 3,-9 0,-3 0,-6 -1,-8l-1 0 -1 17z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M365 349l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M365 349l2 0c0,-1 0,-1 -1,-2l-1 0 0 2z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M364 364c-1,0 -2,-4 -2,-10 0,-3 0,-5 1,-7l2 0 -1 17z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M365 349l-3 0c0,0 0,0 0,0l3 0 0 0z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M365 349l-3 0c0,-1 1,-1 1,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M375 346l-23 18 0 7 22 -11c3,-8 3,-12 1,-14z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M352 361c0,0 0,3 0,6 0,4 0,6 -1,6 0,0 0,-2 0,-6 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M380 347l22 18 0 7 -21 -12c-3,-8 -3,-12 -1,-13z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M403 362c-1,0 -1,3 -1,6 0,4 0,7 1,7 0,0 0,-3 0,-7 1,-3 0,-6 0,-6z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M376 382c0,0 -9,7 -9,7l-1 3 10 -4 0 -6z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M378 382c0,0 9,7 9,7l0 4 -10 -5 1 -6z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M377 376c-1,1 -1,2 -1,4 0,2 0,5 0,7l1 5 0 -16z"/>
					 <Path fill={this.getColor("H3","LINE 1","Slot 1")} d="M377 376c0,1 1,2 1,4 0,2 0,5 -1,7l0 5 0 -16z"/>
					</G>
				   </G>
				   <G id="ph3l2">
					<Rect fill="#40B984" x="525" y="307" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="547,319 545,319 545,316 541,316 541,319 539,319 539,311 541,311 541,314 545,314 545,311 547,311 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M548 319l0 -1c1,0 1,0 2,0 1,0 1,0 1,0 1,0 1,-1 1,-1 0,0 0,-1 -1,-1 0,0 -1,0 -1,0l-1 0 0 -2 1 0c1,0 1,0 1,-1 0,0 0,-1 -1,-1 0,0 -1,1 -1,1l0 -2c0,0 1,0 2,0 0,0 1,0 2,1 0,0 0,0 0,1 0,1 0,2 -1,2l0 0c0,0 1,0 1,1 0,0 1,1 1,1 0,1 -1,1 -1,2 -1,0 -2,1 -3,1 -1,0 -1,-1 -2,-1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="560,319 555,319 555,311 557,311 557,318 560,318 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M563 318l3 0 0 1 -5 0 0 0c0,-1 0,-1 0,-1 0,-1 0,-1 1,-1 0,-1 0,-1 0,-1 1,0 1,0 1,-1 0,0 1,0 1,0 0,0 0,0 0,-1 0,0 0,0 0,0 1,0 1,0 1,-1 0,0 -1,0 -1,0 0,0 0,-1 -1,-1 0,0 -1,1 -2,1l0 -1c1,-1 2,-1 3,-1 0,0 1,0 1,0 0,0 0,0 1,1 0,0 0,0 0,0 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,0 -1,1 -1,1 0,0 0,0 -1,0 0,1 0,1 0,1 0,0 -1,0 -1,0 0,0 0,0 0,1 0,0 0,0 0,0z"/>
					<G>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M564 348c0,1 -1,4 -1,7 0,5 1,10 3,10 2,0 3,-5 3,-10 0,-3 0,-5 -1,-7l-4 0z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M564 349c0,0 0,1 0,1l5 0c0,0 0,0 0,-1l-5 0z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M564 348c0,0 0,1 0,1l5 0c-1,0 -1,-1 -1,-1l-4 0z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M566 365c2,0 3,-5 3,-10 0,-3 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M566 350l3 0c0,0 0,0 0,-1l-3 0 0 1z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M566 349l3 0c-1,0 -1,-1 -1,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M550 336c1,-4 2,-5 4,-6l-2 59c-1,-6 -2,-12 -2,-19l0 -34z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M557 336c0,-3 -1,-5 -3,-6l-2 59c3,-6 4,-12 4,-18l1 -35z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M554 335c-2,-1 -3,1 -3,2 0,-2 1,-4 3,-5l0 3z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M554 335c1,-1 2,1 2,2 0,-2 -1,-4 -2,-5l0 3z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M540 364c2,0 3,-4 3,-9 0,-3 0,-6 -1,-8l-2 0 0 17z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M540 349l3 0c0,0 0,0 0,0l-3 0 0 0z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M540 349l3 0c0,-1 -1,-1 -1,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M540 364c-1,0 -3,-4 -2,-10 0,-3 0,-5 1,-7l1 0 0 17z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M540 349l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M540 349l-2 0c0,-1 0,-1 1,-2l1 0 0 2z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M551 346l-23 18 0 7 22 -11c2,-8 3,-12 1,-14z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M528 361c0,0 0,3 0,6 0,4 0,6 -1,6 0,0 0,-2 0,-6 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M556 347l22 18 0 7 -22 -12c-2,-8 -2,-12 0,-13z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M579 362c-1,0 -1,3 -1,6 0,4 0,7 0,7 1,0 1,-3 1,-7 0,-3 0,-6 0,-6z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M551 382c1,0 -9,7 -9,7l0 3 10 -4 -1 -6z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M554 382c0,0 9,7 9,7l0 4 -10 -5 1 -6z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M553 376c-1,1 -1,2 -1,4 0,2 0,5 0,7l0 5 1 -16z"/>
					 <Path fill={this.getColor("H3","LINE 2","Slot 1")} d="M553 376c0,1 1,2 1,4 0,2 0,5 -1,7l-1 5 1 -16z"/>
					</G>
				   </G>
				   <G id="ph3l3">
					<Rect fill="#40B984" x="700" y="307" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="721,319 719,319 719,316 716,316 716,319 714,319 714,311 716,311 716,314 719,314 719,311 721,311 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M723 319l0 -2c0,1 1,1 2,1 0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0l-1 0 0 -2 0 0c2,0 2,0 2,-1 0,0 0,-1 -1,-1 -1,0 -1,0 -2,1l0 -2c1,0 2,0 2,0 1,0 2,0 2,0 1,1 1,1 1,2 0,1 -1,2 -2,2l0 0c1,0 1,0 2,1 0,0 0,0 0,1 0,1 0,1 -1,2 0,0 -1,0 -2,0 -1,0 -2,0 -2,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="735,319 730,319 730,311 732,311 732,318 735,318 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M736 319l0 -2c0,1 1,1 2,1 0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 -1,0 -1,0 -2,0l0 0 0 -2 0 0c1,0 2,0 2,-1 0,0 0,-1 -1,-1 -1,0 -1,0 -2,1l0 -2c1,0 1,0 2,0 1,0 2,0 2,0 1,1 1,1 1,2 0,1 -1,2 -2,2l0 0c1,0 1,0 2,1 0,0 0,0 0,1 0,1 0,1 -1,2 0,0 -1,0 -2,0 -1,0 -2,0 -2,0z"/>
					<G>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M739 348c-1,1 -1,4 -1,7 0,5 1,10 3,10 1,0 2,-5 3,-10 0,-3 -1,-5 -1,-7l-4 0z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M739 349c0,0 0,1 0,1l4 0c0,0 0,0 0,-1l-4 0z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M739 348c0,0 0,1 0,1l4 0c0,0 0,-1 0,-1l-4 0z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M741 365c1,0 2,-5 3,-10 0,-3 -1,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M741 350l2 0c0,0 0,0 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M741 349l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M725 336c0,-4 2,-5 3,-6l-1 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M732 336c-1,-3 -2,-5 -4,-6l-1 59c2,-6 3,-12 4,-18l1 -35z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M728 335c-1,-1 -2,1 -2,2 0,-2 1,-4 2,-5l0 3z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M728 335c2,-1 3,1 3,2 0,-2 -1,-4 -3,-5l0 3z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M715 364c1,0 3,-4 3,-9 0,-3 0,-6 -1,-8l-2 0 0 17z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M715 349l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M715 349l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M715 364c-2,0 -3,-4 -3,-10 0,-3 1,-5 1,-7l2 0 0 17z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M715 349l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M715 349l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M726 346l-23 18 -1 7 22 -11c3,-8 3,-12 2,-14z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M702 361c1,0 1,3 1,6 0,4 -1,6 -1,6 -1,0 -1,-2 -1,-6 0,-3 1,-6 1,-6z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M730 347l23 18 0 7 -22 -12c-2,-8 -2,-12 -1,-13z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M753 362c0,0 -1,3 -1,6 0,4 1,7 1,7 0,0 1,-3 1,-7 0,-3 0,-6 -1,-6z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M726 382c0,0 -9,7 -9,7l0 3 10 -4 -1 -6z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M728 382c0,0 9,7 9,7l0 4 -9 -5 0 -6z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M727 376c0,1 -1,2 -1,4 0,2 0,5 1,7l0 5 0 -16z"/>
					 <Path fill={this.getColor("H3","LINE 3","Slot 1")} d="M727 376c1,1 1,2 1,4 0,2 0,5 0,7l-1 5 0 -16z"/>
					</G>
				   </G>
				  </G>
				  <G id="all_h2" onPress={() => this.handleClick("H2")}>
				   <G id="h2">
					<Path fill="white" stroke="white" stroke-width="0.561699" d="M293 408l517 0c1,0 3,2 3,3l0 226c0,2 -2,3 -3,3l-517 0c-2,0 -3,-1 -3,-3l0 -226c0,-1 1,-3 3,-3z"/>
					<Path fill="#1A3560" d="M292 410l168 0c1,0 1,2 1,4l0 221c0,2 0,3 -1,3l-168 0c0,0 -1,-1 -1,-3l0 -221c0,-2 1,-4 1,-4z"/>
					<Path fill="#1A3560" d="M633 411l-169 0c0,0 -1,1 -1,3l0 221c0,2 1,4 1,4l169 0c1,0 1,-2 1,-4l0 -221c0,-2 0,-3 -1,-3z"/>
					<Path fill="#1A3560" d="M637 411l169 0c1,0 1,1 1,3l0 221c0,2 0,4 -1,4l-169 0c-1,0 -1,-2 -1,-4l0 -221c0,-2 0,-3 1,-3z"/>
					<Rect fill="orange" x="504" y="408" width="95.0183" height="16.1759"/>
					<Path fill="#261902" fill-rule="nonzero" d="M527 420l0 -8 2 0 0 8 -2 0zm-4 0l0 -8 1 0 0 8 -1 0zm1 -3l0 -1 4 0 0 1 -4 0z"/>
					<Path id="1" fill="#261902" fill-rule="nonzero" d="M530 420l3 -8 1 0 2 8 -1 0 -2 -6 -2 6 -1 0zm1 -2l0 -1 4 0 0 1 -4 0z"/>
					<Polygon id="2" fill="#261902" fill-rule="nonzero" points="538,420 538,412 539,412 542,418 542,418 542,412 543,412 543,420 542,420 539,414 539,414 539,420 "/>
					<Path id="3" fill="#261902" fill-rule="nonzero" d="M548 416l3 0 0 1c0,1 0,1 -1,2 0,0 0,1 -1,1 0,0 -1,0 -1,0 -1,0 -1,0 -2,0 0,0 0,-1 -1,-1 0,0 0,-1 0,-2l0 -2c0,0 0,-1 0,-1 1,-1 1,-1 1,-2 1,0 1,0 2,0 0,0 1,0 1,0 0,1 1,1 1,1 0,1 0,1 1,1l-2 0c0,0 0,0 0,0 0,-1 -1,-1 -1,-1 -1,0 -1,0 -1,1 -1,0 -1,1 -1,1l0 2c0,1 0,1 1,2 0,0 0,0 1,0 0,0 1,0 1,0 0,-1 1,-1 1,-2l0 0 -2 0 0 -1z"/>
					<Path id="4" fill="#261902" fill-rule="nonzero" d="M555 416l3 0 0 1c0,1 0,1 -1,2 0,0 0,1 -1,1 0,0 0,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,-1 -1,-1 -1,0 -1,-1 -1,-2l0 -2c0,0 0,-1 1,-1 0,-1 0,-1 1,-2 0,0 0,0 1,0 0,0 1,0 1,0 1,1 1,1 1,1 0,1 1,1 1,1l-2 0c0,0 0,0 0,0 0,-1 -1,-1 -1,-1 -1,0 -1,0 -1,1 0,0 -1,1 -1,1l0 2c0,1 1,1 1,2 0,0 1,0 1,0 0,0 1,0 1,0 0,-1 1,-1 1,-2l0 0 -2 0 0 -1z"/>
					<Path id="5" fill="#261902" fill-rule="nonzero" d="M559 420l2 -8 1 0 3 8 -1 0 -2 -6 -2 6 -1 0zm1 -2l0 -1 4 0 0 1 -4 0z"/>
					<Path id="6" fill="#261902" fill-rule="nonzero" d="M567 417l0 -1 3 0c0,0 0,0 0,-1 1,0 1,0 1,0 0,-1 0,-1 -1,-1 0,-1 0,-1 0,-1l-3 0 0 -1 3 0c0,0 1,0 1,0 0,1 0,1 1,1 0,1 0,1 0,2 0,0 0,0 0,1 -1,0 -1,0 -1,1 0,0 -1,0 -1,0l-3 0zm-1 3l0 -8 2 0 0 8 -2 0zm5 0l-2 -3 1 -1 2 4 -1 0z"/>
					<Path id="7" fill="#261902" fill-rule="nonzero" d="M575 420l0 -1 3 -3c0,-1 0,-1 0,-1 0,0 0,-1 0,-1l0 0c0,0 0,0 0,-1 0,0 0,0 -1,0 0,0 0,0 -1,0 0,1 0,1 0,1l0 0 -1 0 0 0c0,0 0,-1 1,-1 0,-1 1,-1 1,-1 1,0 1,0 2,1 0,0 0,1 0,1l0 0c0,0 0,1 0,1 0,0 0,1 0,1l-2 3 2 0 0 1 -4 0z"/>
					<Rect fill="#3363B7" x="516" y="426" width="70.0959" height="16.1759"/>
					<Path fill="white" fill-rule="nonzero" d="M535 434l2 0 0 1c0,1 0,1 0,2 0,0 -1,1 -1,1 0,0 -1,0 -1,0 -1,0 -1,0 -2,0 0,0 -1,-1 -1,-1 0,0 0,-1 0,-1l0 -3c0,0 0,-1 0,-1 0,-1 1,-1 1,-1 1,-1 1,-1 2,-1 0,0 0,0 1,1 0,0 0,0 1,0 0,1 0,1 0,2l-1 0c0,-1 0,-1 -1,-1 0,-1 0,-1 0,-1 -1,0 -1,0 -2,1 0,0 0,1 0,1l0 3c0,0 0,0 0,1 1,0 1,0 2,0 0,0 0,0 1,0 0,-1 0,-1 0,-2l0 0 -1 0 0 -1z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M540 435l0 -1 2 0c1,0 1,0 1,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 -1,-1l-2 0 0 -1 2 0c1,0 1,0 1,1 1,0 1,0 1,0 0,1 0,1 0,2 0,0 0,0 0,1 0,0 0,0 -1,1 0,0 0,0 -1,0l-2 0zm-1 3l0 -8 1 0 0 8 -1 0zm4 0l-1 -3 1 -1 2 4 -2 0z"/>
					<Path id="2" fill="white" fill-rule="nonzero" d="M549 438c-1,0 -1,0 -2,0 0,0 0,-1 -1,-1 0,0 0,-1 0,-2l0 -2c0,0 0,-1 0,-1 1,-1 1,-1 1,-1 1,-1 1,-1 2,-1 0,0 1,0 1,1 1,0 1,0 1,1 0,0 0,1 0,1l0 2c0,1 0,2 0,2 0,0 0,1 -1,1 0,0 -1,0 -1,0zm0 -1c0,0 1,0 1,0 0,-1 0,-1 0,-2l0 -2c0,0 0,-1 0,-1 0,-1 -1,-1 -1,-1 -1,0 -1,0 -1,1 -1,0 -1,1 -1,1l0 2c0,1 0,1 1,2 0,0 0,0 1,0z"/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M556 438c-1,0 -2,0 -2,0 -1,-1 -1,-2 -1,-3l0 -5 1 0 0 5c0,1 0,1 1,2 0,0 0,0 1,0 0,0 1,0 1,0 0,-1 0,-1 0,-2l0 -5 2 0 0 5c0,1 -1,2 -1,3 -1,0 -1,0 -2,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M561 435l0 -1 2 0c1,0 1,0 1,0 1,-1 1,-1 1,-1 0,-1 0,-1 -1,-1 0,-1 0,-1 -1,-1l-2 0 0 -1 2 0c1,0 1,0 2,1 0,0 0,0 0,0 1,1 1,1 1,2 0,0 0,1 -1,1 0,0 0,1 0,1 -1,0 -1,0 -2,0l-2 0zm-1 3l0 -8 2 0 0 8 -2 0z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M569 438l0 -1 2 -3c1,-1 1,-1 1,-1 0,0 0,-1 0,-1l0 0c0,0 0,0 0,0 0,-1 -1,-1 -1,-1 0,0 -1,0 -1,1 0,0 0,0 0,0l0 0 -1 0 0 0c0,0 0,-1 0,-1 1,-1 1,-1 2,-1 1,0 1,0 2,1 0,0 0,1 0,1l0 0c0,1 0,1 0,1 0,0 0,1 -1,1l-2 3 3 0 0 1 -4 0z"/>
					<Rect fill="#3363B7" x="678" y="426" width="70.0959" height="16.1759"/>
					<Path fill="white" fill-rule="nonzero" d="M696 434l3 0 0 1c0,1 0,1 0,2 -1,0 -1,1 -1,1 -1,0 -1,0 -2,0 0,0 -1,0 -1,0 -1,0 -1,-1 -1,-1 0,0 0,-1 0,-1l0 -3c0,0 0,-1 0,-1 0,-1 0,-1 1,-1 0,-1 1,-1 1,-1 1,0 1,0 2,1 0,0 0,0 0,0 1,1 1,1 1,2l-1 0c0,-1 0,-1 -1,-1 0,-1 0,-1 -1,-1 0,0 -1,0 -1,1 0,0 0,1 0,1l0 3c0,0 0,0 0,1 0,0 1,0 1,0 1,0 1,0 1,0 1,-1 1,-1 1,-2l0 0 -2 0 0 -1z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M701 435l0 -1 3 0c0,0 1,0 1,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 -1,-1 -1,-1l-3 0 0 -1 3 0c1,0 1,0 1,1 1,0 1,0 1,0 0,1 0,1 0,2 0,0 0,0 0,1 0,0 0,0 -1,1 0,0 0,0 -1,0l-3 0zm0 3l0 -8 1 0 0 8 -1 0zm4 0l-2 -3 2 -1 2 4 -2 0z"/>
					<Path id="2" fill="white" fill-rule="nonzero" d="M710 438c0,0 -1,0 -1,0 0,0 -1,-1 -1,-1 0,0 0,-1 0,-2l0 -2c0,0 0,-1 0,-1 0,-1 1,-1 1,-1 0,-1 1,-1 1,-1 1,0 2,0 2,1 0,0 1,0 1,1 0,0 0,1 0,1l0 2c0,1 0,2 0,2 0,0 -1,1 -1,1 0,0 -1,0 -2,0zm0 -1c1,0 1,0 2,0 0,-1 0,-1 0,-2l0 -2c0,0 0,-1 0,-1 -1,-1 -1,-1 -2,-1 0,0 0,0 -1,1 0,0 0,1 0,1l0 2c0,1 0,1 0,2 1,0 1,0 1,0z"/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M718 438c-1,0 -2,0 -2,0 -1,-1 -1,-2 -1,-3l0 -5 1 0 0 5c0,1 0,1 0,2 1,0 1,0 2,0 0,0 1,0 1,0 0,-1 0,-1 0,-2l0 -5 1 0 0 5c0,1 0,2 0,3 -1,0 -2,0 -2,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M723 435l0 -1 2 0c1,0 1,0 1,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 -1,-1l-2 0 0 -1 2 0c1,0 1,0 1,1 1,0 1,0 1,0 0,1 1,1 1,2 0,0 -1,1 -1,1 0,0 0,1 -1,1 0,0 0,0 -1,0l-2 0zm-1 3l0 -8 1 0 0 8 -1 0z"/>
					<Polygon id="5" fill="white" fill-rule="nonzero" points="733,430 733,438 731,438 731,432 730,432 730,431 731,430 "/>
					<Rect fill="#3363B7" x="341" y="426" width="70.0959" height="16.1759"/>
					<Path fill="white" fill-rule="nonzero" d="M359 434l3 0 0 1c0,1 0,1 0,2 -1,0 -1,1 -1,1 -1,0 -1,0 -2,0 0,0 -1,0 -1,0 -1,0 -1,-1 -1,-1 0,0 0,-1 0,-1l0 -3c0,0 0,-1 0,-1 0,-1 0,-1 1,-1 0,-1 1,-1 1,-1 1,0 1,0 2,1 0,0 0,0 0,0 1,1 1,1 1,2l-1 0c0,-1 0,-1 -1,-1 0,-1 0,-1 -1,-1 0,0 -1,0 -1,1 0,0 0,1 0,1l0 3c0,0 0,0 0,1 0,0 1,0 1,0 1,0 1,0 1,0 1,-1 1,-1 1,-2l0 0 -2 0 0 -1z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M364 435l0 -1 3 0c0,0 1,0 1,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 -1,-1 -1,-1l-3 0 0 -1 3 0c1,0 1,0 1,1 1,0 1,0 1,0 0,1 0,1 0,2 0,0 0,0 0,1 0,0 0,0 -1,1 0,0 0,0 -1,0l-3 0zm0 3l0 -8 1 0 0 8 -1 0zm4 0l-2 -3 2 -1 2 4 -2 0z"/>
					<Path id="2" fill="white" fill-rule="nonzero" d="M373 438c0,0 -1,0 -1,0 0,0 -1,-1 -1,-1 0,0 0,-1 0,-2l0 -2c0,0 0,-1 0,-1 0,-1 1,-1 1,-1 0,-1 1,-1 1,-1 1,0 2,0 2,1 0,0 1,0 1,1 0,0 0,1 0,1l0 2c0,1 0,2 0,2 0,0 -1,1 -1,1 0,0 -1,0 -2,0zm0 -1c1,0 1,0 2,0 0,-1 0,-1 0,-2l0 -2c0,0 0,-1 0,-1 -1,-1 -1,-1 -2,-1 0,0 0,0 -1,1 0,0 0,1 0,1l0 2c0,1 0,1 0,2 1,0 1,0 1,0z"/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M381 438c-1,0 -2,0 -2,0 -1,-1 -1,-2 -1,-3l0 -5 1 0 0 5c0,1 0,1 0,2 1,0 1,0 2,0 0,0 1,0 1,0 0,-1 0,-1 0,-2l0 -5 1 0 0 5c0,1 0,2 0,3 -1,0 -2,0 -2,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M386 435l0 -1 2 0c1,0 1,0 1,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 -1,-1l-2 0 0 -1 2 0c1,0 1,0 1,1 1,0 1,0 1,0 0,1 1,1 1,2 0,0 -1,1 -1,1 0,0 0,1 -1,1 0,0 0,0 -1,0l-2 0zm-1 3l0 -8 1 0 0 8 -1 0z"/>
					<Path id="5" fill="white" fill-rule="nonzero" d="M396 438c-1,0 -2,0 -2,0 0,-1 -1,-1 -1,-2l0 0 1 0 0 0c0,1 1,1 1,1 0,0 0,0 1,0 0,0 0,0 0,0 1,0 1,0 1,-1l0 0c0,0 0,-1 0,-1 -1,0 -1,0 -1,0l-1 0 0 -1 1 0c0,0 0,-1 0,-1 1,0 1,0 1,0l0 -1c0,0 0,0 -1,0 0,-1 0,-1 0,-1 -1,0 -1,0 -1,1 0,0 0,0 0,0l0 0 -2 0 0 0c1,0 1,-1 1,-1 1,-1 1,-1 2,-1 0,0 1,0 1,1 1,0 1,1 1,1l0 1c0,0 0,0 -1,1 0,0 0,0 0,0 0,0 0,0 1,1 0,0 0,0 0,1l0 0c0,1 0,1 -1,2 0,0 -1,0 -1,0z"/>
				   </G>
				   <G id="h2l9a">
					<Rect fill="#40B984" x="294" y="454" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="311,466 310,466 310,463 306,463 306,466 304,466 304,458 306,458 306,461 310,461 310,458 311,458 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M315 465l3 0 0 1 -5 0 0 0c0,-1 0,-1 0,-2 0,0 0,0 1,0 0,-1 0,-1 0,-1 1,0 1,-1 1,-1 0,0 0,0 1,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,-1 0,-1 -1,-1 0,0 -1,1 -2,1l0 -1c1,-1 2,-1 3,-1 0,0 0,0 1,0 0,0 0,0 1,0 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,0 0,1 0,1 0,0 -1,0 -1,1 0,0 0,0 -1,0 0,0 0,1 0,1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,1 0,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="325,466 320,466 320,458 322,458 322,465 325,465 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M331 462c0,0 0,1 0,2 0,0 0,1 0,1 -1,1 -1,1 -2,1 0,0 -1,0 -1,0 -1,0 -1,0 -2,0l0 -1c1,0 1,0 2,0 0,0 1,0 1,-1 1,0 1,-1 1,-1l0 -1c-1,1 -1,1 -2,1 0,0 -1,0 -1,0 0,0 0,0 -1,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 1,-1 1,-1 1,-1 1,0 1,0 2,0 0,0 0,0 1,0 0,0 0,1 1,1 0,0 0,1 0,1 0,1 0,1 0,2zm-1 -1c0,0 0,-1 0,-1 -1,0 -1,0 -1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,1 0,0 0,0 0,0 -1,0 -1,0 -1,1 0,0 0,0 1,0 0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 1,-1 1,-1 0,0 0,0 0,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M340 466l-2 0 0 -2 -3 0 -1 2 -2 0 3 -8 2 0 3 8zm-3 -3l-1 -3c0,0 0,0 0,-1l0 0c0,1 0,1 0,1l-1 3 2 0z"/>
					<G>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M333 522c0,-2 -1,-4 -1,-7 0,-6 1,-10 3,-10 1,0 3,4 3,10 0,3 -1,5 -1,7l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M333 520c0,0 0,0 0,0l4 0c0,0 0,0 0,0l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M333 522c0,0 0,-1 0,-2l4 0c0,1 0,1 0,2l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M335 505c1,0 3,4 3,10 0,3 -1,5 -1,7l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M335 520l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M335 520l2 0c0,1 0,1 0,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M319 534c0,3 2,5 4,5l-2 -59c-2,6 -3,13 -3,19l1 35z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M326 533c-1,4 -2,6 -3,6l-2 -59c2,6 4,13 4,19l1 34z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M322 535c-1,0 -2,-1 -2,-2 0,2 1,4 2,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M322 535c2,0 3,-1 3,-2 0,2 -1,3 -3,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M309 506c1,-1 3,4 3,9 0,3 0,6 -1,7l-2 1 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M309 520l3 0c0,0 -1,1 -1,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M309 521l2 0c0,0 0,1 0,1l-2 1 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M309 506c-2,0 -3,4 -3,9 0,3 1,6 1,8l2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M309 520l-2 0c0,1 0,1 0,1l2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M309 521l-2 0c0,1 0,1 0,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M320 523l-23 -17 -1 -7 23 11c2,8 2,12 1,13z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M296 509c1,0 1,-3 1,-6 0,-4 -1,-7 -1,-7 0,0 -1,3 -1,7 0,3 1,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M324 523l23 -18 0 -7 -22 12c-2,8 -2,12 -1,13z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M347 508c0,0 0,-3 -1,-7 0,-3 1,-6 1,-6 1,0 1,3 1,6 0,4 0,7 -1,7z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M320 488c0,0 -9,-7 -9,-7l0 -3 10 4 -1 6z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M323 488c-1,0 8,-7 8,-7l0 -4 -9 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M322 494c-1,-1 -2,-2 -2,-4 0,-3 0,-5 1,-7l0 -6 1 17z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 1")} d="M322 494c0,-1 0,-2 1,-4 -1,-3 -1,-5 -1,-8l-1 -5 1 17z"/>
					</G>
				   </G>
				   <G id="h2l7a">
					<Rect fill="#40B984" x="407" y="454" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<G>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M446 522c0,-2 -1,-4 -1,-7 0,-6 1,-10 3,-10 1,0 3,4 3,10 0,3 0,5 -1,7l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M446 520c0,0 0,0 0,0l5 0c0,0 0,0 0,0l-5 0z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M446 522c0,0 0,-1 0,-2l5 0c-1,1 -1,1 -1,2l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M448 505c1,0 3,4 3,10 0,3 0,5 -1,7l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M448 520l3 0c0,0 0,0 0,0l-3 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M448 520l3 0c-1,1 -1,1 -1,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M432 534c1,3 2,5 4,5l-2 -59c-1,6 -2,13 -2,19l0 35z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M439 533c0,4 -1,6 -3,6l-2 -59c3,6 4,13 4,19l1 34z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M436 535c-2,0 -3,-1 -3,-2 0,2 1,4 3,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M436 535c1,0 2,-1 2,-2 0,2 -1,3 -2,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M422 506c2,-1 3,4 3,9 0,3 0,6 -1,7l-2 1 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M422 520l3 0c0,0 0,1 0,1l-3 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M422 521l3 0c0,0 -1,1 -1,1l-2 1 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M422 506c-1,0 -3,4 -3,9 1,3 1,6 2,8l1 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M422 520l-2 0c0,1 0,1 0,1l2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M422 521l-2 0c0,1 0,1 1,2l1 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M433 523l-23 -17 0 -7 22 11c2,8 3,12 1,13z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M410 509c0,0 0,-3 0,-6 0,-4 0,-7 -1,-7 0,0 -1,3 0,7 0,3 0,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M438 523l22 -18 0 -7 -22 12c-2,8 -2,12 0,13z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M461 508c-1,0 -1,-3 -1,-7 0,-3 0,-6 0,-6 1,0 1,3 1,6 0,4 0,7 0,7z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M433 488c1,0 -9,-7 -9,-7l0 -3 10 4 -1 6z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M436 488c0,0 9,-7 9,-7l0 -4 -10 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M435 494c-1,-1 -1,-2 -1,-4 0,-3 0,-5 0,-7l0 -6 1 17z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 1")} d="M435 494c0,-1 1,-2 1,-4 0,-3 0,-5 -1,-8l-1 -5 1 17z"/>
					</G>
					<Polygon fill="white" fill-rule="nonzero" points="424,466 422,466 422,463 419,463 419,466 417,466 417,458 419,458 419,461 422,461 422,458 424,458 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M428 465l3 0 0 1 -5 0 0 0c0,-1 0,-1 0,-2 0,0 0,0 0,0 1,-1 1,-1 1,-1 0,0 0,-1 1,-1 0,0 0,0 0,0 1,0 1,-1 1,-1 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,-1 -1,-1 -1,-1 -1,0 -1,1 -2,1l0 -1c1,-1 1,-1 2,-1 1,0 1,0 1,0 1,0 1,0 1,0 1,1 1,1 1,1 0,0 0,1 0,1 0,1 0,1 0,1 0,0 0,1 -1,1 0,0 0,0 0,1 -1,0 -1,0 -1,0 0,0 0,0 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="438,466 433,466 433,458 435,458 435,465 438,465 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M444 459c0,1 0,1 -1,2 0,0 0,1 -1,2 0,0 0,1 0,1 0,1 0,2 -1,2l-1 0c0,0 0,-1 0,-2 0,0 0,-1 1,-1 0,-1 0,-1 0,-2 1,-1 1,-1 1,-2l-4 0 0 -1 6 0 0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M453 466l-2 0 -1 -2 -3 0 0 2 -2 0 3 -8 2 0 3 8zm-3 -3l-1 -3c0,0 0,0 0,-1l0 0c0,1 0,1 0,1l-1 3 2 0z"/>
				   </G>
				   <G id="h2l8a">
					<Rect fill="#40B984" x="351" y="454" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<G>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M390 522c-1,-2 -1,-4 -1,-7 0,-6 1,-10 2,-10 2,0 3,4 3,10 0,3 0,5 0,7l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M389 520c0,0 0,0 0,0l5 0c0,0 0,0 0,0l-5 0z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M390 522c0,0 -1,-1 -1,-2l5 0c0,1 0,1 0,2l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M391 505c2,0 3,4 3,10 0,3 0,5 0,7l-2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M392 520l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M392 520l2 0c0,1 0,1 0,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M376 534c0,3 1,5 3,5l-1 -59c-2,6 -3,13 -3,19l1 35z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M382 533c0,4 -1,6 -3,6l-1 -59c2,6 3,13 4,19l0 34z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M379 535c-1,0 -2,-1 -3,-2 1,2 1,4 3,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M379 535c1,0 2,-1 3,-2 -1,2 -1,3 -3,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M365 506c2,-1 3,4 3,9 1,3 0,6 0,7l-2 1 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M366 520l2 0c0,0 0,1 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M366 521l2 0c0,0 0,1 0,1l-2 1 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M365 506c-1,0 -2,4 -2,9 0,3 0,6 1,8l2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M366 520l-3 0c0,1 0,1 1,1l2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M366 521l-2 0c0,1 0,1 0,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M376 523l-23 -17 0 -7 22 11c3,8 3,12 1,13z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M353 509c0,0 1,-3 1,-6 -1,-4 -1,-7 -1,-7 -1,0 -1,3 -1,7 0,3 0,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M381 523l22 -18 0 -7 -21 12c-3,8 -3,12 -1,13z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M404 508c0,0 -1,-3 -1,-7 0,-3 0,-6 1,-6 0,0 1,3 1,6 0,4 -1,7 -1,7z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M377 488c0,0 -9,-7 -9,-7l0 -3 9 4 0 6z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M379 488c0,0 9,-7 9,-7l0 -4 -10 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M378 494c0,-1 -1,-2 -1,-4 0,-3 0,-5 0,-7l1 -6 0 17z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 1")} d="M378 494c1,-1 1,-2 1,-4 0,-3 0,-5 0,-8l-1 -5 0 17z"/>
					</G>
					<Polygon fill="white" fill-rule="nonzero" points="367,466 366,466 366,463 362,463 362,466 360,466 360,458 362,458 362,461 366,461 366,458 367,458 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M371 465l3 0 0 1 -5 0 0 0c0,-1 0,-1 0,-2 0,0 0,0 1,-1 0,0 0,0 0,0 1,0 1,-1 1,-1 0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 1,0 1,-1 1,-1 0,0 -1,0 -1,-1 0,0 0,0 -1,0 0,0 -1,0 -2,1l0 -2c1,0 2,0 3,0 0,0 1,0 1,0 0,0 0,0 1,0 0,1 0,1 0,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 -1,0 -1,1 0,0 0,0 -1,0 0,0 0,0 0,1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,1 0,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="381,466 376,466 376,458 378,458 378,465 381,465 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M382 464c0,0 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 1,-1 0,0 0,0 0,0 0,0 0,-1 -1,-1 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,0 1,0 1,-1 0,0 0,0 1,0 0,0 0,0 1,0 0,0 0,0 1,0 0,0 0,0 1,0 0,1 0,1 0,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 -1,1 -1,1 0,0 0,0 1,0 0,0 0,0 0,1 0,0 0,0 1,0 0,0 0,1 0,1 0,0 0,1 -1,1 0,0 0,0 0,1 0,0 -1,0 -1,0 0,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,-1 -1,-1 -1,-1 0,0 0,-1 0,-1zm1 0c0,0 0,0 1,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 -1,1zm1 -4c0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 0,-1 -1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M396 466l-2 0 0 -2 -3 0 -1 2 -2 0 3 -8 2 0 3 8zm-3 -3l-1 -3c0,0 0,0 0,-1l0 0c0,1 0,1 0,1l-1 3 2 0z"/>
				   </G>
				   <G id="h2l8b">
					<G>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M390 617c-1,-1 -1,-4 -1,-7 0,-5 1,-10 2,-10 2,0 3,5 3,10 0,3 0,5 0,7l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M389 616c0,0 0,-1 0,-1l5 0c0,0 0,0 0,1l-5 0z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M390 617c0,0 -1,-1 -1,-1l5 0c0,0 0,1 0,1l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M391 600c2,0 3,5 3,10 0,3 0,5 0,7l-2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M392 615l2 0c0,0 0,0 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M392 616l2 0c0,0 0,1 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M376 629c0,4 1,5 3,6l-1 -59c-2,6 -3,12 -3,19l1 34z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M382 629c0,3 -1,5 -3,6l-1 -59c2,6 3,12 4,18l0 35z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M379 630c-1,1 -2,-1 -3,-2 1,2 1,4 3,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M379 630c1,1 2,-1 3,-2 -1,2 -1,4 -3,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M365 601c2,0 3,4 3,9 1,3 0,6 0,8l-2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M366 616l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M366 616l2 0c0,1 0,1 0,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M365 601c-1,0 -2,4 -2,10 0,3 0,5 1,7l2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M366 616l-3 0c0,0 0,0 1,0l2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M366 616l-2 0c0,1 0,1 0,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M376 619l-23 -18 0 -7 22 11c3,8 3,12 1,14z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M353 604c0,0 1,-3 1,-6 -1,-4 -1,-6 -1,-6 -1,0 -1,2 -1,6 0,3 0,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M381 618l22 -18 0 -7 -21 12c-3,8 -3,12 -1,13z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M404 603c0,0 -1,-3 -1,-6 0,-4 0,-7 1,-7 0,0 1,3 1,7 0,3 -1,6 -1,6z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M377 583c0,0 -9,-7 -9,-7l0 -3 9 4 0 6z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M379 583c0,0 9,-7 9,-7l0 -4 -10 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M378 589c0,-1 -1,-2 -1,-4 0,-2 0,-5 0,-7l1 -5 0 16z"/>
					 <Path fill={this.getColor("H2","LINE 8","Slot 2")} d="M378 589c1,-1 1,-2 1,-4 0,-2 0,-5 0,-7l-1 -5 0 16z"/>
					</G>
					<Rect fill="#40B984" x="351" y="549" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="368,561 366,561 366,558 363,558 363,561 361,561 361,553 363,553 363,557 366,557 366,553 368,553 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M371 560l4 0 0 1 -6 0 0 0c0,-1 1,-1 1,-1 0,-1 0,-1 0,-1 0,0 1,-1 1,-1 0,0 0,0 1,0 0,-1 0,-1 0,-1 0,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 -1,0 -1,0 -1,0 -2,0 -2,0l0 -1c1,-1 1,-1 2,-1 1,0 1,0 1,0 1,0 1,0 1,1 0,0 1,0 1,0 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 0,0 0,1 0,1 -1,0 -1,0 -1,0 0,1 0,1 -1,1 0,0 0,0 0,0 0,0 0,1 0,1 -1,0 -1,0 -1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="382,561 377,561 377,553 379,553 379,560 382,560 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M382 559c0,0 0,0 0,0 0,-1 1,-1 1,-1 0,0 0,0 0,-1 0,0 1,0 1,0 -1,0 -1,0 -1,-1 0,0 0,0 0,-1 0,0 0,0 0,-1 0,0 0,0 0,0 1,-1 1,-1 1,-1 0,0 1,0 1,0 1,0 1,0 1,0 1,0 1,0 1,1 0,0 1,0 1,0 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 -1,1 0,0 0,0 0,0 0,1 1,1 1,1 0,0 0,0 0,1 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,1 -1,1 0,0 0,0 -1,0 0,1 0,1 -1,1 0,0 -1,0 -1,-1 0,0 -1,0 -1,0 0,0 0,0 -1,-1 0,0 0,0 0,-1zm2 0c0,0 0,0 0,1 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,1 0,0 0,0 0,0zm0 -4c0,1 0,1 0,1 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,1 0,1 -1,0 -1,0 -1,0 0,0 0,0 0,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M390 561l0 -8 3 0c0,0 1,0 2,1 0,0 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1l0 0c0,0 1,0 1,1 1,0 1,0 1,1 0,1 0,1 -1,2 -1,0 -1,0 -2,0l-3 0zm1 -6l0 2 1 0c1,0 1,-1 1,-1 0,0 0,0 0,-1 0,0 0,0 -1,0l-1 0zm0 3l0 2 1 0c1,0 1,0 1,0 1,0 1,-1 1,-1 0,0 0,-1 -1,-1 0,0 0,0 -1,0l-1 0z"/>
				   </G>
				   <G id="ph2l9b">
					<G>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M333 617c0,-1 -1,-4 -1,-7 0,-5 1,-10 3,-10 1,0 3,5 3,10 0,3 -1,5 -1,7l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M333 616c0,0 0,-1 0,-1l4 0c0,0 0,0 0,1l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M333 617c0,0 0,-1 0,-1l4 0c0,0 0,1 0,1l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M335 600c1,0 3,5 3,10 0,3 -1,5 -1,7l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M335 615l2 0c0,0 0,0 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M335 616l2 0c0,0 0,1 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M319 629c0,4 2,5 4,6l-2 -59c-2,6 -3,12 -3,19l1 34z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M326 629c-1,3 -2,5 -3,6l-2 -59c2,6 4,12 4,18l1 35z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M322 630c-1,1 -2,-1 -2,-2 0,2 1,4 2,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M322 630c2,1 3,-1 3,-2 0,2 -1,4 -3,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M309 601c1,0 3,4 3,9 0,3 0,6 -1,8l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M309 616l3 0c0,0 -1,0 -1,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M309 616l2 0c0,1 0,1 0,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M309 601c-2,0 -3,4 -3,10 0,3 1,5 1,7l2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M309 616l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M309 616l-2 0c0,1 0,1 0,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M320 619l-23 -18 -1 -7 23 11c2,8 2,12 1,14z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M296 604c1,0 1,-3 1,-6 0,-4 -1,-6 -1,-6 0,0 -1,2 -1,6 0,3 1,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M324 618l23 -18 0 -7 -22 12c-2,8 -2,12 -1,13z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M347 603c0,0 0,-3 -1,-6 0,-4 1,-7 1,-7 1,0 1,3 1,7 0,3 0,6 -1,6z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M320 583c0,0 -9,-7 -9,-7l0 -3 10 4 -1 6z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M323 583c-1,0 8,-7 8,-7l0 -4 -9 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M322 589c-1,-1 -2,-2 -2,-4 0,-2 0,-5 1,-7l0 -5 1 16z"/>
					 <Path fill={this.getColor("H2","LINE 9","Slot 2")} d="M322 589c0,-1 0,-2 1,-4 -1,-2 -1,-5 -1,-7l-1 -5 1 16z"/>
					</G>
					<Rect fill="#40B984" x="294" y="549" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="311,561 310,561 310,558 306,558 306,561 304,561 304,553 306,553 306,556 310,556 310,553 311,553 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M315 560l3 0 0 1 -5 0 0 0c0,-1 0,-1 0,-1 0,-1 0,-1 1,-1 0,0 0,-1 0,-1 1,0 1,0 1,0 0,-1 0,-1 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 -1,0 0,0 -1,0 -2,0l0 -1c1,-1 2,-1 3,-1 0,0 0,0 1,0 0,0 0,0 1,1 0,0 0,0 0,0 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,0 -1,1 -1,1 0,0 0,0 -1,0 0,1 0,1 0,1 0,0 -1,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="325,561 320,561 320,553 322,553 322,560 325,560 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M331 557c0,1 0,1 0,2 0,0 0,1 0,1 -1,1 -1,1 -2,1 0,1 -1,1 -1,1 -1,0 -1,0 -2,-1l0 -1c1,0 1,0 2,0 0,0 1,0 1,0 1,-1 1,-1 1,-2l0 0c-1,0 -1,1 -2,1 0,0 -1,-1 -1,-1 0,0 0,0 -1,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,-1 0,-1 0,-1 1,0 1,-1 1,-1 1,0 1,0 2,0 0,0 0,0 1,0 0,0 0,1 1,1 0,0 0,1 0,1 0,1 0,1 0,2zm-1 -1c0,0 0,0 0,-1 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,0 -1,0 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,1 -1,1 0,0 0,0 1,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,-1 0,0 0,0 0,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M333 561l0 -8 3 0c1,0 2,0 2,1 1,0 1,1 1,1 0,1 0,1 -1,1 0,1 0,1 -1,1l0 0c1,0 1,0 2,1 0,0 0,0 0,1 0,1 0,1 -1,2 0,0 -1,0 -2,0l-3 0zm2 -6l0 2 1 0c0,0 0,-1 1,-1 0,0 0,0 0,-1 0,0 -1,0 -1,0l-1 0zm0 3l0 2 1 0c0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0l-1 0z"/>
				   </G>
				   <G id="ph2l7b">
					<G>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M446 617c0,-1 -1,-4 -1,-7 0,-5 1,-10 3,-10 1,0 3,5 3,10 0,3 0,5 -1,7l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M446 616c0,0 0,-1 0,-1l5 0c0,0 0,0 0,1l-5 0z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M446 617c0,0 0,-1 0,-1l5 0c-1,0 -1,1 -1,1l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M448 600c1,0 3,5 3,10 0,3 0,5 -1,7l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M448 615l3 0c0,0 0,0 0,1l-3 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M448 616l3 0c-1,0 -1,1 -1,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M432 629c1,4 2,5 4,6l-2 -59c-1,6 -2,12 -2,19l0 34z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M439 629c0,3 -1,5 -3,6l-2 -59c3,6 4,12 4,18l1 35z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M436 630c-2,1 -3,-1 -3,-2 0,2 1,4 3,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M436 630c1,1 2,-1 2,-2 0,2 -1,4 -2,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M422 601c2,0 3,4 3,9 0,3 0,6 -1,8l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M422 616l3 0c0,0 0,0 0,0l-3 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M422 616l3 0c0,1 -1,1 -1,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M422 601c-1,0 -3,4 -3,10 1,3 1,5 2,7l1 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M422 616l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M422 616l-2 0c0,1 0,1 1,2l1 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M433 619l-23 -18 0 -7 22 11c2,8 3,12 1,14z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M410 604c0,0 0,-3 0,-6 0,-4 0,-6 -1,-6 0,0 -1,2 0,6 0,3 0,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M438 618l22 -18 0 -7 -22 12c-2,8 -2,12 0,13z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M461 603c-1,0 -1,-3 -1,-6 0,-4 0,-7 0,-7 1,0 1,3 1,7 0,3 0,6 0,6z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M433 583c1,0 -9,-7 -9,-7l0 -3 10 4 -1 6z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M436 583c0,0 9,-7 9,-7l0 -4 -10 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M435 589c-1,-1 -1,-2 -1,-4 0,-2 0,-5 0,-7l0 -5 1 16z"/>
					 <Path fill={this.getColor("H2","LINE 7","Slot 2")} d="M435 589c0,-1 1,-2 1,-4 0,-2 0,-5 -1,-7l-1 -5 1 16z"/>
					</G>
					<Rect fill="#40B984" x="407" y="549" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="425,562 423,562 423,558 419,558 419,562 417,562 417,553 419,553 419,557 423,557 423,553 425,553 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M428 560l4 0 0 2 -6 0 0 -1c0,-1 0,-1 0,-1 0,-1 1,-1 1,-1 0,0 0,-1 1,-1 0,0 0,0 0,0 0,-1 1,-1 1,-1 0,0 0,0 0,0 0,-1 1,-1 1,-1 0,0 0,0 0,0 0,-1 0,-1 -1,-1 0,0 0,0 0,0 -1,0 -2,0 -3,0l0 -1c1,-1 2,-1 3,-1 0,0 1,0 1,0 0,0 1,1 1,1 0,0 0,0 0,1 1,0 1,0 1,0 0,1 0,1 -1,1 0,1 0,1 0,1 0,1 0,1 -1,1 0,0 0,0 -1,1 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="438,562 433,562 433,553 435,553 435,560 438,560 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M445 554c-1,1 -1,2 -1,2 -1,1 -1,1 -1,2 0,0 0,1 -1,2 0,0 0,1 0,2l-2 0c0,-1 0,-2 1,-2 0,-1 0,-1 0,-2 0,-1 1,-1 1,-2 0,0 1,-1 1,-1l-4 0 0 -2 6 0 0 1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M446 562l0 -9 3 0c1,0 2,0 2,1 1,0 1,1 1,1 0,1 0,1 0,1 -1,1 -1,1 -2,1l0 0c1,0 2,0 2,1 0,0 0,1 0,1 0,1 0,1 0,2 -1,0 -2,1 -3,1l-3 0zm2 -7l0 2 1 0c0,0 1,0 1,-1 0,0 0,0 0,0 0,-1 0,-1 -1,-1l-1 0zm0 3l0 2 1 0c0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0l-1 0z"/>
				   </G>
				   <G id="ph2l6a">
					<Rect fill="#40B984" x="466" y="454" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<G>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M505 522c-1,-2 -1,-4 -1,-7 0,-6 1,-10 2,-10 2,0 3,4 3,10 1,3 0,5 0,7l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M504 520c0,0 0,0 0,0l5 0c0,0 0,0 0,0l-5 0z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M505 522c0,0 0,-1 -1,-2l5 0c0,1 0,1 0,2l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M506 505c2,0 3,4 3,10 1,3 0,5 0,7l-2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M507 520l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M507 520l2 0c0,1 0,1 0,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M491 534c0,3 1,5 3,5l-1 -59c-2,6 -3,13 -3,19l1 35z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M497 533c0,4 -1,6 -3,6l-1 -59c2,6 3,13 4,19l0 34z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M494 535c-1,0 -2,-1 -2,-2 0,2 1,4 2,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M494 535c2,0 2,-1 3,-2 -1,2 -1,3 -3,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M481 506c1,-1 3,4 3,9 0,3 -1,6 -1,7l-2 1 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M481 520l2 0c0,0 0,1 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M481 521l2 0c0,0 0,1 0,1l-2 1 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M481 506c-2,0 -3,4 -3,9 0,3 0,6 1,8l2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M481 520l-2 0c0,1 0,1 0,1l2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M481 521l-2 0c0,1 0,1 0,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M492 523l-24 -17 0 -7 22 11c3,8 3,12 2,13z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M468 509c0,0 1,-3 1,-6 0,-4 -1,-7 -1,-7 -1,0 -1,3 -1,7 0,3 1,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M496 523l23 -18 0 -7 -22 12c-2,8 -2,12 -1,13z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M519 508c0,0 -1,-3 -1,-7 0,-3 0,-6 1,-6 0,0 1,3 1,6 0,4 0,7 -1,7z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M492 488c0,0 -9,-7 -9,-7l0 -3 9 4 0 6z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M494 488c0,0 9,-7 9,-7l0 -4 -9 5 0 6z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M493 494c0,-1 -1,-2 -1,-4 0,-3 0,-5 0,-7l1 -6 0 17z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 1")} d="M493 494c1,-1 1,-2 1,-4 0,-3 0,-5 0,-8l-1 -5 0 17z"/>
					</G>
					<Polygon fill="white" fill-rule="nonzero" points="483,466 481,466 481,463 477,463 477,466 475,466 475,458 477,458 477,461 481,461 481,458 483,458 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M486 465l4 0 0 1 -6 0 0 0c0,-1 0,-1 0,-2 0,0 1,0 1,-1 0,0 0,0 1,0 0,0 0,-1 0,-1 0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,0 -1,-1 0,0 0,0 0,0 -1,0 -2,0 -3,1l0 -2c1,0 2,0 3,0 0,0 1,0 1,0 0,0 1,0 1,0 0,1 0,1 0,1 1,0 1,1 1,1 0,0 0,1 -1,1 0,0 0,1 0,1 0,0 0,0 -1,1 0,0 0,0 -1,0 0,0 0,0 0,1 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,1 0,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="496,466 491,466 491,458 493,458 493,465 496,465 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M503 463c0,1 0,1 0,2 -1,0 -1,0 -1,0 0,1 -1,1 -1,1 0,0 -1,0 -1,0 0,0 -1,0 -1,0 -1,0 -1,0 -1,-1 0,0 -1,0 -1,-1 0,0 0,-1 0,-2 0,0 0,-1 0,-1 0,-1 1,-2 1,-2 0,0 1,-1 1,-1 1,0 1,0 2,0 0,0 1,0 1,0l0 1c0,0 -1,0 -1,0 0,0 -1,0 -1,0 0,0 0,1 -1,1 0,0 0,0 0,1 0,0 0,0 0,1l0 0c0,-1 1,-1 2,-1 0,0 0,0 1,0 0,0 0,0 0,1 0,0 1,0 1,0 0,1 0,1 0,1zm-2 1c0,-1 0,-2 -1,-2 0,0 0,0 0,0 -1,0 -1,0 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,0 0,0 0,1 0,1 1,1 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M511 466l-2 0 0 -2 -3 0 -1 2 -2 0 3 -8 3 0 2 8zm-3 -3l0 -3c-1,0 -1,0 -1,-1l0 0c0,1 0,1 0,1l-1 3 2 0z"/>
				   </G>
				   <G id="ph2l5a">
					<Rect fill="#40B984" x="523" y="454" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<G>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M562 522c-1,-2 -1,-4 -2,-7 0,-6 2,-10 3,-10 2,0 3,4 3,10 0,3 0,5 -1,7l-3 0z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M561 520c0,0 0,0 0,0l5 0c0,0 0,0 0,0l-5 0z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M562 522c-1,0 -1,-1 -1,-2l5 0c0,1 -1,1 -1,2l-3 0z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M563 505c2,0 3,4 3,10 0,3 0,5 -1,7l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M563 520l3 0c0,0 0,0 0,0l-3 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M563 520l3 0c0,1 -1,1 -1,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M547 534c1,3 2,5 4,5l-1 -59c-2,6 -3,13 -3,19l0 35z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M554 533c0,4 -1,6 -3,6l-1 -59c2,6 3,13 3,19l1 34z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M551 535c-2,0 -3,-1 -3,-2 1,2 1,4 3,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M551 535c1,0 2,-1 2,-2 0,2 -1,3 -2,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M537 506c2,-1 3,4 3,9 0,3 0,6 -1,7l-1 1 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M538 520l2 0c0,0 0,1 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M538 521l2 0c0,0 0,1 -1,1l-1 1 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M537 506c-1,0 -2,4 -2,9 0,3 0,6 1,8l2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M538 520l-3 0c0,1 0,1 0,1l3 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M538 521l-3 0c0,1 1,1 1,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M548 523l-23 -17 0 -7 22 11c3,8 3,12 1,13z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M525 509c0,0 0,-3 0,-6 0,-4 0,-7 -1,-7 0,0 0,3 0,7 0,3 0,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M553 523l22 -18 0 -7 -21 12c-3,8 -3,12 -1,13z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M576 508c-1,0 -1,-3 -1,-7 0,-3 0,-6 1,-6 0,0 0,3 0,6 1,4 0,7 0,7z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M549 488c0,0 -10,-7 -10,-7l0 -3 10 4 0 6z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M551 488c0,0 9,-7 9,-7l0 -4 -10 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M550 494c-1,-1 -1,-2 -1,-4 0,-3 0,-5 0,-7l1 -6 0 17z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 1")} d="M550 494c0,-1 1,-2 1,-4 0,-3 0,-5 -1,-8l0 -5 0 17z"/>
					</G>
					<Polygon fill="white" fill-rule="nonzero" points="539,466 537,466 537,463 534,463 534,466 532,466 532,458 534,458 534,461 537,461 537,458 539,458 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M543 465l3 0 0 1 -5 0 0 0c0,-1 0,-1 0,-2 0,0 0,0 0,-1 1,0 1,0 1,0 0,0 1,-1 1,-1 0,0 0,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,-1 0,0 0,0 -1,0 -1,0 -1,0 -2,1l0 -2c1,0 2,0 3,0 0,0 0,0 1,0 0,0 0,0 0,0 1,1 1,1 1,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 0,1 0,1 -1,0 -1,0 -1,1 0,0 -1,0 -1,0 0,0 0,0 0,1 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,1 0,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="553,466 548,466 548,458 550,458 550,465 553,465 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M554 466l0 -2c0,1 1,1 2,1 0,0 1,0 1,0 0,-1 0,-1 0,-1 0,-1 0,-2 -2,-2 0,0 0,0 -1,0l0 -4 5 0 0 1 -3 0 0 2c0,0 0,0 0,0 1,0 2,0 2,1 1,0 1,1 1,1 0,1 0,2 -1,3 0,0 -1,0 -2,0 -1,0 -2,0 -2,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M568 466l-2 0 -1 -2 -2 0 -1 2 -2 0 3 -8 2 0 3 8zm-3 -3l-1 -3c0,0 0,0 0,-1l0 0c0,1 0,1 0,1l-1 3 2 0z"/>
				   </G>
				   <G id="ph2l4a">
					<Rect fill="#40B984" x="579" y="454" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<G>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M618 522c0,-2 -1,-4 -1,-7 0,-6 1,-10 3,-10 1,0 3,4 3,10 0,3 -1,5 -1,7l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M618 520c0,0 0,0 0,0l4 0c0,0 0,0 0,0l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M618 522c0,0 0,-1 0,-2l4 0c0,1 0,1 0,2l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M620 505c1,0 3,4 3,10 0,3 -1,5 -1,7l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M620 520l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M620 520l2 0c0,1 0,1 0,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M604 534c0,3 2,5 3,5l-1 -59c-2,6 -3,13 -3,19l1 35z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M611 533c-1,4 -2,6 -4,6l-1 -59c2,6 4,13 4,19l1 34z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M607 535c-1,0 -2,-1 -2,-2 0,2 1,4 2,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M607 535c2,0 3,-1 3,-2 0,2 -1,3 -3,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M594 506c1,-1 3,4 3,9 0,3 0,6 -1,7l-2 1 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M594 520l3 0c0,0 -1,1 -1,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M594 521l2 0c0,0 0,1 0,1l-2 1 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M594 506c-2,0 -3,4 -3,9 0,3 1,6 1,8l2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M594 520l-2 0c0,1 0,1 0,1l2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M594 521l-2 0c0,1 0,1 0,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M605 523l-23 -17 -1 -7 23 11c2,8 2,12 1,13z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M581 509c1,0 1,-3 1,-6 0,-4 -1,-7 -1,-7 0,0 -1,3 -1,7 0,3 1,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M609 523l23 -18 0 -7 -22 12c-2,8 -2,12 -1,13z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M632 508c0,0 0,-3 -1,-7 0,-3 1,-6 1,-6 1,0 1,3 1,6 0,4 0,7 -1,7z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M605 488c0,0 -9,-7 -9,-7l0 -3 10 4 -1 6z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M608 488c-1,0 8,-7 8,-7l0 -4 -9 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M607 494c-1,-1 -2,-2 -2,-4 0,-3 0,-5 1,-7l0 -6 1 17z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 1")} d="M607 494c0,-1 0,-2 1,-4 -1,-3 -1,-5 -1,-8l-1 -5 1 17z"/>
					</G>
					<Polygon fill="white" fill-rule="nonzero" points="596,466 594,466 594,463 591,463 591,466 589,466 589,458 591,458 591,461 594,461 594,458 596,458 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M599 465l4 0 0 1 -6 0 0 0c0,-1 0,-1 1,-2 0,0 0,0 0,0 0,-1 0,-1 1,-1 0,0 0,-1 0,-1 1,0 1,0 1,0 0,0 0,-1 1,-1 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 -1,0 -2,1 -2,1l0 -1c0,-1 1,-1 2,-1 1,0 1,0 1,0 1,0 1,0 1,0 0,1 1,1 1,1 0,0 0,1 0,1 0,1 0,1 0,1 0,0 -1,1 -1,1 0,0 0,0 -1,1 0,0 0,0 0,0 0,0 -1,0 -1,1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,1 0,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="609,466 605,466 605,458 606,458 606,465 609,465 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M615 458l0 5 1 0 0 2 -1 0 0 1 -2 0 0 -1 -3 0 0 -2c0,0 1,-1 1,-1 0,0 1,-1 1,-1 0,-1 0,-1 1,-2 0,0 0,-1 0,-1l2 0zm-3 5l1 0 0 -3c0,1 0,1 0,1 0,0 0,1 0,1 -1,0 -1,0 -1,1 0,0 0,0 0,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M625 466l-2 0 -1 -2 -3 0 0 2 -2 0 3 -8 2 0 3 8zm-3 -3l-1 -3c0,0 0,0 0,-1l0 0c0,1 -1,1 -1,1l0 3 2 0z"/>
				   </G>
				   <G id="ph2l3a">
					<Rect fill="#40B984" x="637" y="454" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<G>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M676 522c-1,-2 -1,-4 -2,-7 0,-6 2,-10 3,-10 2,0 3,4 3,10 0,3 0,5 -1,7l-3 0z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M675 520c0,0 0,0 0,0l5 0c0,0 0,0 0,0l-5 0z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M676 522c-1,0 -1,-1 -1,-2l5 0c0,1 -1,1 -1,2l-3 0z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M677 505c2,0 3,4 3,10 0,3 0,5 -1,7l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M677 520l3 0c0,0 0,0 0,0l-3 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M677 520l3 0c0,1 -1,1 -1,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M661 534c1,3 2,5 4,5l-1 -59c-2,6 -3,13 -3,19l0 35z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M668 533c0,4 -1,6 -3,6l-1 -59c2,6 3,13 3,19l1 34z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M665 535c-2,0 -2,-1 -3,-2 1,2 1,4 3,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M665 535c1,0 2,-1 2,-2 0,2 -1,3 -2,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M651 506c2,-1 3,4 3,9 0,3 0,6 -1,7l-1 1 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M652 520l2 0c0,0 0,1 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M652 521l2 0c0,0 0,1 -1,1l-1 1 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M651 506c-1,0 -2,4 -2,9 0,3 0,6 1,8l2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M652 520l-3 0c0,1 0,1 0,1l3 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M652 521l-3 0c0,1 1,1 1,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M662 523l-23 -17 0 -7 22 11c3,8 3,12 1,13z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M639 509c0,0 0,-3 0,-6 0,-4 0,-7 -1,-7 0,0 0,3 0,7 0,3 0,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M667 523l22 -18 0 -7 -21 12c-3,8 -3,12 -1,13z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M690 508c-1,0 -1,-3 -1,-7 0,-3 0,-6 1,-6 0,0 0,3 0,6 1,4 0,7 0,7z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M663 488c0,0 -10,-7 -10,-7l0 -3 10 4 0 6z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M665 488c0,0 9,-7 9,-7l0 -4 -10 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M664 494c-1,-1 -1,-2 -1,-4 0,-3 0,-5 0,-7l1 -6 0 17z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 1")} d="M664 494c0,-1 1,-2 1,-4 0,-3 0,-5 -1,-8l0 -5 0 17z"/>
					</G>
					<Polygon fill="white" fill-rule="nonzero" points="653,466 651,466 651,463 648,463 648,466 646,466 646,458 648,458 648,461 651,461 651,458 653,458 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M657 465l3 0 0 1 -5 0 0 0c0,-1 0,-1 0,-2 0,0 0,0 0,-1 1,0 1,0 1,0 0,0 1,-1 1,-1 0,0 0,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,-1 0,0 0,0 -1,0 -1,0 -1,0 -2,1l0 -2c1,0 2,0 3,0 0,0 0,0 1,0 0,0 0,0 1,0 0,1 0,1 0,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 0,1 0,1 -1,0 -1,0 -1,1 0,0 -1,0 -1,0 0,0 0,0 0,1 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,1 0,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="667,466 662,466 662,458 664,458 664,465 667,465 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M668 466l0 -2c0,1 1,1 2,1 0,0 1,0 1,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 -1,0 -1,0 -2,0l0 0 0 -2 0 0c1,0 2,0 2,-1 0,-1 -1,-1 -1,-1 -1,0 -1,0 -2,1l0 -2c1,0 1,0 2,0 1,0 2,0 2,0 1,1 1,1 1,2 0,1 -1,2 -2,2l0 0c1,0 1,0 2,0 0,1 0,1 0,2 0,1 0,1 -1,2 0,0 -1,0 -2,0 -1,0 -2,0 -2,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M682 466l-2 0 -1 -2 -2 0 -1 2 -2 0 3 -8 2 0 3 8zm-3 -3l-1 -3c0,0 0,0 0,-1l0 0c0,1 0,1 0,1l-1 3 2 0z"/>
				   </G>
				   <G id="ph2l2a">
					<Rect fill="#40B984" x="693" y="454" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<G>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M732 522c0,-2 -1,-4 -1,-7 0,-6 1,-10 3,-10 1,0 3,4 3,10 0,3 -1,5 -1,7l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M732 520c0,0 0,0 0,0l4 0c0,0 0,0 0,0l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M732 522c0,0 0,-1 0,-2l4 0c0,1 0,1 0,2l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M734 505c1,0 3,4 3,10 0,3 -1,5 -1,7l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M734 520l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M734 520l2 0c0,1 0,1 0,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M718 534c0,3 2,5 4,5l-2 -59c-2,6 -3,13 -3,19l1 35z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M725 533c-1,4 -2,6 -3,6l-2 -59c2,6 4,13 4,19l1 34z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M721 535c-1,0 -2,-1 -2,-2 0,2 1,4 2,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M721 535c2,0 3,-1 3,-2 0,2 -1,3 -3,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M708 506c1,-1 3,4 3,9 0,3 0,6 -1,7l-2 1 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M708 520l3 0c0,0 0,1 -1,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M708 521l2 0c0,0 0,1 0,1l-2 1 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M708 506c-2,0 -3,4 -3,9 0,3 1,6 1,8l2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M708 520l-2 0c0,1 0,1 0,1l2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M708 521l-2 0c0,1 0,1 0,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M719 523l-23 -17 -1 -7 23 11c2,8 2,12 1,13z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M695 509c1,0 1,-3 1,-6 0,-4 -1,-7 -1,-7 0,0 -1,3 -1,7 0,3 1,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M724 523l22 -18 0 -7 -22 12c-2,8 -2,12 0,13z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M746 508c0,0 0,-3 -1,-7 0,-3 1,-6 1,-6 1,0 1,3 1,6 0,4 0,7 -1,7z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M719 488c0,0 -9,-7 -9,-7l0 -3 10 4 -1 6z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M722 488c-1,0 8,-7 8,-7l0 -4 -9 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M721 494c-1,-1 -2,-2 -2,-4 0,-3 0,-5 1,-7l0 -6 1 17z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 1")} d="M721 494c0,-1 1,-2 1,-4 -1,-3 -1,-5 -1,-8l-1 -5 1 17z"/>
					</G>
					<Polygon fill="white" fill-rule="nonzero" points="710,466 708,466 708,463 705,463 705,466 703,466 703,458 705,458 705,461 708,461 708,458 710,458 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M713 465l4 0 0 1 -6 0 0 0c0,-1 0,-1 1,-2 0,0 0,0 0,0 0,-1 1,-1 1,-1 0,0 0,-1 0,-1 1,0 1,0 1,0 0,0 0,-1 1,-1 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 -1,0 -2,1 -2,1l0 -1c0,-1 1,-1 2,-1 1,0 1,0 1,0 1,0 1,0 1,0 0,1 1,1 1,1 0,0 0,1 0,1 0,1 0,1 0,1 0,0 -1,1 -1,1 0,0 0,0 0,1 -1,0 -1,0 -1,0 0,0 -1,0 -1,1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,1 0,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="724,466 719,466 719,458 720,458 720,465 724,465 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M726 465l4 0 0 1 -6 0 0 0c0,-1 0,-1 0,-2 1,0 1,0 1,0 0,-1 0,-1 1,-1 0,0 0,-1 0,-1 1,0 1,0 1,0 0,0 0,-1 0,-1 1,0 1,0 1,0 0,0 0,0 0,-1 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 -1,0 -2,1 -2,1l0 -1c0,-1 1,-1 2,-1 0,0 1,0 1,0 0,0 1,0 1,0 0,1 0,1 0,1 1,0 1,1 1,1 0,1 0,1 -1,1 0,0 0,1 0,1 0,0 0,0 -1,1 0,0 0,0 0,0 -1,0 -1,0 -1,1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,1 0,1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M739 466l-2 0 -1 -2 -3 0 0 2 -2 0 3 -8 2 0 3 8zm-3 -3l-1 -3c0,0 0,0 0,-1l0 0c0,1 0,1 -1,1l0 3 2 0z"/>
				   </G>
				   <G id="ph2l1a">
					<Rect fill="#40B984" x="750" y="454" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<G>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M789 522c-1,-2 -1,-4 -1,-7 0,-6 1,-10 2,-10 2,0 3,4 3,10 0,3 0,5 0,7l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M788 520c0,0 0,0 0,0l5 0c0,0 0,0 0,0l-5 0z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M789 522c0,0 -1,-1 -1,-2l5 0c0,1 0,1 0,2l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M790 505c2,0 3,4 3,10 0,3 0,5 0,7l-2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M791 520l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M791 520l2 0c0,1 0,1 0,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M775 534c0,3 1,5 3,5l-1 -59c-2,6 -3,13 -3,19l1 35z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M781 533c0,4 -1,6 -3,6l-1 -59c2,6 3,13 4,19l0 34z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M778 535c-1,0 -2,-1 -3,-2 1,2 1,4 3,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M778 535c1,0 2,-1 3,-2 -1,2 -1,3 -3,4l0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M764 506c2,-1 3,4 3,9 1,3 0,6 0,7l-2 1 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M765 520l2 0c0,0 0,1 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M765 521l2 0c0,0 0,1 0,1l-2 1 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M764 506c-1,0 -2,4 -2,9 0,3 0,6 1,8l2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M765 520l-3 0c0,1 0,1 1,1l2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M765 521l-2 0c0,1 0,1 0,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M775 523l-23 -17 0 -7 22 11c3,8 3,12 1,13z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M752 509c0,0 1,-3 1,-6 0,-4 -1,-7 -1,-7 -1,0 -1,3 -1,7 0,3 0,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M780 523l22 -18 0 -7 -21 12c-3,8 -3,12 -1,13z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M803 508c0,0 -1,-3 -1,-7 0,-3 0,-6 1,-6 0,0 1,3 1,6 0,4 -1,7 -1,7z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M776 488c0,0 -9,-7 -9,-7l0 -3 9 4 0 6z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M778 488c0,0 9,-7 9,-7l0 -4 -10 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M777 494c0,-1 -1,-2 -1,-4 0,-3 0,-5 0,-7l1 -6 0 17z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 1")} d="M777 494c1,-1 1,-2 1,-4 0,-3 0,-5 0,-8l-1 -5 0 17z"/>
					</G>
					<Polygon fill="white" fill-rule="nonzero" points="767,466 765,466 765,463 761,463 761,466 759,466 759,458 761,458 761,461 765,461 765,458 767,458 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M770 465l3 0 0 1 -5 0 0 0c0,-1 0,-1 0,-2 0,0 0,0 1,0 0,-1 0,-1 0,-1 1,0 1,-1 1,-1 0,0 1,0 1,0 0,0 0,0 0,-1 0,0 0,0 0,0 1,0 1,0 1,-1 0,0 -1,0 -1,0 0,-1 0,-1 -1,-1 0,0 -1,1 -2,1l0 -1c1,-1 2,-1 3,-1 0,0 1,0 1,0 0,0 1,0 1,0 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,0 0,1 0,1 0,0 -1,0 -1,1 0,0 0,0 -1,0 0,0 0,1 0,1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,1 0,1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="780,466 775,466 775,458 777,458 777,465 780,465 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M785 458l0 8 -2 0 0 -6c0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,1 0,1 0,1l0 -2c0,0 0,0 1,-1 0,0 1,0 1,0l1 0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M795 466l-2 0 0 -2 -3 0 -1 2 -2 0 3 -8 2 0 3 8zm-3 -3l-1 -3c0,0 0,0 0,-1l0 0c0,1 0,1 0,1l-1 3 2 0z"/>
				   </G>
				   <G id="ph2l2b">
					<G>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M732 617c0,-1 -1,-4 -1,-7 0,-5 1,-10 3,-10 1,0 3,5 3,10 0,3 -1,5 -1,7l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M732 616c0,0 0,-1 0,-1l4 0c0,0 0,0 0,1l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M732 617c0,0 0,-1 0,-1l4 0c0,0 0,1 0,1l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M734 600c1,0 3,5 3,10 0,3 -1,5 -1,7l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M734 615l2 0c0,0 0,0 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M734 616l2 0c0,0 0,1 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M718 629c0,4 2,5 4,6l-2 -59c-2,6 -3,12 -3,19l1 34z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M725 629c-1,3 -2,5 -3,6l-2 -59c2,6 4,12 4,18l1 35z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M721 630c-1,1 -2,-1 -2,-2 0,2 1,4 2,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M721 630c2,1 3,-1 3,-2 0,2 -1,4 -3,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M708 601c1,0 3,4 3,9 0,3 0,6 -1,8l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M708 616l3 0c0,0 0,0 -1,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M708 616l2 0c0,1 0,1 0,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M708 601c-2,0 -3,4 -3,10 0,3 1,5 1,7l2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M708 616l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M708 616l-2 0c0,1 0,1 0,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M719 619l-23 -18 -1 -7 23 11c2,8 2,12 1,14z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M695 604c1,0 1,-3 1,-6 0,-4 -1,-6 -1,-6 0,0 -1,2 -1,6 0,3 1,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M724 618l22 -18 0 -7 -22 12c-2,8 -2,12 0,13z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M746 603c0,0 0,-3 -1,-6 0,-4 1,-7 1,-7 1,0 1,3 1,7 0,3 0,6 -1,6z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M719 583c0,0 -9,-7 -9,-7l0 -3 10 4 -1 6z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M722 583c-1,0 8,-7 8,-7l0 -4 -9 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M721 589c-1,-1 -2,-2 -2,-4 0,-2 0,-5 1,-7l0 -5 1 16z"/>
					 <Path fill={this.getColor("H2","LINE 2","Slot 2")} d="M721 589c0,-1 1,-2 1,-4 -1,-2 -1,-5 -1,-7l-1 -5 1 16z"/>
					</G>
					<Rect fill="#40B984" x="693" y="549" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="710,562 709,562 709,558 705,558 705,562 703,562 703,553 705,553 705,557 709,557 709,553 710,553 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M714 560l3 0 0 2 -5 0 0 -1c0,-1 0,-1 0,-1 0,-1 0,-1 1,-1 0,0 0,-1 0,-1 1,0 1,0 1,0 0,-1 0,-1 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 1,0 1,0 0,-1 -1,-1 -1,-1 0,0 0,0 -1,0 0,0 -1,0 -2,0l0 -1c1,-1 2,-1 3,-1 0,0 0,0 1,0 0,0 0,1 1,1 0,0 0,0 0,1 0,0 0,0 0,0 0,1 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 0,0 0,0 -1,1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="724,562 719,562 719,553 721,553 721,560 724,560 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M727 560l3 0 0 2 -5 0 0 -1c0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 1,0 1,-1 1,-1 0,0 1,0 1,0 0,-1 0,-1 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 -1,0 -1,0 -1,0 -2,0l0 -1c1,-1 2,-1 3,-1 0,0 0,0 1,0 0,0 0,1 0,1 1,0 1,0 1,1 0,0 0,0 0,0 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 -1,1 0,0 -1,0 -1,1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M732 562l0 -9 3 0c1,0 2,0 2,1 1,0 1,1 1,1 0,1 0,1 -1,1 0,1 0,1 -1,1l0 0c1,0 1,0 2,1 0,0 0,1 0,1 0,1 0,1 -1,2 0,0 -1,1 -2,1l-3 0zm2 -7l0 2 1 0c0,0 0,0 1,-1 0,0 0,0 0,0 0,-1 -1,-1 -1,-1l-1 0zm0 3l0 2 1 0c0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0l-1 0z"/>
				   </G>
				   <G id="ph2l6b">
					<G>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M505 617c-1,-1 -1,-4 -1,-7 0,-5 1,-10 2,-10 2,0 3,5 3,10 1,3 0,5 0,7l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M504 616c0,0 0,-1 0,-1l5 0c0,0 0,0 0,1l-5 0z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M505 617c0,0 0,-1 -1,-1l5 0c0,0 0,1 0,1l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M506 600c2,0 3,5 3,10 1,3 0,5 0,7l-2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M507 615l2 0c0,0 0,0 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M507 616l2 0c0,0 0,1 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M491 629c0,4 1,5 3,6l-1 -59c-2,6 -3,12 -3,19l1 34z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M497 629c0,3 -1,5 -3,6l-1 -59c2,6 3,12 4,18l0 35z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M494 630c-1,1 -2,-1 -2,-2 0,2 1,4 2,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M494 630c2,1 2,-1 3,-2 -1,2 -1,4 -3,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M481 601c1,0 3,4 3,9 0,3 -1,6 -1,8l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M481 616l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M481 616l2 0c0,1 0,1 0,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M481 601c-2,0 -3,4 -3,10 0,3 0,5 1,7l2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M481 616l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M481 616l-2 0c0,1 0,1 0,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M492 619l-24 -18 0 -7 22 11c3,8 3,12 2,14z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M468 604c0,0 1,-3 1,-6 0,-4 -1,-6 -1,-6 -1,0 -1,2 -1,6 0,3 1,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M496 618l23 -18 0 -7 -22 12c-2,8 -2,12 -1,13z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M519 603c0,0 -1,-3 -1,-6 0,-4 0,-7 1,-7 0,0 1,3 1,7 0,3 0,6 -1,6z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M492 583c0,0 -9,-7 -9,-7l0 -3 9 4 0 6z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M494 583c0,0 9,-7 9,-7l0 -4 -9 5 0 6z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M493 589c0,-1 -1,-2 -1,-4 0,-2 0,-5 0,-7l1 -5 0 16z"/>
					 <Path fill={this.getColor("H2","LINE 6","Slot 2")} d="M493 589c1,-1 1,-2 1,-4 0,-2 0,-5 0,-7l-1 -5 0 16z"/>
					</G>
					<Rect fill="#40B984" x="466" y="549" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="483,561 481,561 481,558 478,558 478,561 476,561 476,553 478,553 478,556 481,556 481,553 483,553 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M487 560l3 0 0 1 -5 0 0 0c0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 1,0 1,-1 1,-1 0,0 1,0 1,0 0,-1 0,-1 0,-1 1,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 -1,0 -1,0 -1,0 -1,0 -2,0l0 -1c1,-1 2,-1 2,-1 1,0 1,0 2,0 0,0 0,0 0,1 1,0 1,0 1,0 0,1 0,1 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 0,0 0,1 0,1 0,0 -1,0 -1,0 0,1 0,1 -1,1 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="497,561 492,561 492,553 494,553 494,560 497,560 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M503 559c0,0 0,1 0,1 0,0 0,1 0,1 -1,0 -1,0 -1,0 -1,1 -1,1 -1,1 -1,0 -1,0 -2,-1 0,0 0,0 -1,0 0,-1 0,-1 0,-2 0,0 0,-1 0,-1 0,-1 0,-2 0,-2 0,-1 0,-1 1,-2 0,0 0,0 1,-1 0,0 1,0 1,0 1,0 1,0 2,0l0 2c-1,0 -1,-1 -2,-1 0,0 0,1 0,1 -1,0 -1,0 -1,0 0,0 0,1 0,1 -1,0 -1,1 -1,1l0 0c1,-1 1,-1 2,-1 0,0 1,0 1,0 0,0 1,1 1,1 0,0 0,0 0,1 0,0 0,0 0,1zm-1 0c0,-1 -1,-1 -2,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,0 1,1 1,1 1,1 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,-1 0,0 0,0 0,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M505 561l0 -8 3 0c1,0 1,0 2,1 0,0 1,1 1,1 0,1 -1,1 -1,1 0,1 -1,1 -1,1l0 0c1,0 1,0 1,1 1,0 1,0 1,1 0,1 0,1 -1,2 0,0 -1,0 -2,0l-3 0zm2 -6l0 2 0 0c1,0 1,-1 1,-1 1,0 1,0 1,-1 0,0 -1,0 -2,0l0 0zm0 3l0 2 1 0c0,0 0,0 1,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 -1,0 -1,0 -1,0l-1 0z"/>
				   </G>
				   <G id="ph2l5b">
					<G>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M562 617c-1,-1 -1,-4 -2,-7 0,-5 2,-10 3,-10 2,0 3,5 3,10 0,3 0,5 -1,7l-3 0z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M561 616c0,0 0,-1 0,-1l5 0c0,0 0,0 0,1l-5 0z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M562 617c-1,0 -1,-1 -1,-1l5 0c0,0 -1,1 -1,1l-3 0z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M563 600c2,0 3,5 3,10 0,3 0,5 -1,7l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M563 615l3 0c0,0 0,0 0,1l-3 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M563 616l3 0c0,0 -1,1 -1,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M547 629c1,4 2,5 4,6l-1 -59c-2,6 -3,12 -3,19l0 34z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M554 629c0,3 -1,5 -3,6l-1 -59c2,6 3,12 3,18l1 35z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M551 630c-2,1 -3,-1 -3,-2 1,2 1,4 3,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M551 630c1,1 2,-1 2,-2 0,2 -1,4 -2,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M537 601c2,0 3,4 3,9 0,3 0,6 -1,8l-1 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M538 616l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M538 616l2 0c0,1 0,1 -1,2l-1 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M537 601c-1,0 -2,4 -2,10 0,3 0,5 1,7l2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M538 616l-3 0c0,0 0,0 0,0l3 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M538 616l-3 0c0,1 1,1 1,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M548 619l-23 -18 0 -7 22 11c3,8 3,12 1,14z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M525 604c0,0 0,-3 0,-6 0,-4 0,-6 -1,-6 0,0 0,2 0,6 0,3 0,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M553 618l22 -18 0 -7 -21 12c-3,8 -3,12 -1,13z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M576 603c-1,0 -1,-3 -1,-6 0,-4 0,-7 1,-7 0,0 0,3 0,7 1,3 0,6 0,6z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M549 583c0,0 -10,-7 -10,-7l0 -3 10 4 0 6z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M551 583c0,0 9,-7 9,-7l0 -4 -10 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M550 589c-1,-1 -1,-2 -1,-4 0,-2 0,-5 0,-7l1 -5 0 16z"/>
					 <Path fill={this.getColor("H2","LINE 5","Slot 2")} d="M550 589c0,-1 1,-2 1,-4 0,-2 0,-5 -1,-7l0 -5 0 16z"/>
					</G>
					<Rect fill="#40B984" x="523" y="549" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="540,561 538,561 538,558 534,558 534,561 533,561 533,553 534,553 534,556 538,556 538,553 540,553 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M543 560l4 0 0 1 -6 0 0 0c0,-1 0,-1 0,-1 1,-1 1,-1 1,-1 0,0 0,-1 1,-1 0,0 0,0 0,0 1,-1 1,-1 1,-1 0,0 0,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,0 -1,0 -1,0 -1,0 -2,0 -2,0l0 -1c0,-1 1,-1 2,-1 0,0 1,0 1,0 1,0 1,0 1,1 0,0 0,0 1,0 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 -1,1 0,0 0,1 -1,1 0,0 0,0 0,0 -1,1 -1,1 -1,1 0,0 0,0 0,0 0,0 -1,1 -1,1 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="553,561 548,561 548,553 550,553 550,560 553,560 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M554 561l0 -1c1,0 2,0 2,0 1,0 1,0 1,0 1,0 1,-1 1,-1 0,-1 -1,-1 -2,-1 0,0 -1,0 -1,0l0 -5 4 0 0 2 -3 0 0 1c0,0 1,0 1,0 1,0 1,1 2,1 0,0 1,1 1,2 0,1 -1,1 -1,2 -1,0 -2,1 -3,1 0,0 -1,-1 -2,-1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M561 561l0 -8 3 0c1,0 2,0 2,1 1,0 1,1 1,1 0,1 0,1 0,1 -1,1 -1,1 -1,1l0 0c0,0 1,0 1,1 0,0 1,0 1,1 0,1 -1,1 -1,2 -1,0 -2,0 -2,0l-4 0zm2 -6l0 2 1 0c0,0 1,-1 1,-1 0,0 0,0 0,-1 0,0 0,0 -1,0l-1 0zm0 3l0 2 1 0c1,0 1,0 1,0 0,0 1,-1 1,-1 0,0 -1,-1 -1,-1 0,0 0,0 -1,0l-1 0z"/>
				   </G>
				   <G id="ph2l4b">
					<G>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M618 617c0,-1 -1,-4 -1,-7 0,-5 1,-10 3,-10 1,0 3,5 3,10 0,3 -1,5 -1,7l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M618 616c0,0 0,-1 0,-1l4 0c0,0 0,0 0,1l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M618 617c0,0 0,-1 0,-1l4 0c0,0 0,1 0,1l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M620 600c1,0 3,5 3,10 0,3 -1,5 -1,7l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M620 615l2 0c0,0 0,0 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M620 616l2 0c0,0 0,1 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M604 629c0,4 2,5 3,6l-1 -59c-2,6 -3,12 -3,19l1 34z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M611 629c-1,3 -2,5 -4,6l-1 -59c2,6 4,12 4,18l1 35z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M607 630c-1,1 -2,-1 -2,-2 0,2 1,4 2,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M607 630c2,1 3,-1 3,-2 0,2 -1,4 -3,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M594 601c1,0 3,4 3,9 0,3 0,6 -1,8l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M594 616l3 0c0,0 -1,0 -1,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M594 616l2 0c0,1 0,1 0,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M594 601c-2,0 -3,4 -3,10 0,3 1,5 1,7l2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M594 616l-2 0c0,0 0,0 0,0l2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M594 616l-2 0c0,1 0,1 0,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M605 619l-23 -18 -1 -7 23 11c2,8 2,12 1,14z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M581 604c1,0 1,-3 1,-6 0,-4 -1,-6 -1,-6 0,0 -1,2 -1,6 0,3 1,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M609 618l23 -18 0 -7 -22 12c-2,8 -2,12 -1,13z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M632 603c0,0 0,-3 -1,-6 0,-4 1,-7 1,-7 1,0 1,3 1,7 0,3 0,6 -1,6z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M605 583c0,0 -9,-7 -9,-7l0 -3 10 4 -1 6z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M608 583c-1,0 8,-7 8,-7l0 -4 -9 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M607 589c-1,-1 -2,-2 -2,-4 0,-2 0,-5 1,-7l0 -5 1 16z"/>
					 <Path fill={this.getColor("H2","LINE 4","Slot 2")} d="M607 589c0,-1 0,-2 1,-4 -1,-2 -1,-5 -1,-7l-1 -5 1 16z"/>
					</G>
					<Rect fill="#40B984" x="579" y="549" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="596,562 595,562 595,558 591,558 591,562 589,562 589,553 591,553 591,557 595,557 595,553 596,553 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M600 560l3 0 0 2 -5 0 0 -1c0,-1 0,-1 0,-1 0,-1 0,-1 1,-1 0,0 0,-1 0,-1 1,0 1,0 1,0 0,-1 0,-1 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 -1,0 0,0 -1,0 -2,0l0 -1c1,-1 2,-1 3,-1 0,0 0,0 1,0 0,0 0,1 1,1 0,0 0,0 0,1 0,0 0,0 0,0 0,1 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 0,0 0,0 -1,1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="610,562 605,562 605,553 607,553 607,560 610,560 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M616 553l0 5 1 0 0 2 -1 0 0 2 -2 0 0 -2 -4 0 0 -2c1,0 1,0 1,-1 1,0 1,-1 1,-1 1,-1 1,-1 1,-1 1,-1 1,-1 1,-2l2 0zm-4 5l2 0 0 -2c0,0 0,0 0,0 -1,1 -1,1 -1,1 0,0 0,1 0,1 -1,0 -1,0 -1,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M618 562l0 -9 3 0c1,0 2,0 2,1 1,0 1,1 1,1 0,1 0,1 -1,1 0,1 0,1 -1,1l0 0c1,0 1,0 2,1 0,0 0,1 0,1 0,1 0,1 -1,2 0,0 -1,1 -2,1l-3 0zm2 -7l0 2 1 0c0,0 0,0 1,-1 0,0 0,0 0,0 0,-1 -1,-1 -2,-1l0 0zm0 3l0 2 1 0c0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0l-1 0z"/>
				   </G>
				   <G id="ph2l3b">
					<G>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M676 617c-1,-1 -1,-4 -2,-7 0,-5 2,-10 3,-10 2,0 3,5 3,10 0,3 0,5 -1,7l-3 0z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M675 616c0,0 0,-1 0,-1l5 0c0,0 0,0 0,1l-5 0z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M676 617c-1,0 -1,-1 -1,-1l5 0c0,0 -1,1 -1,1l-3 0z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M677 600c2,0 3,5 3,10 0,3 0,5 -1,7l-2 0 0 -17z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M677 615l3 0c0,0 0,0 0,1l-3 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M677 616l3 0c0,0 -1,1 -1,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M661 629c1,4 2,5 4,6l-1 -59c-2,6 -3,12 -3,19l0 34z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M668 629c0,3 -1,5 -3,6l-1 -59c2,6 3,12 3,18l1 35z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M665 630c-2,1 -2,-1 -3,-2 1,2 1,4 3,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M665 630c1,1 2,-1 2,-2 0,2 -1,4 -2,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M651 601c2,0 3,4 3,9 0,3 0,6 -1,8l-1 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M652 616l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M652 616l2 0c0,1 0,1 -1,2l-1 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M651 601c-1,0 -2,4 -2,10 0,3 0,5 1,7l2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M652 616l-3 0c0,0 0,0 0,0l3 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M652 616l-3 0c0,1 1,1 1,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M662 619l-23 -18 0 -7 22 11c3,8 3,12 1,14z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M639 604c0,0 0,-3 0,-6 0,-4 0,-6 -1,-6 0,0 0,2 0,6 0,3 0,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M667 618l22 -18 0 -7 -21 12c-3,8 -3,12 -1,13z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M690 603c-1,0 -1,-3 -1,-6 0,-4 0,-7 1,-7 0,0 0,3 0,7 1,3 0,6 0,6z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M663 583c0,0 -10,-7 -10,-7l0 -3 10 4 0 6z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M665 583c0,0 9,-7 9,-7l0 -4 -10 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M664 589c-1,-1 -1,-2 -1,-4 0,-2 0,-5 0,-7l1 -5 0 16z"/>
					 <Path fill={this.getColor("H2","LINE 3","Slot 2")} d="M664 589c0,-1 1,-2 1,-4 0,-2 0,-5 -1,-7l0 -5 0 16z"/>
					</G>
					<Rect fill="#40B984" x="637" y="549" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="654,561 652,561 652,558 649,558 649,561 647,561 647,553 649,553 649,556 652,556 652,553 654,553 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M657 560l4 0 0 1 -6 0 0 0c0,-1 0,-1 0,-1 1,-1 1,-1 1,-1 0,0 0,-1 1,-1 0,0 0,0 0,0 1,-1 1,-1 1,-1 0,0 0,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,0 -1,0 -1,0 -1,0 -2,0 -2,0l0 -1c0,-1 1,-1 2,-1 0,0 1,0 1,0 1,0 1,0 1,1 0,0 0,0 1,0 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 -1,1 0,0 0,1 -1,1 0,0 0,0 0,0 -1,1 -1,1 -1,1 0,0 0,0 0,0 0,0 -1,1 -1,1 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="667,561 662,561 662,553 664,553 664,560 667,560 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M668 561l0 -1c1,0 1,0 2,0 1,0 1,0 1,0 1,0 1,-1 1,-1 0,0 0,-1 -1,-1 0,0 -1,0 -1,0l-1 0 0 -1 1 0c1,0 1,-1 1,-2 0,0 0,-1 -1,-1 0,0 -1,1 -1,1l0 -2c0,0 1,0 2,0 0,0 1,0 2,1 0,0 0,1 0,1 0,1 0,2 -1,2l0 0c0,0 1,0 1,1 0,0 1,1 1,1 0,1 -1,1 -1,2 -1,0 -2,1 -3,1 -1,0 -1,-1 -2,-1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M675 561l0 -8 3 0c1,0 2,0 2,1 1,0 1,1 1,1 0,1 0,1 0,1 -1,1 -1,1 -1,1l0 0c0,0 1,0 1,1 0,0 1,0 1,1 0,1 -1,1 -1,2 -1,0 -2,0 -2,0l-4 0zm2 -6l0 2 1 0c0,0 1,-1 1,-1 0,0 0,0 0,-1 0,0 0,0 -1,0l-1 0zm0 3l0 2 1 0c1,0 1,0 1,0 0,0 1,-1 1,-1 0,0 -1,-1 -1,-1 0,0 0,0 -1,0l-1 0z"/>
				   </G>
				   <G id="ph2l1b">
					<G>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M789 617c-1,-1 -1,-4 -1,-7 0,-5 1,-10 2,-10 2,0 3,5 3,10 0,3 0,5 0,7l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M788 616c0,0 0,-1 0,-1l5 0c0,0 0,0 0,1l-5 0z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M789 617c0,0 -1,-1 -1,-1l5 0c0,0 0,1 0,1l-4 0z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M790 600c2,0 3,5 3,10 0,3 0,5 0,7l-2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M791 615l2 0c0,0 0,0 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M791 616l2 0c0,0 0,1 0,1l-2 0 0 -1z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M775 629c0,4 1,5 3,6l-1 -59c-2,6 -3,12 -3,19l1 34z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M781 629c0,3 -1,5 -3,6l-1 -59c2,6 3,12 4,18l0 35z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M778 630c-1,1 -2,-1 -3,-2 1,2 1,4 3,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M778 630c1,1 2,-1 3,-2 -1,2 -1,4 -3,5l0 -3z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M764 601c2,0 3,4 3,9 1,3 0,6 0,8l-2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M765 616l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M765 616l2 0c0,1 0,1 0,2l-2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M764 601c-1,0 -2,4 -2,10 0,3 0,5 1,7l2 0 -1 -17z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M765 616l-3 0c0,0 0,0 1,0l2 0 0 0z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M765 616l-2 0c0,1 0,1 0,2l2 0 0 -2z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M775 619l-23 -18 0 -7 22 11c3,8 3,12 1,14z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M752 604c0,0 1,-3 1,-6 0,-4 -1,-6 -1,-6 -1,0 -1,2 -1,6 0,3 0,6 1,6z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M780 618l22 -18 0 -7 -21 12c-3,8 -3,12 -1,13z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M803 603c0,0 -1,-3 -1,-6 0,-4 0,-7 1,-7 0,0 1,3 1,7 0,3 -1,6 -1,6z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M776 583c0,0 -9,-7 -9,-7l0 -3 9 4 0 6z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M778 583c0,0 9,-7 9,-7l0 -4 -10 5 1 6z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M777 589c0,-1 -1,-2 -1,-4 0,-2 0,-5 0,-7l1 -5 0 16z"/>
					 <Path fill={this.getColor("H2","LINE 1","Slot 2")} d="M777 589c1,-1 1,-2 1,-4 0,-2 0,-5 0,-7l-1 -5 0 16z"/>
					</G>
					<Rect fill="#40B984" x="750" y="549" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="767,562 765,562 765,558 762,558 762,562 760,562 760,553 762,553 762,557 765,557 765,553 767,553 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M770 560l4 0 0 2 -6 0 0 -1c0,0 1,-1 1,-1 0,-1 0,-1 0,-1 0,0 1,-1 1,-1 0,0 0,0 1,0 0,-1 0,-1 0,-1 0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 -1,0 -1,0 -1,0 -1,0 -2,0l0 -1c1,-1 1,-1 2,-1 1,0 1,0 1,0 1,0 1,1 1,1 0,0 1,0 1,1 0,0 0,0 0,1 0,0 0,0 0,1 0,0 0,0 -1,0 0,1 0,1 0,1 -1,0 -1,0 -1,1 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,1 0,1 -1,0 -1,0 -1,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="781,562 776,562 776,553 778,553 778,560 781,560 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M786 553l0 9 -2 0 0 -7c0,0 0,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,0 -1,0 -1,0 -1,0l0 -2c1,0 1,0 1,0 1,0 1,-1 2,-1l1 0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M789 562l0 -9 3 0c1,0 1,0 2,1 0,0 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1l0 0c0,0 1,0 1,1 1,0 1,1 1,1 0,1 0,1 -1,2 -1,0 -1,1 -2,1l-3 0zm1 -7l0 2 1 0c1,0 1,0 1,-1 0,0 0,0 0,0 0,-1 0,-1 -1,-1l-1 0zm0 3l0 2 1 0c1,0 1,0 1,0 1,0 1,-1 1,-1 0,0 0,-1 -1,-1 0,0 0,0 -1,0l-1 0z"/>
				   </G>
				  </G>
				  <G id="all_h1" onPress={() => this.handleClick("H1")}>
				   <G id="h1">
					<Path fill="white" stroke="white" stroke-width="0.561699" d="M39 451l238 0c1,0 2,2 2,3l0 182c0,2 -1,3 -2,3l-238 0c-2,0 -3,-1 -3,-3l0 -182c0,-1 1,-3 3,-3z"/>
					<Rect fill="orange" x="110" y="433" width="95.0183" height="16.1759"/>
					<Path fill="#1A3560" stroke="white" stroke-width="0.561699" d="M40 453l235 0c2,0 3,1 3,2l0 180c0,1 -1,3 -3,3l-235 0c-1,0 -2,-2 -2,-3l0 -180c0,-1 1,-2 2,-2z"/>
					<Path fill="#261902" fill-rule="nonzero" d="M135 445l0 -8 1 0 0 8 -1 0zm-5 0l0 -8 1 0 0 8 -1 0zm1 -3l0 -1 4 0 0 1 -4 0z"/>
					<Path id="1" fill="#261902" fill-rule="nonzero" d="M137 445l3 -8 1 0 3 8 -1 0 -3 -6 -2 6 -1 0zm1 -2l0 -1 4 0 0 1 -4 0z"/>
					<Polygon id="2" fill="#261902" fill-rule="nonzero" points="145,445 145,437 146,437 150,443 150,443 150,437 151,437 151,445 150,445 146,439 146,439 146,445 "/>
					<Path id="3" fill="#261902" fill-rule="nonzero" d="M156 441l2 0 0 1c0,1 0,1 0,2 0,0 -1,1 -1,1 0,0 -1,0 -1,0 -1,0 -2,0 -2,0 0,0 -1,-1 -1,-1 0,-1 0,-1 0,-2l0 -2c0,-1 0,-1 0,-2 0,0 1,0 1,-1 0,0 1,0 1,0 1,0 1,0 2,0 0,1 0,1 1,1 0,1 0,1 0,1l-1 0c0,0 0,0 -1,-1 0,0 0,0 -1,0 0,0 0,0 -1,1 0,0 0,0 0,1l0 2c0,1 0,1 0,2 1,0 1,0 2,0 0,0 0,0 1,0 0,-1 0,-1 0,-2l0 0 -1 0 0 -1z"/>
					<Path id="4" fill="#261902" fill-rule="nonzero" d="M163 441l3 0 0 1c0,1 -1,1 -1,2 0,0 0,1 -1,1 0,0 -1,0 -1,0 -1,0 -1,0 -2,0 0,0 0,-1 -1,-1 0,-1 0,-1 0,-2l0 -2c0,-1 0,-1 0,-2 1,0 1,0 1,-1 1,0 1,0 2,0 0,0 1,0 1,0 0,1 1,1 1,1 0,1 0,1 1,1l-2 0c0,0 0,0 0,-1 -1,0 -1,0 -1,0 -1,0 -1,0 -1,1 -1,0 -1,0 -1,1l0 2c0,1 0,1 1,2 0,0 0,0 1,0 0,0 1,0 1,0 0,-1 0,-1 0,-2l0 0 -1 0 0 -1z"/>
					<Path id="5" fill="#261902" fill-rule="nonzero" d="M166 445l3 -8 1 0 3 8 -1 0 -2 -6 -2 6 -2 0zm2 -2l0 -1 4 0 0 1 -4 0z"/>
					<Path id="6" fill="#261902" fill-rule="nonzero" d="M175 442l0 -1 3 0c0,0 0,0 1,-1 0,0 0,0 0,-1 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1l-3 0 0 -1 3 0c0,0 1,0 1,0 0,1 1,1 1,1 0,1 0,1 0,1 0,1 0,1 0,2 0,0 -1,0 -1,0 0,1 -1,1 -1,1l-3 0zm-1 3l0 -8 2 0 0 8 -2 0zm5 0l-2 -4 1 0 2 4 -1 0z"/>
					<Polygon id="7" fill="#261902" fill-rule="nonzero" points="185,437 185,445 184,445 184,438 183,439 183,438 184,437 "/>
				   </G>
				   <G id="ph1l1a">
					<Rect fill="#40B984" x="73" y="457" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="90,469 88,469 88,466 85,466 85,469 83,469 83,461 85,461 85,464 88,464 88,461 90,461 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M96 461l0 8 -2 0 0 -6c0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0l0 -1c1,0 1,0 2,-1 0,0 0,0 1,0l1 0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="104,469 99,469 99,461 101,461 101,468 104,468 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M109 461l0 8 -2 0 0 -6c0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,0l0 -1c1,0 1,0 1,-1 1,0 1,0 2,0l1 0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M119 469l-2 0 -1 -2 -3 0 0 2 -2 0 3 -8 2 0 3 8zm-3 -3l-1 -3c0,0 0,0 0,-1l0 0c0,1 0,1 0,1l-1 3 2 0z"/>
					<G>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M112 497c-1,2 -1,5 -1,8 0,5 1,9 2,9 2,1 3,-4 3,-9 0,-3 0,-6 0,-7l-4 -1z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M111 499c0,0 0,0 0,1l5 0c0,0 0,-1 0,-1l-5 0z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M112 497c0,1 0,1 -1,2l5 0c0,0 0,-1 0,-1l-4 -1z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M113 514c2,1 3,-4 3,-9 0,-3 0,-6 0,-7l-2 -1 -1 17z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M114 500l2 0c0,0 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M114 499l2 0c0,0 0,-1 0,-1l-2 -1 0 2z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M98 486c0,-4 1,-6 3,-6l-1 59c-2,-6 -3,-12 -3,-19l1 -34z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M104 486c0,-4 -1,-6 -3,-6l-1 59c2,-6 3,-12 4,-19l0 -34z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M101 484c-1,0 -2,2 -3,2 1,-2 1,-3 3,-4l0 2z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M101 484c1,0 2,2 3,2 -1,-1 -1,-3 -3,-4l0 2z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M87 514c2,0 3,-4 4,-10 0,-3 -1,-5 -1,-7l-2 0 -1 17z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M88 499l2 0c0,0 0,0 0,0l-2 0 0 0z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M88 499l2 0c0,-1 0,-2 0,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M87 514c-1,0 -2,-4 -2,-10 0,-3 0,-5 1,-7l2 0 -1 17z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M88 499l-3 0c0,0 0,0 1,-1l2 1 0 0z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M88 499l-2 -1c0,0 0,-1 0,-1l2 0 0 2z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M98 496l-23 17 0 8 22 -11c3,-8 3,-13 1,-14z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M75 511c0,0 1,2 1,6 0,3 -1,6 -1,6 -1,0 -1,-3 -1,-6 0,-4 0,-6 1,-6z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M103 496l22 19 0 7 -21 -12c-3,-8 -3,-13 -1,-14z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M126 512c0,0 -1,2 -1,6 0,3 0,6 1,6 0,0 1,-2 1,-6 0,-3 -1,-6 -1,-6z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M99 532c0,0 -9,7 -9,7l0 3 9 -5 0 -5z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M101 532c0,0 9,7 9,7l0 3 -10 -5 1 -5z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M100 526c0,0 -1,2 -1,4 0,2 0,4 0,7l1 5 0 -16z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 1")} d="M100 526c1,0 1,2 1,4 0,2 0,4 0,7l-1 5 0 -16z"/>
					</G>
				   </G>
				   <G id="ph1l2a">
					<Rect fill="#40B984" x="191" y="457" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="209,469 207,469 207,466 203,466 203,469 202,469 202,461 203,461 203,464 207,464 207,461 209,461 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M214 461l0 8 -1 0 0 -6c-1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0l0 -1c0,0 1,0 1,-1 1,0 1,0 1,0l1 0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="222,469 217,469 217,461 219,461 219,468 222,468 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M225 468l3 0 0 1 -5 0 0 0c0,-1 0,-1 0,-2 0,0 0,0 1,-1 0,0 0,0 0,0 1,0 1,-1 1,-1 0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,0 1,0 0,0 0,-1 0,-1 0,0 -1,0 -1,-1 0,0 0,0 -1,0 0,0 -1,0 -2,1l0 -2c1,0 2,0 3,0 0,0 1,0 1,0 0,0 1,0 1,0 0,1 0,1 0,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 -1,0 -1,1 0,0 0,0 -1,0 0,0 0,0 0,1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,1 0,1z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M237 469l-2 0 0 -2 -3 0 -1 2 -2 0 3 -8 3 0 2 8zm-3 -3l0 -3c-1,0 -1,0 -1,-1l0 0c0,1 0,1 0,1l-1 3 2 0z"/>
					<G>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M230 497c0,2 -1,5 -1,8 0,5 1,9 3,9 2,1 3,-4 3,-9 0,-3 0,-6 -1,-7l-4 -1z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M230 499c0,0 0,0 0,1l5 0c0,0 0,-1 0,-1l-5 0z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M230 497c0,1 0,1 0,2l5 0c-1,0 -1,-1 -1,-1l-4 -1z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M232 514c2,1 3,-4 3,-9 0,-3 0,-6 -1,-7l-2 -1 0 17z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M232 500l3 0c0,0 0,-1 0,-1l-3 0 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M232 499l3 0c-1,0 -1,-1 -1,-1l-2 -1 0 2z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M216 486c1,-4 2,-6 4,-6l-2 59c-1,-6 -2,-12 -2,-19l0 -34z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M223 486c0,-4 -1,-6 -3,-6l-2 59c3,-6 4,-12 4,-19l1 -34z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M220 484c-2,0 -3,2 -3,2 0,-2 1,-3 3,-4l0 2z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M220 484c1,0 2,2 2,2 0,-1 -1,-3 -2,-4l0 2z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M206 514c2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M206 499l3 0c0,0 0,0 0,0l-3 0 0 0z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M206 499l3 0c0,-1 -1,-2 -1,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M206 514c-1,0 -3,-4 -2,-10 0,-3 0,-5 1,-7l1 0 0 17z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M206 499l-2 0c0,0 0,0 0,-1l2 1 0 0z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M206 499l-2 -1c0,0 0,-1 1,-1l1 0 0 2z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M217 496l-23 17 0 8 22 -11c2,-8 3,-13 1,-14z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M194 511c0,0 0,2 0,6 0,3 0,6 -1,6 0,0 0,-3 0,-6 0,-4 0,-6 1,-6z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M222 496l22 19 0 7 -22 -12c-2,-8 -2,-13 0,-14z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M245 512c-1,0 -1,2 -1,6 0,3 0,6 0,6 1,0 1,-2 1,-6 0,-3 0,-6 0,-6z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M217 532c1,0 -9,7 -9,7l0 3 10 -5 -1 -5z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M220 532c0,0 9,7 9,7l0 3 -10 -5 1 -5z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M219 526c-1,0 -1,2 -1,4 0,2 0,4 0,7l0 5 1 -16z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 1")} d="M219 526c0,0 1,2 1,4 0,2 0,4 -1,7l-1 5 1 -16z"/>
					</G>
				   </G>
				   <G id="Ph1l2c">
					<Rect fill="#40B984" x="220" y="549" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="237,562 236,562 236,558 232,558 232,562 230,562 230,553 232,553 232,557 236,557 236,553 237,553 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M243 553l0 9 -2 0 0 -7c0,0 0,0 0,0 0,0 0,1 0,1 -1,0 -1,0 -1,0 0,0 0,0 0,0l0 -2c0,0 1,0 1,0 0,0 1,-1 1,-1l1 0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="251,562 246,562 246,553 248,553 248,560 251,560 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M254 560l3 0 0 2 -5 0 0 -1c0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 1,0 1,-1 1,-1 0,0 1,0 1,0 0,-1 0,-1 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 -1,0 -1,0 -1,0 -2,0l0 -1c1,-1 2,-1 3,-1 0,0 0,0 1,0 0,0 0,1 1,1 0,0 0,0 0,1 0,0 0,0 0,0 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 -1,1 0,0 -1,0 -1,1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M265 561c-1,1 -1,1 -2,1 -2,0 -3,-1 -3,-1 -1,-1 -2,-2 -2,-3 0,-2 1,-3 2,-4 1,0 2,-1 3,-1 1,0 1,0 2,0l0 2c-1,0 -1,0 -2,0 -1,0 -1,0 -2,0 0,1 -1,2 -1,2 0,1 1,2 1,2 1,1 1,1 2,1 1,0 1,0 2,0l0 1z"/>
					<G>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M259 590c-1,2 -1,4 -1,7 0,5 1,10 3,10 1,0 2,-4 3,-10 0,-3 -1,-5 -1,-7l-4 0z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M259 591c0,1 0,1 0,1l4 0c0,0 0,0 0,0l-4 -1z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M259 590c0,0 0,1 0,1l4 1c0,-1 0,-2 0,-2l-4 0z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M261 607c1,0 2,-4 3,-10 0,-3 -1,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M261 592l2 0c0,0 0,0 0,0l-2 -1 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M261 591l2 1c0,-1 0,-2 0,-2l-2 0 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M245 578c0,-3 2,-5 3,-6l-1 60c-2,-7 -3,-13 -3,-19l1 -35z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M252 578c-1,-3 -2,-5 -4,-6l-1 60c2,-6 3,-13 4,-19l1 -35z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M248 577c-1,0 -2,1 -2,2 0,-2 1,-4 2,-4l0 2z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M248 577c2,0 3,1 3,2 0,-2 -1,-4 -3,-4l0 2z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M235 606c1,0 3,-4 3,-9 0,-3 0,-6 -1,-8l-2 0 0 17z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M235 592l2 0c0,-1 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M235 591l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M235 606c-2,0 -3,-4 -3,-9 0,-3 1,-6 1,-8l2 0 0 17z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M235 592l-2 -1c0,0 0,0 0,0l2 0 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M235 591l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M246 589l-23 17 -1 7 22 -11c3,-8 3,-12 2,-13z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M222 603c1,0 1,3 1,6 0,4 -1,7 -1,7 -1,0 -1,-3 -1,-7 0,-3 1,-6 1,-6z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M250 589l23 18 0 7 -22 -12c-2,-8 -2,-12 -1,-13z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M273 604c0,0 -1,3 -1,6 0,4 1,7 1,7 0,0 1,-3 1,-7 0,-3 0,-6 -1,-6z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M246 624c0,0 -9,7 -9,7l0 3 10 -4 -1 -6z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M248 624c0,0 9,7 9,7l0 4 -9 -5 0 -6z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M247 618c0,1 -1,2 -1,4 0,2 0,5 1,7l0 6 0 -17z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 3")} d="M247 618c1,1 1,2 1,4 0,2 0,5 0,7l-1 6 0 -17z"/>
					</G>
				   </G>
				   <G id="ph1l1b">
					<Rect fill="#40B984" x="40" y="549" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="58,562 56,562 56,558 52,558 52,562 50,562 50,553 52,553 52,557 56,557 56,553 58,553 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M63 553l0 9 -2 0 0 -7c0,0 0,0 0,0 0,0 0,1 0,1 0,0 -1,0 -1,0 0,0 0,0 0,0l0 -2c0,0 1,0 1,0 0,0 1,-1 1,-1l1 0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="71,562 66,562 66,553 68,553 68,560 71,560 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M76 553l0 9 -2 0 0 -7c0,0 0,0 0,0 0,0 0,1 0,1 -1,0 -1,0 -1,0 0,0 0,0 0,0l0 -2c0,0 0,0 1,0 0,0 1,-1 1,-1l1 0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M79 562l0 -9 3 0c1,0 2,0 2,1 1,0 1,1 1,1 0,1 0,1 -1,1 0,1 0,1 -1,1l0 0c1,0 1,0 2,1 0,0 0,1 0,1 0,1 0,1 -1,2 0,0 -1,1 -2,1l-3 0zm2 -7l0 2 1 0c0,0 0,0 1,-1 0,0 0,0 0,0 0,-1 0,-1 -1,-1l-1 0zm0 3l0 2 1 0c0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0l-1 0z"/>
					<G>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M79 590c0,2 -1,4 -1,7 0,5 1,10 3,10 1,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-4 0z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M79 591c0,1 0,1 0,1l5 0c-1,0 -1,0 -1,0l-4 -1z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M79 590c0,0 0,1 0,1l4 1c0,-1 0,-2 0,-2l-4 0z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M81 607c1,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M81 592l3 0c-1,0 -1,0 -1,0l-2 -1 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M81 591l2 1c0,-1 0,-2 0,-2l-2 0 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M65 578c1,-3 2,-5 4,-6l-2 60c-1,-7 -2,-13 -3,-19l1 -35z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M72 578c0,-3 -2,-5 -3,-6l-2 60c2,-6 4,-13 4,-19l1 -35z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M69 577c-2,0 -3,1 -3,2 0,-2 1,-4 3,-4l0 2z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M69 577c1,0 2,1 2,2 0,-2 -1,-4 -2,-4l0 2z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M55 606c2,0 3,-4 3,-9 0,-3 0,-6 -1,-8l-2 0 0 17z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M55 592l3 0c0,-1 0,-1 0,-1l-3 0 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M55 591l3 0c-1,-1 -1,-1 -1,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M55 606c-2,0 -3,-4 -3,-9 0,-3 1,-6 1,-8l2 0 0 17z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M55 592l-2 -1c0,0 0,0 0,0l2 0 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M55 591l-2 0c0,-1 0,-1 0,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M66 589l-23 17 0 7 22 -11c2,-8 3,-12 1,-13z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M42 603c1,0 1,3 1,6 0,4 0,7 -1,7 0,0 -1,-3 -1,-7 1,-3 1,-6 1,-6z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M71 589l22 18 0 7 -22 -12c-2,-8 -2,-12 0,-13z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M94 604c-1,0 -1,3 -1,6 -1,4 0,7 0,7 1,0 1,-3 1,-7 0,-3 0,-6 0,-6z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M66 624c0,0 -9,7 -9,7l0 3 10 -4 -1 -6z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M69 624c0,0 9,7 9,7l-1 4 -9 -5 1 -6z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M68 618c-1,1 -1,2 -2,4 0,2 0,5 1,7l0 6 1 -17z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 2")} d="M68 618c0,1 1,2 1,4 0,2 0,5 -1,7l-1 6 1 -17z"/>
					</G>
				   </G>
				   <G id="ph1l1c">
					<Rect fill="#40B984" x="100" y="549" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="117,562 115,562 115,558 112,558 112,562 110,562 110,553 112,553 112,557 115,557 115,553 117,553 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M123 553l0 9 -2 0 0 -7c0,0 0,0 0,0 0,0 -1,1 -1,1 0,0 0,0 0,0 0,0 -1,0 -1,0l0 -2c1,0 1,0 2,0 0,0 0,-1 1,-1l1 0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="131,562 126,562 126,553 128,553 128,560 131,560 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M136 553l0 9 -2 0 0 -7c0,0 0,0 0,0 -1,0 -1,1 -1,1 0,0 0,0 0,0 -1,0 -1,0 -1,0l0 -2c1,0 1,0 1,0 1,0 1,-1 2,-1l1 0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M145 561c-1,1 -2,1 -3,1 -1,0 -2,-1 -3,-1 0,-1 -1,-2 -1,-3 0,-2 1,-3 1,-4 1,0 2,-1 4,-1 0,0 1,0 2,0l0 2c-1,0 -2,0 -2,0 -1,0 -2,0 -2,0 -1,1 -1,2 -1,2 0,1 0,2 1,2 0,1 1,1 2,1 0,0 1,0 2,0l0 1z"/>
					<G>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M139 590c-1,2 -1,4 -1,7 0,5 1,10 2,10 2,0 3,-4 3,-10 0,-3 0,-5 0,-7l-4 0z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M138 591c0,1 0,1 0,1l5 0c0,0 0,0 0,0l-5 -1z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M139 590c0,0 -1,1 -1,1l5 1c0,-1 0,-2 0,-2l-4 0z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M140 607c2,0 3,-4 3,-10 0,-3 0,-5 0,-7l-2 0 -1 17z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M141 592l2 0c0,0 0,0 0,0l-2 -1 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M141 591l2 1c0,-1 0,-2 0,-2l-2 0 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M125 578c0,-3 1,-5 3,-6l-1 60c-2,-7 -3,-13 -3,-19l1 -35z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M131 578c0,-3 -1,-5 -3,-6l-1 60c2,-6 3,-13 4,-19l0 -35z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M128 577c-1,0 -2,1 -3,2 1,-2 1,-4 3,-4l0 2z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M128 577c1,0 2,1 3,2 -1,-2 -1,-4 -3,-4l0 2z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M114 606c2,0 3,-4 3,-9 1,-3 0,-6 0,-8l-2 0 -1 17z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M115 592l2 0c0,-1 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M115 591l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M114 606c-1,0 -2,-4 -2,-9 0,-3 0,-6 1,-8l2 0 -1 17z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M115 592l-3 -1c0,0 0,0 0,0l3 0 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M115 591l-3 0c1,-1 1,-1 1,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M125 589l-23 17 0 7 22 -11c3,-8 3,-12 1,-13z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M102 603c0,0 1,3 1,6 -1,4 -1,7 -1,7 -1,0 -1,-3 -1,-7 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M130 589l22 18 0 7 -21 -12c-3,-8 -3,-12 -1,-13z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M153 604c0,0 -1,3 -1,6 0,4 0,7 1,7 0,0 1,-3 1,-7 0,-3 -1,-6 -1,-6z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M126 624c0,0 -9,7 -9,7l0 3 9 -4 0 -6z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M128 624c0,0 9,7 9,7l0 4 -10 -5 1 -6z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M127 618c0,1 -1,2 -1,4 0,2 0,5 0,7l1 6 0 -17z"/>
					 <Path fill={this.getColor("H1","LINE 1","Slot 3")} d="M127 618c1,1 1,2 1,4 0,2 0,5 0,7l-1 6 0 -17z"/>
					</G>
				   </G>
				   <G id="ph1l2b">
					<Rect fill="#40B984" x="161" y="549" width="55.1191" height="16.8418" rx="6" ry="6"/>
					<Polygon fill="white" fill-rule="nonzero" points="178,562 176,562 176,558 173,558 173,562 171,562 171,553 173,553 173,557 176,557 176,553 178,553 "/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M184 553l0 9 -2 0 0 -7c0,0 0,0 -1,0 0,0 0,1 0,1 0,0 0,0 -1,0 0,0 0,0 0,0l0 -2c0,0 1,0 1,0 1,0 1,-1 1,-1l2 0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="191,562 187,562 187,553 188,553 188,560 191,560 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M194 560l4 0 0 2 -6 0 0 -1c0,-1 0,-1 0,-1 0,-1 1,-1 1,-1 0,0 0,-1 1,-1 0,0 0,0 0,0 1,-1 1,-1 1,-1 0,0 0,0 0,0 1,-1 1,-1 1,-1 0,0 0,0 0,0 0,-1 0,-1 -1,-1 0,0 0,0 0,0 -1,0 -2,0 -3,0l0 -1c1,-1 2,-1 3,-1 0,0 1,0 1,0 0,0 1,1 1,1 0,0 0,0 0,1 1,0 1,0 1,0 0,1 0,1 -1,1 0,1 0,1 0,1 0,1 0,1 -1,1 0,0 0,0 0,1 -1,0 -1,0 -1,0 0,0 0,0 0,0 -1,0 -1,1 -1,1 0,0 0,0 0,0z"/>
					<Path id="4" fill="white" fill-rule="nonzero" d="M199 562l0 -9 3 0c1,0 2,0 3,1 0,0 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 -1,1l0 0c0,0 1,0 1,1 0,0 1,1 1,1 0,1 -1,1 -1,2 -1,0 -2,1 -2,1l-4 0zm2 -7l0 2 1 0c0,0 1,0 1,-1 0,0 0,0 0,0 0,-1 0,-1 -1,-1l-1 0zm0 3l0 2 1 0c1,0 1,0 1,0 0,0 1,-1 1,-1 0,0 -1,-1 -1,-1 0,0 0,0 -1,0l-1 0z"/>
					<G>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M200 590c-1,2 -1,4 -1,7 -1,5 1,10 2,10 2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-3 0z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M199 591c0,1 0,1 0,1l5 0c0,0 0,0 0,0l-5 -1z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M200 590c-1,0 -1,1 -1,1l5 1c0,-1 -1,-2 -1,-2l-3 0z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M201 607c2,0 3,-4 3,-10 0,-3 0,-5 -1,-7l-2 0 0 17z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M201 592l3 0c0,0 0,0 0,0l-3 -1 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M201 591l3 1c0,-1 -1,-2 -1,-2l-2 0 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M185 578c1,-3 2,-5 4,-6l-1 60c-2,-7 -3,-13 -3,-19l0 -35z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M192 578c0,-3 -1,-5 -3,-6l-1 60c2,-6 3,-13 3,-19l1 -35z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M189 577c-2,0 -2,1 -3,2 1,-2 1,-4 3,-4l0 2z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M189 577c1,0 2,1 2,2 0,-2 -1,-4 -2,-4l0 2z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M175 606c2,0 3,-4 3,-9 0,-3 0,-6 0,-8l-2 0 -1 17z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M176 592l2 0c0,-1 0,-1 0,-1l-2 0 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M176 591l2 0c0,-1 0,-1 0,-2l-2 0 0 2z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M175 606c-1,0 -2,-4 -2,-9 0,-3 0,-6 1,-8l2 0 -1 17z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M176 592l-3 -1c0,0 0,0 0,0l3 0 0 1z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M176 591l-3 0c0,-1 1,-1 1,-2l2 0 0 2z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M186 589l-23 17 0 7 22 -11c3,-8 3,-12 1,-13z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M163 603c0,0 0,3 0,6 0,4 0,7 -1,7 0,0 0,-3 0,-7 0,-3 0,-6 1,-6z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M191 589l22 18 0 7 -21 -12c-3,-8 -3,-12 -1,-13z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M214 604c-1,0 -1,3 -1,6 0,4 0,7 1,7 0,0 0,-3 1,-7 0,-3 -1,-6 -1,-6z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M187 624c0,0 -9,7 -9,7l-1 3 10 -4 0 -6z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M189 624c0,0 9,7 9,7l0 4 -10 -5 1 -6z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M188 618c-1,1 -1,2 -1,4 0,2 0,5 0,7l1 6 0 -17z"/>
					 <Path fill={this.getColor("H1","LINE 2","Slot 2")} d="M188 618c0,1 1,2 1,4 0,2 0,5 -1,7l0 6 0 -17z"/>
					</G>
				   </G>
				  </G>
				  <G id="all_w1">
				   <G id="w1">
					<Path fill="white" stroke="white" stroke-width="0.561699" d="M826 288l79 0c1,0 1,1 1,1l0 149c0,1 0,1 -1,1l-79 0c0,0 -1,0 -1,-1l0 -149c0,0 1,-1 1,-1z"/>
					<Path fill="#1A3560" d="M827 289l77 0c1,0 1,1 1,1l0 147c0,1 0,1 -1,1l-77 0c0,0 -1,0 -1,-1l0 -147c0,0 1,-1 1,-1z"/>
				   </G>
				   <G id="p1l1">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 912.947 306.278)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Path fill="white" fill-rule="nonzero" d="M909 332l-9 -2 0 -2 6 -2c0,0 0,0 1,0l0 0c-1,0 -1,0 -1,0l-6 -2 0 -2 9 -2 0 2 -6 1c0,0 0,0 -1,0l0 0c0,0 1,1 1,1l6 1 0 2 -6 1c0,1 0,1 -1,1l0 0c0,0 1,0 1,0l6 1 0 2z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M909 337l-9 0 0 -2 7 0c0,0 0,0 -1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1l2 0c0,1 0,1 0,1 0,1 0,1 1,2l0 1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="900,345 900,340 909,340 909,342 902,342 902,345 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M909 350l-9 0 0 -2 7 0c0,0 0,-1 -1,-1 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0l2 0c0,0 0,1 0,1 0,1 0,1 1,1l0 2z"/>
					<G>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M872 345c-2,0 -4,-1 -7,-1 -6,0 -10,1 -10,3 0,1 4,3 10,3 3,0 5,0 7,-1l0 -4z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M870 345c0,0 0,0 0,0l0 5c0,0 0,-1 0,-1l0 -4z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M872 345c0,0 -1,0 -2,0l0 4c1,0 1,0 2,0l0 -4z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M855 347c0,1 4,3 10,3 3,0 5,0 7,-1l0 -2 -17 0z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M870 347l0 3c0,0 0,-1 0,-1l0 -2 0 0z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M870 347l0 2c1,0 1,0 2,0l0 -2 -2 0z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M884 331c3,1 5,2 5,4l-59 -2c6,-1 13,-2 19,-3l35 1z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M883 338c4,0 6,-2 6,-3l-59 -2c6,2 13,4 19,4l34 1z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M885 335c0,-2 -1,-3 -2,-3 2,0 4,1 4,3l-2 0z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M885 335c0,1 -1,2 -2,2 2,0 3,-1 4,-2l-2 0z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M856 321c-1,2 4,3 9,3 3,0 6,0 7,-1l1 -2 -17 0z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M870 321l0 3c0,0 1,0 1,0l0 -3 -1 0z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M871 321l0 3c0,-1 1,-1 1,-1l1 -2 -2 0z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M856 321c0,-2 4,-3 9,-3 3,0 6,1 8,1l0 2 -17 0z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M870 321l0 -2c1,0 1,0 1,0l0 2 -1 0z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M871 321l0 -2c1,0 1,0 2,0l0 2 -2 0z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M873 332l-17 -23 -7 0 11 22c8,2 12,3 13,1z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M859 308c0,1 -3,1 -6,1 -4,0 -7,0 -7,-1 0,0 3,-1 7,-1 3,1 6,1 6,1z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M873 337l-18 22 -7 0 12 -22c8,-2 12,-2 13,0z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M858 360c0,-1 -3,-1 -7,-1 -3,0 -6,0 -6,0 0,1 3,1 6,1 4,0 7,0 7,0z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M838 332c0,0 -7,-9 -7,-9l-3 0 4 10 6 -1z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M838 335c0,0 -7,9 -7,9l-4 -1 5 -9 6 1z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M844 334c-1,-1 -2,-1 -4,-1 -3,-1 -5,-1 -7,0l-6 0 17 1z"/>
					 <Path fill={this.getColor("W1","LINE 1","Slot 1")} d="M844 334c-1,0 -2,1 -4,1 -3,0 -5,0 -8,-1l-5 -1 17 1z"/>
					</G>
				   </G>
				   <G id="pw1l2">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 912.947 366.698)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Path fill="white" fill-rule="nonzero" d="M909 392l-9 -2 0 -2 6 -1c0,0 0,-1 1,-1l0 0c-1,0 -1,0 -1,0l-6 -1 0 -2 9 -2 0 2 -6 1c0,0 0,0 -1,0l0 0c0,0 1,0 1,0l6 2 0 2 -6 1c0,0 0,0 -1,0l0 0c0,0 1,0 1,0l6 1 0 2z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M909 397l-9 0 0 -2 7 0c0,0 0,0 -1,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0l2 0c0,0 0,0 0,1 0,0 0,1 1,1l0 1z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="900,405 900,400 909,400 909,402 902,402 902,405 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M902 408l0 3 -2 0 0 -5 1 0c0,0 1,0 1,0 0,0 1,0 1,0 0,1 0,1 1,1 0,0 0,1 0,1 0,0 1,0 1,0 0,1 0,1 0,1 0,0 1,0 1,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,-1 0,-1 0,-1 0,-1 -1,-2l2 0c0,1 1,2 1,2 0,1 0,1 0,2 -1,0 -1,0 -1,0 0,1 0,1 -1,1 0,0 0,0 -1,0 0,0 0,0 -1,0 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 0,0 -1,-1 -1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,0 -1,0 -1,0 0,0 0,0 0,0z"/>
					<G>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M872 406c-2,-1 -4,-1 -7,-1 -6,0 -10,1 -10,2 0,2 4,3 10,3 3,0 5,0 7,-1l0 -3z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M870 405c0,0 0,0 0,0l0 5c0,0 0,0 0,0l0 -5z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M872 406c0,0 -1,-1 -2,-1l0 5c1,0 1,0 2,-1l0 -3z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M855 407c0,2 4,3 10,3 3,0 5,0 7,-1l0 -1 -17 -1z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M870 408l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M870 408l0 2c1,0 1,0 2,-1l0 -1 -2 0z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M884 392c3,0 5,1 5,3l-59 -1c6,-2 13,-3 19,-3l35 1z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M883 398c4,0 6,-1 6,-3l-59 -1c6,2 13,3 19,4l34 0z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M885 395c0,-1 -1,-2 -2,-3 2,1 4,1 4,3l-2 0z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M885 395c0,1 -1,2 -2,2 2,0 3,0 4,-2l-2 0z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M856 381c-1,2 4,3 9,3 3,0 6,0 7,0l1 -2 -17 -1z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M870 382l0 2c0,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M871 382l0 2c0,0 1,0 1,0l1 -2 -2 0z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M856 381c0,-1 4,-2 9,-2 3,0 6,0 8,1l0 2 -17 -1z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M870 382l0 -3c1,0 1,0 1,0l0 3 -1 0z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M871 382l0 -3c1,1 1,1 2,1l0 2 -2 0z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M873 392l-17 -23 -7 0 11 22c8,3 12,3 13,1z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M859 369c0,0 -3,1 -6,1 -4,-1 -7,-1 -7,-1 0,-1 3,-1 7,-1 3,0 6,0 6,1z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M873 397l-18 22 -7 0 12 -21c8,-3 12,-3 13,-1z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M858 420c0,0 -3,-1 -7,-1 -3,0 -6,0 -6,1 0,0 3,1 6,1 4,0 7,-1 7,-1z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M838 393c0,0 -7,-9 -7,-9l-3 0 4 9 6 0z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M838 395c0,0 -7,9 -7,9l-4 0 5 -10 6 1z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M844 394c-1,0 -2,-1 -4,-1 -3,0 -5,0 -7,0l-6 1 17 0z"/>
					 <Path fill={this.getColor("W1","LINE 2","Slot 1")} d="M844 394c-1,1 -2,1 -4,1 -3,0 -5,0 -8,0l-5 -1 17 0z"/>
					</G>
				   </G>
				  </G>
				  <G id="all_w2">
				   <G id="w2">
					<Path fill="white" stroke="white" stroke-width="0.561699" d="M826 450l79 0c1,0 1,1 1,1l0 187c0,0 0,1 -1,1l-79 0c0,0 -1,-1 -1,-1l0 -187c0,0 1,-1 1,-1z"/>
					<Path fill="#1A3560" d="M827 451l77 0c1,0 1,1 1,1l0 184c0,1 0,2 -1,2l-77 0c0,0 -1,-1 -1,-2l0 -184c0,0 1,-1 1,-1z"/>
				   </G>
				   <G id="pw2l1">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 912.947 462.645)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Path fill="white" fill-rule="nonzero" d="M909 488l-9 -2 0 -2 6 -1c0,-1 0,-1 1,-1l0 0c-1,0 -1,0 -1,0l-6 -1 0 -2 9 -3 0 3 -6 1c0,0 0,0 -1,0l0 0c0,0 1,0 1,0l6 2 0 1 -6 2c0,0 0,0 -1,0l0 0c0,0 1,0 1,0l6 1 0 2z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M902 491l0 3 -2 0 0 -5 1 0c0,0 1,0 1,0 0,0 1,0 1,0 0,1 0,1 1,1 0,0 0,1 0,1 0,0 1,0 1,1 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 0,-1 0,-1 0,-1 -1,-2l2 0c0,1 1,2 1,3 0,0 0,0 0,1 -1,0 -1,0 -1,1 0,0 0,0 -1,0 0,0 0,0 -1,0 0,0 0,0 -1,0 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 0,0 -1,-1 -1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,0 -1,0 -1,0 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="900,501 900,496 909,496 909,498 902,498 902,501 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M909 506l-9 0 0 -2 7 0c0,0 0,0 -1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,-1 0,-1l2 0c0,1 0,1 0,2 0,0 0,0 1,1l0 1z"/>
					<G>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M872 502c-2,-1 -4,-1 -7,-1 -6,-1 -10,1 -10,2 0,2 4,3 10,3 3,0 5,0 7,-1l0 -3z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M870 501c0,0 0,0 0,0l0 5c0,0 0,0 0,0l0 -5z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M872 502c0,0 -1,-1 -2,-1l0 5c1,0 1,0 2,-1l0 -3z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M855 503c0,2 4,3 10,3 3,0 5,0 7,-1l0 -1 -17 -1z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M870 504l0 2c0,0 0,0 0,0l0 -2 0 0z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M870 504l0 2c1,0 1,0 2,-1l0 -1 -2 0z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M884 488c3,0 5,1 5,3l-59 -1c6,-2 13,-3 19,-3l35 1z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M883 494c4,0 6,-1 6,-3l-59 -1c6,2 13,3 19,3l34 1z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M885 491c0,-1 -1,-2 -2,-3 2,1 4,1 4,3l-2 0z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M885 491c0,1 -1,2 -2,2 2,0 3,0 4,-2l-2 0z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M856 477c-1,2 4,3 9,3 3,0 6,0 7,0l1 -2 -17 -1z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M870 478l0 2c0,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M871 478l0 2c0,0 1,0 1,0l1 -2 -2 0z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M856 477c0,-1 4,-2 9,-2 3,0 6,0 8,1l0 2 -17 -1z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M870 478l0 -3c1,0 1,0 1,0l0 3 -1 0z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M871 478l0 -3c1,1 1,1 2,1l0 2 -2 0z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M873 488l-17 -23 -7 0 11 22c8,3 12,3 13,1z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M859 465c0,0 -3,1 -6,0 -4,0 -7,0 -7,0 0,-1 3,-1 7,-1 3,0 6,0 6,1z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M873 493l-18 22 -7 0 12 -21c8,-3 12,-3 13,-1z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M858 516c0,-1 -3,-1 -7,-1 -3,0 -6,0 -6,1 0,0 3,1 6,1 4,0 7,-1 7,-1z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M838 489c0,0 -7,-9 -7,-9l-3 0 4 9 6 0z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M838 491c0,0 -7,9 -7,9l-4 0 5 -10 6 1z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M844 490c-1,-1 -2,-1 -4,-1 -3,0 -5,0 -7,0l-6 1 17 0z"/>
					 <Path fill={this.getColor("W2","LINE 1","Slot 1")} d="M844 490c-1,1 -2,1 -4,1 -3,0 -5,0 -8,-1l-5 0 17 0z"/>
					</G>
				   </G>
				   <G id="pw2l2">
					<Rect fill="#40B984" transform="matrix(-4.64533E-014 1.75398 -1.75398 -4.64533E-014 912.947 558.591)" width="31.4252" height="9.60207" rx="3" ry="3"/>
					<Path fill="white" fill-rule="nonzero" d="M909 584l-9 -2 0 -2 6 -2c0,0 0,0 1,0l0 0c-1,0 -1,0 -1,0l-6 -1 0 -2 9 -3 0 2 -6 2c0,0 0,0 -1,0l0 0c0,0 1,0 1,0l6 1 0 2 -6 2c0,0 0,0 -1,0l0 0c0,0 1,0 1,0l6 1 0 2z"/>
					<Path id="1" fill="white" fill-rule="nonzero" d="M902 587l0 3 -2 0 0 -5 1 0c0,0 1,0 1,0 0,0 1,0 1,0 0,1 0,1 1,1 0,0 0,1 0,1 0,0 1,0 1,1 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 0,-1 0,-1 0,-1 -1,-2l2 0c0,1 1,2 1,3 0,0 0,0 0,1 -1,0 -1,0 -1,0 0,1 0,1 -1,1 0,0 0,0 -1,0 0,0 0,0 -1,0 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 0,0 -1,-1 -1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,0 -1,0 -1,0 0,0 0,0 0,0z"/>
					<Polygon id="2" fill="white" fill-rule="nonzero" points="900,597 900,592 909,592 909,594 902,594 902,597 "/>
					<Path id="3" fill="white" fill-rule="nonzero" d="M902 600l0 3 -2 0 0 -5 1 0c0,0 1,0 1,0 0,0 1,0 1,0 0,0 0,1 1,1 0,0 0,0 0,1 0,0 1,0 1,0 0,1 0,1 0,1 0,0 1,0 1,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,-1 0,-1 0,-1 0,-1 -1,-2l2 0c0,1 1,1 1,2 0,1 0,1 0,1 -1,1 -1,1 -1,1 0,1 0,1 -1,1 0,0 0,0 -1,0 0,0 0,0 -1,0 0,0 0,0 0,-1 -1,0 -1,0 -1,0 0,-1 -1,-1 -1,-1 0,0 0,0 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0z"/>
					<G>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M872 598c-2,-1 -4,-1 -7,-1 -6,-1 -10,1 -10,2 0,2 4,3 10,3 3,0 5,0 7,-1l0 -3z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M870 597c0,0 0,0 0,0l0 5c0,0 0,0 0,0l0 -5z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M872 598c0,-1 -1,-1 -2,-1l0 5c1,0 1,0 2,-1l0 -3z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M855 599c0,2 4,3 10,3 3,0 5,0 7,-1l0 -1 -17 -1z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M870 599l0 3c0,0 0,0 0,0l0 -3 0 0z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M870 599l0 3c1,0 1,0 2,-1l0 -1 -2 -1z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M884 584c3,0 5,1 5,3l-59 -1c6,-2 13,-3 19,-3l35 1z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M883 590c4,0 6,-1 6,-3l-59 -1c6,2 13,3 19,3l34 1z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M885 587c0,-2 -1,-2 -2,-3 2,1 4,1 4,3l-2 0z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M885 587c0,1 -1,2 -2,2 2,0 3,0 4,-2l-2 0z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M856 573c-1,2 4,3 9,3 3,0 6,0 7,0l1 -2 -17 -1z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M870 574l0 2c0,0 1,0 1,0l0 -2 -1 0z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M871 574l0 2c0,0 1,0 1,0l1 -2 -2 0z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M856 573c0,-1 4,-2 9,-2 3,0 6,0 8,1l0 2 -17 -1z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M870 574l0 -3c1,0 1,0 1,0l0 3 -1 0z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M871 574l0 -3c1,0 1,1 2,1l0 2 -2 0z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M873 584l-17 -23 -7 0 11 22c8,3 12,3 13,1z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M859 561c0,0 -3,0 -6,0 -4,0 -7,0 -7,-1 0,0 3,0 7,0 3,0 6,0 6,1z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M873 589l-18 22 -7 0 12 -21c8,-3 12,-3 13,-1z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M858 612c0,-1 -3,-1 -7,-1 -3,0 -6,0 -6,1 0,0 3,0 6,1 4,0 7,-1 7,-1z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M838 585c0,0 -7,-9 -7,-9l-3 -1 4 10 6 0z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M838 587c0,0 -7,9 -7,9l-4 0 5 -10 6 1z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M844 586c-1,-1 -2,-1 -4,-1 -3,0 -5,0 -7,0l-6 1 17 0z"/>
					 <Path fill={this.getColor("W2","LINE 2","Slot 1")} d="M844 586c-1,0 -2,1 -4,1 -3,0 -5,0 -8,-1l-5 0 17 0z"/>
					</G>
				   </G>
				  </G>
				 </G>
			</Svg>
			)
		}else{
			return null;
		}
	}
  render() {
    return (
		<View style={{backgroundColor:'#1A3560',width:'100%',height:'100%',top:0,left:0,position:'absolute',alignItems:'center'}}>
			{this.renderSVG()}
		</View>
    );
  }
}