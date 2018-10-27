import { Injectable } from '@angular/core';

@Injectable()
export class DomainService {

    constructor() { }

    getDomainUrl(){
        //return "http://localhost:5000/";
        return "https://marioiliev-server.herokuapp.com/";
    }
}