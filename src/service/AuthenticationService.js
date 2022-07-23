import http from "../http-common";

const login = (_reCAPTCHA, _email, _password) => {
    return http
        .get("/authentication/user/login", {
            params: {
                reCAPTCHA: _reCAPTCHA,
                email: _email,
                password: _password
            }
        })
}

export default {
    login
};