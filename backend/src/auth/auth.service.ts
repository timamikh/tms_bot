import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // Заглушка для отправки кода
  async sendCode(phone: string) {
    console.log(`Sending verification code to ${phone}`);
    
    // Имитация задержки отправки SMS
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      success: true,
      message: 'Код подтверждения отправлен',
      phone: phone,
    };
  }

  // Заглушка для верификации кода
  async verifyCode(phone: string, code: string) {
    console.log(`Verifying code ${code} for phone ${phone}`);
    
    // Имитация проверки кода (принимаем любой код)
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      success: true,
      message: 'Код подтвержден',
      token: 'mock-jwt-token-' + Date.now(),
      user: {
        phone: phone,
        id: Math.floor(Math.random() * 1000),
      },
    };
  }
}

