import { COMPONENTS } from "./index";
import { NgModule } from "@angular/core";
import { NarikUiDevextremeModule } from "@narik/ui-devextreme";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule, NarikUiDevextremeModule],
  declarations: [COMPONENTS],
  exports: [],
  entryComponents: [COMPONENTS]
})
export class ShareModule {}
