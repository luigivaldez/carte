// @flow

import CardDescription from './CardDescription';

import image1Mazze from '../img/1Mazze.png';
import image2Mazze from '../img/2Mazze.png';
import image3Mazze from '../img/3Mazze.png';
import image4Mazze from '../img/4Mazze.png';
import image5Mazze from '../img/5Mazze.png';
import image6Mazze from '../img/6Mazze.png';
import image7Mazze from '../img/7Mazze.png';
import image8Mazze from '../img/8Mazze.png';
import image9Mazze from '../img/9Mazze.png';
import image10Mazze from '../img/10Mazze.png';
import image1Spade from '../img/1Spade.png';
import image2Spade from '../img/2Spade.png';
import image3Spade from '../img/3Spade.png';
import image4Spade from '../img/4Spade.png';
import image5Spade from '../img/5Spade.png';
import image6Spade from '../img/6Spade.png';
import image7Spade from '../img/7Spade.png';
import image8Spade from '../img/8Spade.png';
import image9Spade from '../img/9Spade.png';
import image10Spade from '../img/10Spade.png';
import image1Coppe from '../img/1Coppe.png';
import image2Coppe from '../img/2Coppe.png';
import image3Coppe from '../img/3Coppe.png';
import image4Coppe from '../img/4Coppe.png';
import image5Coppe from '../img/5Coppe.png';
import image6Coppe from '../img/6Coppe.png';
import image7Coppe from '../img/7Coppe.png';
import image8Coppe from '../img/8Coppe.png';
import image9Coppe from '../img/9Coppe.png';
import image10Coppe from '../img/10Coppe.png';
import image1Denari from '../img/1Denari.png';
import image2Denari from '../img/2Denari.png';
import image3Denari from '../img/3Denari.png';
import image4Denari from '../img/4Denari.png';
import image5Denari from '../img/5Denari.png';
import image6Denari from '../img/6Denari.png';
import image7Denari from '../img/7Denari.png';
import image8Denari from '../img/8Denari.png';
import image9Denari from '../img/9Denari.png';
import image10Denari from '../img/10Denari.png';

export default class CardImages {
  static mazze = [
    image1Mazze,
    image2Mazze,
    image3Mazze,
    image4Mazze,
    image5Mazze,
    image6Mazze,
    image7Mazze,
    image8Mazze,
    image9Mazze,
    image10Mazze,
  ];

  static spade = [
    image1Spade,
    image2Spade,
    image3Spade,
    image4Spade,
    image5Spade,
    image6Spade,
    image7Spade,
    image8Spade,
    image9Spade,
    image10Spade,
  ];

  static coppe = [
    image1Coppe,
    image2Coppe,
    image3Coppe,
    image4Coppe,
    image5Coppe,
    image6Coppe,
    image7Coppe,
    image8Coppe,
    image9Coppe,
    image10Coppe,
  ];

  static denari = [
    image1Denari,
    image2Denari,
    image3Denari,
    image4Denari,
    image5Denari,
    image6Denari,
    image7Denari,
    image8Denari,
    image9Denari,
    image10Denari,
  ];

  static all = {
    Mazze: CardImages.mazze,
    Spade: CardImages.spade,
    Coppe: CardImages.coppe,
    Denari: CardImages.denari,
  };

  static imageForCard(card: CardDescription) {
    const suit = CardImages.all[card.suit];
    const image = suit[card.value - 1];
    return image;
  }
}
