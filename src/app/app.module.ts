import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Adicionar o modulo HTTP
import { HttpModule } from '@angular/http';

//Adicionar as rotas
  import { RouterModule} from '@angular/router';

// importar todos os componentes

// Importar todos os Serviços
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,  
    HttpModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
