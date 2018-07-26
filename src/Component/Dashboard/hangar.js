import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Button, TabHeading, Body,Text,Title, ScrollableTab ,Card, CardItem, Icon, Right, Footer,FooterTab } from 'native-base';
import { AsyncStorage, View, StyleSheet} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Hangar1 from './hanggar1';
import Hangar2 from './hanggar2';
import Hangar3 from './hanggar3';
import Hangar4 from './hanggar4';
import SVGhangar1 from './svghanggar1';

export default class dashboard extends Component {

	constructor(props) {
		super(props)
		this.state = { initialPage: 0, activeTab: 0 }
	}
	componentDidMount(){
		var tablist = {H1:0,H2:1,H3:2,H4:3};
		AsyncStorage.getItem("HanggarActiveId").then((value) => {
			this.setState({ activeTab: tablist[value] });
		});
	}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header style={{ backgroundColor: '#04245b' }}
          androidStatusBarColor="#002f81">
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Dashoard")}>
              <Icon style={{color:'#fff'}} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'#fff'}}>Hangar</Title>
          </Body>
          <Right />
        </Header>
		<Tabs renderTabBar={()=> <ScrollableTab  style={{backgroundColor: '#04245B'}} /> } tabBarPosition="top" initialPage={this.state.initialPage} page={this.state.activeTab}>
          <Tab heading="Hangar 1" tabStyle={{backgroundColor: '#04245B'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#0A3682'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
      
            <Grid style={styles.distance}>
            <Row style={{ backgroundColor: '#04245B', height: '40%' }}><SVGhangar1 navigation={this.props.navigation} /></Row>
            <Row style={{ backgroundColor: '#ffffff', height: '60%' }}><Hangar1 data={this.props.navigation} /></Row>
          </Grid>
          </Tab>
          <Tab heading="Hangar 2" tabStyle={{backgroundColor: '#04245B'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#0A3682'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
          <Grid style={styles.distance}>
				<Row style={{ backgroundColor: '#04245B', height: '40%' }}><Text style={styles.baseText}>HANGAR 2</Text></Row>
				<Row style={{ backgroundColor: '#ffffff', height: '60%' }}><Hangar2 data={this.props.navigation} /></Row>
          </Grid>
          </Tab>
          <Tab heading="Hangar 3" tabStyle={{backgroundColor: '#04245B'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#0A3682'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
          <Grid style={styles.distance}>
				<Row style={{ backgroundColor: '#04245B', height: '40%' }}><Text style={styles.baseText}>HANGAR 3</Text></Row>
				<Row style={{ backgroundColor: '#ffffff', height: '60%' }}><Hangar3 data={this.props.navigation} /></Row>
          </Grid>
          </Tab>
          <Tab heading="Hangar 4" tabStyle={{backgroundColor: '#04245B'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#0A3682'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
          <Grid style={styles.distance}>
				<Row style={{ backgroundColor: '#04245B', height: '40%' }}><Text style={styles.baseText}>HANGAR 4</Text></Row>
				<Row style={{ backgroundColor: '#ffffff', height: '60%' }}><Hangar4 data={this.props.navigation} /></Row>
          </Grid>
          </Tab>
        </Tabs>
        
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
    paddingTop: 0,
  },
});

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;