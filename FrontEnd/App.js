import React, { useState } from "react";

import TodoPage from "./pages/Todo/TodoPage";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ToastProvider } from "react-native-toast-notifications";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <ToastProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Registration" component={SignUp} />
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{
                            headerBackVisible: false,
                        }}
                    />
                    <Stack.Screen
                        name="Todo"
                        component={TodoPage}
                        options={{
                            headerBackVisible: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ToastProvider>
    );
};

export default App;
