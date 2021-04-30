import React, {useEffect, useState} from "react";
import './FirstStepRegistration.style.scss';
import {Box, Container, Input, TextField} from "@material-ui/core";
import {connect} from "react-redux";
import OutLinedTextField from "../../CustomComponents/TextField/OutLinedTextField";
import {makeStyles} from "@material-ui/core/styles";
import emailValidator from "email-validator";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
}));

function FirstStepRegistration() {
    const s = useStyles();
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const addErrorField = (fieldName) => {
        setErrors((currentErrors) => {
            return {
                ...currentErrors,
                [fieldName]: true
            }
        })
    }

    const removeError = (fieldName) => {
        setErrors((currentErrors) => {
            return {
                ...currentErrors,
                [fieldName]: false
            }
        })
    }

    const handleInputChange = (field) => (e) => {
        setForm((currentForm) => {
            return {
                ...currentForm,
                [field]: e.target.value
            }
        })
    }

    const isFieldErrored = (fieldName) => {
        console.log(errors)
        return Boolean(errors[fieldName])
    }

    useEffect(() => {
        if (form.password?.length && form.repeatPassword?.length && form.password !== form.repeatPassword) {
            addErrorField('password');
            addErrorField('repeatPassword');
        } else {
            removeError('password');
            removeError('repeatPassword')
        }
    }, [form.password, form.repeatPassword])

    useEffect(() => {
        console.log(form.email);
        console.log(emailValidator.validate(form.email))
        if(emailValidator.validate(form.email)) {
            removeError("email")
        } else {
            addErrorField("email")
        }
    }, [form.email])


    return (
        <Container maxWidth="md">
            <Box display="flex" flexDirection={"column"} className={s.root}>
                <OutLinedTextField
                    required
                    error={isFieldErrored("email")}
                    type={"email"}
                    label={"Почта"}
                    onChange={handleInputChange("email")}
                    fullWidth
                />
                <OutLinedTextField
                    reduired
                    error={isFieldErrored("password")}
                    type={"password"}
                    label={"Введите пароль"}
                    onChange={handleInputChange("password")}
                    fullWidth
                />
                <OutLinedTextField
                    required
                    error={isFieldErrored("repeatPassword")}
                    label={"Повторите пароль"}
                    type={"password"}
                    onChange={handleInputChange("repeatPassword")}
                    fullWidth
                />
            </Box>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstStepRegistration);
