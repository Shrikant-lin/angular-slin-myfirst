import { Injectable } from '@angular/core';

@Injectable()
export class PageCommonService {

  constructor() { }

  getlogindata()
  {
     return "user log-in successfull.";
     /*if(user.toLowerCase()=="xman")
     {
        return "user log-in successfull.";
     }
     else
     {
        return "user log-in not successfull.";
     }*/
  }

}