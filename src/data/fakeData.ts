export interface FakeDataProps {
  id: number;
  name: string;
  quantity: number;
  image: string;
  regularPrice: number;
  discount: number;
  description?: string;
}

export const fakeData: FakeDataProps[] = [
  {
    id: 1,
    name: 'Lions Mane',
    quantity: 5,
    image:
      'https://www.mcmyco.com/wp-content/uploads/2021/04/Lionss-mane-1.png',
    regularPrice: 120,
    discount: 10,
    description:
      'The Lion’s Mane (Hericium Erinaceus) is a special mushroom with many nicknames. The fruit body is white in color and resembles the manes of a male lion. Because of this look, the Lion’s Mane is also called wig fungus. In traditional Chinese medicine, the Lion’s Mane is known as hou tou gu, which means monkey’s head.',
  },
  {
    id: 2,
    name: 'Cordyceps',
    quantity: 15,
    image: 'https://www.mcmyco.com/wp-content/uploads/2021/04/Cordyceps-1.png',
    regularPrice: 150,
    discount: 15,
    description:
      'The Cordyceps is a mushroom with a unique story. They grow as parasites on insects. For this reason, they are also called caterpillar mushroom or even caterpillar killer. There are hundreds of Cordyceps varieties, most of which cannot be grown on any basis other than an insect. This makes many of these variants very rare and expensive. Fortunately, the Cordyceps Militaris can be grown on an alternative soil. This variant is not inferior to other related types in terms of properties and is available in the form of McMyco Cordyceps supplements.',
  },
  {
    id: 3,
    name: 'Reishi',
    quantity: 8,
    image: 'https://www.mcmyco.com/wp-content/uploads/2021/04/Reishi-1.png',
    regularPrice: 110,
    discount: 0,
    description:
      'Reishi (Ganoderma Lucidum) is a brown-red mushroom about 10 to 25 centimeters in size. They mainly grow on stumps of old trees such as oak and beech. Reishi has been used in China for over 2000 years. There it is known as Lingzhi. Its reputation is very impressive, that is why they also call it the mushroom of immortality. In traditional Chinese medicine, they use the Lingzhi for various purposes.',
  },

  {
    id: 4,
    name: 'Turkey Tail',
    quantity: 7,
    image: 'https://www.mcmyco.com/wp-content/uploads/2021/04/TurkeyTail-1.png',
    regularPrice: 210,
    discount: 20,
    description:
      'The Turkey Tail mushroom not only has a wonderful appearance, but also has some special properties attributed to it. Centuries ago in Asia, old civilizations were already convinced of the great effects. For example, the Turkey Tail was widely used in traditional medicine in China and Japan. Centuries later, they are still great fans of this special medicinal mushroom. And this time their beliefs are also supported by science.',
  },
  {
    id: 5,
    name: 'Chaga',
    quantity: 2,
    image: 'https://www.mcmyco.com/wp-content/uploads/2021/04/Chaga-1.png',
    regularPrice: 170,
    discount: 50,
    description:
      'The Chaga (Inonotus Obliquus) is a beneficial mushroom that is mainly found in the Northern Hemisphere. The clinker polypore, as we also know it, grows mainly on beech trees and does well in cold climates such as Canada, Siberia and Northern Europe. Chaga looks like a piece of burnt wood or coal from the outside. Inside, however, it is orange, this combination has earned him the nicknames Diamond of the Forest, black gold and gift of the gods.',
  },
];
