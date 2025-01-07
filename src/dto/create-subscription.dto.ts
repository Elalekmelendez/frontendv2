import { IsEnum, IsString, IsNotEmpty } from 'class-validator';



export enum Frecuency{
    MONTHLY = 1,
    YEARLY = 12
}


export class CreateSubscriptionDto {
    @IsString()
    @IsNotEmpty()
    payer_email: string;

    @IsString()
    @IsNotEmpty()
    back_url: string;

    @IsEnum(Frecuency)
    @IsNotEmpty()
    frequency: Frecuency;
}
