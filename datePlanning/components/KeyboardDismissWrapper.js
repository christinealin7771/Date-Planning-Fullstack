import React, { Children } from 'react'

import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'

const KeyboardDismissWrapper = ({children}) => {
  return (
    <KeyboardAvoidingView style={{flex:1}}>
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
                {children}
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardDismissWrapper