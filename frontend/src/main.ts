import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Essa é a parte mais importante desse arquivo, porque é aqui que tudo começa
// ele chama o módulo principal (nesse tutorial é o único, mas poderia existir vários)
// será chamado me frontend/src/app/app.module.ts 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
