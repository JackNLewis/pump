import { useNavigation } from '@react-navigation/native';
import AuthHeader from 'common/components/auth/AuthHeader';
import FormError from 'common/components/auth/FormError';
import PrimaryButton from 'common/components/auth/ui/buttons/PrimaryButton';
import { spacing } from 'common/styles/spacing';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import RegisterDetailsForm from './components/RegisterDetailsForm';
import RegisterPropmt from '../../common/components/auth/RegisterPrompt';
import useRegisterDetails from './hooks/useRegisterDetails';
import { styles } from './RegisterDetails.styles';

function RegisterDetails() {
    const navigation = useNavigation<any>();

    const {
        userName,
        setUserName,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        error,
        handleSignOut
    } = useRegisterDetails();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>

                <AuthHeader
                    title='Create a profile'
                    subtitle='Enter some final details.'
                    titleStyle={{fontSize: 40}}
                />

                <RegisterDetailsForm
                    userName={userName}
                    setUserName={setUserName}
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    handleRegister={() => console.log('clicked')}
                />

                <PrimaryButton
                    loading={false}
                    title='Contine'
                    onPress={() => navigation.navigate('RegisterImage', {
                        firstName,
                        lastName,
                        userName
                    })}
                    style={{ marginBottom: spacing.md }} />


                <RegisterPropmt text='Sign Out' onPress={handleSignOut}/>

                <FormError error={error} style={{ marginTop: spacing.md }} />

            </View>
        </TouchableWithoutFeedback>
    );
}

export default RegisterDetails;