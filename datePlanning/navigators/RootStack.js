import React from 'react'

import { Colors } from '../components/Styles';
const {primary, tertiary} = Colors
//screens
import Login from './../screens/Login';
import SignUp from './../screens/SignUp';
import Welcome from './../screens/Welcome';

//context
import { AuthContext } from './../components/AuthContext'

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()


const RootStack = () => {

  return (

    <AuthContext.Consumer>
        {(storeCred) => (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "transparent"
                        },
                        headerTintColor: tertiary,
                        headerTransparent: true,
                        headerTitle: '',
                        headerLeftContainerStyle: {
                            paddingLeft: 20
                        }
                    }}
                    initialRouteName="Login"
                >
                    {/* <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Welcome" component={Welcome} /> */}
                
                {storeCred ? 
                    (<Stack.Screen name="Welcome" component={Welcome} />)
                    :
                    (<>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                    </>)

                }   
                </Stack.Navigator>
            </NavigationContainer>
        )}
    </AuthContext.Consumer>
  )
}

export default RootStack