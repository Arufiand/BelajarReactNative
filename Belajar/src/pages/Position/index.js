import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native'
import cart from '../../../img/cart.png';
import pp from '../../../img/pp.jpg';

const Position = () => {
    const[subscriber, setSubscriber] = useState(200);

    useEffect(()=>
        {
            //did mount
            console.log('did mount Position');
            setTimeout(() => {
            setSubscriber(400);
            },6000)
            return () => {
                //did update
                console.log ('did update Position');
            };
        }, [subscriber]);

    // useEffect(()=>
    //     {
    //         console.log('did update')
    //         setTimeout(() => {
    //             setSubscriber(400);
    //         },2000)
            
    //     }, [subscriber]);
    return (
        <View>
        <View style = {styles.wrapper}>
            <View style={styles.cartWrapper}>
                <Image source ={cart} style = {styles.iconCart}/>
                <Text style = {styles.notifikator}>
                10
                </Text>
            </View>
            <Text style ={styles.text}>
                Keranjang Belanja Anda
            </Text>
            <Text>
                Silahkan belanja Lagi
            </Text>

        </View>
        <View style = {
            styles.wrapper, 
            [{
                flexDirection: 'row', justifyContent : 'center'
            }]
        } >
            <View style={styles.cartWrapper}>
                <Image source ={pp} style = {styles.fotoBunder}/>
                <Text style = {styles.notifikator}>
                {subscriber}
                </Text>
            </View>
            <View style={{marginLeft : 10,alignContent : 'center', justifyContent : 'center'}}>
            <Text style ={styles.text}>
                Keranjang Belanja Anda
            </Text>
            <Text>
                Silahkan Belanja Lagi
            </Text>
            </View>          
        </View>
        </View>
        );
}

export default Position

const styles = StyleSheet.create({
    iconCart: {
        width: 50,
        height: 50
    },
    cartWrapper : {
        borderWidth :1, 
        borderColor : 'black',
        width: 93, 
        height:93, 
        borderRadius : 93/2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom : 12
    },
    wrapper : {
        padding: 20, 
        alignItems: 'center'
    },
    notifikator : {
        fontSize : 12, 
        color : 'black', 
        backgroundColor : '#6FCF67', 
        padding: 4, 
        borderRadius : 25, 
        width : 24, 
        height: 24,
        position : 'absolute',
        top : 0,
        right : 0
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    fotoBunder : {width : 100, height : 100, borderRadius : 100/2 }
})
