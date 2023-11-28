
function generateMealPlan() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;

   
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    
    var proteinPreference = document.getElementById('proteinPreference').value;
    var carbPreference = document.getElementById('carbPreference').value;
    var veggiePreference = document.getElementById('veggiePreference').value;

    
    var meals = generateMeals(proteinPreference, carbPreference, veggiePreference);

    
    var mealPlanOutput = '';
    mealPlanOutput += `<h2>Meal Plan for ${name}</h2>`;
    mealPlanOutput += `<p>Email: ${email}</p>`;
    mealPlanOutput += `<p>Goal for the Week: ${goal}</p>`;

    mealPlanOutput += '<table>';
    mealPlanOutput += '<tr><th>Day</th><th>Breakfast</th><th>Snack</th><th>Lunch</th><th>Snack</th><th>Dinner</th></tr>';
    for (var day in meals) {
        mealPlanOutput += `<tr><td>${day}</td>`;
        for (var meal in meals[day]) {
            mealPlanOutput += `<td>${meals[day][meal]}</td>`;
        }
        mealPlanOutput += '</tr>';
    }
    mealPlanOutput += '</table>';

    mealPlanOutput += '<button onclick="clearMealPlan()">Clear Planner</button>';
    mealPlanOutput += '<button onclick="printMealPlan()">Print Planner</button>';
    mealPlanOutput += '<button onclick="downloadMealPlan()">Download Planner</button>';

    
    document.body.innerHTML = mealPlanOutput;
}

function generateMeals(proteinPreference, carbPreference, veggiePreference) {
   
    var meals = {
        Monday: { Breakfast: `${proteinPreference} Omelette`, Snack: `Fruit Salad with ${carbPreference}`, Lunch: `Grilled ${proteinPreference} with ${veggiePreference}`, Snack: 'Yogurt', Dinner: `Baked ${proteinPreference} with Roasted ${veggiePreference}` },
        Tuesday: { Breakfast: 'Smoothie', Snack: 'Nuts', Lunch: `Quinoa Salad with ${veggiePreference}`, Snack: `Cheese and ${carbPreference} Crackers`, Dinner: `Stir-fried ${proteinPreference} with Mixed Vegetables` },
        Wednesday: { Breakfast: `Pancakes with ${veggiePreference}`, Snack: 'Greek Yogurt', Lunch: `Chicken Wrap with ${carbPreference}`, Snack: 'Hummus with Veggies', Dinner: `Salmon with ${veggiePreference} Stir-fry` },
        Thursday: { Breakfast: 'Avocado Toast', Snack: 'Trail Mix', Lunch: `Turkey Sandwich with ${carbPreference}`, Snack: 'Fruit Smoothie', Dinner: `Spaghetti with Meat Sauce and ${veggiePreference}` },
        Friday: { Breakfast: `Bagel with ${proteinPreference} Spread`, Snack: `Vegetable Sticks with ${veggiePreference} Dip`, Lunch: `Shrimp and ${veggiePreference} Stir-fry`, Snack: 'Protein Bar', Dinner: `Beef and ${veggiePreference} Skewers` },
        Saturday: { Breakfast: `Yogurt Parfait with ${carbPreference}`, Snack: 'Hard-Boiled Eggs', Lunch: `Caprese Salad with ${proteinPreference}`, Snack: 'Apple Slices with Nut Butter', Dinner: `Grilled ${proteinPreference} with Baked Potatoes and ${veggiePreference}` },
        Sunday: { Breakfast: 'Oatmeal with Berries', Snack: 'Cottage Cheese with Pineapple', Lunch: `Egg Salad Sandwich with ${veggiePreference}`, Snack: 'Granola Bar', Dinner: `Vegetarian Pizza with ${veggiePreference}` }
    };

    return meals;
}

function isValidEmail(email) {
    
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function clearMealPlan() {
    // Logic needed
    
    alert('Meal plan cleared.');
}

function printMealPlan() {
    // Add logic
    alert('Meal plan printed.');
}

function downloadMealPlan() {
    // Add lgoic 
    alert('Meal plan downloaded.');
}


