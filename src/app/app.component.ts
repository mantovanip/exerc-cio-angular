import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public nome: string = '';
  public sobrenome: string = '';

  salvar() {
    console.log(
      'O sobrenome digitado é ' + this.sobrenome + ' e o nome é ' + this.nome
    );
  }
}
