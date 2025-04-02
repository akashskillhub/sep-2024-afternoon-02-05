import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Card, Divider, MD2Colors, MD3Colors, Snackbar, Text, TextInput } from 'react-native-paper'
import { useFormik } from 'formik'
import * as yup from "yup"
import { useMobileLoginMutation } from '../redux/apis/mobile-auth.api'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/Loading'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch } from 'react-redux'
import { setLoacal } from '../redux/slices/mobile-auth.slice'
const Login = () => {
    const dispatch = useDispatch()
    const [isLogin, setIsLogin] = useState(false)

    const { navigate } = useNavigation()
    const [signin, {
        isSuccess,
        isError,
        error,
        isLoading,
        reset,
        data
    }] = useMobileLoginMutation()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().email().required(),
            password: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            signin(values)
            resetForm()
        }
    })

    useEffect(() => {
        if (isSuccess) {
            AsyncStorage.setItem("mobile-user", JSON.stringify(data))
                .then(() => navigate("landing"))
                .catch(() => console.log("unable to store"))
        }
    }, [isSuccess])

    useEffect(() => {
        AsyncStorage.getItem("mobile-user")
            .then(data => {
                if (data) {
                    // dispatch action to store in redux 
                    dispatch(setLoacal(JSON.parse(data)))
                    console.log(data)
                    setIsLogin(true)
                    navigate("landing")
                } else {
                    console.log("no local data")
                }
            })
            .catch(() => console.log("unable to get localdata"))

    }, [isLogin])

    if (isError) {
        console.log(error)
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return <View style={{
        padding: 15,
        flex: 1,
        justifyContent: "center"
    }}>

        <Card>
            <Card.Content style={{ gap: 15 }}>
                <TextInput
                    keyboardType='email-address'
                    value={formik.values.email}
                    onChangeText={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    error={formik.touched.email && formik.errors.email}
                    mode='outlined' label="Enter Email" />
                {
                    formik.touched.email
                    && formik.errors.email
                    && <Text style={{ color: MD3Colors.error50 }}>
                        {formik.errors.email}
                    </Text>
                }
                <TextInput
                    value={formik.values.password}
                    onChangeText={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    error={formik.touched.password && formik.errors.password}
                    secureTextEntry
                    mode='outlined'
                    label="Enter Password" />

                {
                    formik.touched.password
                    && formik.errors.password
                    && <Text style={{ color: MD3Colors.error50 }}>
                        {formik.errors.password}
                    </Text>
                }
                <Button onPress={formik.handleSubmit} mode='contained'>Login</Button>

                <Divider></Divider>
                <Button onPress={e => navigate("register")}>Dont have account? Register</Button>
            </Card.Content>
        </Card>

        {
            isSuccess && <Snackbar
                onDismiss={reset}
                duration={7000}
                visible={isSuccess}>
                Login Success
            </Snackbar>
        }
        {
            isError && <Snackbar
                onDismiss={reset}
                duration={7000}
                visible={isError}>
                {error.data ? error.data.message : "unable to login"}
            </Snackbar>
        }
    </View>
}

export default Login

const styles = StyleSheet.create({})