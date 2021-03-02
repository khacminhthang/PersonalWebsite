import { InfoField } from '../infoField';
import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {

  works: InfoField[] = [
    new InfoField('Fresher Web', 'VNPT-IT', 'Jun 2020 - 2021', 'https://vnptit.vn/'),
    new InfoField('Web internship', 'MISA', 'Jun. 2019 - Oct. 2017', 'https://www.misa.vn/'),
  ];

  education: InfoField[] = [
    new InfoField('Information system engineer - Hanoi University of Science and Technology', 'Hanoi University of Science and Technology', 'sep. 2016 - jan. 2019', 'https://www.hust.edu.vn/'),
  ];

  languages: InfoField[] = [
    new InfoField('Vietnamese', 'Bilingual or native competence', ' ', ' '),
    new InfoField('English', 'Profesional competence', ' ', ' '),
  ];

  getEducation(): InfoField[] {
    return this.education;
  }

  getWorks(): InfoField[] {
    return this.works;
  }

  getLanguages(): InfoField[] {
    return this.languages;
  }

}
