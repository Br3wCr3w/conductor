import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  generateStory(prompt: string): Observable<string> {
    const body = {
      model: "dolphin-mistral",
      //prompt: 'you are a software developer typing in code into your keyboard, you never say anything out loud.' + prompt + '. do not respond with anything other than code, if you have to explain something then put it in commented code.',
      prompt,
      stream: false,
    };
    return this.http.post('http://localhost:11434/api/generate', body).pipe(
      tap(console.log),
      map((resp: any) => {
        const regex = /```([\s\S]*?)```/;
        const match = resp.response.match(regex);
        if (match && match[1]) {
            return match[1];
        } else {
          return resp.response
        }
      })
    );
  }
}
