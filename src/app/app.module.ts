import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [BrowserModule, FormsModule, MatChipsModule, MatIconModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
