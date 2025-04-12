import { Controller, Get, Query, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('whatsapp')
export class WhatsappController {
  @Get('webhook')
  whatsappVerificationChallenge(
    @Query('hub.mode') mode: string,
    @Query('hub.token') token: string,
    @Query('hub.challenge') challenge: string,
    @Res() res: Response,
  ): any {
    const verificationToken = process.env.WHATSAPP_CLOUD_VERIFICATION_TOKEN;

    if (!mode || !token) {
      return res.status(HttpStatus.BAD_REQUEST).send('Error: Faltan parámetros');
    }

    if (mode === 'subscribe' && token === verificationToken) {
      return res.status(HttpStatus.OK).send(challenge);
    } else {
      return res.status(HttpStatus.FORBIDDEN).send('Token de verificación inválido');
    }
  }
}






/*
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

} */
