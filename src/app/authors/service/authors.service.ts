import {inject, Injectable} from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }
}
