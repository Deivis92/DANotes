import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-93acc","appId":"1:411339565844:web:74430b7e44bbd1d6247001","storageBucket":"danotes-93acc.appspot.com","apiKey":"AIzaSyCRtVtX2_ZyfuPRfpCo23aCMx3n0iuhVzw","authDomain":"danotes-93acc.firebaseapp.com","messagingSenderId":"411339565844","measurementId":"G-LSGKPCE1RJ"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
