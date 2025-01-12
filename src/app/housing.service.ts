import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3006/locations"

  constructor() { }

  async getAllHousingLocations():Promise<HousingLocation[]>{
    const response = await fetch(this.url);
    const data = await response.json()
    return data ?? []; 
  }

  async getHousingLocationById(id:Number):Promise<HousingLocation | undefined>{
    const response = await fetch(`${this.url}/${id}`);
    const data = await response.json();
    return data ?? {};
  }

  submitApplication(firstName:string,lastName:string,email:string){
    console.log(firstName,lastName,email)
  }
}
