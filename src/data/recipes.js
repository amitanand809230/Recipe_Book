const recipes = [
  {
    id: "1",
    name: "Spaghetti Bolognese",
    image: "/images/Spaghetti.jpeg",
    ingredients: [
      "200g Spaghetti",
      "250g Minced Beef",
      "1 Onion (chopped)",
      "2 Garlic cloves (minced)",
      "1 cup Tomato Sauce",
      "Salt and Pepper to taste",
      "1 tsp Mixed Italian Herbs",
      "Grated Parmesan (optional)",
      "Fresh Basil Leaves (optional)"
    ],
    instructions: [
      "Boil water in a large pot with a pinch of salt.",
      "Add spaghetti and cook according to package instructions (8–10 minutes).",
      "Drain and set aside.",
      "Heat oil in a pan, sauté chopped onions and garlic until golden.",
      "Add minced beef and cook until browned.",
      "Pour in tomato sauce and let it simmer for 10–15 minutes.",
      "Season with salt, pepper, and herbs.",
      "Mix the cooked spaghetti into the sauce until well coated.",
      "Serve hot topped with Parmesan and fresh basil if desired."
    ]
  },
  {
    id: "2",
    name: "Paneer Butter Masala",
    image: "/images/paneer.jpeg",
    ingredients: [
      "200g Paneer (cubed)",
      "2 tbsp Butter",
      "3 Tomatoes (pureed)",
      "1 Onion (chopped)",
      "1 tbsp Ginger-Garlic Paste",
      "1/2 cup Fresh Cream",
      "1 tsp Garam Masala",
      "1 tsp Red Chili Powder",
      "1 tsp Coriander Powder",
      "Salt to taste",
      "Fresh Coriander (for garnish)"
    ],
    instructions: [
      "Heat butter in a pan and sauté onions until golden.",
      "Add ginger-garlic paste and cook until raw smell disappears.",
      "Add tomato puree and cook until oil separates.",
      "Add chili powder, coriander powder, garam masala, and salt.",
      "Add paneer cubes and gently stir.",
      "Pour in fresh cream and simmer for 5 minutes.",
      "Garnish with coriander and serve hot with naan or rice."
    ]
  },
  {
    id: "3",
    name: "Vegetable Pulao",
    image: "/images/pulao.jpg",
    ingredients: [
      "1 cup Basmati Rice",
      "1 cup Mixed Vegetables (carrot, beans, peas, potato)",
      "1 Onion (sliced)",
      "1 tsp Ginger-Garlic Paste",
      "1 Bay Leaf",
      "1 Cinnamon Stick",
      "2–3 Cloves",
      "2–3 Cardamoms",
      "1 tsp Cumin Seeds",
      "2 tbsp Oil or Ghee",
      "Salt to taste",
      "2 cups Water"
    ],
    instructions: [
      "Rinse and soak basmati rice for 20–30 minutes.",
      "Heat oil/ghee in a pot and add cumin seeds and whole spices.",
      "Add sliced onions and sauté until golden brown.",
      "Add ginger-garlic paste and sauté for 1 minute.",
      "Add mixed vegetables and cook for 2–3 minutes.",
      "Add drained rice and stir gently.",
      "Add 2 cups of water and salt to taste.",
      "Cover and cook on low heat until rice is done and fluffy.",
      "Let it rest for 5 minutes before serving."
    ]
  },
  {
    id: "4",
    name: "Chicken Curry",
    image: "/images/chicken-curry.jpeg",
    ingredients: [
      "500g Chicken (bone-in or boneless)",
      "2 Onions (finely chopped)",
      "2 Tomatoes (chopped)",
      "1 tbsp Ginger-Garlic Paste",
      "2 tbsp Oil",
      "1 Bay Leaf",
      "1 small Cinnamon Stick",
      "2 Cloves",
      "2 Green Cardamoms",
      "1 tsp Turmeric Powder",
      "1 tsp Red Chili Powder",
      "1 tsp Coriander Powder",
      "Salt to taste",
      "1 cup Water",
      "Fresh Coriander (for garnish)"
    ],
    instructions: [
      "Clean and cut chicken into pieces.",
      "Heat oil in a pan and add whole spices (bay leaf, cinnamon, cloves, cardamom).",
      "Add chopped onions and sauté until golden brown.",
      "Add ginger-garlic paste and cook for 1–2 minutes.",
      "Add chopped tomatoes and cook until soft and oil separates.",
      "Add turmeric, chili powder, coriander powder, and salt. Mix well.",
      "Add chicken and cook on high heat for 4–5 minutes.",
      "Add 1 cup of water, cover, and cook until chicken is tender (15–20 minutes).",
      "Garnish with fresh coriander and serve hot with rice or roti."
    ]
  },
  {
  id: "5",
  name: "Aloo Paratha",
  image: "/images/aloo-paratha.jpeg",
  ingredients: [
    "2 cups Wheat Flour",
    "3 Potatoes (boiled and mashed)",
    "1 tsp Cumin Seeds",
    "1 tsp Garam Masala",
    "1 tsp Red Chili Powder",
    "1 tsp Amchur (dry mango powder)",
    "2 tbsp Coriander Leaves (chopped)",
    "Salt to taste",
    "Butter or Ghee for cooking",
    "Water (for kneading dough)"
  ],
  instructions: [
    "Knead a soft dough using wheat flour, water, and a pinch of salt. Set aside.",
    "In a bowl, mix mashed potatoes with cumin seeds, red chili powder, garam masala, amchur, coriander leaves, and salt.",
    "Divide the dough and potato filling into equal portions.",
    "Roll out a dough ball, place stuffing in the center, and seal the edges.",
    "Gently roll into a flat paratha.",
    "Heat a tawa and cook the paratha on both sides with butter or ghee until golden brown.",
    "Serve hot with curd, pickle, or butter."
  ]
},
{
  id: "6",
  name: "Chole Bhature",
  image: "/images/chole-bhature.jpg",
  ingredients: [
    "1 cup Chickpeas (soaked overnight)",
    "2 Onions (chopped)",
    "2 Tomatoes (chopped)",
    "1 tbsp Ginger-Garlic Paste",
    "1 tsp Cumin Seeds",
    "1 tsp Garam Masala",
    "1 tsp Chole Masala",
    "1/2 tsp Turmeric",
    "Salt to taste",
    "Oil for cooking",
    "2 cups All-purpose Flour (Maida)",
    "2 tbsp Yogurt",
    "1/2 tsp Baking Soda",
    "Water to knead dough",
    "Oil for deep frying"
  ],
  instructions: [
    "Pressure cook chickpeas with salt until soft.",
    "Heat oil in a pan, sauté cumin seeds, onions, and ginger-garlic paste.",
    "Add tomatoes and cook till mushy. Add turmeric, chole masala, garam masala.",
    "Add boiled chickpeas, simmer for 10 minutes. Garnish with coriander.",
    "For bhature, mix flour, yogurt, baking soda, and water to knead soft dough.",
    "Rest dough for 1 hour. Divide and roll into discs.",
    "Deep fry in hot oil until golden and puffed.",
    "Serve hot chole with fluffy bhature."
  ]
},


{
  id: "7",
  name: "Masala Dosa",
  image: "/images/masala-dosa.jpeg",
  ingredients: [
    "2 cups Dosa Batter",
    "2 Potatoes (boiled and mashed)",
    "1 Onion (sliced)",
    "1 Green Chili (chopped)",
    "1/2 tsp Mustard Seeds",
    "1/2 tsp Turmeric Powder",
    "1 tbsp Oil",
    "Salt to taste",
    "Curry Leaves"
  ],
  instructions: [
    "Heat oil in a pan, add mustard seeds and let them splutter.",
    "Add onions, green chilies, and curry leaves. Sauté until soft.",
    "Add turmeric and mashed potatoes. Mix well and cook for 2 minutes.",
    "Heat a tawa, spread dosa batter thinly, drizzle oil.",
    "Cook till crisp. Place potato masala in center and fold dosa.",
    "Serve hot with coconut chutney and sambar."
  ]
},

  {
  id: "8",
  name: "Rajma Chawal",
  image: "/images/rajma-chawal.jpeg",
  ingredients: [
    "1 cup Kidney Beans (Rajma), soaked overnight",
    "2 Onions (chopped)",
    "2 Tomatoes (pureed)",
    "1 tbsp Ginger-Garlic Paste",
    "1 tsp Cumin Seeds",
    "1 tsp Coriander Powder",
    "1 tsp Red Chili Powder",
    "1/2 tsp Turmeric Powder",
    "1 tsp Garam Masala",
    "Salt to taste",
    "2 tbsp Oil",
    "Cooked Basmati Rice"
  ],
  instructions: [
    "Pressure cook soaked rajma with water and salt until soft.",
    "Heat oil in a pan, sauté cumin, onions, and ginger-garlic paste.",
    "Add tomato puree, spices, and cook until oil separates.",
    "Add cooked rajma and simmer for 15 minutes.",
    "Garnish with coriander and serve hot with steamed rice."
  ]
},
  {
  id: "9",
  name: "Idli Sambar",
  image: "/images/idli-sambar.jpeg",
  ingredients: [
    "2 cups Idli Batter",
    "1/2 cup Toor Dal",
    "1 Onion (sliced)",
    "1 Tomato (chopped)",
    "1/2 cup Mixed Vegetables (carrot, drumstick, etc.)",
    "1 tsp Mustard Seeds",
    "1 tsp Sambar Powder",
    "1/4 tsp Turmeric",
    "Curry Leaves",
    "Salt to taste",
    "Oil"
  ],
  instructions: [
    "Pour idli batter into greased idli molds and steam for 10–12 minutes.",
    "Boil toor dal with turmeric until soft and mash it.",
    "In a pan, heat oil, add mustard seeds, curry leaves, onions, and sauté.",
    "Add tomatoes and vegetables. Cook for a few minutes.",
    "Add sambar powder, salt, and water. Simmer until veggies soften.",
    "Add mashed dal and bring to a boil.",
    "Serve hot sambar with soft idlis."
  ]
},
  {
  id: "10",
  name: "Pav Bhaji",
  image: "/images/pav-bhaji.jpeg",
  ingredients: [
    "4 Pav Buns",
    "2 Potatoes (boiled)",
    "1/2 cup Cauliflower (boiled)",
    "1/4 cup Peas",
    "1 Onion (chopped)",
    "2 Tomatoes (chopped)",
    "1 Capsicum (chopped)",
    "1 tbsp Ginger-Garlic Paste",
    "2 tbsp Pav Bhaji Masala",
    "Salt and Butter to taste",
    "Lemon and Coriander for garnish"
  ],
  instructions: [
    "Boil and mash potatoes, peas, and cauliflower.",
    "Heat butter in a pan, sauté onions and ginger-garlic paste.",
    "Add tomatoes and capsicum. Cook until soft.",
    "Add mashed veggies, pav bhaji masala, salt, and some water.",
    "Mash everything together and cook until well-blended.",
    "Toast pav buns with butter on a tawa.",
    "Serve bhaji with buttered pav, chopped onions, lemon, and coriander."
  ]
},
  
  {
    "id": "11",
    "name": "Egg Fried Rice",
    "image": "/images/egg-fried-rice.jpeg",
    "ingredients": [
      "2 cups cooked rice",
      "2 eggs",
      "1/2 cup chopped carrots",
      "1/4 cup chopped capsicum",
      "1/4 cup chopped beans",
      "2 tablespoons soy sauce",
      "1 tablespoon oil",
      "Salt and pepper to taste",
      "Spring onions for garnish"
    ],
    "instructions": [
      "Heat oil in a wok and scramble the eggs. Set aside.",
      "Add vegetables and stir-fry for 2–3 minutes.",
      "Add the cooked rice and mix well.",
      "Pour in soy sauce, salt, and pepper.",
      "Add scrambled eggs and stir everything together.",
      "Garnish with chopped spring onions and serve hot."
    ]
  },
  {
    "id": "12",
    "name": "Matar Paneer",
    "image": "/images/matar-paneer.jpeg",
    "ingredients": [
      "200g paneer (cubed)",
      "1 cup green peas",
      "2 tomatoes (pureed)",
      "1 onion (finely chopped)",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon cumin seeds",
      "1/2 teaspoon turmeric",
      "1 teaspoon red chili powder",
      "1 teaspoon garam masala",
      "Salt to taste",
      "2 tablespoons oil"
    ],
    "instructions": [
      "Heat oil in a pan and add cumin seeds.",
      "Add onions and sauté until golden.",
      "Add ginger-garlic paste and cook for a minute.",
      "Add tomato puree, turmeric, chili powder, and salt. Cook till oil separates.",
      "Add green peas and cook for 5 minutes.",
      "Add paneer cubes and garam masala. Mix well.",
      "Simmer for a few minutes and serve hot."
    ]
  },
  {
    "id": "13",
    "name": "Hyderabadi Biryani",
    "image": "/images/biryani.jpeg",
    "ingredients": [
      "2 cups basmati rice",
      "500g chicken/mutton",
      "1/2 cup yogurt",
      "2 onions (fried)",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon biryani masala",
      "1/2 teaspoon turmeric",
      "Few saffron strands soaked in milk",
      "Fresh coriander and mint leaves",
      "Salt to taste",
      "Ghee or oil"
    ],
    "instructions": [
      "Marinate chicken/mutton with yogurt, spices, and fried onions for 1 hour.",
      "Partially cook rice with whole spices and salt.",
      "In a heavy pan, layer marinated meat and rice alternately.",
      "Top with saffron milk, ghee, and herbs.",
      "Cover tightly and cook on dum (low flame) for 25–30 minutes.",
      "Serve hot with raita or salan."
    ]
  },
  {
    "id": "14",
    "name": "Kadai Mushroom",
    "image": "/images/kadai-mushroom.jpeg",
    "ingredients": [
      "200g mushrooms (sliced)",
      "1 capsicum (chopped)",
      "2 tomatoes (pureed)",
      "1 onion (chopped)",
      "1 teaspoon ginger-garlic paste",
      "1/2 teaspoon cumin seeds",
      "1 teaspoon coriander powder",
      "1/2 teaspoon red chili powder",
      "1/2 teaspoon garam masala",
      "Salt to taste",
      "2 tablespoons oil"
    ],
    "instructions": [
      "Heat oil in a pan, add cumin and chopped onions. Sauté till translucent.",
      "Add ginger-garlic paste and cook briefly.",
      "Add tomato puree and spices. Cook until oil separates.",
      "Add mushrooms and capsicum. Stir-fry for 5–7 minutes.",
      "Sprinkle garam masala and cook for 2 more minutes.",
      "Serve hot with roti or naan."
    ]
  },
  {
    "id": "15",
    "name": "Tandoori Chicken",
    "image": "/images/tandoori-chicken.jpeg",
    "ingredients": [
      "500g chicken (with skin removed)",
      "1/2 cup yogurt",
      "1 tablespoon lemon juice",
      "1 tablespoon tandoori masala",
      "1 teaspoon red chili powder",
      "1 teaspoon ginger-garlic paste",
      "Salt to taste",
      "Butter for basting"
    ],
    "instructions": [
      "Make deep cuts on chicken and marinate with lemon juice, salt, and spices for 30 mins.",
      "Add yogurt and let it marinate for 4–6 hours or overnight.",
      "Preheat oven or grill to 200°C.",
      "Place chicken on tray, baste with butter.",
      "Cook for 25–30 minutes until charred and cooked through.",
      "Serve with mint chutney and onion rings."
    ]
  },
  {
    "id": "16",
    "name": "Dal Makhani",
    "image": "/images/dal-makhani.jpeg",
    "ingredients": [
      "1 cup whole black lentils (sabut urad dal)",
      "1/4 cup red kidney beans (rajma)",
      "1 onion (chopped)",
      "2 tomatoes (pureed)",
      "1 tablespoon ginger-garlic paste",
      "1/2 cup cream",
      "2 tablespoons butter",
      "1/2 teaspoon garam masala",
      "Salt to taste",
      "Water as needed"
    ],
    "instructions": [
      "Soak lentils and beans overnight. Pressure cook till soft.",
      "Heat butter, sauté onions, then add ginger-garlic paste.",
      "Add tomato puree and cook till oil separates.",
      "Add cooked dal and beans. Simmer for 20–30 minutes.",
      "Add cream, garam masala, and simmer 10 more minutes.",
      "Serve hot with naan or rice."
    ]
  },
  {
    "id": "17",
    "name": "Hakka Noodles",
    "image": "/images/hakka-noodles.jpeg",
    "ingredients": [
      "200g noodles",
      "1/2 cup shredded cabbage",
      "1/2 cup julienned carrots",
      "1/2 capsicum (sliced)",
      "2 tablespoons soy sauce",
      "1 tablespoon chili sauce",
      "1 teaspoon vinegar",
      "2 garlic cloves (minced)",
      "2 tablespoons oil",
      "Salt and pepper to taste"
    ],
    "instructions": [
      "Boil noodles, rinse in cold water, and toss in a little oil.",
      "Heat oil in a wok and add garlic. Stir-fry briefly.",
      "Add vegetables and stir-fry on high heat.",
      "Add sauces, vinegar, salt, and pepper.",
      "Add noodles and toss everything well.",
      "Serve hot."
    ]
  },
  {
    "id": "18",
    "name": "Palak Paneer",
    "image": "/images/palak-paneer.jpeg",
    "ingredients": [
      "200g paneer (cubed)",
      "2 cups spinach leaves",
      "1 onion (chopped)",
      "1 tomato (chopped)",
      "1 teaspoon ginger-garlic paste",
      "1/2 teaspoon cumin seeds",
      "1/2 teaspoon garam masala",
      "1 tablespoon cream",
      "Salt to taste",
      "1 tablespoon oil"
    ],
    "instructions": [
      "Blanch spinach, cool, and puree.",
      "Heat oil, add cumin and sauté onion.",
      "Add ginger-garlic paste and tomato. Cook till soft.",
      "Add spinach puree and salt. Simmer for 5 minutes.",
      "Add paneer and garam masala. Cook 3 more minutes.",
      "Top with cream and serve."
    ]
  },
  {
    "id": "19",
    "name": "Stuffed Capsicum",
    "image": "/images/capsicum.jpeg",
    "ingredients": [
      "4 medium capsicums (tops removed)",
      "2 boiled potatoes (mashed)",
      "1 onion (chopped)",
      "1 green chili (chopped)",
      "1/2 teaspoon garam masala",
      "Salt to taste",
      "1/4 cup grated cheese",
      "1 tablespoon oil"
    ],
    "instructions": [
      "Mix mashed potatoes with onion, chili, salt, and spices.",
      "Stuff the capsicums with the potato mixture.",
      "Top with grated cheese.",
      "Bake at 180°C for 20–25 minutes or pan-fry covered till soft.",
      "Serve hot."
    ]
  },
  {
    "id": "20",
    "name": "Veg Sandwich",
    "image": "/images/veg-sandwich.jpg",
    "ingredients": [
      "4 slices bread",
      "1 tomato (sliced)",
      "1 cucumber (sliced)",
      "1 boiled potato (sliced)",
      "Butter as needed",
      "Green chutney",
      "Salt and pepper"
    ],
    "instructions": [
      "Spread butter on bread slices.",
      "Apply green chutney on one slice.",
      "Layer with vegetables, sprinkle salt and pepper.",
      "Cover with another slice, grill or serve plain."
    ]
  }

];


export default recipes;
