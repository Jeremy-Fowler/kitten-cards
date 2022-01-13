export interface Kitten{
  id: number;
  name: string;
  adopted: boolean;
  images: string[];
  url: string;
}

export const kittens = [
  { id: 1,
    name: 'Gopher',
    adopted: false, 
    images: [
      'https://i.imgur.com/MKBruXW.jpg',
      'https://i.imgur.com/liALssZ.jpg',
      'https://i.imgur.com/V7leTtF.jpg',
      'https://i.imgur.com/3Ii4Ztx.jpg'
    ],
    url: 'https://www.lakelowellanimalrescue.org/kitten-adoption#sl_embed&page=shelterluv_embed_160721623940335375%2Fembed%2Fanimal%2FLAR-A-1204'},
  { id: 2,
    name: 'Dudley',
    adopted: false,
    images: [
      'https://i.imgur.com/dAgpdcN.jpg',
      'https://i.imgur.com/2uxCWMH.jpg',
      'https://i.imgur.com/4J7myRo.jpg',
      'https://i.imgur.com/j4zlu22.jpg'
    ],
    url: 'https://www.lakelowellanimalrescue.org/kitten-adoption#sl_embed&page=shelterluv_embed_160721623940335375%2Fembed%2Fanimal%2FLAR-A-1075'},
  { id: 3,
    name: 'Iron Man',
    adopted: false,
    images: [
      'https://i.imgur.com/k4SWIv3.jpg',
      'https://i.imgur.com/i8daENf.jpg',
      'https://i.imgur.com/RpTB6jh.jpg',
      'https://i.imgur.com/L5TNdqJ.jpg'
    ],
    url: 'https://www.lakelowellanimalrescue.org/kitten-adoption#sl_embed&page=shelterluv_embed_160721623940335375%2Fembed%2Fanimal%2FLAR-A-1032'},
  { id: 4,
    name: 'Falcon',
    adopted: false,
    images: [
      'https://i.imgur.com/7iJ29hf.jpg',
      'https://i.imgur.com/szKRlhn.jpg',
      'https://i.imgur.com/S5Vpu1z.jpg',
      'https://i.imgur.com/Sk02L7R.jpg'
    ],
    url: 'https://www.lakelowellanimalrescue.org/kitten-adoption#sl_embed&page=shelterluv_embed_160721623940335375%2Fembed%2Fanimal%2FLAR-A-1030'}
]