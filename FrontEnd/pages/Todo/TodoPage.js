import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";

import TodoList from "../../components/TodoList";
import { fetchData, add, update, clear, deletetodo } from "./todoRequests";
import { getUserId, storeData, storeUserId } from "../../utils/storage";
import Header from "../../components/Header";

const url = "http://10.0.2.2:3000/todos";

const TodoPage = ({ navigation }) => {
    const [todoList, setTodoList] = useState([]);
    const [todoText, setTodoText] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    const removeTodo = (id) => {
        const newList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newList);
        setIsEditing(false);
        deletetodo(id);
    };

    const editTodo = (id) => {
        const specficTodo = todoList.find((item) => item.id === id);
        setIsEditing(true);
        setEditId(id);
        setTodoText(specficTodo.name);
    };

    const handleSubmit = async () => {
        if (!todoText) {
            // Show Alert
            console.log("Enter Text");
        } else if (todoText && isEditing) {
            // edit
            setTodoList(
                todoList.map((todo) => {
                    if (todo.id === editId) {
                        update({ ...todo, name: todoText });
                        return { ...todo, name: todoText };
                    }
                    return todo;
                })
            );
            setTodoText("");
            setEditId(null);
            setIsEditing(false);
        } else {
            const userId = parseInt(await getUserId());
            let id = await add(todoText, userId);
            setTodoList([...todoList, { id, name: todoText, checked: false }]);
            setTodoText("");
        }
    };

    const clearList = async () => {
        const userId = parseInt(await getUserId());
        clear(userId);
        setTodoList([]);
        setIsEditing(false);
        setTodoText("");
    };

    const logout = async () => {
        storeData("");
        storeUserId("");
        navigation.navigate("SignIn");
    };
    useEffect(() => {
        fetchData(setTodoList);
    }, []);

    return (
        <>
            <Header logout={logout} />
            <ScrollView style={{ backgroundColor: "#F5FCFF" }}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Add a todo..."
                        value={todoText}
                        onChangeText={(text) => setTodoText(text)}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleSubmit()}
                    >
                        <Text style={styles.buttonText}>
                            {isEditing ? "Edit" : "Add"}
                        </Text>
                    </TouchableOpacity>
                    <TodoList
                        todoList={todoList}
                        editTodo={editTodo}
                        removeTodo={removeTodo}
                        setTodoList={setTodoList}
                        clearList={clearList}
                        update={update}
                    />
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        height: 50,
        width: "80%",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#2196F3",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: "80%",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    },
    list: {
        width: "80%",
    },
    listItem: {
        padding: 10,
        backgroundColor: "#EEE",
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    listItemText: {
        fontSize: 25,
        marginLeft: 10,
    },
    listItemTextBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    listItemIcons: {
        flexDirection: "row",
    },
    deleteIcon: {
        marginLeft: 10,
    },
});

export default TodoPage;
