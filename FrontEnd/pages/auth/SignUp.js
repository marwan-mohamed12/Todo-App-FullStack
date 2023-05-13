import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { register } from "./authRequests";
import Spinner from "react-native-loading-spinner-overlay";
import { FontAwesome } from "@expo/vector-icons";

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async () => {
        if (email && name && password) {
            register(navigation, email, password, name, setIsLoading);
            setEmail("");
            setName("");
            setPassword("");
        }
    };

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

    return (
        <View style={styles.container}>
            <FontAwesome
                style={styles.icon}
                name="user-circle-o"
                size={120}
                color="#2196F3"
            />
            {/* <Text style={styles.title}>Sign Up</Text> */}

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
                placeholder="Name"
                value={name}
                onChangeText={setName}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.textCont}>
                <Text style={styles.text}>Aleardy have acount?</Text>
                <TouchableOpacity
                    style={styles.signInLink}
                    onPress={() => navigation.navigate("SignIn")}
                >
                    <Text style={styles.signInText}>Sign In</Text>
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
        fontSize: 20,
    },
    signInText: {
        fontSize: 20,
        marginLeft: 5,
        textDecorationLine: "underline",
        color: "#2196F3",
    },
    spinnerTextStyle: {
        color: "#2196F3",
        marginTop: 15,
        fontSize: 20,
    },
});
export default SignUp;
