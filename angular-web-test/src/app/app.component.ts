import {Component} from '@angular/core';

export interface App {
  libUrl: string;
  appElement: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apps: App[] = [{
    libUrl: "http://localhost:8080/direflowBundle.js",
    appElement: "<react-page></react-page>",
  },
    {
      libUrl: "http://localhost:8080/direflowBundle.js",
      appElement: "<react-page></react-page>",
    }];
}
