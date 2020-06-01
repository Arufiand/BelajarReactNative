import React, { Component, useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    TextInput
} from "react-native";

const App = () => {
    const [User, setUser] = React.useState('');
    const [Pass, setPass] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Login</Text>
                        <Text style={styles.text}> Username</Text>
                        <TextInput
                            style={{ paddingVertical: 6 }}
                            placeholder="isikan Username"
                            placeholderTextColor="black"
                            // onSubmitEditing= {()=>this.password.focus()}
                            onChangeText={text => {
                                setUser(text);
                                console.log(`isi user ${text}`);
                            }}
                            value={User}
                        />
                        <Text
                            style={styles.text}> password</Text>
                            <TextInput secureTextEntry={true}
                            style={{ paddingVertical: 6 }}
                            placeholder="isikan Password"
                            placeholderTextColor="black"
                            onChangeText={text => {
                                setPass(text);
                                console.log(`isi user ${text}`);
                            }}
                            value={Pass}
                            />
                        <TouchableOpacity
                            style={styles.Opacity}>
                            <Text
                                style={styles.buttonStyle}>
                                Login Mbut
                            </Text>
                        </TouchableOpacity>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    Opacity: {
        backgroundColor: '#6FCF97', paddingVertical: 6, borderRadius: 25, marginTop: 25
    }, 
    buttonStyle: {
        fontSize: 18,
        fontWeight: '300',
        color: 'white',
        textAlign: 'center'
    },
});

export default App;
