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
  id: 'appetizers',
  label: 'Appetizers',
  blurb: 'Start the table off right.',
  items: [
    {
      name: 'Pretzels (4)',
      description: 'Bavarian style.',
      price: '$12.25',
    },
    {
      name: 'Mini Tacos (10)',
      description: 'Chicken mini tacos.',
      price: '$9.25',
    },
    {
      name: 'Chicken Strips (4)',
      description: 'Crispy chicken strips.',
      price: '$12.75',
    },
    {
      name: 'Ravioli (10)',
      description: 'Fried ravioli.',
      price: '$8.25',
    },
    {
      name: 'Poppers (6)',
      description: 'Cream cheese poppers.',
      price: '$8.25',
    },
    {
      name: 'Waffle Fries',
      description: 'Crispy waffle-cut fries.',
      price: '$4.25',
    },
    {
      name: 'Loaded Waffle Fries',
      description: 'Waffle fries loaded up.',
      price: '$7.50',
    },
    {
      name: 'Popcorn Shrimp',
      description: 'Bite-sized fried shrimp.',
      price: '$8.75',
    },
    {
      name: 'Hot Wings (12)',
      description: 'Classic hot wings.',
      price: '$16.75',
    },
    {
      name: 'Garlic Parmesan Wings (12)',
      description: 'Garlic parmesan wings.',
      price: '$17.75',
      tag: 'Must Try',
    },
    {
      name: 'Mushrooms (10)',
      description: 'Fried mushrooms.',
      price: '$6.25',
    },
    {
      name: 'Onion Rings',
      description: 'Crispy onion rings.',
      price: '$6.75',
    },
    {
      name: 'Tater Tots',
      description: 'Golden tater tots.',
      price: '$3.75',
    },
    {
      name: 'French Fries',
      description: 'Crispy fries.',
      price: '$3.75',
    },
    {
      name: 'Cheese Fries',
      description: 'Fries topped with cheese.',
      price: '$4.75',
    },
    {
      name: 'Pickle Fries',
      description: 'Fried pickle fries.',
      price: '$7.75',
    },
    {
      name: 'Jalapeño Mac & Cheese Bites',
      description: 'Jalapeño mac and cheese bites.',
      price: '$7.25',
    },
    {
      name: 'Loaded Nachos',
      description: 'Loaded nachos.',
      price: '$10.75',
    },
    {
      name: 'Cheesesticks (6)',
      description: 'Fried cheesesticks.',
      price: '$8.25',
    },
  ],
},
  {
  id: 'sandwiches',
  label: 'Sandwiches',
  blurb: 'Served with fries.',
  items: [
    {
      name: 'Hamburger',
      description: 'Classic hamburger served with fries.',
      price: '$12.75',
    },
    {
      name: 'Cheeseburger',
      description: 'Classic cheeseburger served with fries.',
      price: '$13.25',
    },
    {
      name: 'Patty Melt',
      description: 'Grilled onions and Swiss cheese on rye bread.',
      price: '$13.75',
    },
    {
      name: 'Double Cheeseburger',
      description: 'Two 6 oz. beef patties with cheese.',
      price: '$17.25',
    },
    {
      name: 'Bacon Cheeseburger',
      description: 'Cheeseburger topped with crispy bacon.',
      price: '$14.75',
    },
    {
      name: 'Double Bacon Cheeseburger',
      description: 'Two 6 oz. beef patties with bacon and cheese.',
      price: '$18.75',
    },
    {
      name: 'Frisco Melt',
      description: 'Texas toast with Swiss, 1000 Island, lettuce, and tomato.',
      price: '$13.75',
    },
    {
      name: 'Breaded Chicken',
      description: 'Breaded chicken sandwich served with fries.',
      price: '$12.50',
    },
    {
      name: 'BLT',
      description: 'Bacon, lettuce, and tomato on toasted bread.',
      price: '$11.25',
    },
    {
      name: 'Grilled Cheese',
      description: 'Classic grilled cheese sandwich.',
      price: '$5.75',
    },
    {
      name: 'Pork Tenderloin',
      description: 'Breaded pork tenderloin served with fries.',
      price: '$12.75',
    },
    {
      name: 'Charbroiled Chicken',
      description: 'Charbroiled chicken breast served with fries.',
      price: '$12.75',
    },
    {
      name: 'Gyro',
      description: 'Lamb and beef mix served on pita.',
      price: '$13.25',
    },
    {
      name: 'Brisket',
      description: 'Slow-cooked brisket with honey BBQ sauce.',
      price: '$13.75',
    },
    {
      name: 'Fish Fillet',
      description: 'Cod fillet served with fries.',
      price: '$12.25',
    },
    {
      name: 'Catfish Sandwich',
      description: 'Fried catfish sandwich served with fries.',
      price: '$12.75',
    },
    {
      name: 'Philly Cheesesteak',
      description: 'Thin-sliced steak with melted cheese.',
      price: '$13.25',
    },
    {
      name: 'French Dip',
      description: 'Roast beef sandwich served with au jus.',
      price: '$12.75',
    },
    {
      name: 'Reuben',
      description: 'Corned beef, Swiss, sauerkraut, and Thousand Island.',
      price: '$14.50',
    },
    {
      name: 'Mushroom Swiss Burger',
      description: 'Burger topped with mushrooms and Swiss cheese.',
      price: '$14.25',
    },
    {
      name: 'Grilled Ham & Cheese',
      description: 'Grilled ham and melted cheese.',
      price: '$7.75',
    },
    {
      name: 'Shrimp Po Boy',
      description: 'Fried shrimp with remoulade sauce.',
      price: '$14.25',
    },
  ],
},
  {
  id: 'dinners',
  label: 'Dinners',
  blurb: 'Served with baked potato, mashed potatoes or fries, and Texas toast. Only steak dinners include a salad. Add a small salad for $3.75.',
  items: [
    {
      name: 'Chicken Parmesan',
      description: 'Served with marinara sauce, Swiss cheese, and Texas toast.',
      price: '$14.75',
    },
    {
      name: 'Chicken Fried Steak',
      description: 'Does not include a salad.',
      price: '$13.75',
    },
    {
      name: 'Catfish',
      description: 'Two 5–7 oz. fillets.',
      price: '$15.75',
    },
    {
      name: 'Shrimp',
      description: 'Six jumbo fried shrimp.',
      price: '$14.00',
    },
    {
      name: '12 oz. Jalapeño Marinated Pork Chop',
      description: 'Served with your choice of side.',
      price: '$16.75',
    },
    {
      name: 'Chicken Strip Dinner',
      description: 'Served with your choice of side.',
      price: '$15.75',
    },
    {
      name: '6 oz. Top Sirloin',
      description: 'Served with your choice of side.',
      price: '$17.75',
    },
    {
      name: '10 oz. Top Sirloin',
      description: 'Served with your choice of side.',
      price: '$19.75',
    },
    {
      name: '8 oz. KC Strip',
      description: 'Served with your choice of side.',
      price: '$19.25',
    },
    {
      name: '10 oz. Ribeye (Select)',
      description: 'Served with your choice of side.',
      price: '$26.75',
      tag: 'Signature',
    },
    {
      name: 'Steak & Shrimp',
      description: 'Four shrimp with a 6 oz. sirloin.',
      price: '$19.75',
      tag: 'Local Favorite',
    },
    {
      name: 'Charbroiled Chicken',
      description: 'Grilled chicken breast served with your choice of side.',
      price: '$14.25',
    },
  ],
},
  {
  id: 'wraps',
  label: 'Wraps',
  blurb: 'Served with fries.',
  items: [
    {
      name: 'Taco Wrap',
      description: 'Seasoned taco meat wrapped in a flour tortilla.',
      price: '$12.25',
    },
    {
      name: 'Buffalo Chicken Wrap',
      description: 'Crispy chicken tossed in buffalo sauce.',
      price: '$14.25',
      tag: 'Local Favorite',
    },
    {
      name: 'Philly Cheesesteak Wrap',
      description: 'Thin-sliced steak with melted cheese wrapped in a flour tortilla.',
      price: '$13.25',
    },
    {
      name: 'Chicken Bacon Ranch Wrap',
      description: 'Grilled chicken, bacon, and ranch wrapped in a flour tortilla.',
      price: '$15.25',
      tag: 'Must Try',
    },
  ],
},
  {
  id: 'salads',
  label: 'Salads',
  blurb: 'Fresh, made to order, and served with your choice of dressing.',
  items: [
    {
      name: 'Fried Chicken Salad',
      description: 'Fresh greens topped with crispy fried chicken.',
      price: '$13.25',
      tag: 'Local Favorite',
    },
    {
      name: 'Grilled Chicken Salad',
      description: 'Fresh greens topped with grilled chicken.',
      price: '$12.25',
    },
    {
      name: 'Small House Salad',
      description: 'Fresh mixed greens with your choice of dressing.',
      price: '$4.25',
    },
    {
      name: 'Chef Salad',
      description: 'Fresh greens loaded with classic chef salad toppings.',
      price: '$10.50',
    },
    {
      name: 'Grilled Shrimp Salad',
      description: 'Fresh greens topped with grilled shrimp.',
      price: '$12.75',
      tag: 'Must Try',
    },
  ],
},
  {
  id: 'childrens-menu',
  label: "Children's Menu",
  blurb: 'For guests 12 and under. Includes French fries and a kid-sized soft drink.',
  items: [
    {
      name: 'Chicken Nuggets',
      description: 'Crispy chicken nuggets served with French fries and a kid-sized soft drink.',
      price: '$6.75',
    },
    {
      name: 'Chicken Strips',
      description: 'Two crispy chicken strips served with French fries and a kid-sized soft drink.',
      price: '$6.75',
    },
    {
      name: 'Hamburger',
      description: 'Kid-sized hamburger served with French fries and a kid-sized soft drink.',
      price: '$6.75',
    },
    {
      name: 'Cheeseburger',
      description: 'Kid-sized cheeseburger served with French fries and a kid-sized soft drink.',
      price: '$6.75',
    },
  ],
},
  {
  id: 'dessert',
  label: 'Dessert',
  blurb: 'Finish your meal with something sweet.',
  items: [
    {
      name: 'Hot Fudge Ice Cream Cake',
      description: 'A rich ice cream cake topped with hot fudge.',
      price: '$7.25',
      tag: 'Must Try',
    },
  ],
},
  {
  id: 'soft-drinks',
  label: 'Soft Drinks',
  blurb: 'Refreshing Coca-Cola products.',
  items: [
    {
      name: 'Coca-Cola Products',
      description: "Ask your server for today's available Coca-Cola selections.",
      price: '$3.50',
    },
  ],
},
  {
  id: 'beer-bottles',
  label: 'Beer (Bottles)',
  blurb: 'Enjoy an ice-cold bottled beer from our selection.',
  items: [
    {
      name: 'Bud Light',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Budweiser',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Busch Light',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Busch',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Bud Select',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Michelob Ultra',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Miller Lite',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Modelo',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Boulevard Wheat',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Guinness',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Twisted Tea',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Stag',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Yuengling',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Yuengling Flight',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Coors Light',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Corona',
      description: 'Bottle.',
      price: '',
    },
    {
      name: 'Angry Orchard',
      description: 'Hard cider (bottle).',
      price: '',
    },
  ],
},
  {
  id: 'draft',
  label: 'Draft Beer',
  blurb: 'Ice-cold draft beer on tap.',
  items: [
    {
      name: 'Bud Light',
      description: 'Draft beer.',
      price: '',
    },
    {
      name: 'Budweiser',
      description: 'Draft beer.',
      price: '',
    },
    {
      name: 'Yuengling',
      description: 'Draft beer.',
      price: '',
    },
    {
      name: 'Yuengling Flight',
      description: 'Draft beer.',
      price: '',
    },
    {
      name: 'Rotating Seasonal',
      description: "Ask your server about today's seasonal selection.",
      price: '',
    },
    {
      name: 'Snapper (Logboat)',
      description: 'Draft beer.',
      price: '',
    },
    {
      name: 'Blue Moon',
      description: 'Belgian-style wheat ale.',
      price: '',
    },
    {
      name: 'Michelob Amber Bock',
      description: 'Amber lager.',
      price: '',
    },
  ],
},
  {
  id: 'seltzers',
  label: 'Seltzers',
  blurb: 'Refreshing hard seltzers and fruit-forward favorites.',
  items: [
    {
      name: 'White Claw (Black Cherry)',
      description: 'Black cherry hard seltzer.',
      price: '',
    },
    {
      name: 'Carbliss (Cranberry)',
      description: 'Cranberry flavored ready-to-drink cocktail.',
      price: '',
    },
    {
      name: 'Carbliss (Pineapple)',
      description: 'Pineapple flavored ready-to-drink cocktail.',
      price: '',
    },
    {
      name: 'Carbliss (Black Raspberry)',
      description: 'Black raspberry flavored ready-to-drink cocktail.',
      price: '',
    },
    {
      name: 'Carbliss (Peach)',
      description: 'Peach flavored ready-to-drink cocktail.',
      price: '',
    },
    {
      name: 'Carbliss (Lemon Lime)',
      description: 'Lemon lime flavored ready-to-drink cocktail.',
      price: '',
    },
  ],
},
  {
  id: 'beer-cans',
  label: 'Beer (Cans)',
  blurb: 'Cold canned beer selection.',
  items: [
    {
      name: 'Budweiser',
      description: 'Classic American lager.',
      price: '',
    },
    {
      name: 'Bud Light',
      description: 'Light American lager.',
      price: '',
    },
    {
      name: 'Natural Light',
      description: 'Light American lager.',
      price: '',
    },
    {
      name: 'PBR',
      description: 'Pabst Blue Ribbon American lager.',
      price: '',
    },
    {
      name: 'Lagunitas Little Sumpin',
      description: 'Wheat IPA.',
      price: '',
    },
  ],
},
  {
  id: 'wine',
  label: 'Wine',
  blurb: 'A selection of popular wines served chilled or at room temperature.',
  items: [
    {
      name: 'Cabernet',
      description: 'Rich, full-bodied red wine.',
      price: '',
    },
    {
      name: 'White Zinfandel',
      description: 'Light, refreshing blush wine.',
      price: '',
    },
    {
      name: 'Pinot Grigio',
      description: 'Crisp and refreshing white wine.',
      price: '',
    },
    {
      name: 'Chardonnay',
      description: 'Smooth, classic white wine.',
      price: '',
    },
    {
      name: 'Moscato',
      description: 'Sweet, fruity white wine.',
      price: '',
    },
  ],
},
  {
  id: 'energy-drinks',
  label: 'Energy Drinks',
  blurb: 'Red Bull energy drinks served ice cold.',
  items: [
    {
      name: 'Red Bull',
      description: 'Original Red Bull Energy Drink.',
      price: '',
    },
    {
      name: 'Sugar Free',
      description: 'Sugar Free Red Bull.',
      price: '',
    },
    {
      name: 'Tropical',
      description: 'Red Bull Tropical Edition.',
      price: '',
    },
    {
      name: 'Blueberry',
      description: 'Red Bull Blue Edition.',
      price: '',
    },
    {
      name: 'Watermelon',
      description: 'Red Bull Watermelon Edition.',
      price: '',
    },
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
    caption: 'Double Bacon Cheeseburger',
  },
  {
    src: '/images/IMG_0821.jpeg',
    alt: 'Pork tenderloin sandwich on a plate',
    caption: 'Pork Tenderloin',
  },
  {
    src: '/images/IMG_0835.jpeg',
    alt: 'Bacon cheeseburger with fries',
    caption: 'Tenderloin & Fries',
  },
  {
    src: '/images/IMG_0828.jpeg',
    alt: 'Pork tenderloin sandwich with fries',
    caption: 'The Wings',
  },
];

export const heroImage = '/images/IMG_0812.jpeg';
export const historyImage = '/images/IMG_0821.jpeg';
export const vibeImage = '/images/IMG_0830.jpeg';
