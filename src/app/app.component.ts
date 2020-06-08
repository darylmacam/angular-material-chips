import { Component, VERSION } from "@angular/core";
import { MatChipInputEvent } from "@angular/material/chips";
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  fruits: Fruit[] = [{ name: "Lemon" }, { name: "Lime" }, { name: "Apple" }];
  chipInputKeyCodes = [ENTER, COMMA]

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const chipInputCtrl = event.input;
    const value = event.value;

    if ((value || "").trim()) {
      this.fruits.push({ name: value.trim() });
    }

    chipInputCtrl.value = "";
  }
}

export interface Fruit {
  name: string;
}
