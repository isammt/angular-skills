import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  protected URL_SERVICE: string = "http://localhost:4200/api"

  constructor(private httpClient: HttpClient) { }

  public getSkills() {
    return this.httpClient.get(`${this.URL_SERVICE}/skills`);
  }

  public updateSkill(skill: Card) {
    return this.httpClient.put(`${this.URL_SERVICE}/skills/${skill.id}`, skill)
  }
}
