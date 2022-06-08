import React, { Component } from 'react';
import { AzureAD, AuthenticationState } from 'react-aad-msal';
import { basicReduxStore } from './reduxStore';
// Import the authentication provider which holds the default settings
import { authProvider } from './authProvider';
import SampleAppRedirectOnLaunch from './SampleAppRedirectOnLaunch';

import SampleAppButtonLaunch from './SampleAppButtonLaunch';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accountInfo: null,
            sampleType: null,
        };

        const sampleType = localStorage.getItem('sampleType');
        if (sampleType) {
            this.state.sampleType = sampleType
        }
    }

    handleClick = sampleType => {
        this.setState({ sampleType });
        localStorage.setItem('sampleType', sampleType);
    };


    render() {
        let sampleBox;

        switch (this.state.sampleType) {
            // case 'popup':
            //     sampleBox = (
            //         <div className="SampleBox">
            //             {/* <h2 className="SampleHeader">Button Login</h2> */}
            //             <SampleAppButtonLaunch />
            //         </div>
            //     );
            //     break;
            case 'redirect':
                sampleBox = (
                    <div className="SampleBox">
                        <h2 className="SampleHeader">Automatic Redirect</h2>
                        <SampleAppRedirectOnLaunch />
                        {/* {() => this.handleClick('redirect')} */}
                    </div>
                );
                break;
            default:
                break;
        }

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Click here to Login</h1>
                </header>

                <AzureAD provider={authProvider} reduxStore={basicReduxStore}>
                    {({ authenticationState }) => {
                        return (
                            <React.Fragment>
                                {authenticationState === AuthenticationState.Unauthenticated && (
                                    <div>
                                        <button onClick={() => this.handleClick('redirect')} className="Button">
                                            Popup Sample
                                        </button>{' '}

                                    </div>
                                )}
                                <div className="SampleContainer">
                                    {sampleBox}
                                </div>
                            </React.Fragment>
                        );
                    }}
                </AzureAD>
            </div>
        );
    }
}

export default Login;
