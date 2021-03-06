import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning-alert/warning.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { InputBindingTestComponent } from './input-binding-test/input-binding-test.component';
import { CombiningDataBindingComponent } from './combining-data-binding/combining-data-binding.component';
import { DirectiveTestComponent } from './directive-test/directive-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessMessageComponent,
    InputBindingTestComponent,
    CombiningDataBindingComponent,
    DirectiveTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
