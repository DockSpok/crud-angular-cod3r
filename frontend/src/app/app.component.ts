import { Component } from '@angular/core';

@Component({
  // Esse selector vai fazer o gancho no BODY do index.html para inserir os componentes ali.
  selector: 'app-root',
  // O app.component.ts foi criado como minimal então tem o template HTML embutido, vamos tirar daqui.
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  nome = 'Mauro'; // Inserido no html via {{nome}}
}
