import React from 'React';

class SignedIn extends React.Component {
    componentDidMount = async () => {

        auth.onAuthStateChanged(async userAuth => {
            const user = await generateUserDocument(userAuth);
            this.setState({ user });
        });
    };
}