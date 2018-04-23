import { Get, Controller, Post, Body } from '@nestjs/common';

@Controller('api')
export class AppController {
	@Post('login')
	login(@Body() param): any {
    // console.log('param', param);
    // if (param.user === 'admin')
    // return [
    //   {
    //     name: 'Vasile',
    //     age: 20,
    //   },
    // ];
    return {
        isLogged: param.user === 'admin@ad.com' && param.pass === 'admin',
      };
  }
  @Get('population')
  getPopulation(): any {
    return [
      {
        name: 'John',
        value: 8940000,
      },
      {
        name: 'Papa',
        value: 5000000,
      },
      {
        name: 'Turda',
        value: 7200000,
      },
    ];
  }
}
