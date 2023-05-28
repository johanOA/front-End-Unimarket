import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Buffer } from 'buffer';

const TOKEN_KEY = "AuthToken";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  public getRole():string[]{
    const token = this.getToken();
    if(token){
    const values = this.decodePayload(token);
    return values.roles;
    }
    return [];
    }
  sesionService: any;

  constructor(private router: Router) { }

  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  public getEmail():string{
    const token = this.getToken();
    if(token){
    const values = this.decodePayload(token);
    return values.sub;
    }
    return "";
    }

    
    public logout() {
      window.sessionStorage.clear();
      this.sesionService.updateSession(false);
      this.router.navigate(["/login"]);
      }

      public login(token:string){
        this.setToken(token);
        this.sesionService.updateSession(true);
        this.router.navigate(["/"]);
        }
      

  private decodePayload(token: string): any {
    const payload = token!.split(".")[1];
    const payloadDecoded = Buffer.from(payload, 'base64').toString('ascii');
    const values = JSON.parse(payloadDecoded);
    return values;
  }

  
}
