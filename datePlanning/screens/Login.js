import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, ActivityIndicator } from 'react-native'
import KeyboardDismissWrapper from '../components/KeyboardDismissWrapper'
//formik
import { Formik } from 'formik'

//Icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons'

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

//colors
const {brand, darkLight, primary} = Colors


const Login = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true)


    // const handleLogin = (credientals) => {
    //     axios.post("http://localhost:3001/users/login", credientals).then((response) => {
           
    //     })
    // }

  
  return (
    <KeyboardDismissWrapper>
      <StyledContainer>
        <StatusBar style="dark"/>
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require('./../assets/img/design.webp')} />
            <PageTitle>Date Planning</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                       console.log(values)
                       navigation.navigate("Welcome")
                    }}
                >
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    
                    <StyledFormArea>
                        
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

                        <MsgBox></MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>

                        <Line />

                        <StyledButton google={true} onPress={handleSubmit}>
                            <Fontisto name="google" color={primary} size={25}/>
                        <ButtonText google={true} >Sign in with Google</ButtonText>
                        </StyledButton>

                        <ExtraView>
                            <ExtraText>Don't have an account already?</ExtraText>
                            <TextLink onPress={() => navigation.navigate("SignUp")}>
                                <TextLinkContent>Sign Up</TextLinkContent>
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



export default Login