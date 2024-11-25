import {resend} from "@/lib/resend"
import VerificationEmail from "@/emails/varificationmail"
import {ApiResponse} from "@/types/ApiResponce"



export async function  sendVerificationEmail(email: string,
    username: string,
    verifycode:string
):Promise<ApiResponse> {
    try { 
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'verification code',
            react: VerificationEmail({username,otp: verifycode}),
          });
        return {
            success: true, message: 'cerification email send successfully'
        }
    } catch (emailError) {
        console.log("error sending verification email", emailError);
        return {success:false ,message:'failed sending mail'}
    }
}