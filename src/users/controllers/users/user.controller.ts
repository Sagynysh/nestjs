import { Controller, Get, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { Request, Response } from 'express'

@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        return {username:"anson", email:"anson@mail.com"}
    }

    @Get('posts')
    getUsersPosts(){
        return [{
            username:'Anson',
            email:'anson@mail.com',
            posts:[
                {id:1,
                title:'post1'
                },
                {id:2,
                    title:'post2'
                    }
            ]
        }];
    }

    @Post()
    createUser(@Req() request: Request, @Res() response: Response){
        // console.log('test')
        // console.log(request);
        console.log(request.body);
        response.send('Created');

    }
}
