import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../axiosAPI";
import validator from 'validator';
import {SHOP_ROUTE} from "../utils/const";
import {sha512} from 'crypto-hash';
import {getSalt} from "../Salt";


const initialState = {
    username: "", pass: "", login: "", isReg: false, isAuth: false, isModer: false, isAdmin: false
}

export const loginUser = async event => {
    event.preventDefault();
    if (!validator.isEmail(document.getElementById("log_email").value)) {
        document.getElementById("log_err_msg").textContent = 'Uncorrect email!'
    } else if (document.getElementById("log_pass").value === "") {
        document.getElementById("log_err_msg").textContent = 'Password couldn\'t be empty!'
    } else {
        let result = await sha512(document.getElementById("log_pass").value)
        result += getSalt()
        console.log(result)
        axios.post("/login", {
            email: document.getElementById("log_email").value, password: result,
        }).then(res => {
            if (res.data === true) {
                initialState.users = initialState.users.map(user => (user.username = res.data.username, user.pass = res.data.pass, user.login = res.data.login, user.isAuth = res.data.isAuth, user.isReg = res.data.isReg))
                window.location.href = SHOP_ROUTE
            } else {
                document.getElementById("log_err_msg").textContent = 'Wrong email or password!'
            }
        }).catch(() => {
            document.getElementById("log_err_msg").textContent = "An error occurred on the server"
        })
    }

}


export const login = createAsyncThunk('login', async (payload, thunkAPI) => {
    if (!validator.isEmail(document.getElementById("log_email").value)) {
        document.getElementById("log_err_msg").textContent = 'Uncorrect email!'
    } else if (document.getElementById("log_pass").value === "") {
        document.getElementById("log_err_msg").textContent = 'Password couldn\'t be empty!'
    } else {
        let result = await sha512(document.getElementById("log_pass").value)
        result += getSalt()
        console.log(result)
        axios.post("/login", {
            email: document.getElementById("log_email").value, password: result,
        }).then(res => {
            if (res.status === 200) {
                thunkAPI.dispatch(usersSlice.actions.setLogin(document.getElementById("log_email").value))
                thunkAPI.dispatch(usersSlice.actions.setPassword(document.getElementById("log_pass").value))
                thunkAPI.dispatch(usersSlice.actions.setPassword(res.data.username))
                thunkAPI.dispatch(usersSlice.actions.setIsAuth(true))
                window.location.href = SHOP_ROUTE
            } else {
                document.getElementById("log_err_msg").textContent = 'Wrong email or password!'
            }
        }).catch((e) => {
            document.getElementById("log_err_msg").textContent = e.response.data
        })
    }
})


export const register = createAsyncThunk('register', async (payload, thunkAPI) => {
    let checkBox = document.getElementById('reg_check')
    if (!validator.isEmail(document.getElementById("reg_email").value)) {
        document.getElementById("reg_err_msg").textContent = 'Uncorrect email!'
    } else if (document.getElementById("reg_pass").value === '') {
        document.getElementById("reg_err_msg").textContent = "Name can't be empty"
    } else if (document.getElementById("reg_pass").value !== document.getElementById("reg_pass1").value) {
        document.getElementById("reg_err_msg").textContent = "Repeated password incorrectly"
    } else if (!validator.isStrongPassword(document.getElementById("reg_pass").value, {minSymbols: 0})) {
        document.getElementById("reg_err_msg").textContent = "Password must consist of one lowercase, uppercase letter and number, at least 8 characters"
    } else if (!checkBox.checked) {
        document.getElementById("reg_err_msg").textContent = 'You need to accept personal data processing policies!'
    } else {
        let result = await sha512(document.getElementById("reg_pass").value)
        result += getSalt()
        await axios.post('/reg', {
            username: document.getElementById("reg_name").value,
            email: document.getElementById("reg_email").value,
            password: result
        }).then(res => {
            console.log(res)
            if (res.data === true) {
                thunkAPI.dispatch(usersSlice.actions.setName(document.getElementById("reg_name").value))
                thunkAPI.dispatch(usersSlice.actions.setLogin(document.getElementById("reg_email").value))
                thunkAPI.dispatch(usersSlice.actions.setPassword(document.getElementById("reg_pass").value))
            }
            if(res.data === "exists"){
                document.getElementById("reg_err_msg").textContent = "User with this email already exists!"
            }
        }).catch((e) => {
            document.getElementById("reg_err_msg").textContent = e.response.data
        })
    }
})

export const logoutUser = createAsyncThunk(
    'logout',
    async (payload, thunkAPI) => {
        thunkAPI.dispatch(usersSlice.actions.setIsAuth(false));
    }
)

const usersSlice = createSlice({
    name: 'users', initialState, reducers: {
        setName(state, action) {
            state.username = action.payload
        }, setLogin(state, action) {
            state.login = action.payload
        }, setPassword(state, action) {
            state.pass = action.payload
        }, setIsAuth(state, action) {
            state.isAuth = action.payload
        }
    },
})

export default usersSlice.reducer;