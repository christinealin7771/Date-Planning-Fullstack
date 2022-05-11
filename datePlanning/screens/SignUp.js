import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, ActivityIndicator} from 'react-native'
import KeyboardDismissWrapper from '../components/KeyboardDismissWrapper'
import axios from 'axios'

//formik
import { Formik } from 'formik'

//Icons
import {Octicons, Ionicons} from '@expo/vector-icons'

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/Styles'
import { NavigationContainer } from '@react-navigation/native'

//colors
const {brand, darkLight, primary} = Colors


const SignUp = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true)
    const [hidePassword2, setHidePassword2] = useState(true)

    const [message, setMessage] = useState()
    const [messageType, setMessageType] = useState()


    const handleSignup = (credientals, setSubmitting) => {
        handleMessage(null)
        axios.post("http://10.20.0.220:3001/users/signup", credientals).then((response) => {
           const result = response.data
           const {message, status, data} = result

           if(status !== 'Success'){
               handleMessage(message, status)
           }
           else {
               navigation.navigate("Welcome", {
                   name: data.fullName,
                   email: data.email
               })
           }
           setSubmitting(false)

        })
        .catch(error => {
            console.log(error.JSON())
            setSubmitting(false)
            handleMessage("An error occured. Check your network and try again.")
        })
    }

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message)
        setMessageType(type)
    }

    const handleGoogleSignin = () => {

    }

  
  return (
    <KeyboardDismissWrapper>
      <StyledContainer>
        <StatusBar style="dark"/>
        <InnerContainer>
            
            <PageTitle>Date Planning</PageTitle>
                <SubTitle>Account SignUp</SubTitle>

                <Formik
                    initialValues={{fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values)
                       if(values.fullName == '' || values.dateOfBirth == '' || values.email == '' || values.password == '' || values.confirmPassword == ''){
                           handleMessage("Please fill all the fields")
                           setSubmitting(false)
                       } else {
                           handleSignup(values, setSubmitting)
                       }
                    }}
                >
                {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
                    
                    <StyledFormArea>
                        
                        <View>
                            <LeftIcon>
                                <Octicons name='person' size={30} color='black'/>
                            </LeftIcon>
                            <StyledInputLabel>Full Name</StyledInputLabel>
                            <StyledTextInput 
                                placeholder='John Bubble'
                                onChangeText={handleChange('fullName')}
                                onBlur = {handleBlur('fullName')}
                                value={values.fullName}
                            
                            />
                        </View>
                        

                        <View>
                            <LeftIcon>
                                <Octicons name='mail' size={30} color='black'/>
                            </LeftIcon>
                            <StyledInputLabel>Email Address</StyledInputLabel>
                            <StyledTextInput 
                                placeholder='john@gmail.com'
                                onChangeText={handleChange('email')}
                                onBlur = {handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            
                            />
                        </View>

                        <View>
                            <LeftIcon>
                                <Octicons name='calendar' size={30} color='black'/>
                            </LeftIcon>
                            <StyledInputLabel>Date of Birth</StyledInputLabel>
                            <StyledTextInput 
                                placeholder='mm/dd/yyyy'
                                onChangeText={handleChange('dateOfBirth')}
                                onBlur = {handleBlur('dateOfBirth')}
                                value={values.dateOfBirth}
                                keyboardType="email-address"
                            
                            />
                        </View>

                        <View>
                            <LeftIcon>
                                <Octicons name='lock' size={30} color='black' />
                            </LeftIcon>
                            <StyledInputLabel>Password</StyledInputLabel>
                            <StyledTextInput
                                placeholder='************'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value = {values.password}
                                secureTextEntry={hidePassword}
                            />
                            <RightIcon onPress ={()=> setHidePassword(!hidePassword)}>
                                <Ionicons name={hidePassword? 'md-eye-off': 'md-eye'} size={30} color={darkLight}/>
                            </RightIcon>
                        </View>

                        <View>
                            <LeftIcon>
                                <Octicons name='lock' size={30} color='black' />
                            </LeftIcon>
                            <StyledInputLabel>Confirm Password</StyledInputLabel>
                            <StyledTextInput
                                placeholder='************'
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value = {values.confirmPassword}
                                secureTextEntry={hidePassword2}
                            />
                            <RightIcon onPress ={()=> setHidePassword2(!hidePassword2)}>
                                <Ionicons name={hidePassword2? 'md-eye-off': 'md-eye'} size={30} color={darkLight}/>
                            </RightIcon>
                        </View>

                        <MsgBox type={messageType}>{message}</MsgBox>

                        {!isSubmitting && (
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Register</ButtonText>
                        </StyledButton>
                        )}

                        {isSubmitting && (
                        <StyledButton disabled={true} >
                            <ActivityIndicator size="large" color={primary}/>
                        </StyledButton>
                        )}
                       
                        <ExtraView>
                            <ExtraText>Already have an account?</ExtraText>
                            <TextLink onPress={() => navigation.navigate("Login")}>
                                <TextLinkContent>Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>

                        


                        {/* <MyTextInput 
                            label="Email Address"
                            icon ="mail"
                            // placeholder="johnA@gmail.com"
                            // placeholderTextColor={darkLight}
                            // onChangeText= {handleChange('email')}
                            // onBlur= {handleBlur('email')}
                            // value={values.email}
                            // keyboardType="email-address"
                        /> */}
                    </StyledFormArea>
                    
                 
            
                )}

                </Formik>

        </InnerContainer>
      </StyledContainer>
      </KeyboardDismissWrapper>
  )
}




export default SignUp