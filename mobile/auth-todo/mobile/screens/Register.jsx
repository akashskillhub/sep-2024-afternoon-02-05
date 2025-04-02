import { StyleSheet, View } from 'react-native'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button, Card, Divider, MD3Colors, Text, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { useMobileRegisterMutation } from '../redux/apis/mobile-auth.api'
import Loading from '../components/Loading'

const Register = () => {
    const { navigate } = useNavigation()
    const [signup, { isSuccess, isLoading, isError, error }] = useMobileRegisterMutation()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().email().required(),
            mobile: yup.string().required(),
            password: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            signup(values)
            resetForm()
        }
    })
    useEffect(() => {
        if (isSuccess) {
            navigate("login")
        }
    }, [isSuccess])
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
                    value={formik.values.name}
                    onChangeText={formik.handleChange("name")}
                    onBlur={formik.handleBlur("name")}
                    error={formik.touched.name && formik.errors.name}
                    mode='outlined' label="Enter Name" />
                {
                    formik.touched.name
                    && formik.errors.name
                    && <Text style={{ color: MD3Colors.error50 }} >{formik.errors.name}</Text>
                }
                <TextInput
                    value={formik.values.email}
                    onChangeText={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    error={formik.touched.email && formik.errors.email}
                    mode='outlined' keyboardType='email-address' label="Enter Email" />
                {
                    formik.touched.email
                    && formik.errors.email
                    && <Text style={{ color: MD3Colors.error50 }} >{formik.errors.email}</Text>
                }
                <TextInput
                    value={formik.values.mobile}
                    onChangeText={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                    error={formik.touched.mobile && formik.errors.mobile}
                    mode='outlined' keyboardType='decimal-pad' label="Enter Mobile" />
                {
                    formik.touched.mobile
                    && formik.errors.mobile
                    && <Text style={{ color: MD3Colors.error50 }} >{formik.errors.mobile}</Text>
                }
                <TextInput
                    value={formik.values.password}
                    onChangeText={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    error={formik.touched.password && formik.errors.password}
                    secureTextEntry mode='outlined' label="Enter Password" />
                {
                    formik.touched.password
                    && formik.errors.password
                    && <Text style={{ color: MD3Colors.error50 }} >{formik.errors.password}</Text>
                }
                <Button onPress={formik.handleSubmit} mode='contained' >Regsiter</Button>
                <Divider></Divider>
                <Button onPress={e => navigate("login")}>Already have an account ? Login</Button>
            </Card.Content>
        </Card>
    </View>
}

export default Register

const styles = StyleSheet.create({})