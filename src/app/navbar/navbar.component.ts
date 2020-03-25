import { Component, OnInit } from "@angular/core";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  faFlagUsa = faFlagUsa;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang("pl");
  }

  ngOnInit() {}

  public switchLanguage(): void {
    let lang = this.translate.getDefaultLang();
    if (lang == "pl") {
      this.translate.setDefaultLang("en");
    } else {
      this.translate.setDefaultLang("pl");
    }
  }
}
