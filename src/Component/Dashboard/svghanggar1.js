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
export default class svghanggar1 extends Component {

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