import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import * as St from "./style";

interface GoogleProps {
    successGoogleLogin:(res: any) => void
}

const GoogleLoginButton:React.FC<GoogleProps> = ({successGoogleLogin}) => {
    const clientId = '60963937574-035jatefceoccdlunp4b8komlcur6jt7.apps.googleusercontent.com'
    
    // const clientId = process.env.GOOGLE_CLIENT_KEY as string
    // console.log('clientId',clientId)
    return (
        <div>
            <St.GoogleLoginWrap>
                <GoogleOAuthProvider clientId={clientId}>
                    <GoogleLogin
                        // onSuccess={successGoogleLogin}
                        onSuccess={successGoogleLogin}
                        // onError={(err:any) => {
                        //     console.log(err);
                        // }}
                    />
                </GoogleOAuthProvider>
            </St.GoogleLoginWrap>
        </div>
    );
};

export default GoogleLoginButton
