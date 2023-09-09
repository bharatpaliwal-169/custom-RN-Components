import { Text, TextInput,View,TouchableOpacity } from 'react-native';
import styles from './styles'
const Login = () => {
  return(
    <>
      <View style={styles.CardContainer}>
        <View>
          <Text style={styles.cardHeading}>Login</Text>
        </View>

        <View style={styles.cardBody}>
          <Text>Email Address:</Text>
          <TextInput 
            style={styles.input}
            autoComplete='email'
            placeholder='email address'
          />

          <Text>Password:</Text>
          <TextInput
            style={styles.input}
            autoComplete='new-password'
            placeholder='password'
            blurOnSubmit={true}
          />

          <TouchableOpacity style={styles.submitButton}>
            <Text style={{fontWeight:'bold',fontSize:20}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Login;
