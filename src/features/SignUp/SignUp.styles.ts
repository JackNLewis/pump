import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#00CCA7',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 40,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    signupButton: {
        backgroundColor: '#00CCA7',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginBottom: 30,
    },
    signupButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    signupButtonDisabled: {
        backgroundColor: '#80E6D4',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        color: '#666',
        fontSize: 14,
    },
    loginLink: {
        color: '#00CCA7',
        fontSize: 14,
        fontWeight: '500',
    }
});