import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatOptionModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { DomSanitizer } from "@angular/platform-browser";

@NgModule({
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    MatExpansionModule,
    MatDividerModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatCardModule,
    MatSliderModule,
    MatToolbarModule,
    MatChipsModule,
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    MatExpansionModule,
    MatDividerModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatCardModule,
    MatSliderModule,
    MatToolbarModule,
    MatChipsModule,
  ],
})

export class MaterialModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl("./assets/mdi.svg")
    );
  }
}
