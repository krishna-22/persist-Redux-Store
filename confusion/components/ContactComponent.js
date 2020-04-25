import React, { Component } from 'react';
import { View, FlatList,Text } from 'react-native';
import { ListItem,Card } from 'react-native-elements';

class Contact extends Component{
    constructor(props)
    {
        super(props)
    
    }
    static navigationOptions = {
        title: 'Contact Us'
    };
    render()
    {
        return(
        <Card
        title='Contact Information'
        >
            <Text style={{margin: 10}}>
            121, Clear Water Bay Road
             Clear Water Bay, Kowloon
            HONG KONG
            Tel: +852 1234 5678
            Fax: +852 8765 4321
            Email:confusion@food.net
            </Text>
        </Card>);
    }
}
export default Contact;