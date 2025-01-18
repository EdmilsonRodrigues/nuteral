import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  encryptCredentials(credentials: { username: string; password: string }, token: string): string {
    const credentialsString = JSON.stringify(credentials);
    return CryptoJS.AES.encrypt(credentialsString, token).toString();
  }
}
