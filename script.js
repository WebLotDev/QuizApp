// Example dataset for demonstration; in practice, this would be loaded from a server or file.
const questions = [
    { question: "What is the capital of France?", answers: [{ text: "Berlin", correct: false }, { text: "Madrid", correct: false }, { text: "Paris", correct: true }, { text: "Lisbon", correct: false }] },
    { question: "Which planet is known as the Red Planet?", answers: [{ text: "Earth", correct: false }, { text: "Mars", correct: true }, { text: "Jupiter", correct: false }, { text: "Saturn", correct: false }] },
    { question: "What is the largest ocean on Earth?", answers: [{ text: "Atlantic Ocean", correct: false }, { text: "Indian Ocean", correct: false }, { text: "Pacific Ocean", correct: true }, { text: "Arctic Ocean", correct: false }] },
    { question: "Who wrote 'To Kill a Mockingbird'?", answers: [{ text: "Harper Lee", correct: true }, { text: "J.K. Rowling", correct: false }, { text: "Ernest Hemingway", correct: false }, { text: "Mark Twain", correct: false }] },
    { question: "What is the chemical symbol for gold?", answers: [{ text: "Au", correct: true }, { text: "Ag", correct: false }, { text: "Pb", correct: false }, { text: "Fe", correct: false }] },
    { question: "In which year did the Titanic sink?", answers: [{ text: "1912", correct: true }, { text: "1905", correct: false }, { text: "1920", correct: false }, { text: "1930", correct: false }] },
    { question: "Which planet is closest to the Sun?", answers: [{ text: "Venus", correct: false }, { text: "Earth", correct: false }, { text: "Mercury", correct: true }, { text: "Mars", correct: false }] },
    { question: "What is the hardest natural substance on Earth?", answers: [{ text: "Gold", correct: false }, { text: "Iron", correct: false }, { text: "Diamond", correct: true }, { text: "Platinum", correct: false }] },
    { question: "Who painted the Mona Lisa?", answers: [{ text: "Leonardo da Vinci", correct: true }, { text: "Vincent van Gogh", correct: false }, { text: "Pablo Picasso", correct: false }, { text: "Claude Monet", correct: false }] },
    { question: "What is the capital of Japan?", answers: [{ text: "Tokyo", correct: true }, { text: "Kyoto", correct: false }, { text: "Osaka", correct: false }, { text: "Nagoya", correct: false }] },
    { question: "Which element has the atomic number 1?", answers: [{ text: "Helium", correct: false }, { text: "Hydrogen", correct: true }, { text: "Oxygen", correct: false }, { text: "Carbon", correct: false }] },
    { question: "Who developed the theory of relativity?", answers: [{ text: "Isaac Newton", correct: false }, { text: "Albert Einstein", correct: true }, { text: "Niels Bohr", correct: false }, { text: "Galileo Galilei", correct: false }] },
    { question: "What is the largest continent by area?", answers: [{ text: "Africa", correct: false }, { text: "Asia", correct: true }, { text: "Europe", correct: false }, { text: "North America", correct: false }] },
    { question: "What is the smallest unit of life?", answers: [{ text: "Tissue", correct: false }, { text: "Organ", correct: false }, { text: "Cell", correct: true }, { text: "Organism", correct: false }] },
    { question: "Which gas do plants use for photosynthesis?", answers: [{ text: "Oxygen", correct: false }, { text: "Nitrogen", correct: false }, { text: "Carbon Dioxide", correct: true }, { text: "Hydrogen", correct: false }] },
    { question: "Who was the first President of the United States?", answers: [{ text: "Thomas Jefferson", correct: false }, { text: "George Washington", correct: true }, { text: "John Adams", correct: false }, { text: "James Madison", correct: false }] },
    { question: "What is the currency of Japan?", answers: [{ text: "Yuan", correct: false }, { text: "Won", correct: false }, { text: "Yen", correct: true }, { text: "Ringgit", correct: false }] },
    { question: "In what year did World War II end?", answers: [{ text: "1942", correct: false }, { text: "1944", correct: false }, { text: "1945", correct: true }, { text: "1946", correct: false }] },
    { question: "What is the capital of Australia?", answers: [{ text: "Sydney", correct: false }, { text: "Melbourne", correct: false }, { text: "Canberra", correct: true }, { text: "Brisbane", correct: false }] },
    { question: "Who discovered penicillin?", answers: [{ text: "Alexander Fleming", correct: true }, { text: "Marie Curie", correct: false }, { text: "Louis Pasteur", correct: false }, { text: "Edward Jenner", correct: false }] },
    { question: "What is the largest planet in our solar system?", answers: [{ text: "Earth", correct: false }, { text: "Jupiter", correct: true }, { text: "Saturn", correct: false }, { text: "Uranus", correct: false }] },
    { question: "Which country is known as the Land of the Rising Sun?", answers: [{ text: "China", correct: false }, { text: "Japan", correct: true }, { text: "South Korea", correct: false }, { text: "Thailand", correct: false }] },
    { question: "What is the boiling point of water?", answers: [{ text: "90°C", correct: false }, { text: "100°C", correct: true }, { text: "110°C", correct: false }, { text: "120°C", correct: false }] },
    { question: "What is the chemical formula for water?", answers: [{ text: "H2O", correct: true }, { text: "CO2", correct: false }, { text: "NaCl", correct: false }, { text: "O2", correct: false }] },
    { question: "Which planet is known for its rings?", answers: [{ text: "Mars", correct: false }, { text: "Saturn", correct: true }, { text: "Neptune", correct: false }, { text: "Uranus", correct: false }] },
    { question: "What is the largest mammal?", answers: [{ text: "Elephant", correct: false }, { text: "Blue Whale", correct: true }, { text: "Giraffe", correct: false }, { text: "Hippopotamus", correct: false }] },
    { question: "Who is the author of 'Harry Potter'?", answers: [{ text: "J.K. Rowling", correct: true }, { text: "J.R.R. Tolkien", correct: false }, { text: "George R.R. Martin", correct: false }, { text: "C.S. Lewis", correct: false }] },
    { question: "What is the hardest natural substance?", answers: [{ text: "Gold", correct: false }, { text: "Diamond", correct: true }, { text: "Iron", correct: false }, { text: "Platinum", correct: false }] },
    { question: "Which ocean is the smallest?", answers: [{ text: "Atlantic", correct: false }, { text: "Indian", correct: false }, { text: "Arctic", correct: true }, { text: "Pacific", correct: false }] },
    { question: "Who was the first man to walk on the moon?", answers: [{ text: "Neil Armstrong", correct: true }, { text: "Buzz Aldrin", correct: false }, { text: "Yuri Gagarin", correct: false }, { text: "Michael Collins", correct: false }] },
    { question: "What is the capital of Canada?", answers: [{ text: "Toronto", correct: false }, { text: "Vancouver", correct: false }, { text: "Ottawa", correct: true }, { text: "Montreal", correct: false }] },
    { question: "What is the longest river in the world?", answers: [{ text: "Amazon", correct: true }, { text: "Nile", correct: false }, { text: "Yangtze", correct: false }, { text: "Mississippi", correct: false }] },
    { question: "Which gas is most abundant in Earth's atmosphere?", answers: [{ text: "Oxygen", correct: false }, { text: "Nitrogen", correct: true }, { text: "Carbon Dioxide", correct: false }, { text: "Hydrogen", correct: false }] },
    { question: "In what year did the Berlin Wall fall?", answers: [{ text: "1987", correct: false }, { text: "1988", correct: false }, { text: "1989", correct: true }, { text: "1990", correct: false }] },
    { question: "What is the smallest country in the world?", answers: [{ text: "Monaco", correct: false }, { text: "Vatican City", correct: true }, { text: "San Marino", correct: false }, { text: "Liechtenstein", correct: false }] },
    { question: "Who painted 'The Starry Night'?", answers: [{ text: "Vincent van Gogh", correct: true }, { text: "Claude Monet", correct: false }, { text: "Pablo Picasso", correct: false }, { text: "Paul Cézanne", correct: false }] },
    { question: "What is the capital of Italy?", answers: [{ text: "Rome", correct: true }, { text: "Florence", correct: false }, { text: "Venice", correct: false }, { text: "Milan", correct: false }] },
    { question: "What element does 'O' represent on the periodic table?", answers: [{ text: "Osmium", correct: false }, { text: "Oxygen", correct: true }, { text: "Oganesson", correct: false }, { text: "Oganesson", correct: false }] },
    { question: "Who was the 16th President of the United States?", answers: [{ text: "Abraham Lincoln", correct: true }, { text: "Andrew Johnson", correct: false }, { text: "Ulysses S. Grant", correct: false }, { text: "Theodore Roosevelt", correct: false }] },
    { question: "What is the capital of Germany?", answers: [{ text: "Munich", correct: false }, { text: "Berlin", correct: true }, { text: "Frankfurt", correct: false }, { text: "Hamburg", correct: false }] },
    { question: "Which country is known for the Eiffel Tower?", answers: [{ text: "France", correct: true }, { text: "Italy", correct: false }, { text: "Spain", correct: false }, { text: "Germany", correct: false }] },
    { question: "What is the main ingredient in guacamole?", answers: [{ text: "Tomato", correct: false }, { text: "Avocado", correct: true }, { text: "Pepper", correct: false }, { text: "Onion", correct: false }] },
    { question: "What is the chemical symbol for silver?", answers: [{ text: "Si", correct: false }, { text: "S", correct: false }, { text: "Ag", correct: true }, { text: "Au", correct: false }] },
    { question: "Which country is known as the Land of the Long White Cloud?", answers: [{ text: "Australia", correct: false }, { text: "New Zealand", correct: true }, { text: "Fiji", correct: false }, { text: "Samoa", correct: false }] },
    { question: "What is the primary language spoken in Brazil?", answers: [{ text: "Spanish", correct: false }, { text: "Portuguese", correct: true }, { text: "English", correct: false }, { text: "French", correct: false }] },
    { question: "Which is the smallest bone in the human body?", answers: [{ text: "Stapes", correct: true }, { text: "Femur", correct: false }, { text: "Humerus", correct: false }, { text: "Radius", correct: false }] },
    { question: "What is the capital of Egypt?", answers: [{ text: "Cairo", correct: true }, { text: "Alexandria", correct: false }, { text: "Giza", correct: false }, { text: "Luxor", correct: false }] },
    { question: "Who wrote 'Pride and Prejudice'?", answers: [{ text: "Jane Austen", correct: true }, { text: "Charlotte Brontë", correct: false }, { text: "Emily Dickinson", correct: false }, { text: "Mary Shelley", correct: false }] },
    { question: "Which element has the symbol 'Na'?", answers: [{ text: "Neon", correct: false }, { text: "Sodium", correct: true }, { text: "Nickel", correct: false }, { text: "Nitrogen", correct: false }] },
    { question: "What is the largest island in the world?", answers: [{ text: "Australia", correct: false }, { text: "Greenland", correct: true }, { text: "New Guinea", correct: false }, { text: "Borneo", correct: false }] },
    { question: "Who is known as the Father of Computers?", answers: [{ text: "Alan Turing", correct: false }, { text: "Charles Babbage", correct: true }, { text: "Bill Gates", correct: false }, { text: "Steve Jobs", correct: false }] },
    { question: "What is the main ingredient in traditional Japanese miso soup?", answers: [{ text: "Seaweed", correct: false }, { text: "Tofu", correct: false }, { text: "Miso", correct: true }, { text: "Rice", correct: false }] },
    { question: "Which famous scientist developed the laws of motion?", answers: [{ text: "Isaac Newton", correct: true }, { text: "Albert Einstein", correct: false }, { text: "Galileo Galilei", correct: false }, { text: "Nikola Tesla", correct: false }] },
    { question: "What is the largest country in the world by land area?", answers: [{ text: "United States", correct: false }, { text: "China", correct: false }, { text: "Canada", correct: false }, { text: "Russia", correct: true }] },
    { question: "What is the freezing point of water in Celsius?", answers: [{ text: "0°C", correct: true }, { text: "32°C", correct: false }, { text: "100°C", correct: false }, { text: "-10°C", correct: false }] },
    { question: "Which planet is known for having the most moons?", answers: [{ text: "Jupiter", correct: true }, { text: "Saturn", correct: false }, { text: "Uranus", correct: false }, { text: "Neptune", correct: false }] },
    { question: "What is the longest river in Africa?", answers: [{ text: "Nile", correct: true }, { text: "Congo", correct: false }, { text: "Zambezi", correct: false }, { text: "Niger", correct: false }] },
    { question: "Who was the 44th President of the United States?", answers: [{ text: "George W. Bush", correct: false }, { text: "Barack Obama", correct: true }, { text: "Donald Trump", correct: false }, { text: "Joe Biden", correct: false }] },
    { question: "What is the smallest unit of life?", answers: [{ text: "Cell", correct: true }, { text: "Tissue", correct: false }, { text: "Organ", correct: false }, { text: "Organism", correct: false }] },
    { question: "What gas do humans breathe in to live?", answers: [{ text: "Oxygen", correct: true }, { text: "Carbon Dioxide", correct: false }, { text: "Nitrogen", correct: false }, { text: "Hydrogen", correct: false }] },
    { question: "Which instrument measures temperature?", answers: [{ text: "Barometer", correct: false }, { text: "Hygrometer", correct: false }, { text: "Thermometer", correct: true }, { text: "Altimeter", correct: false }] },
    { question: "What is the capital of Spain?", answers: [{ text: "Barcelona", correct: false }, { text: "Madrid", correct: true }, { text: "Seville", correct: false }, { text: "Valencia", correct: false }] },
    { question: "Which animal is known as the 'King of the Jungle'?", answers: [{ text: "Lion", correct: true }, { text: "Tiger", correct: false }, { text: "Elephant", correct: false }, { text: "Bear", correct: false }] },
    { question: "What is the capital of Thailand?", answers: [{ text: "Bangkok", correct: true }, { text: "Chiang Mai", correct: false }, { text: "Phuket", correct: false }, { text: "Krabi", correct: false }] },
    { question: "What is the primary color of the sun?", answers: [{ text: "Red", correct: false }, { text: "Yellow", correct: true }, { text: "Blue", correct: false }, { text: "Green", correct: false }] },
    { question: "Who is known as the 'Father of the Nation' in India?", answers: [{ text: "Jawaharlal Nehru", correct: false }, { text: "Mahatma Gandhi", correct: true }, { text: "Subhas Chandra Bose", correct: false }, { text: "Bhagat Singh", correct: false }] },
    { question: "Which famous landmark is located in Paris?", answers: [{ text: "Statue of Liberty", correct: false }, { text: "Eiffel Tower", correct: true }, { text: "Big Ben", correct: false }, { text: "Colosseum", correct: false }] },
    { question: "What is the main source of energy for the Earth?", answers: [{ text: "Moon", correct: false }, { text: "Sun", correct: true }, { text: "Wind", correct: false }, { text: "Geothermal", correct: false }] },
    { question: "What is the boiling point of water in Fahrenheit?", answers: [{ text: "100°F", correct: false }, { text: "180°F", correct: false }, { text: "212°F", correct: true }, { text: "300°F", correct: false }] },
    { question: "Which famous scientist formulated the laws of motion?", answers: [{ text: "Isaac Newton", correct: true }, { text: "Albert Einstein", correct: false }, { text: "Galileo Galilei", correct: false }, { text: "Niels Bohr", correct: false }] },
    { question: "What is the primary function of red blood cells?", answers: [{ text: "Fight infection", correct: false }, { text: "Transport oxygen", correct: true }, { text: "Produce hormones", correct: false }, { text: "Digest food", correct: false }] },
    { question: "Which ocean is located on the west coast of the United States?", answers: [{ text: "Atlantic Ocean", correct: false }, { text: "Pacific Ocean", correct: true }, { text: "Indian Ocean", correct: false }, { text: "Arctic Ocean", correct: false }] },
    { question: "What is the currency of the United Kingdom?", answers: [{ text: "Dollar", correct: false }, { text: "Euro", correct: false }, { text: "Pound Sterling", correct: true }, { text: "Yen", correct: false }] },
    { question: "What is the largest desert in the world?", answers: [{ text: "Sahara Desert", correct: true }, { text: "Arabian Desert", correct: false }, { text: "Gobi Desert", correct: false }, { text: "Antarctic Desert", correct: false }] },
    { question: "What is the capital of Brazil?", answers: [{ text: "Sao Paulo", correct: false }, { text: "Rio de Janeiro", correct: false }, { text: "Brasilia", correct: true }, { text: "Salvador", correct: false }] },
    { question: "Who wrote the play 'Romeo and Juliet'?", answers: [{ text: "William Shakespeare", correct: true }, { text: "George Bernard Shaw", correct: false }, { text: "Christopher Marlowe", correct: false }, { text: "Tennessee Williams", correct: false }] },
    { question: "What is the smallest planet in our solar system?", answers: [{ text: "Mercury", correct: true }, { text: "Mars", correct: false }, { text: "Venus", correct: false }, { text: "Pluto", correct: false }] },
    { question: "What is the name of the galaxy that contains our solar system?", answers: [{ text: "Andromeda", correct: false }, { text: "Milky Way", correct: true }, { text: "Triangulum", correct: false }, { text: "Whirlpool", correct: false }] },
    { question: "Who was the first woman to win a Nobel Prize?", answers: [{ text: "Marie Curie", correct: true }, { text: "Rosalind Franklin", correct: false }, { text: "Ada Lovelace", correct: false }, { text: "Jane Goodall", correct: false }] },
    { question: "What is the largest land animal?", answers: [{ text: "Elephant", correct: true }, { text: "Hippopotamus", correct: false }, { text: "Giraffe", correct: false }, { text: "Rhinoceros", correct: false }] },
    { question: "Who painted 'The Last Supper'?", answers: [{ text: "Leonardo da Vinci", correct: true }, { text: "Michelangelo", correct: false }, { text: "Raphael", correct: false }, { text: "Caravaggio", correct: false }] },
    { question: "What is the chemical symbol for potassium?", answers: [{ text: "P", correct: false }, { text: "K", correct: true }, { text: "Po", correct: false }, { text: "Pt", correct: false }] },
    { question: "Which planet is known for its Great Red Spot?", answers: [{ text: "Jupiter", correct: true }, { text: "Saturn", correct: false }, { text: "Neptune", correct: false }, { text: "Uranus", correct: false }] },
    { question: "What is the name of the first manned mission to the moon?", answers: [{ text: "Apollo 11", correct: true }, { text: "Apollo 12", correct: false }, { text: "Apollo 13", correct: false }, { text: "Apollo 14", correct: false }] },
    { question: "What is the chemical formula for table salt?", answers: [{ text: "NaCl", correct: true }, { text: "KCl", correct: false }, { text: "CaCl2", correct: false }, { text: "MgCl2", correct: false }] },
    { question: "Who is considered the founder of modern physics?", answers: [{ text: "Albert Einstein", correct: true }, { text: "Isaac Newton", correct: false }, { text: "Niels Bohr", correct: false }, { text: "Max Planck", correct: false }] },
    { question: "What is the capital of South Korea?", answers: [{ text: "Seoul", correct: true }, { text: "Busan", correct: false }, { text: "Incheon", correct: false }, { text: "Gwangju", correct: false }] },
    { question: "Which planet is known for having the most rings?", answers: [{ text: "Saturn", correct: true }, { text: "Jupiter", correct: false }, { text: "Uranus", correct: false }, { text: "Neptune", correct: false }] },
    { question: "What is the most abundant element in the Earth's crust?", answers: [{ text: "Oxygen", correct: true }, { text: "Silicon", correct: false }, { text: "Aluminum", correct: false }, { text: "Iron", correct: false }] },
    { question: "Who wrote 'The Catcher in the Rye'?", answers: [{ text: "J.D. Salinger", correct: true }, { text: "F. Scott Fitzgerald", correct: false }, { text: "Ernest Hemingway", correct: false }, { text: "John Steinbeck", correct: false }] },
    { question: "What is the capital of Mexico?", answers: [{ text: "Mexico City", correct: true }, { text: "Guadalajara", correct: false }, { text: "Monterrey", correct: false }, { text: "Cancun", correct: false }] },
    { question: "What is the largest volcano in the world?", answers: [{ text: "Mount Everest", correct: false }, { text: "Kilauea", correct: false }, { text: "Mauna Loa", correct: true }, { text: "Mount Fuji", correct: false }] },
    { question: "Who is known for developing the polio vaccine?", answers: [{ text: "Jonas Salk", correct: true }, { text: "Louis Pasteur", correct: false }, { text: "Edward Jenner", correct: false }, { text: "Paul Ehrlich", correct: false }] },
    { question: "What is the capital of South Africa?", answers: [{ text: "Cape Town", correct: false }, { text: "Pretoria", correct: false }, { text: "Johannesburg", correct: false }, { text: "Bloemfontein", correct: false }] },
    { question: "Who is the author of 'The Great Gatsby'?", answers: [{ text: "F. Scott Fitzgerald", correct: true }, { text: "Ernest Hemingway", correct: false }, { text: "John Steinbeck", correct: false }, { text: "William Faulkner", correct: false }] },
    { question: "Which animal is known for its ability to change color?", answers: [{ text: "Chameleon", correct: true }, { text: "Octopus", correct: false }, { text: "Cuttlefish", correct: false }, { text: "Squid", correct: false }] },
    { question: "What is the most common blood type in humans?", answers: [{ text: "A", correct: false }, { text: "B", correct: false }, { text: "AB", correct: false }, { text: "O", correct: true }] },
    { question: "Which country is famous for the Taj Mahal?", answers: [{ text: "India", correct: true }, { text: "Pakistan", correct: false }, { text: "Bangladesh", correct: false }, { text: "Nepal", correct: false }] },
    { question: "What is the name of the longest river in the world?", answers: [{ text: "Amazon", correct: true }, { text: "Nile", correct: false }, { text: "Yangtze", correct: false }, { text: "Mississippi", correct: false }] },
    { question: "Who was the 35th President of the United States?", answers: [{ text: "John F. Kennedy", correct: true }, { text: "Lyndon B. Johnson", correct: false }, { text: "Richard Nixon", correct: false }, { text: "Dwight D. Eisenhower", correct: false }] },
    { question: "What is the smallest planet in our solar system?", answers: [{ text: "Mercury", correct: true }, { text: "Mars", correct: false }, { text: "Venus", correct: false }, { text: "Pluto", correct: false }] },
    { question: "What is the name of the galaxy that contains our solar system?", answers: [{ text: "Andromeda", correct: false }, { text: "Milky Way", correct: true }, { text: "Triangulum", correct: false }, { text: "Whirlpool", correct: false }] },
    { question: "Who was the first woman to win a Nobel Prize?", answers: [{ text: "Marie Curie", correct: true }, { text: "Rosalind Franklin", correct: false }, { text: "Ada Lovelace", correct: false }, { text: "Jane Goodall", correct: false }] },
    { question: "What is the largest land animal?", answers: [{ text: "Elephant", correct: true }, { text: "Hippopotamus", correct: false }, { text: "Giraffe", correct: false }, { text: "Rhinoceros", correct: false }] },
    { question: "Who painted 'The Last Supper'?", answers: [{ text: "Leonardo da Vinci", correct: true }, { text: "Michelangelo", correct: false }, { text: "Raphael", correct: false }, { text: "Caravaggio", correct: false }] },
    { question: "What is the chemical symbol for potassium?", answers: [{ text: "P", correct: false }, { text: "K", correct: true }, { text: "Po", correct: false }, { text: "Pt", correct: false }] },
    { question: "Which planet is known for its Great Red Spot?", answers: [{ text: "Jupiter", correct: true }, { text: "Saturn", correct: false }, { text: "Neptune", correct: false }, { text: "Uranus", correct: false }] },
    { question: "What is the name of the first manned mission to the moon?", answers: [{ text: "Apollo 11", correct: true }, { text: "Apollo 12", correct: false }, { text: "Apollo 13", correct: false }, { text: "Apollo 14", correct: false }] },
    { question: "What is the chemical formula for table salt?", answers: [{ text: "NaCl", correct: true }, { text: "KCl", correct: false }, { text: "CaCl2", correct: false }, { text: "MgCl2", correct: false }] },
    { question: "Who is considered the founder of modern physics?", answers: [{ text: "Albert Einstein", correct: true }, { text: "Isaac Newton", correct: false }, { text: "Niels Bohr", correct: false }, { text: "Max Planck", correct: false }] },
    { question: "What is the capital of South Korea?", answers: [{ text: "Seoul", correct: true }, { text: "Busan", correct: false }, { text: "Incheon", correct: false }, { text: "Gwangju", correct: false }] },
    { question: "Which planet is known for having the most rings?", answers: [{ text: "Saturn", correct: true }, { text: "Jupiter", correct: false }, { text: "Uranus", correct: false }, { text: "Neptune", correct: false }] },
    { question: "What is the most abundant element in the Earth's crust?", answers: [{ text: "Oxygen", correct: true }, { text: "Silicon", correct: false }, { text: "Aluminum", correct: false }, { text: "Iron", correct: false }] },
    { question: "Who wrote 'The Catcher in the Rye'?", answers: [{ text: "J.D. Salinger", correct: true }, { text: "F. Scott Fitzgerald", correct: false }, { text: "Ernest Hemingway", correct: false }, { text: "John Steinbeck", correct: false }] },
    { question: "What is the capital of Mexico?", answers: [{ text: "Mexico City", correct: true }, { text: "Guadalajara", correct: false }, { text: "Monterrey", correct: false }, { text: "Cancun", correct: false }] },
    { question: "What is the largest volcano in the world?", answers: [{ text: "Mount Everest", correct: false }, { text: "Kilauea", correct: false }, { text: "Mauna Loa", correct: true }, { text: "Mount Fuji", correct: false }] },
    { question: "Who is known for developing the polio vaccine?", answers: [{ text: "Jonas Salk", correct: true }, { text: "Louis Pasteur", correct: false }, { text: "Edward Jenner", correct: false }, { text: "Paul Ehrlich", correct: false }] },
    { question: "What is the capital of South Africa?", answers: [{ text: "Cape Town", correct: false }, { text: "Pretoria", correct: false }, { text: "Johannesburg", correct: false }, { text: "Bloemfontein", correct: false }] },
    { question: "Who is the author of 'The Great Gatsby'?", answers: [{ text: "F. Scott Fitzgerald", correct: true }, { text: "Ernest Hemingway", correct: false }, { text: "John Steinbeck", correct: false }, { text: "William Faulkner", correct: false }] },
    { question: "Which animal is known for its ability to change color?", answers: [{ text: "Chameleon", correct: true }, { text: "Octopus", correct: false }, { text: "Cuttlefish", correct: false }, { text: "Squid", correct: false }] },
    { question: "What is the most common blood type in humans?", answers: [{ text: "A", correct: false }, { text: "B", correct: false }, { text: "AB", correct: false }, { text: "O", correct: true }] },
    { question: "Which country is famous for the Taj Mahal?", answers: [{ text: "India", correct: true }, { text: "Pakistan", correct: false }, { text: "Bangladesh", correct: false }, { text: "Nepal", correct: false }] },
    { question: "What is the name of the longest river in the world?", answers: [{ text: "Amazon", correct: true }, { text: "Nile", correct: false }, { text: "Yangtze", correct: false }, { text: "Mississippi", correct: false }] },
    { question: "Who was the 35th President of the United States?", answers: [{ text: "John F. Kennedy", correct: true }, { text: "Lyndon B. Johnson", correct: false }, { text: "Richard Nixon", correct: false }, { text: "Dwight D. Eisenhower", correct: false }] },
] 
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-button");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const restartButton = document.getElementById("restart-button");
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.remove('hidden');
    resultElement.classList.add('hidden');
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('li');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }
  
  function resetState() {
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    nextButton.classList.add('hidden');
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
      score++;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
      button.style.backgroundColor = button.dataset.correct === 'true' ? '#48bb78' : '#e53e3e';
      button.style.pointerEvents = 'none';
    });
    nextButton.classList.remove('hidden');
  }
  
  function showScore() {
    nextButton.classList.add('hidden');
    resultElement.classList.remove('hidden');
    scoreElement.innerText = `${score} / ${questions.length}`;
  }
  
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  
  restartButton.addEventListener('click', startQuiz);
  
  startQuiz();

  
  async function fetchQuestions() {
    const response = await fetch('questions.json'); // Adjust the path as needed
    const data = await response.json();
    return data.questions; // Adjust based on your data structure
  }
  
  fetchQuestions().then(questions => {
    let currentQuestionIndex = 0;
    let score = 0;
  
    // Continue with the existing logic to use `questions` array
  });
  