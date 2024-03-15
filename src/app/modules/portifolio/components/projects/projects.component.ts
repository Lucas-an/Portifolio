import { Component, inject, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interfaces/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);//Propiedade privada com inject ganhamos o poder como parametro MatDialog do import MatDialogModule

  public arrayProjects = signal <IProjects[]> ([
    {
      src: 'assets/img/projects/healty recipe.svg',
      alt: "Projeto Healty Recipe",
      title: 'Healty Recipe',
      width: '100px' ,
      height: '51px',
      description: '<p>O projeto Healthy Recipe: uma plataforma digital dedicada a promover hábitos alimentares saudáveis. </p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://receita-saudavel.netlify.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/logo.svg',
      alt: "Projeto Vida FullStack",
      title: 'Vida FullStack2',
      width: '100px' ,
      height: '51px',
      description: '<p>Explore o fascinante mundo do desenvilvimento web no meu blog dedicado exclusivamente ao ecossistema Anguar, Front end </p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: "Projeto Vida FullStack",
      title: 'Vida FullStack3',
      width: '100px' ,
      height: '51px',
      description: '<p class="preto">Explore o fascinante mundo do desenvilvimento web no meu blog dedicado exclusivamente ao ecossistema Anguar, Front end </p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
  ]);

  //metodos
  public openDialog(data: IProjects) {//interface
    this.#dialog.open(DialogProjectsComponent,{//Dialog
      data,
      panelClass: EDialogPanelClass.PROJECTS,//enum
    });
  }//vamos criar um enum para  esse metodo.
}
