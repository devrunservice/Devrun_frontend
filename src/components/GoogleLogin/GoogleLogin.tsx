import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import * as St from "./style";

interface GoogleProps {
    successGoogleLogin:(res: any) => void
}

const GoogleLoginButton:React.FC<GoogleProps> = ({successGoogleLogin}) => {
    const clientId = '385481592077-6irgmtusl13jsreqis43b8e76pck582a.apps.googleusercontent.com'
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
