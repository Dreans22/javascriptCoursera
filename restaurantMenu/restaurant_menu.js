let breakfastMenu=["Pancakes","Eggs Benedict","Oatmeal", "Frittata"];
let mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
let dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

for(i=0;i<breakfastMenu.length;i++){
    console.log(breakfastMenu[i])
}

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

for(i=0;i<mainCourseMenu.length;i++){
    console.log(mainCourseMenu[i])
}

let mainCourseItem='';
mainCourseMenu.forEach((item,index) => {
    mainCourseItem += `<p> Item ${index+1}: ${item}</p>`;});
    document.getElementById("maincourseMenuItems").innerHTML=mainCourseItem;

    let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;