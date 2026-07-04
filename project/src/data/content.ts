export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: 'Signature' | 'Local Favorite' | 'Must Try';
};

export type MenuCategory = {
  id: string;
  label: string;
  blurb: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters & Shareables',
    blurb: 'Built for the table, made to disappear.',
    items: [
      {
        name: 'Garlic Parmesan Wings',
        description: 'Crispy wings tossed in roasted garlic butter and shaved parmesan. The house signature — a must try.',
        price: '$11',
        tag: 'Must Try',
      },
      {
        name: 'Chicken Wings',
        description: 'Hand-breaded and fried golden. Choice of buffalo, BBQ, garlic parmesan, or naked. 8 count.',
        price: '$10',
      },
      {
        name: 'Butterfly Shrimp',
        description: 'Lightly breaded butterfly shrimp, fried crisp and served with cocktail sauce and lemon.',
        price: '$12',
        tag: 'Local Favorite',
      },
      {
        name: 'Pork Tenderloin Sandwich',
        description: 'A Midwestern classic — breaded pork tenderloin, pickles, mustard, on a toasted bun.',
        price: '$10',
      },
      {
        name: 'Mozzarella Sticks',
        description: 'Golden-fried mozzarella with warm marinara for dipping.',
        price: '$8',
      },
      {
        name: 'Onion Rings',
        description: 'Thick-cut, beer-battered onion rings fried crisp.',
        price: '$7',
      },
      {
        name: 'Loaded Fries',
        description: 'Crispy fries piled with melted cheese, bacon, and scallions.',
        price: '$9',
      },
      {
        name: 'Fried Pickles',
        description: 'Dill spears battered and fried, served with ranch.',
        price: '$7',
      },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers & Sandwiches',
    blurb: 'Hand-formed, grilled to order, stacked tall.',
    items: [
      {
        name: 'The Post Office Cheeseburger',
        description: 'Half-pound Angus patty, American cheese, lettuce, tomato, onion, house sauce on a toasted bun.',
        price: '$11',
        tag: 'Signature',
      },
      {
        name: 'Bacon Cheeseburger',
        description: 'Half-pound Angus patty, crisp bacon, cheddar, caramelized onion.',
        price: '$13',
      },
      {
        name: 'Double Cheeseburger',
        description: 'Two patties, double cheese, pickles, house sauce. Bring your appetite.',
        price: '$14',
      },
      {
        name: 'French Dip',
        description: 'Thin-sliced roast beef on a toasted roll with melted provolone and a side of au jus.',
        price: '$13',
      },
      {
        name: 'Brisket Sandwich',
        description: 'Slow-smoked brisket, tangy house sauce, pickled onion, on a brioche bun.',
        price: '$13',
      },
      {
        name: 'Gyro',
        description: 'Spit-roasted lamb and beef, tzatziki, tomato, onion, in warm pita.',
        price: '$12',
      },
      {
        name: 'Pork Tenderloin Sandwich',
        description: 'Hand-breaded Iowa-style tenderloin, pickles, mustard, toasted bun.',
        price: '$10',
      },
      {
        name: 'Chicken Sandwich',
        description: 'Crispy or grilled chicken breast, lettuce, tomato, mayo on a brioche bun.',
        price: '$11',
      },
    ],
  },
  {
    id: 'wraps',
    label: 'Wraps',
    blurb: 'Rolled tight, packed full.',
    items: [
      {
        name: 'Chicken Bacon Ranch Wrap',
        description: 'Crispy chicken, bacon, cheddar, lettuce, tomato, ranch in a spinach tortilla.',
        price: '$11',
      },
      {
        name: 'Buffalo Chicken Wrap',
        description: 'Crispy chicken tossed in buffalo sauce, blue cheese crumble, lettuce, tomato.',
        price: '$11',
      },
      {
        name: 'Philly Cheesesteak Wrap',
        description: 'Shaved steak, peppers, onion, melted provolone, garlic aioli.',
        price: '$12',
      },
      {
        name: 'Veggie Wrap',
        description: 'Grilled peppers, onion, mushroom, lettuce, tomato, cheese, balsamic glaze.',
        price: '$10',
      },
    ],
  },
  {
    id: 'mains',
    label: 'From the Grill',
    blurb: 'The reason regulars keep coming back.',
    items: [
      {
        name: '12 oz Ribeye Steak',
        description: 'Hand-cut ribeye, grilled to order, finished with herb butter. The plate that built our reputation.',
        price: '$24',
        tag: 'Signature',
      },
      {
        name: 'Sirloin Steak',
        description: '8 oz sirloin, grilled to order, served with a side and your choice of potato.',
        price: '$18',
      },
      {
        name: 'Butterfly Shrimp Dinner',
        description: 'A generous portion of breaded butterfly shrimp with cocktail sauce and two sides.',
        price: '$16',
        tag: 'Local Favorite',
      },
      {
        name: 'Chicken Tenders & Fries',
        description: 'Hand-breaded tenders, golden fried, with your choice of dipping sauce.',
        price: '$11',
      },
      {
        name: 'Fish & Chips',
        description: 'Beer-battered cod, fried crisp, with tartar sauce and a pile of fries.',
        price: '$14',
      },
      {
        name: 'Mac & Cheese',
        description: 'Creamy mac and cheese, baked with a buttery crumb topping. A kid favorite.',
        price: '$7',
      },
    ],
  },
  {
    id: 'salads',
    label: 'Salads',
    blurb: 'Fresh, crisp, and a little lighter.',
    items: [
      {
        name: 'House Salad',
        description: 'Mixed greens, tomato, cucumber, onion, croutons, your choice of dressing.',
        price: '$8',
      },
      {
        name: 'Grilled Chicken Salad',
        description: 'House greens topped with grilled chicken breast, tomato, egg, and dressing.',
        price: '$11',
      },
      {
        name: 'Crispy Chicken Salad',
        description: 'House greens topped with hand-breaded chicken tenders, tomato, and ranch.',
        price: '$11',
      },
      {
        name: 'Steak Salad',
        description: 'Mixed greens, sliced sirloin, tomato, onion, bleu cheese crumble, balsamic.',
        price: '$14',
      },
    ],
  },
  {
    id: 'kids',
    label: 'Kids Menu',
    blurb: 'For the little regulars. 10 and under.',
    items: [
      {
        name: 'Kids Cheeseburger',
        description: 'Small patty, American cheese, bun. Served with fries.',
        price: '$7',
      },
      {
        name: 'Kids Chicken Tenders',
        description: 'Two hand-breaded tenders with fries and a dipping sauce.',
        price: '$7',
      },
      {
        name: 'Kids Mac & Cheese',
        description: 'Creamy mac and cheese, baked with a buttery crumb topping.',
        price: '$6',
      },
      {
        name: 'Kids Grilled Cheese',
        description: 'Buttery toasted sandwich with melted American cheese. Served with fries.',
        price: '$6',
      },
      {
        name: 'Kids Corn Dog',
        description: 'A classic corn dog, served with fries.',
        price: '$6',
      },
    ],
  },
  {
    id: 'sides',
    label: 'Sides & Extras',
    blurb: 'Round out the plate.',
    items: [
      { name: 'French Fries', description: 'Crispy, golden, salted just right.', price: '$4' },
      { name: 'Onion Rings', description: 'Thick-cut, beer-battered, fried crisp.', price: '$4' },
      { name: 'Loaded Fries', description: 'Cheese, bacon, scallions.', price: '$7' },
      { name: 'Mozzarella Sticks', description: 'Fried mozzarella with marinara.', price: '$7' },
      { name: 'Coleslaw', description: 'Cool, creamy, house-made.', price: '$3' },
      { name: 'Side Salad', description: 'Mixed greens with your choice of dressing.', price: '$4' },
      { name: 'Cup of Chili', description: 'Hearty house chili, served with crackers.', price: '$5' },
      { name: 'Extra Dressing', description: 'Ranch, bleu cheese, vinaigrette, or house.', price: '50¢' },
      { name: 'Extra Sauce', description: 'Ranch, buffalo, BBQ, garlic parmesan, or house sauce.', price: '50¢' },
      { name: 'Add Bacon', description: 'Two strips of crisp applewood bacon on anything.', price: '$2' },
      { name: 'Add Cheese', description: 'American, cheddar, provolone, or pepper jack.', price: '$1' },
    ],
  },
  {
    id: 'dessert',
    label: 'Dessert',
    blurb: 'Save room.',
    items: [
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a molten center, served with a scoop of vanilla ice cream.',
        price: '$7',
      },
      {
        name: 'New York Cheesecake',
        description: 'Classic creamy cheesecake with a graham crust and berry drizzle.',
        price: '$7',
      },
      {
        name: 'Fried Oreos',
        description: 'Oreos battered and fried, dusted with powdered sugar. A local favorite.',
        price: '$6',
        tag: 'Local Favorite',
      },
      {
        name: 'Ice Cream',
        description: 'A scoop of vanilla, chocolate, or twist. Kid-approved.',
        price: '$4',
      },
    ],
  },
  {
    id: 'beer',
    label: 'Beer',
    blurb: 'Cold, on tap and in the bottle.',
    items: [
      {
        name: 'Draft Beer',
        description: 'A rotating selection of domestic and craft drafts on tap. Ask your bartender what is pouring tonight.',
        price: 'from $4',
      },
      {
        name: 'Domestic Bottles & Cans',
        description: 'Bud Light, Coors Light, Miller Lite, Busch Light, and more — ice cold.',
        price: 'from $3',
      },
      {
        name: 'Craft Bottles',
        description: 'A rotating list of regional Missouri and Midwest craft bottles.',
        price: 'from $6',
      },
      {
        name: 'Import Bottles',
        description: 'Corona, Modelo, Dos Equis, Heineken, and seasonal imports.',
        price: 'from $5',
      },
      {
        name: 'Pitchers',
        description: 'Share a pitcher with the table. Domestic and select draft available.',
        price: 'from $12',
      },
    ],
  },
  {
    id: 'cocktails',
    label: 'Cocktails & Spirits',
    blurb: 'Friendly bartenders, stiff pours.',
    items: [
      {
        name: 'Signature Cocktails',
        description: 'A rotating list of house cocktails poured by bartenders who know your name.',
        price: 'from $7',
        tag: 'Signature',
      },
      {
        name: 'Well Drinks',
        description: 'Your go-to mixed drinks, made right. Vodka, rum, gin, whiskey, tequila.',
        price: 'from $5',
      },
      {
        name: 'Premium Mixed Drinks',
        description: 'Top-shelf spirits, fresh mixers, made to order.',
        price: 'from $8',
      },
      {
        name: 'Margaritas',
        description: 'On the rocks or frozen, with salt or without. Classic, strawberry, or mango.',
        price: 'from $7',
      },
      {
        name: 'Martinis',
        description: 'Gin or vodka, dirty or dry, olives or twist. Shaken, not stirred.',
        price: 'from $8',
      },
      {
        name: 'Bombs',
        description: 'Jägerbombs, Vegas bombs, and whatever the night calls for.',
        price: 'from $7',
      },
    ],
  },
  {
    id: 'wine',
    label: 'Wine & Seltzers',
    blurb: 'A little something for everyone.',
    items: [
      {
        name: 'House Red',
        description: 'A smooth pour-by-the-glass red — ask for the current selection.',
        price: '$6',
      },
      {
        name: 'House White',
        description: 'A crisp pour-by-the-glass white — ask for the current selection.',
        price: '$6',
      },
      {
        name: 'Wine by the Glass',
        description: 'A small rotating list of reds and whites by the glass.',
        price: 'from $6',
      },
      {
        name: 'Hard Seltzers',
        description: 'White Claw, Truly, and rotating seasonal seltzers — light and refreshing.',
        price: 'from $5',
      },
      {
        name: 'Red Bull',
        description: 'Wings for the night. Plain or flavored, on its own or as a mixer.',
        price: '$5',
      },
    ],
  },
  {
    id: 'soft',
    label: 'Soft Drinks',
    blurb: 'For the designated drivers.',
    items: [
      { name: 'Fountain Soda', description: 'Coke, Diet Coke, Sprite, Dr Pepper, and more. Free refills.', price: '$3' },
      { name: 'Sweet Tea', description: 'House-brewed Southern sweet tea.', price: '$3' },
      { name: 'Unsweet Tea', description: 'House-brewed, served over ice with lemon.', price: '$3' },
      { name: 'Lemonade', description: 'Fresh-squeezed, sweet and tart.', price: '$3' },
      { name: 'Coffee', description: 'Hot and fresh, regular or decaf.', price: '$2' },
      { name: 'Bottled Water', description: 'Cold, still, 20 oz.', price: '$2' },
    ],
  },
];

export type Review = {
  name: string;
  date: string;
  text: string;
  highlight: string;
};

export const reviews: Review[] = [
  {
    name: 'Daniel Doty',
    date: 'March 15, 2021',
    text: 'I have visited this place almost every time I stop by in Fulton for lunch or dinner to get a pork tenderloin sandwich. Tonight the bartender/waitress was stellar — the food orders came out perfect and to the right people for a group of 30.',
    highlight: 'Food orders came out perfect!',
  },
  {
    name: 'Jessica Wright',
    date: 'December 6, 2020',
    text: 'This place is the place to go when in Fulton! The food is top notch and the staff and atmosphere are amazing!',
    highlight: 'The food is top notch!',
  },
  {
    name: 'DiVinci612',
    date: 'February 3, 2019',
    text: 'We stopped here for lunch and had a great time. We had a variety of food including French dip, brisket sandwich, cheeseburger, gyro and mac and cheese for the little. Everyone enjoyed the food and the service was fantastic! Highly recommend.',
    highlight: 'Great experience',
  },
  {
    name: 'John B',
    date: 'June 26, 2018',
    text: 'I went here with a group of about 20 friends. I was not disappointed in the slightest. The restaurant had a large selection of items available. I ordered the 12-oz Ribeye and it was wonderful.',
    highlight: 'Wonderful food, wonderful service!',
  },
  {
    name: 'Angel Field',
    date: 'July 7, 2023',
    text: "We've been going to the Post Office every chance we can since moving out here over a year ago and haven't been disappointed yet. The servers are nice, our order comes out quick and everything we've tried is great.",
    highlight: 'Good food! Good people!',
  },
  {
    name: 'Pauly Gillespie',
    date: 'January 8, 2022',
    text: "I've been to Fulton a number of times but never found the PO and I'm sad it took me this long. Service was exceptional — tons of personality and I felt like I was part of the regulars from the moment I ordered my first beer.",
    highlight: 'Exceptional',
  },
];

export const galleryImages = [
  {
    src: '/images/IMG_0812.jpeg',
    alt: 'The Post Office Bar & Grill building exterior at dusk',
    caption: 'The Building',
  },
  {
    src: '/images/IMG_0830.jpeg',
    alt: 'Chicken wings served on a plate',
    caption: 'The Wings',
  },
  {
    src: '/images/IMG_0821.jpeg',
    alt: 'Pork tenderloin sandwich on a plate',
    caption: 'Pork Tenderloin',
  },
  {
    src: '/images/IMG_0835.jpeg',
    alt: 'Bacon cheeseburger with fries',
    caption: 'Bacon Cheeseburger',
  },
  {
    src: '/images/IMG_0828.jpeg',
    alt: 'Pork tenderloin sandwich with fries',
    caption: 'Tenderloin & Fries',
  },
];

export const heroImage = '/images/IMG_0812.jpeg';
export const historyImage = '/images/IMG_0821.jpeg';
export const vibeImage = '/images/IMG_0830.jpeg';
