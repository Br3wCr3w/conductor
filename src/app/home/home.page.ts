import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CodeDisplayComponent } from '../components/app-code-display.component';
declare var Prism: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [FormsModule, HttpClientModule, IonicModule, CommonModule,
    CodeDisplayComponent],
  providers: [ApiService],
  standalone: true,
})
export class HomePage {
  response$!: Observable<string>;
  userPrompt!: string;

  constructor(private apiService: ApiService) { }

  submitPrompt() {
    if (!this.userPrompt) return;
    this.response$ = this.apiService.generateStory(this.userPrompt);
  }

  ngAfterViewInit() {
    Prism.highlightAll()
  }
}

