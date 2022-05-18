import React, {useState, useContext} from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Keyboard, TouchableNativeFeedback} from 'react-native'

//formik
import { Formik } from 'formik'

//Icons
import {Octicons, Ionicons} from '@expo/vector-icons'

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//context
import { AuthContext } from './../components/AuthContext'

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
    TextLinkContent,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/Styles'

//colors
const {brand, darkLight} = Colors


const Welcome = ({navigation, route}) => {

    const{storeCred, setStoreCred} = useContext(AuthContext)

    // const{name, email} = route.params
    const{name,email} = storeCred
  

    const clearLogin = () => {
        AsyncStorage
        .removeItem("datePlanning")
        .then(() => {
            setStoreCred(false)
        })
        .catch((error) => {console.log(error)})

    }


  
  return (
   
        <>
        <StatusBar style="light" />
        <InnerContainer>
            <WelcomeImage resizeMode="cover" source={require('./../assets/img/design2.webp')} />
                <WelcomeContainer>
                    <PageTitle weclome={true}>Welcome!</PageTitle>
                    <SubTitle welcome={true}>{name || "John Bubble"}</SubTitle>
                    <SubTitle welcome={true}>{email || "john@gmail.com"}</SubTitle>
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('./../assets/img/design.webp')} />
                    <Line />
                     
                        {/* <StyledButton onPress={() => navigation.navigate("Login")}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton> */}

                        <StyledButton onPress={clearLogin}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                       


                    </StyledFormArea>

                </WelcomeContainer>

        </InnerContainer>
        </>

  )
}




export default Welcome