import React, {useEffect, useState} from 'react'

//React Navigation Stack
import RootStack from './navigators/RootStack';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//credentials context
import { AuthContext } from './components/AuthContext';

export default function App() {

  const[storeCred, setStoreCred] = useState(false)

  useEffect(() => {
    checkLogin();
  }, []);

  //if result != null then its works
  const checkLogin = () => {
    AsyncStorage
    .getItem('datePlanning')
    .then((result)=> {
      if(result !== null){
        setStoreCred(JSON.parse({name: result.fullName, email: result.email}))
        // setStoreCred(true)
      } else {
        setStoreCred(null)
      }
    })
    .catch(error => console.log(error))
  }

 

  return (
    // <Login/>
    // <SignUp />
    // <Welcome />
    <AuthContext.Provider value={{storeCred, setStoreCred}}>
      <RootStack />
    </AuthContext.Provider>
    
  );
}


