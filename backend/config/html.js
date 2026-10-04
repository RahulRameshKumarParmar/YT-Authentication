export const getOtpHtml = ({ email, otp }) => { const html = `<html lang="en"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="x-apple-disable-message-reformatting">
        <title>{{APP_NAME}} Verification Code</title>
        
    </head>
    <body>
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; width: 100%; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(246, 247, 251);">
            <tbody><tr>
                <td align="center" style="padding-top: 24px; padding-right: 24px; padding-bottom: 24px; padding-left: 24px;">
                    <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; width: 600px; max-width: 600px; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); border-top-left-radius: 12px; border-top-right-radius: 12px; border-bottom-right-radius: 12px; border-bottom-left-radius: 12px; overflow-x: hidden; overflow-y: hidden; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: rgb(233, 236, 243); border-right-color: rgb(233, 236, 243); border-bottom-color: rgb(233, 236, 243); border-left-color: rgb(233, 236, 243); border-image-source: none; border-image-slice: 100%; border-image-width: 1; border-image-outset: 0; border-image-repeat: stretch;">
                        <!-- Header -->
                        <tbody><tr>
                            <td style="background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(17, 24, 39); padding-top: 18px; padding-right: 24px; padding-bottom: 18px; padding-left: 24px; text-align: center;">
                                <span style="display: inline-block; color: rgb(255, 255, 255); font-weight: 700; font-size: 16px; letter-spacing: 0.3px; text-decoration-line: none; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Authentication App</span>
                            </td>
                        </tr>
                        <!-- Body -->
                        <tr>
                            <td style="padding-top: 32px; padding-right: 32px; padding-bottom: 32px; padding-left: 32px;">
                                <h1 style="margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px; font-size: 22px; line-height: 1.3; color: rgb(17, 17, 17); font-weight: 700;">Verify your email - ${email}</h1>
                                <p style="margin-top: 0px; margin-right: 0px; margin-bottom: 16px; margin-left: 0px; font-size: 15px; line-height: 1.6; color: rgb(68, 68, 68);">
                                    Use the verification code below to complete your sign-in to Authentication App.
                                </p>
                                <!-- OTP -->
                                <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-top: 20px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; width: 100%;">
                                    <tbody><tr>
                                        <td align="center">
                                            <div style="display: inline-block; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(243, 244, 246); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: rgb(229, 231, 235); border-right-color: rgb(229, 231, 235); border-bottom-color: rgb(229, 231, 235); border-left-color: rgb(229, 231, 235); border-image-source: none; border-image-slice: 100%; border-image-width: 1; border-image-outset: 0; border-image-repeat: stretch; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; padding-top: 14px; padding-right: 18px; padding-bottom: 14px; padding-left: 18px; font-size: 32px; letter-spacing: 10px; font-weight: 700; color: rgb(17, 17, 17); font-family: &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif;">${otp}</div>
                                        </td>
                                    </tr>
                                </tbody></table>
                                <p style="color: rgb(85, 85, 85); font-size: 14px; line-height: 1.6; margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px;">This code will expire in <strong>5 minutes</strong>.</p>
                                <p style="color: rgb(85, 85, 85); font-size: 14px; line-height: 1.6; margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px;">If this wasn’t initiated, this email can be safely ignored.</p>
                            </td>
                        </tr>
                        <!-- Footer -->
                        <tr>
                            <td style="text-align: center; color: rgb(107, 114, 128); font-size: 12px; line-height: 1.6; padding-top: 16px; padding-right: 24px; padding-bottom: 0px; padding-left: 24px;">© 2025 Authentication App. All rights reserved.</td>
                        </tr>
                        <tr>
                            <td height="16" aria-hidden="true"></td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
        </tbody></table>
    
</body></html>
`; return html; }; export const getVerifyEmailHtml = ({ email, token }) => { const appName = process.env.APP_NAME ||
"Authentication App"; const baseUrl = process.env.FRONTEND_URL || "http://localhost:5173"; const verifyUrl =
`${baseUrl.replace(/\/+$/, "")}/token/${encodeURIComponent( token )}`; const html = `<html lang="en"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="x-apple-disable-message-reformatting">
        <title>${appName} Verify Your Account</title>
        
    </head>
    <body>
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; width: 100%; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(246, 247, 251);">
            <tbody><tr>
                <td align="center" style="padding-top: 24px; padding-right: 24px; padding-bottom: 24px; padding-left: 24px;">
                    <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; width: 600px; max-width: 600px; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); border-top-left-radius: 12px; border-top-right-radius: 12px; border-bottom-right-radius: 12px; border-bottom-left-radius: 12px; overflow-x: hidden; overflow-y: hidden; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: rgb(233, 236, 243); border-right-color: rgb(233, 236, 243); border-bottom-color: rgb(233, 236, 243); border-left-color: rgb(233, 236, 243); border-image-source: none; border-image-slice: 100%; border-image-width: 1; border-image-outset: 0; border-image-repeat: stretch;">
                        <!-- Header -->
                        <tbody><tr>
                            <td style="background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(17, 24, 39); padding-top: 18px; padding-right: 24px; padding-bottom: 18px; padding-left: 24px; text-align: center;">
                                <span style="display: inline-block; color: rgb(255, 255, 255); font-weight: 700; font-size: 16px; letter-spacing: 0.3px; text-decoration-line: none; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">${appName}</span>
                            </td>
                        </tr>
                        <!-- Body -->
                        <tr>
                            <td style="padding-top: 32px; padding-right: 32px; padding-bottom: 32px; padding-left: 32px;">
                                <h1 style="margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px; font-size: 22px; line-height: 1.3; color: rgb(17, 17, 17); font-weight: 700;">Verify your account - ${email}</h1>
                                <p style="margin-top: 0px; margin-right: 16px; margin-bottom: 16px; margin-left: 0px; font-size: 15px; line-height: 1.6; color: rgb(68, 68, 68);">
                                    Thanks for registering with ${appName}. Click the button below to verify your
                                    account.
                                </p>
                                <!-- Button -->
                                <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin: 16px 0 20px 0; border-collapse: collapse;">
                                    <tbody><tr>
                                        <td align="center">
                                            <a href="${verifyUrl}" target="_blank" rel="noopener" style="display: inline-block; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(17, 24, 39); text-decoration-line: none; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding-top: 12px; padding-right: 18px; padding-bottom: 12px; padding-left: 18px; border-top-left-radius: 8px; border-top-right-radius: 8px; border-bottom-right-radius: 8px; border-bottom-left-radius: 8px; font-weight: 600; font-size: 14px; color: rgb(255, 255, 255) !important;">Verify account</a>
                                        </td>
                                    </tr>
                                </tbody></table>
                                <p style="color: rgb(85, 85, 85); font-size: 14px; line-height: 1.6; margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px;">
                                    If the button doesn’t work, copy and paste this link into your browser:
                                </p>
                                <p style="color: rgb(85, 85, 85); font-size: 14px; line-height: 1.6; margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px;">
                                    <a href="${verifyUrl}" target="_blank" rel="noopener" style="color: rgb(17, 24, 39); text-decoration-line: underline; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-break: break-all;">${verifyUrl}</a>
                                </p>
                                <p style="color: rgb(85, 85, 85); font-size: 14px; line-height: 1.6; margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px;">If this wasn’t you, you can safely ignore this email.</p>
                            </td>
                        </tr>
                        <!-- Footer -->
                        <tr>
                            <td style="text-align: center; color: rgb(107, 114, 128); font-size: 12px; line-height: 1.6; padding-top: 16px; padding-right: 24px; padding-bottom: 0px; padding-left: 24px;">© ${new Date().getFullYear()} ${appName}. All rights reserved.</td>
                        </tr>
                        <tr>
                            <td height="16" aria-hidden="true"></td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
        </tbody></table>
    
</body></html>
`; return html; };
