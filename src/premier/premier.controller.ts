import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('premier')
export class PremierController {
    @Get()
    getPremier(): string{
        console.log('GET');
        return'Get'

    }
    @Post()
    postPremier(){
        console.log('POST');
    }
    @Delete()
    deletePremier(){
        console.log('POST');
    }
}
