import { NarikCommonModule } from "@narik/common";
import { NarikDevBusyIndicatorModule, NarikDevButtonModule, NarikDevInputModule } from "@narik/ui-devextreme";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { COMPONENTS } from "./index";
import { ChangePassComponent } from "./change-password/change-password.component";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule.forChild(),
    FormsModule,
    NarikDevInputModule,
    NarikDevButtonModule,
    NarikDevBusyIndicatorModule,
    NarikCommonModule
  ],
  declarations: [COMPONENTS],
  exports: [],
  providers: [],
  entryComponents: [ChangePassComponent]
})
export class MainModule {}
