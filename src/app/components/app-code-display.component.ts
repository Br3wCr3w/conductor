// app-code-display.component.ts
import { Component, Input, input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Observable } from 'rxjs';
declare var Prism: any;

@Component({
  selector: 'app-code-display',
  template: `
    <div class="code-container">
      <pre><code class="language-javascript">{{ code }}</code></pre>
      <button (click)="copyCode(code)">Copy</button>
    </div>
  `,
  styles: [`
    .code-container { 
      overflow: auto; /* Ensures the container itself does not become scrollable */
    }
    pre { 
      background: #f0f0f0; 
      padding: 15px; 
      max-height: 400px; /* Example height */
      overflow: auto; /* Makes the content scrollable */
      margin-bottom: 10px; /* Adjusts spacing for visual appeal */
    }
    button { 
      margin-top: 10px; 
    }
  `],
  standalone: true,
})
export class CodeDisplayComponent {
@Input() code!: string;
  constructor(private clipboard: Clipboard) {}

  copyCode(codeCopied: string): void {
    this.clipboard.copy(codeCopied);
  }

  ngAfterViewInit() {
    Prism.highlightAll()
  }
}
