import { COMPONENTS } from "./index";
import { NgModule } from "@angular/core";
import { NarikUiDevextremeModule } from "narik-ui-devextreme";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";


export const PICK_FORMATS = {
  parse: { dateInput: { month: "short", year: "numeric", day: "numeric" } },
  display: {
    dateInput: "input",
    monthYearLabel: { year: "numeric", month: "short" },
    dateA11yLabel: { year: "numeric", month: "long", day: "numeric" },
    monthYearA11yLabel: { year: "numeric", month: "long" }
  }
};



@NgModule({
  imports: [CommonModule, FormsModule, NarikUiDevextremeModule],
  declarations: [COMPONENTS],
  exports: [],
  entryComponents: [COMPONENTS]
})
export class ShareModule {}
