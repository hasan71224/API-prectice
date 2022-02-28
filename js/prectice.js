// const mealForToday = () => {
//     fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
//         .then(res => res.json())
//         .then(data => displayMeal(data.meals[0]))
// }
// mealForToday();

// const displayMeal = meal =>{
//     console.log(meal);
// }
// spenner loding show and hide
const toggleSpenner = displayStyle =>{
    document.getElementById("spenner").style.display = displayStyle;
}

// meal result loding show and hide
const toggleResult = displayStyle =>{
    document.getElementById("showMeal").style.display = displayStyle;
}

const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value;
    // spenner show
    toggleSpenner('block');
    // result hide
    toggleResult('none');

    loadMeals (searchText);
    document.getElementById('search-field').value = ' ';

}
// another way
const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoadMeal(data.meals))
}
loadMeals("fish");
const displayLoadMeal = meals => {
    const container = document.getElementById('showMeal')
    container.textContent = " ";
    if(!meals){
        const div = document.createElement("div")
        div.innerHTML = `
         <h3>Not available </h3>
        `;
        container.appendChild(div);
    }
    else{
        meals?.forEach(meal =>{
            // console.log(meal);
            const div = document.createElement("div")
            div.innerHTML = `
             <h3>Meal Name: ${meal.strMeal} </h3>
             <h3>Meal Type: ${meal.strArea} </h3>
             <p>${meal.strIngredient17 ? meal.strIngredient17: "Not available"}</p>
    
             <button onclick="loadMealDetails('${meal.strMeal}')"> click me </button>
            `;
            container.appendChild(div);
        })
    }
    
    // spenner hide
    toggleSpenner('none');
    //result show
    toggleResult('block');

}
// loadMeal('fish');
const loadMealDetails = mealName =>{
    console.log(mealName);
}