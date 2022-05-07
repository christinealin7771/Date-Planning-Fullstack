import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Keyboard, TouchableNativeFeedback} from 'react-native'

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
    TextLinkContent,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/Styles'

//colors
const {brand, darkLight} = Colors


const Welcome = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true)

  
  return (
   
        <>
        <StatusBar style="light" />
        <InnerContainer>
            <WelcomeImage resizeMode="cover" source={require('./../assets/img/design2.webp')} />
                <WelcomeContainer>
                    <PageTitle weclome={true}>Welcome!</PageTitle>
                    <SubTitle welcome={true}>John Bubble</SubTitle>
                    <SubTitle welcome={true}>john@gmail.com</SubTitle>
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('./../assets/img/design.webp')} />
                    <Line />
                     
                        <StyledButton onPress={() => navigation.navigate("Login")}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                       


                    </StyledFormArea>

                </WelcomeContainer>

        </InnerContainer>
        </>

  )
}




export default Welcome