import { Component, OnInit } from "@angular/core";
import {
  faGithubSquare,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-left-panel",
  templateUrl: "./left-panel.component.html",
  styleUrls: ["./left-panel.component.scss"]
})
export class LeftPanelComponent implements OnInit {
  faGithubSquare = faGithubSquare;
  faLinkedinIn = faLinkedinIn;
  faEnvelopeSquare = faEnvelopeSquare;

  constructor() {}

  ngOnInit() {}
}
