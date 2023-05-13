import React, { useState } from "react";

import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { useToast } from "react-native-toast-notifications";
import { FontAwesome } from "@expo/vector-icons";

import { logIn } from "./authRequests";

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const toast = useToast();

    function handleSignIn() {
        if (email && password) {
            logIn(navigation, email, password, setIsLoading, setIsError);
            setEmail("");
            setPassword("");
        }
    }

    if (isLoading) {
        return (
            <Spinner
                color="#2196F3"
                size={100}
                visible={isLoading}
                animation="slide"
                textContent={"Loading..."}
                textStyle={styles.spinnerTextStyle}
            />
        );
    }

    if (isError) {
        toast.show("Error in email or password", {
            type: "danger",
            placement: "bottom",
            duration: 4000,
            offset: 30,
            animationType: "slide-in",
        });
    }

    return (
        <View style={styles.container}>
            <FontAwesome
                style={styles.icon}
                name="user-circle-o"
                size={120}
                color="#2196F3"
            />
            {/* <Text style={styles.title}>Sign In</Text> */}

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.textCont}>
                <Text style={styles.text}>Don't have account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Registration")}
                >
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        marginBottom: 30,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
    },
    input: {
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    button: {
        width: "80%",
        height: 50,
        backgroundColor: "#2196F3",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
    },
    textCont: {
        flexDirection: "row",
        marginTop: 20,
    },

    text: {
        fontSize: 18,
    },
    signUpText: {
        fontSize: 18,
        marginLeft: 5,
        textDecorationLine: "underline",
        color: "#2196F3",
    },
});

export default SignIn;
