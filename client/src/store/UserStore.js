import {createSlice} from "@reduxjs/toolkit";
import axios from "../axiosAPI";
import validator from 'validator';
import {SHOP_ROUTE} from "../utils/const";
import {sha512} from 'crypto-hash';
import {getSalt} from "../Salt";


const initialState = {
    username: "", pass: "", login: "", name: '', isReg: false, isAuth: false, isModer: false, isAdmin: false
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


export const registerUser = async event => {
    let checkBox = document.getElementById('reg_check')
    event.preventDefault();
    if (!validator.isEmail(document.getElementById("reg_email").value)) {
        document.getElementById("reg_err_msg").textContent = 'Uncorrect email!'
    } else if (document.getElementById("reg_pass").value !== document.getElementById("reg_pass1").value) {
        document.getElementById("reg_err_msg").textContent = "Repeated password incorrectly"
    } else if (!validator.isStrongPassword(document.getElementById("reg_pass").value, {minSymbols: 0})) {
        document.getElementById("reg_err_msg").textContent = "Password must consist of one lowercase, uppercase letter and number, at least 8 characters"
    } else if (!checkBox.checked) {
        document.getElementById("reg_err_msg").textContent = 'You need to accept personal data processing policies!'
    } else {
        let result = await sha512(document.getElementById("reg_pass").value)
        result += getSalt()
        axios.post("/reg", {
            username: document.getElementById("reg_name").value,
            email: document.getElementById("reg_email").value,
            password: result,
        }).then(res => {
            if (res.data === true) {
                initialState.users = initialState.users.map(user => (user.username = res.data.username, user.pass = res.data.pass, user.login = res.data.login));
                window.location.href = SHOP_ROUTE
            } else {
                document.getElementById("reg_err_msg").textContent = "There is already a user with this email"
            }
        }).catch(() => {
            document.getElementById("reg_err_msg").textContent = "An error occurred on the server"
        })
    }

}

// export const logoutUser = createAsyncThunk(
//     'logout',
//     async (payload, thunkAPI) => {
//         await axios.delete('users/sessions');
//         thunkAPI.dispatch(usersSlice.actions.logoutUser());
//         console.log(usersSlice.actions);
//         payload.navigate('/');
//     }
// )

const usersSlice = createSlice({
    name: 'users', initialState, reducers: {

        loginafterRegister: (state, action) => {
            state.user = action.payload;
        }, catchRegisterError: (state, action) => {
            state.registerError = action.payload;
        }, catchLoginError: (state, action) => {
            state.loginError = action.payload;
        }, globalError: (state, action) => {
            state.global = action.payload;
        }, logoutUser: (state) => {
            state.user = null;
        }
    }
})

export default usersSlice.reducer;