const color = ['#dce5f1','#ebe8de','#ffece7','#eafbdd','#f4f3fe','#deccf0','#deccf0']

export default {
    "category": [
        {
            "id": "1",
            "category": "Starter",
            "image": require('../resources/images/starter.jpg'),
        },
        {
            "id": "2",
            "category": "Fast Food",
            "image": require('../resources/images/fastfood.jpg'),
        },
        {
            "id": "3",
            "category": "Burgers",
            "image": require('../resources/images/burgers.jpg'),
        },
        {
            "id": "4",
            "category": "Pizza",
            "image": require('../resources/images/pizza.jpg'),
        },
        {
            "id": "5",
            "category": "Sandwiches",
            "image": require('../resources/images/sandwich.jpeg'),
        },
        {
            "id": "6",
            "category": "Roll",
            "image": require('../resources/images/rolls.jpg'),
        },
        {
            "id": "7",
            "category": "Pasta",
            "image": require('../resources/images/pasta.jpg'),
        },
        {
            "id": "8",
            "category": "Juices",
            "image": require('../resources/images/juices.jpg'),
        }
    ],
    "products": [
        {
            "id": "1",
            "categoryid": "1",
            "productname": "Cheese Fries",
            "image": require('../resources/images/starter1.jpg'),
            "description": "Cheese fries or cheesy chips is a dish consisting of french fries covered in cheese, with the possible addition of various other toppings",
            "price": "5"
        },
        {
            "id": "2",
            "categoryid": "1",
            "productname": "Chicken Nuggets",
            "image": require('../resources/images/starter2.jpg'),
            "description": "A chicken nugget is a chicken product made from chicken meat that is breaded or battered, then deep-fried or baked. Invented in the 1950s",
            "price": "3",
            isRecommended:true
        },
        {
            "id": "3",
            "categoryid": "1",
            "productname": "Crispy Wings",
            "image": require('../resources/images/starter3.jpg'),
            "description": "A Buffalo wing, in the cuisine of the United States, is an unbreaded chicken wing section (flat or drumette) that is generally deep-fried then coated or dipped in a sauce consisting of a vinegar-based cayenne pepper hot sauce and melted butter prior to serving.",
            "price": "6"
        },
        {
            "id": "4",
            "categoryid": "1",
            "productname": "Finger Fish With Tartar Sauce",
            "image": require('../resources/images/starter4.jpg'),
            "description": "Fish fingers (British English) or fish sticks (American English) are a processed food made using a whitefish, such as cod, hake, haddock or pollock, which has been battered or breaded",
            "price": "4"
        },
        {
            "id": "5",
            "categoryid": "1",
            "productname": "Mayo Garlic Fries",
            "image": require('../resources/images/starter5.jpg'),
            "description": "Garlic Mayo Fries is Children Lovers Dish, prepared with Potatoes and served with Sauce, Ketchup, Coleslaw Salad or Burgers. Mayo Fries is crispy fast food dish. Boiled potatoes are mixed with corn flour and rice flour",
            "price": "3"
        },
        {
            "id": "6",
            "categoryid": "1",
            "productname": "Plain Fries",
            "image": require('../resources/images/starter6.jpg'),
            "description": "French fries, or simply fries, chips, finger chips, or French-fried potatoes, are batonnet or allumette-cut deep-fried potatoes.",
            "price": "5"
        },
        {
            "id": "7",
            "categoryid": "2",
            "productname": "Onion ring",
            "image": require('../resources/images/FastFood1.jpg'),
            "description": "An onion ring is a form of appetizer or side dish commonly found in the United States, Canada, United Kingdom, Ireland, Australia, New Zealand, South Africa",
            "price": "8"
        },
        {
            "id": "8",
            "categoryid": "2",
            "productname": "Pretzel",
            "image": require('../resources/images/FastFood2.jpg'),
            "description": "A pretzel, from dialectal German pronunciation, standard German: Breze is a type of baked pastry made from dough that is commonly shaped into a knot.",
            "price": "12",
            isRecommended:true
        },
        {
            "id": "9",
            "categoryid": "2",
            "productname": "Burrito",
            "image": require('../resources/images/FastFood3.jpg'),
            "description": "A burrito is a dish in Mexican and Tex-Mex cuisine consisting of a flour tortilla wrapped into a sealed cylindrical shape around various ingredients.",
            "price": "8"
        },
        {
            "id": "10",
            "categoryid": "2",
            "productname": "Taco",
            "image": require('../resources/images/FastFood4.jpg'),
            "description": "A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling. The tortilla is then folded around the filling and eaten by hand",
            "price": "10"
        },
        {
            "id": "11",
            "categoryid": "2",
            "productname": "Hot dog",
            "image": require('../resources/images/FastFood5.jpg'),
            "description": "A hot dog is a food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun. It can also refer to the sausage itself",
            "price": "12"
        },
        {
            "id": "12",
            "categoryid": "2",
            "productname": "Bacon",
            "image": require('../resources/images/FastFood6.jpg'),
            "description": "Bacon is a type of salt-cured pork made from various cuts, typically from the pork belly or from the less fatty back cuts. It is eaten on its own",
            "price": "13"
        },
        {
            "id": "13",
            "categoryid": "3",
            "productname": "BEEF BURGER",
            "image": require('../resources/images/Burgers1.jpg'),
            "description": "A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried,",
            "price": "10"
        },
        {
            "id": "14",
            "categoryid": "3",
            "productname": "CHICKEN BURGER",
            "image": require('../resources/images/Burgers2.jpg'),
            "description": "A chicken sandwich is a sandwich that typically consists of boneless, skinless chicken breast served between slices of bread, with pickles",
            "price": "9"
        },
        {
            "id": "15",
            "categoryid": "3",
            "productname": "CHICKEN B.B.Q BURGER",
            "image": require('../resources/images/Burgers3.jpg'),
            "description": "A perfect blend of sweet and spicy to make this burger absolutely summery and delicious. Served with Fries and Coleslaw.",
            "price": "12"
        },
        {
            "id": "16",
            "categoryid": "3",
            "productname": "CRUNCH BURGER",
            "image": require('../resources/images/Burgers4.jpg'),
            "description": "Golden crumb coated boneless chicken fillet topped with red sauce and cheese. Served with Fries and Coleslaw.",
            "price": "10"
        },
        {
            "id": "17",
            "categoryid": "3",
            "productname": "Cheeseburger Deluxe",
            "image": require('../resources/images/Burgers5.jpg'),
            "description": "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually",
            "price": "17",
            isRecommended:true
        },
        {
            "id": "18",
            "categoryid": "3",
            "productname": "Mozzarella Burger Deluxe",
            "image": require('../resources/images/Burgers6.jpg'),
            "description": "Change up your everyday burgers with our Mozzarella Beef Burger Recipe. This beef burger recipe includes a tangy, spicy barbecue sauce that you will love",
            "price": "20"
        },
        {
            "id": "19",
            "categoryid": "4",
            "productname": "Cheese & Pepperoni",
            "image": require('../resources/images/pizza1.jpg'),
            "description": "Once you've experienced this giant pizza decked out in four cheeses and spicy dots of pepperoni… you'll be just as reeled in",
            "price": "15"
        },
        {
            "id": "20",
            "categoryid": "4",
            "productname": "Ranch Pizza",
            "image": require('../resources/images/pizza2.jpg'),
            "description": "Ranch Sauce with Chicken Fajita, Mozzarella Cheese, Onion, Black Olives, Mushrooms, Red & Green Jalapeno",
            "price": "10"
        },
        {
            "id": "21",
            "categoryid": "4",
            "productname": "Chicken Fajita",
            "image": require('../resources/images/pizza3.jpg'),
            "description": "Chicken Fajita, Capsicums & Onion",
            "price": "12",
            isRecommended:true
        },
        {
            "id": "22",
            "categoryid": "4",
            "productname": "Veggie Lover",
            "image": require('../resources/images/pizza4.jpg'),
            "description": "Onion, Capsicum, Mushrooms, Black Olives, Tomatoes & Sweet Corn",
            "price": "12"
        },
        {
            "id": "23",
            "categoryid": "4",
            "productname": "Super Supreme",
            "image": require('../resources/images/pizza5.jpg'),
            "description": "Beef with Pepperoni, Sausage, Smoked Chicken, Onion, Green Pepper, Mushrooms & Black Olives",
            "price": "10"
        },
        {
            "id": "24",
            "categoryid": "4",
            "productname": "Fajita Sicilian",
            "image": require('../resources/images/pizza6.jpg'),
            "description": "Chicken Fajita, Capsicum, Green Jalapeno & Onion",
            "price": "15",
            isRecommended:true
        },
        {
            "id": "25",
            "categoryid": "5",
            "productname": "Bar B.Q Club Sandwich",
            "image": require('../resources/images/Sandwich1.jpg'),
            "description": "This Bar B.Q Club Sandwich is a classic beloved by children and adults alike. This version uses rotisserie chicken, prepared pesto, cheese, and pre-cooked bacon.",
            "price": "10"
        },
        {
            "id": "26",
            "categoryid": "5",
            "productname": "Chicken Sandwich",
            "image": require('../resources/images/Sandwich2.jpg'),
            "description": "Spoil yourself for lunch with these scrumptiously stacked chicken club sandwiches. They are packed to the brim with delicious roast chicken topped with crispy bacon and juicy salad. Better yet,",
            "price": "17"
        },
        {
            "id": "27",
            "categoryid": "5",
            "productname": "Club Sandwich",
            "image": require('../resources/images/Sandwich3.jpg'),
            "description": "A Club Sandwich is one of the most iconic sandwiches on any menu! Layers of ham, bacon and turkey with juicy tomatoes, crisp lettuce and cheddar cheese create the perfect bite!",
            "price": "13"
        },
        {
            "id": "28",
            "categoryid": "5",
            "productname": "Crispy Club Sandwich",
            "image": require('../resources/images/Sandwich4.jpg'),
            "description": "Fried Chicken Club Sandwich A beautifully crispy fried chicken breast served with cheese and leftover baked",
            "price": "20"
        },
        {
            "id": "29",
            "categoryid": "5",
            "productname": "Mayo Creamy Club Sandwich",
            "image": require('../resources/images/Sandwich5.jpg'),
            "description": "Mayo Creamy Club Sandwich rolls have fast become the regular street food around the country, with a host of eateries and stalls selling a variety of this delicious, filling rolls.",
            "price": "14",
            isRecommended:true
        },
        {
            "id": "30",
            "categoryid": "6",
            "productname": "Beef Mayo Roll",
            "image": require('../resources/images/Roll1.jpg'),
            "description": "Beef Mayo Roll Recipe in English is an easy and traditional cooking recipe to prepare at home. It provides you an awesome taste of Iftar Items.",
            "price": "12"
        },
        {
            "id": "31",
            "categoryid": "6",
            "productname": "Chicken Cheese Roll",
            "image": require('../resources/images/Roll2.jpg'),
            "description": "These chicken cheese rolls are very soft cheesy and delicious!",
            "price": "13"
        },
        {
            "id": "32",
            "categoryid": "6",
            "productname": "Chicken Juicy Roll",
            "image": require('../resources/images/Roll3.jpg'),
            "description": "This chicken rolls recipe is perfect for on-the-go or potlucks! The meat is so tender and juicy,",
            "price": "11"
        },
        {
            "id": "33",
            "categoryid": "6",
            "productname": "Chicken Roll",
            "image": require('../resources/images/Roll4.jpg'),
            "description": "chicken roll is a yummy delicious roll where paratha roll is loaded with Smoked chicken masala..",
            "price": "10"
        },
        {
            "id": "34",
            "categoryid": "7",
            "productname": "Gnocchi",
            "image": require('../resources/images/Pasta1.jpg'),
            "description": "Gnocchi is an Italian pasta made of cooked mashed potatoes, flour, and eggs. These soft, doughy dumplings are typically served with a savory white or red sauce.",
            "price": "12",
            isRecommended:true
        },
        {
            "id": "35",
            "categoryid": "7",
            "productname": "Tagliatelle",
            "image": require('../resources/images/Pasta2.jpg'),
            "description": "Tagliatelle is a long, ribbon-shaped pasta that's similar to fettuccine.",
            "price": "20"
        },
        {
            "id": "36",
            "categoryid": "7",
            "productname": "Cavatelli",
            "image": require('../resources/images/Pasta3.jpg'),
            "description": "Considered one of the oldest pasta types, cavatelli are made from an eggless dough and rolled into small shells that resemble tiny hot dog buns.",
            "price": "15"
        },
        {
            "id": "37",
            "categoryid": "7",
            "productname": "Ravioli",
            "image": require('../resources/images/Pasta4.jpg'),
            "description": "Ravioli are a type of pasta featuring a filling enveloped in thin, egg-based pasta dough.",
            "price": "17"
        },
        {
            "id": "38",
            "categoryid": "7",
            "productname": "Macaroni",
            "image": require('../resources/images/Pasta5.jpg'),
            "description": "Macaroni is a dry, tubular-shaped pasta that comes in different lengths and sizes, but is commonly cut short.",
            "price": "15",
            isRecommended:true
        },
        {
            "id": "39",
            "categoryid": "7",
            "productname": "Farfalle",
            "image": require('../resources/images/Pasta6.jpg'),
            "description": "Also known as bow-tie or butterfly pasta, farfalle is perfect for cream-based sauces or in pasta salads.",
            "price": "20"
        },
        {
            "id": "40",
            "categoryid": "7",
            "productname": "Orecchiette",
            "image": require('../resources/images/Pasta7.jpg'),
            "description": "Orecchiette means “little ears” in Italian, which makes a lot of sense when you consider their shape.",
            "price": "10"
        },
        {
            "id": "41",
            "categoryid": "8",
            "productname": "ALL BERRY BANG",
            "image": require('../resources/images/pizza6.jpg'),
            "description": "Strawberry Yoghurt, Strawberries, Apple Juice, Raspberries, Blackcurrant & Ice",
            "price": "15"
        },
        {
            "id": "42",
            "categoryid": "8",
            "productname": "BANANA BUZZ",
            "image": require('../resources/images/pizza6.jpg'),
            "description": "Low Fat Milk, Banana, Honey, Vanilla Yoghurt & Ice",
            "price": "16"
        },
        {
            "id": "43",
            "categoryid": "8",
            "productname": "BERRY CRUSH",
            "image": require('../resources/images/pizza6.jpg'),
            "description": "Strawberries, Apple Juice, Raspberries, Sorbet, Blackcurrant & Ice",
            "price": "14"
        },
        {
            "id": "44",
            "categoryid": "8",
            "productname": "BLUEBERRY BLAST",
            "image": require('../resources/images/pizza6.jpg'),
            "description": "Blueberries, Apple Juice, Sorbet, Banana, Vanilla Yoghurt & Ice",
            "price": "15"
        },
        {
            "id": "45",
            "categoryid": "8",
            "productname": "ENERGY LIFT",
            "image": require('../resources/images/pizza6.jpg'),
            "description": "Tropical Juice, Mango, Mango Yoghurt, Banana, Energiser Booster & Ice",
            "price": "12"
        },
        {
            "id": "46",
            "categoryid": "8",
            "productname": "KINKY KALE",
            "image": require('../resources/images/pizza6.jpg'),
            "description": "Kale, Mint, Freshly Squeezed Orange, Freshly Juiced Pineapple & Ice",
            "price": "9",
            isRecommended:true
        }
    ],
    "ingredients": [
        {
            "productid": "1",
            "image": require('../resources/images/cookingoil.jpg')
        },
        {
            "productid": "1",
            "image": require('../resources/images/cheese.jpg')
        },
        {
            "productid": "1",
            "image": require('../resources/images/potato.jpg')
        },
        {
            "productid": "1",
            "image": require('../resources/images/garammasala.jpg')
        },
        {
            "productid": "2",
            "image": require('../resources/images/cookingoil.jpg')
        },
        {
            "productid": "2",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "2",
            "image": require('../resources/images/breadcrumbs.jpg')
        },
        {
            "productid": "2",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "2",
            "image": require('../resources/images/garlic.jpg')
        },
        {
            "productid": "2",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "3",
            "image": require('../resources/images/oliveoil.jpg')
        },
        {
            "productid": "3",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "3",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "3",
            "image": require('../resources/images/greenchilli.jpg')
        },
        {
            "productid": "3",
            "image": require('../resources/images/garlic.jpg')
        },
        {
            "productid": "4",
            "image": require('../resources/images/fish.jpg')
        },
        {
            "productid": "4",
            "image": require('../resources/images/butter.jpg')
        },
        {
            "productid": "4",
            "image": require('../resources/images/breadcrumbs.jpg')
        },
        {
            "productid": "4",
            "image": require('../resources/images/DaniyaPowder.jpg')
        },
        {
            "productid": "4",
            "image": require('../resources/images/greenchilli.jpg')
        },
        {
            "productid": "4",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "5",
            "image": require('../resources/images/oliveoil.jpg')
        },
        {
            "productid": "5",
            "image": require('../resources/images/potato.jpg')
        },
        {
            "productid": "5",
            "image": require('../resources/images/garlic.jpg')
        },
        {
            "productid": "5",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "6",
            "image": require('../resources/images/cookingoil.jpg')
        },
        {
            "productid": "6",
            "image": require('../resources/images/potato.jpg')
        },
        {
            "productid": "6",
            "image": require('../resources/images/blackpepper.jpg')
        },
        {
            "productid": "7",
            "image": require('../resources/images/onions.jpg')
        },
        {
            "productid": "7",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "7",
            "image": require('../resources/images/garlic.jpg')
        },
        {
            "productid": "7",
            "image": require('../resources/images/breadcrumbs.jpg')
        },
        {
            "productid": "7",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "7",
            "image": require('../resources/images/cookingoil.jpg')
        },
        {
            "productid": "8",
            "image": require('../resources/images/coco.jpg')
        },
        {
            "productid": "8",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "8",
            "image": require('../resources/images/shuger.jpg')
        },
        {
            "productid": "8",
            "image": require('../resources/images/breadcrumbs.jpg')
        },
        {
            "productid": "9",
            "image": require('../resources/images/Beef.jpg')
        },
        {
            "productid": "9",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "9",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "9",
            "image": require('../resources/images/butter.jpg')
        },
        {
            "productid": "9",
            "image": require('../resources/images/blackpepper.jpg')
        },
        {
            "productid": "10",
            "image": require('../resources/images/onions.jpg')
        },
        {
            "productid": "10",
            "image": require('../resources/images/Beef.jpg')
        },
        {
            "productid": "10",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "10",
            "image": require('../resources/images/oliveoil.jpg')
        },
        {
            "productid": "10",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "10",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "11",
            "image": require('../resources/images/sausage.jpg')
        },
        {
            "productid": "11",
            "image": require('../resources/images/hotdogbun.jpg')
        },
        {
            "productid": "11",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "11",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "12",
            "image": require('../resources/images/blackpepper.jpg')
        },
        {
            "productid": "12",
            "image": require('../resources/images/Beef.jpg')
        },
        {
            "productid": "12",
            "image": require('../resources/images/oliveoil.jpg')
        },
        {
            "productid": "12",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "13",
            "image": require('../resources/images/blackpepper.jpg')
        },
        {
            "productid": "13",
            "image": require('../resources/images/Beef.jpg')
        },
        {
            "productid": "13",
            "image": require('../resources/images/oliveoil.jpg')
        },
        {
            "productid": "13",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "13",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "13",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "13",
            "image": require('../resources/images/burgerbun.jpg')
        },
        {
            "productid": "14",
            "image": require('../resources/images/cookingoil.jpg')
        },
        {
            "productid": "14",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "14",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "14",
            "image": require('../resources/images/greenchilli.jpg')
        },
        {
            "productid": "14",
            "image": require('../resources/images/burgerbun.jpg')
        },
        {
            "productid": "14",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "14",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "14",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "15",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "15",
            "image": require('../resources/images/oliveoil.jpg')
        },
        {
            "productid": "15",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "15",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "15",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "15",
            "image": require('../resources/images/burgerbun.jpg')
        },
        {
            "productid": "15",
            "image": require('../resources/images/greenchilli.jpg')
        },
        {
            "productid": "16",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "16",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "16",
            "image": require('../resources/images/oliveoil.jpg')
        },
        {
            "productid": "16",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "16",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "16",
            "image": require('../resources/images/burgerbun.jpg')
        },
        {
            "productid": "16",
            "image": require('../resources/images/greenchilli.jpg')
        },
        {
            "productid": "17",
            "image": require('../resources/images/cookingoil.jpg')
        },
        {
            "productid": "17",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "17",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "17",
            "image": require('../resources/images/greenchilli.jpg')
        },
        {
            "productid": "17",
            "image": require('../resources/images/burgerbun.jpg')
        },
        {
            "productid": "17",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "17",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "17",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "18",
            "image": require('../resources/images/cookingoil.jpg')
        },
        {
            "productid": "18",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "18",
            "image": require('../resources/images/greenchilli.jpg')
        },
        {
            "productid": "18",
            "image": require('../resources/images/burgerbun.jpg')
        },
        {
            "productid": "18",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "18",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "18",
            "image": require('../resources/images/Beef.jpg')
        },
        {
            "productid": "19",
            "image": require('../resources/images/greenchilli.jpg')
        },
        {
            "productid": "19",
            "image": require('../resources/images/dough.jpg')
        },
        {
            "productid": "19",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "19",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "19",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "19",
            "image": require('../resources/images/cookingoil.jpg')
        },
        {
            "productid": "19",
            "image": require('../resources/images/pepperoni.jpg')
        },
        {
            "productid": "19",
            "image": require('../resources/images/cheese.jpg')
        },
        {
            "productid": "20",
            "image": require('../resources/images/cheese.jpg')
        },
        {
            "productid": "20",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "20",
            "image": require('../resources/images/greenchilli.jpg')
        },
        {
            "productid": "20",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "20",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "20",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "20",
            "image": require('../resources/images/dough.jpg')
        },
        {
            "productid": "21",
            "image": require('../resources/images/cheese.jpg')
        },
        {
            "productid": "21",
            "image": require('../resources/images/pepperoni.jpg')
        },
        {
            "productid": "21",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "21",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "21",
            "image": require('../resources/images/dough.jpg')
        },
        {
            "productid": "21",
            "image": require('../resources/images/Fajita.jpg')
        },
        {
            "productid": "21",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "22",
            "image": require('../resources/images/cheese.jpg')
        },
        {
            "productid": "22",
            "image": require('../resources/images/pepperoni.jpg')
        },
        {
            "productid": "22",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "22",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "22",
            "image": require('../resources/images/dough.jpg')
        },
        {
            "productid": "22",
            "image": require('../resources/images/veggie.jpg')
        },
        {
            "productid": "23",
            "image": require('../resources/images/Fajita.jpg')
        },
        {
            "productid": "23",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "23",
            "image": require('../resources/images/cheese.jpg')
        },
        {
            "productid": "23",
            "image": require('../resources/images/pepperoni.jpg')
        },
        {
            "productid": "23",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "23",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "23",
            "image": require('../resources/images/dough.jpg')
        },
        {
            "productid": "24",
            "image": require('../resources/images/Fajita.jpg')
        },
        {
            "productid": "24",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "24",
            "image": require('../resources/images/cheese.jpg')
        },
        {
            "productid": "24",
            "image": require('../resources/images/pepperoni.jpg')
        },
        {
            "productid": "24",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "24",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "24",
            "image": require('../resources/images/dough.jpg')
        },
        {
            "productid": "24",
            "image": require('../resources/images/Fajita.jpg')
        },
        {
            "productid": "25",
            "image": require('../resources/images/Bread.jpg')
        },
        {
            "productid": "25",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "25",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "25",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "25",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "25",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "26",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "26",
            "image": require('../resources/images/Bread.jpg')
        },
        {
            "productid": "26",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "26",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "26",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "26",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "27",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "27",
            "image": require('../resources/images/Bread.jpg')
        },
        {
            "productid": "27",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "27",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "27",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "27",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "27",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "28",
            "image": require('../resources/images/Bread.jpg')
        },
        {
            "productid": "28",
            "image": require('../resources/images/tomato.jpg')
        },
        {
            "productid": "28",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "28",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "28",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "28",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "28",
            "image": require('../resources/images/breadcrumbs.jpg')
        },
        {
            "productid": "29",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "29",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "29",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "29",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "29",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "30",
            "image": require('../resources/images/Rollduogh.jpg')
        },
        {
            "productid": "30",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "30",
            "image": require('../resources/images/mayo.jpg')
        },
        {
            "productid": "30",
            "image": require('../resources/images/Beef.jpg')
        },
        {
            "productid": "31",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "31",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "31",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "31",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "31",
            "image": require('../resources/images/breadcrumbs.jpg')
        },
        {
            "productid": "32",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "32",
            "image": require('../resources/images/Rollduogh.jpg')
        },
        {
            "productid": "32",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "32",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "32",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "33",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "33",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "33",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "33",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "33",
            "image": require('../resources/images/Rollduogh.jpg')
        },
        {
            "productid": "34",
            "image": require('../resources/images/Gnocchi.jpg')
        },
        {
            "productid": "34",
            "image": require('../resources/images/greenchilli.jpg')
        },
        {
            "productid": "34",
            "image": require('../resources/images/oliveoil.jpg')
        },
        {
            "productid": "34",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "34",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "35",
            "image": require('../resources/images/Tagliatelle.jpg')
        },
        {
            "productid": "35",
            "image": require('../resources/images/greenchilli.jpg')
        },
        {
            "productid": "35",
            "image": require('../resources/images/oliveoil.jpg')
        },
        {
            "productid": "35",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "35",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "36",
            "image": require('../resources/images/Cavatelli.jpg')
        },
        {
            "productid": "36",
            "image": require('../resources/images/cheese.jpg')
        },
        {
            "productid": "36",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "36",
            "image": require('../resources/images/greenchilli.jpg')
        },
        {
            "productid": "36",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "36",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "37",
            "image": require('../resources/images/Ravioli.jpg')
        },
        {
            "productid": "37",
            "image": require('../resources/images/oliveoil.jpg')
        },
        {
            "productid": "37",
            "image": require('../resources/images/ketchup.jpg')
        },
        {
            "productid": "37",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "37",
            "image": require('../resources/images/cheese.jpg')
        },
        {
            "productid": "37",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "38",
            "image": require('../resources/images/Macaroni.jpg')
        },
        {
            "productid": "38",
            "image": require('../resources/images/greenchilli.jpg')
        },
        {
            "productid": "38",
            "image": require('../resources/images/oliveoil.jpg')
        },
        {
            "productid": "38",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "38",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "39",
            "image": require('../resources/images/Farfalle.jpg')
        },
        {
            "productid": "39",
            "image": require('../resources/images/cheese.jpg')
        },
        {
            "productid": "39",
            "image": require('../resources/images/garammasala.jpg')
        },
        {
            "productid": "39",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "39",
            "image": require('../resources/images/oliveoil.jpg')
        },
        {
            "productid": "39",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "39",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "39",
            "image": require('../resources/images/Fajita.jpg')
        },
        {
            "productid": "40",
            "image": require('../resources/images/Orecchiette.jpg')
        },
        {
            "productid": "40",
            "image": require('../resources/images/cheese.jpg')
        },
        {
            "productid": "40",
            "image": require('../resources/images/garammasala.jpg')
        },
        {
            "productid": "40",
            "image": require('../resources/images/redchill.jpg')
        },
        {
            "productid": "40",
            "image": require('../resources/images/chickenmeat.jpg')
        },
        {
            "productid": "40",
            "image": require('../resources/images/eggs.jpg')
        },
        {
            "productid": "40",
            "image": require('../resources/images/Fajita.jpg')
        },
        {
            "productid": "41",
            "image": require('../resources/images/allberry.jpg')
        },
        {
            "productid": "41",
            "image": require('../resources/images/cream.jpg')
        },
        {
            "productid": "41",
            "image": require('../resources/images/milk.jpg')
        },
        {
            "productid": "41",
            "image": require('../resources/images/shuger.jpg')
        },
        {
            "productid": "42",
            "image": require('../resources/images/cream.jpg')
        },
        {
            "productid": "42",
            "image": require('../resources/images/milk.jpg')
        },
        {
            "productid": "42",
            "image": require('../resources/images/shuger.jpg')
        },
        {
            "productid": "42",
            "image": require('../resources/images/bananan.jpg')
        },
        {
            "productid": "43",
            "image": require('../resources/images/Berry.jpg')
        },
        {
            "productid": "43",
            "image": require('../resources/images/shuger.jpg')
        },
        {
            "productid": "43",
            "image": require('../resources/images/cream.jpg')
        },
        {
            "productid": "43",
            "image": require('../resources/images/milk.jpg')
        },
        {
            "productid": "44",
            "image": require('../resources/images/blueberry.jpg')
        },
        {
            "productid": "44",
            "image": require('../resources/images/shuger.jpg')
        },
        {
            "productid": "44",
            "image": require('../resources/images/cream.jpg')
        },
        {
            "productid": "44",
            "image": require('../resources/images/milk.jpg')
        },
        {
            "productid": "45",
            "image": require('../resources/images/bananan.jpg')
        },
        {
            "productid": "45",
            "image": require('../resources/images/blueberry.jpg')
        },
        {
            "productid": "45",
            "image": require('../resources/images/shuger.jpg')
        },
        {
            "productid": "45",
            "image": require('../resources/images/cream.jpg')
        },
        {
            "productid": "45",
            "image": require('../resources/images/milk.jpg')
        },
        {
            "productid": "46",
            "image": require('../resources/images/Kale.jpg')
        },
        {
            "productid": "46",
            "image": require('../resources/images/shuger.jpg')
        },
        {
            "productid": "46",
            "image": require('../resources/images/cream.jpg')
        },
        {
            "productid": "46",
            "image": require('../resources/images/milk.jpg')
        }
    ],
    "discount": [
        {
            "productid": "42",
            "discountsproductname": "Summer Offer",
            "discount": "20% off",
            "image": require('../resources/images/juice2.png')
        },
        {
            "productid": "43",
            "discountsproductname": "Anniversary Dicount",
            "discount": "25% off",
            "image": require('../resources/images/juice1.png')
        },
        {
            "productid": "44",
            "discountsproductname": "New Year Offer",
            "discount": "50% off",
            "image": require('../resources/images/juice3.png')
        },
        {
            "productid": "45",
            "discountsproductname": "Late Night Discount",
            "discount": "5% off",
            "image": require('../resources/images/juice4.png')
        }
    ]
}