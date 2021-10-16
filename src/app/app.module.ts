import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { SurnamePipe } from './pipes/surname.pipe';
import { NamePipe } from './pipes/name.pipe';
import { NoPipe } from './pipes/no.pipe';
import { MailPipe } from './pipes/mail.pipe';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [BookComponent, NamePipe, SurnamePipe, NoPipe, MailPipe],
  bootstrap: [BookComponent]
})
export class AppModule {}
