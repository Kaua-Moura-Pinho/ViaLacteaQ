import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-listarmangas',
  templateUrl: './listarmangas.component.html',
  styleUrls: ['./listarmangas.component.css']
})
export class ListarmangasComponent implements OnInit {

  constructor() { }

  form!: FormGroup;
  employee: Employee = { nome: '', autor: '', volume: undefined, qtdpgs: undefined, data: ''};

  items = [
    { 
      id: 1, 
      nome: 'Blit', 
      autor: 'Cobu', 
      volume: 2, 
      qtdpgs: 123, 
      data: '12-04-2024' 
    },
    { 
      id: 2, 
      nome: 'DBZ', 
      autor: 'AT', 
      volume: 20, 
      qtdpgs: 190, 
      data: '12-04-2024' 
    },
    { 
      id: 3, 
      nome: 'NOROTO', 
      autor: 'Mashisa Kimoshito', 
      volume: 67, 
      qtdpgs: 220, 
      data: '05-03-2024' 
    },
    { 
      id: 4, 
      nome: 'Dead and Luck', 
      autor: 'Guem-al', 
      volume: 4, 
      qtdpgs: 150, 
      data: '12-05-2023' 
    },
    { 
      id: 5, 
      nome: 'CCDZ', 
      autor: 'Kashimo', 
      volume: 58, 
      qtdpgs: 134, 
      data: '08-01-2009' 
    },
    { 
      id: 6, 
      nome: 'Jutsu Senkai', 
      autor: 'Alex Dodorio', 
      volume: 5, 
      qtdpgs: 290, 
      data: '12-12-2018' 
    },
    { 
      id: 7, 
      nome: 'Life Note', 
      autor: 'Ryuk Yagami', 
      volume: 8, 
      qtdpgs: 160, 
      data: '23-07-2010' 
    },
    { 
      id: 8, 
      nome: 'Amoder', 
      autor: 'Carlos Chaves', 
      volume: 2, 
      qtdpgs: 90, 
      data: '30-01-2015' 
    },
    { 
      id: 9, 
      nome: 'Vencível', 
      autor: 'Yuri Kirkiman', 
      volume: 5, 
      qtdpgs: 97, 
      data: '13-10-2021' 
    },
    { 
      id: 10, 
      nome: 'Attack on Demon', 
      autor: 'Japake Dere', 
      volume: 20, 
      qtdpgs: 307, 
      data: '15-09-2019' 
    },
    { 
      id: 11, 
      nome: 'Dragon Soul', 
      autor: 'Maria Rodrigues', 
      volume: 8, 
      qtdpgs: 140, 
      data: '25-06-2018' 
    },
    { 
      id: 12, 
      nome: 'Lost in Time', 
      autor: 'Lucas Silva', 
      volume: 3, 
      qtdpgs: 105, 
      data: '08-04-2017' 
    },
    { 
      id: 13, 
      nome: 'Eternal Light', 
      autor: 'Ana Souza', 
      volume: 12, 
      qtdpgs: 220, 
      data: '19-11-2020' 
    },
    { 
      id: 14, 
      nome: 'Dark Legacy', 
      autor: 'Ricardo Mendes', 
      volume: 6, 
      qtdpgs: 180, 
      data: '03-07-2016' 
    },
    { 
      id: 15, 
      nome: 'Forbidden Power', 
      autor: 'Laura Almeida', 
      volume: 4, 
      qtdpgs: 125, 
      data: '12-02-2019' 
    },
    { 
      id: 16, 
      nome: 'Shadows of Destiny', 
      autor: 'Bruno Oliveira', 
      volume: 9, 
      qtdpgs: 160, 
      data: '21-09-2017' 
    },
    { 
      id: 17, 
      nome: 'Mystic Quest', 
      autor: 'Fernanda Santos', 
      volume: 7, 
      qtdpgs: 145, 
      data: '06-12-2018' 
    },
    { 
      id: 18, 
      nome: 'Spirit Realm', 
      autor: 'Gustavo Lima', 
      volume: 11, 
      qtdpgs: 200, 
      data: '17-03-2020' 
    },
    { 
      id: 19, 
      nome: 'Legend of the Sea', 
      autor: 'Patrícia Oliveira', 
      volume: 5, 
      qtdpgs: 135, 
      data: '28-08-2016' 
    },
    { 
      id: 20, 
      nome: 'Ancient Prophecy', 
      autor: 'Thiago Pereira', 
      volume: 10, 
      qtdpgs: 190, 
      data: '10-10-2019' 
    },
    { 
      id: 21, 
      nome: 'Fate Chronicles', 
      autor: 'Carolina Santos', 
      volume: 3, 
      qtdpgs: 105, 
      data: '02-04-2017' 
    },
    { 
      id: 22, 
      nome: 'Beyond the Horizon', 
      autor: 'Luciana Souza', 
      volume: 8, 
      qtdpgs: 155, 
      data: '14-11-2020' 
    },
    { 
      id: 23, 
      nome: 'Mysterious Path', 
      autor: 'Ricardo Costa', 
      volume: 6, 
      qtdpgs: 175, 
      data: '30-06-2016' 
    },
    { 
      id: 24, 
      nome: 'Arcane Secrets', 
      autor: 'Fernanda Oliveira', 
      volume: 9, 
      qtdpgs: 160, 
      data: '08-02-2019' 
    },
    { 
      id: 25, 
      nome: 'Soulbound Saga', 
      autor: 'Gabriel Lima', 
      volume: 4, 
      qtdpgs: 120, 
      data: '16-09-2017' 
    },
    { 
      id: 26, 
      nome: 'Eternal Nightfall', 
      autor: 'Aline Pereira', 
      volume: 10, 
      qtdpgs: 200, 
      data: '27-12-2018' 
    },
    { 
      id: 27, 
      nome: 'Lost Memories', 
      autor: 'Bruno Almeida', 
      volume: 7, 
      qtdpgs: 145, 
      data: '09-05-2016' 
    },
    { 
      id: 28, 
      nome: 'Crystal Dreams', 
      autor: 'Mariana Costa', 
      volume: 11, 
      qtdpgs: 220, 
      data: '21-08-2020' 
    },
    { 
      id: 29, 
      nome: 'Guardians of Time', 
      autor: 'Juliana Santos', 
      volume: 5, 
      qtdpgs: 130, 
      data: '04-10-2019' 
    },
    { 
      id: 30, 
      nome: 'Eternal Destiny', 
      autor: 'Thiago Oliveira', 
      volume: 12, 
      qtdpgs: 240, 
      data: '15-03-2018' 
    }
    
  ];

  searchText = '';
  page = 3;
  pageSize = 10;

  ngOnInit(): void {
  }

}
