import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Keyboard, TouchableNativeFeedback, ScrollView, KeyboardAvoidingView} from 'react-native'
import KeyboardDismissWrapper from '../components/KeyboardDismissWrapper'

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
const {brand, darkLight} = Colors


const SignUp = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true)

  
  return (
    <KeyboardDismissWrapper>
      <StyledContainer>
        <StatusBar style="dark"/>
        <InnerContainer>
            
            <PageTitle>Date Planning</PageTitle>
                <SubTitle>Account SignUp</SubTitle>

                <Formik
                    initialValues={{fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: ''}}
                    onSubmit={(values) => {
                        console.log(values)
                        navigation.navigate("Welcome")
                    }}
                >
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    
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
                                secureTextEntry={hidePassword}
                            />
                            <RightIcon onPress ={()=> setHidePassword(!hidePassword)}>
                                <Ionicons name={hidePassword? 'md-eye-off': 'md-eye'} size={30} color={darkLight}/>
                            </RightIcon>
                        </View>

                        <MsgBox></MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Register</ButtonText>
                        </StyledButton>
                       

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