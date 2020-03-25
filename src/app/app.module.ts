import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LeftPanelComponent } from "./left-panel/left-panel.component";
import { MatSliderModule } from "@angular/material/slider";
import { MatCardModule } from "@angular/material/card";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { Routes, RouterModule } from "@angular/router";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";
import { APP_BASE_HREF } from "@angular/common";

const appRoutes: Routes = [
  { path: "", component: AboutMeComponent },
  { path: "about-me", component: AboutMeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "skills", component: SkillsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    NavbarComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
