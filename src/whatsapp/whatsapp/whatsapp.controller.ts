import { Controller ,Get,Req} from '@nestjs/common';
import {Request} from 'express';

@Controller('whatsapp')
export class WhatsappController {

    @Get('webhook')

     whatsappVerificationChallenge(@Req() request :Request) {
        const mode = request.query['hub.mode'];
        const challenge = request.query['hub.challenge'];
        const token = request.query['hub.token'];
        const VerificationToken = process.env.WHATSAPP_CLOUD_VERIFICATION_TOKEN;
        

     if(!mode || !token){
        return "error yesica intentalo de nuevo";
     }

     if(mode === 'subscribe' && token === VerificationToken){
        return challenge?.toString();
     }
     }

}
