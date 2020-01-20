import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EmailValidator } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  IsAuthenticated(email: string, password: string) {
    let adminUser = { email: email, password: password };

    return this.httpClient.post<any>(
      "https://localhost:44308/api/Auth/IsAuthenticated",
      adminUser
    );
  }
}
