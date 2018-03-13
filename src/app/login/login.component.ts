import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

import { AutenticacaoService } from '../services/autenticacao.service';
import { LoginCommand } from '../commands/login.command';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AutenticacaoService]
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, private autenticacaoService: AutenticacaoService
  ) { }

  ngOnInit() {
    this.criandoFormulario();
  }

  criandoFormulario() {
    this.formulario = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    })
  }

  autenticar() {
    if (this.formulario.valid) {
      let params: LoginCommand = {
        usuario: this.formulario.value.usuario,
        senha: this.formulario.value.senha
      }
      this.autenticacaoService.autenticar(params)
        .subscribe(
          (data: any) => {
            console.log(data.result);
          },
          err => {
            console.log(err);
          }
        );

    }
  }


}
