import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {App} from "../app.component";

@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements AfterViewInit {
  @ViewChild("appLoader") appLoader: ElementRef;
  @Input()
  remoteApp: App;

  ngAfterViewInit(): void {
    const scriptElement = document.getElementsByClassName(this.remoteApp.libUrl).length;
    if (!scriptElement) {
      const element = document.createElement("script");
      element.type = "text/javascript"
      element.src = this.remoteApp.libUrl
      element.defer = true;
      element.className = this.remoteApp.libUrl;

      element.onload = () => this.load();

      element.onerror = (e) => {
        console.error(e)
      }

      document.getElementsByTagName('head')[0].appendChild(element);
    } else {
      this.load();
    }
  }

  private load() {
    const element = this.appLoader.nativeElement;
    if (element) {
      element.innerHTML = this.remoteApp.appElement;
    }
  }
}
