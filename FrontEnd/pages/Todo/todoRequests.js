import axios from "axios";
import { getUserId } from "../../utils/storage";

const url = "http://10.0.2.2:3000/todos";

export const fetchData = async (setTodoList) => {
    const userId = await getUserId();
    try {
        console.log(`userId: ${userId}`);
        const { data } = await axios(`${url}/${userId}`);
        console.log("Login in fetch");
        console.log(data);
        setTodoList(data);
    } catch (error) {
        console.log("fetch");
        console.log(error);
    }
};

export const deletetodo = async (id) => {
    try {
        const resp = await axios.delete(`${url}/${id}`);
    } catch (error) {
        console.log(error);
    }
};

export const clear = async (userId) => {
    try {
        const resp = await axios.delete(`${url}/clear`, {
            userId,
        });
    } catch (error) {
        console.log("clear");
        console.log(error);
    }
};

export const add = async (todoText, userId) => {
    try {
        const resp = await axios.post(`${url}`, {
            name: todoText,
            isChecked: false,
            userId,
        });
        return resp.data.id;
    } catch (error) {
        console.log(error);
    }
};

export const update = async (item) => {
    try {
        const resp = await axios.put(`${url}/${item.id}`, item);
    } catch (error) {
        console.log(error);
    }
};
