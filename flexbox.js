import React from 'react';
import {
    Text,
    View
} from 'react-native';

const Flexbox = () => {
    return (
        <View>
        <View style = {{flexDirection : 'row',
    justifyContent : 'center'}}>
            <View style = {
                {
                    flex : 1,
                    height: 50,
                    backgroundColor: '#0097e6'
                }
            } />
            <View style = {
                {
                    flex : 2,
                    height: 100,
                    backgroundColor: '#8c7ae6'
                }
            } />
            <View style = {
                {
                    flex : 3,
                    height: 150,
                    backgroundColor: '#e1b12c'
                }
            } />
            <View style = {
                {
                    flex : 4,
                    height: 200,
                    backgroundColor: '#44bd32',
                    opacity : 1000
                }
            } />
        </View>
        <View style = {{flexDirection : 'row'}}>
            <View style = {
                {
                    flex : 1,
                    height: 150,
                    backgroundColor: '#0097e6'
                }
            } />
            <View style = {
                {
                    flex : 2,
                    height: 100,
                    backgroundColor: '#8c7ae6'
                }
            } />
            <View style = {
                {
                    flex : 3,
                    height: 50,
                    backgroundColor: '#e1b12c'
                }
            } />
            <View style = {
                {
                    flex : 4,
                    height: 0,
                    backgroundColor: '#44bd32'
                }
            } />
        </View>
    </View>
    );
}

export default Flexbox;