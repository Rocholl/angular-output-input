import { Component } from '@angular/core';
import { Player } from './player';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    this.playerShow = this.players;
  }
  title = 'examples';

  private players: Player[] = [
    {
      char_id: 11,
      name: 'Domingo Molina',
      birthday: 'Unknown',
      occupation: ['Meth Distributor'],
      img: 'https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554',
      status: 'Deceased',
      nickname: 'Krazy-8',
      appearance: [1],
      portrayed: 'Maximino Arciniega',
      category: 'Breaking Bad',
      better_call_saul_appearance: [],
    },
    {
      char_id: 12,
      name: 'Tuco Salamanca',
      birthday: 'Unknown',
      occupation: ['Meth Distributor'],
      img: 'https://vignette.wikia.nocookie.net/breakingbad/images/a/a7/Tuco_BCS.jpg/revision/latest?cb=20170810082445',
      status: 'Deceased',
      nickname: 'Tuco',
      appearance: [1, 2],
      portrayed: 'Raymond Cruz',
      category: 'Breaking Bad, Better Call Saul',
      better_call_saul_appearance: [1, 2],
    },
    {
      char_id: 13,
      name: 'Marco & Leonel Salamanca',
      birthday: 'Unknown',
      occupation: ['Cartel Hitman'],
      img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_the-cousins-lg.jpg',
      status: 'Deceased',
      nickname: 'The Cousins',
      appearance: [3],
      portrayed: 'Luis & Daniel Moncada',
      category: 'Breaking Bad',
      better_call_saul_appearance: [],
    },
    {
      char_id: 14,
      name: 'Lydia Rodarte-Quayle',
      birthday: 'Unknown',
      occupation: ['Executive at Madrigal'],
      img: 'https://media1.popsugar-assets.com/files/thumbor/wERDST0TUb-iHCSb2r5ZpsvaZLo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/07/17/675/n/1922283/fae2f583f04bb80f_Laura-Fraser-is-back-as-Lydia-Rodarte-Quayle_gallery_primary/i/Laura-Fraser-Lydia-Rodarte-Quayle.jpg',
      status: 'Deceased',
      nickname: 'Lydia',
      appearance: [5],
      portrayed: 'Laura Fraser',
      category: 'Breaking Bad',
      better_call_saul_appearance: [],
    },
    {
      char_id: 15,
      name: 'Todd Alquist',
      birthday: 'Unknown',
      occupation: ['Lab Assistant', 'Enforcer', 'Meth Cook'],
      img: 'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/Todd_brba5b.png/revision/latest?cb=20130717134303',
      status: 'Deceased',
      nickname: 'Ricky Hitler',
      appearance: [5],
      portrayed: 'Jesse Plemons',
      category: 'Breaking Bad',
      better_call_saul_appearance: [],
    },
    {
      char_id: 16,
      name: 'Jane Margolis',
      birthday: 'Unknown',
      occupation: ['Tattoo Artist', 'Landlord'],
      img: 'https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Jane.jpg/revision/latest?cb=20090621233653',
      status: 'Deceased',
      nickname: 'Apology Girl',
      appearance: [2],
      portrayed: 'Krysten Ritter',
      category: 'Breaking Bad',
      better_call_saul_appearance: [],
    },
    {
      char_id: 17,
      name: 'Skinny Pete',
      birthday: 'Unknown',
      occupation: ['Low-level meth distributer'],
      img: 'https://vignette.wikia.nocookie.net/breaking-bad-tv/images/c/ce/Sp.png/revision/latest?cb=20121016143623',
      status: 'Alive',
      nickname: 'Skinny',
      appearance: [1, 2, 3, 4, 5],
      portrayed: 'Charles Baker',
      category: 'Breaking Bad',
      better_call_saul_appearance: [],
    },
    {
      char_id: 18,
      name: 'Brandon Mayhew',
      birthday: 'Unknown',
      occupation: ['Low-level meth distributer'],
      img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_badger-lg.jpg',
      status: 'Alive',
      nickname: 'Badger',
      appearance: [1, 2, 3, 4, 5],
      portrayed: 'Matt L. Jones',
      category: 'Breaking Bad',
      better_call_saul_appearance: [],
    },
    {
      char_id: 19,
      name: 'Huell Babineaux',
      birthday: 'Unknown',
      occupation: ['Bodyguard'],
      img: 'https://vignette.wikia.nocookie.net/breakingbad/images/c/c1/4x11_-_Huell.png/revision/latest?cb=20130913100459&path-prefix=es',
      status: 'Alive',
      nickname: 'Huell',
      appearance: [4, 5],
      portrayed: 'Lavell Crawford',
      category: 'Breaking Bad',
      better_call_saul_appearance: [],
    },
    {
      char_id: 20,
      name: 'Steven Gomez',
      birthday: 'Unknown',
      occupation: ['DEA Agent'],
      img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_steven-gomez-lg.jpg',
      status: 'Deceased',
      nickname: 'Gomie',
      appearance: [1, 2, 3, 4, 5],
      portrayed: 'Steven Michael Quezada',
      category: 'Breaking Bad',
      better_call_saul_appearance: [],
    },
  ];
  public playerShow: Player[] = [];
  public playersPrioritys: Player[] = [];
  public playersFavourites: Player[] = [];
  public showAll(): void {
    this.playerShow = this.players;
  }
  public deletePlayer(event: Player): void {
    this.playerShow = this.playerShow.filter((h) => h.char_id !== event. char_id);
    this.playersPrioritys = this.playerShow.filter((h) => h.char_id !== event. char_id);
    this.playersFavourites = this.playerShow.filter((h) =>h.char_id !== event. char_id);
  }
//tell me a joke

  public priorityPlayer(event: Player): void {

    let i = 0;
    this.playersPrioritys.forEach((player) => {
      if (event.char_id === player.char_id) {
        i++;
      }
    });
    if (i === 0) {
      if (this.playersPrioritys.length < 3) {
        this.playersPrioritys.push(event);
      } else {
        this.playersPrioritys.pop();
        this.playersPrioritys.push(event);
      }
    }
  }
  public favouritePlayer(event: Player): void {
    let i: number = 0;
    this.playersFavourites.forEach((player) => {
      if (event.char_id === player.char_id) {
        i++;
      }
    });
    if (i === 0) this.playersFavourites.push(event);
  }
  public showFavourites(): void {
    this.playerShow = this.playersFavourites;
  }
  public showPriority(): void {
    this.playerShow = this.playersPrioritys;
  }
}
