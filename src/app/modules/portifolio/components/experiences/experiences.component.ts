import { Component, signal } from '@angular/core';
//interface
import { IExperiences } from '../../interfaces/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal <IExperiences[]> ([
    {
      summary: {
        strong: 'Front-end Analise e Desenvolvimento de Sistemas ',
        p: 'Estudando | Mai 2021 - Present',
      },
      text: '<p>Desde setembro de 2021 me matriculei na Estácio no curso tecnólogo de Analise e Desenvolvimento de Sistemas estou empenhado e dedicado no objetivo</p>',
    },
    {
      summary: {
        strong: 'Front-end Angular',
        p: 'Freelance | Mai 2023 - Agos 2023',
      },
      text: '<p>Durante meu periodo nesse freela de maio de 2023 a agosto de 2023, atuei como Estagiario pois estava participando do projeto padaria delivery é aprendendo e desenvovendo meus conhecimentos em angular  </p>',
    },
    {
      summary: {
        strong: 'Wordpress Hospedagem de site',
        p: 'Freelance | Agos 2023 - nov 2023',
      },
      text: '<p>Durante meu periodo nesse freela de Agosto de 2023 a Novembro de 2023, atuei com desenvolvimento de sites, landpages, hospedagem de sites, Pixels-facebook, tecnicas Seo entre outros.  </p>',
    },
  ])

}
