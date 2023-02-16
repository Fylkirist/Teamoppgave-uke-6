var playerPosition = {x:200,y:250};
let carPosition = {x:395, y:-120, id:0, type:0}; // posisjon på bro bil
let propPosition = {x:60, y:0, id:0, type:0}; // posisjon på bro bil
const roadGrid = {x:50,y:0, width: 267, height: 370}
var score = 0;
var health = 100;


let progressbar1 = 100;
let progressbar2 = 100;


const cars = [
    /*bro cars*/        ["blue_car","green_car","turqish_car","purple_car","banangreen_car","cyan_car","greenpurple_car","turqish_car"],
    /*ikke bro cars*/   ["orange_car_enemy","silver_car_enemy","blue_car_enemy","yellow_car_enemy","grayblue_car_enemy","green_car_enemy","red_car_enemy","midnightpurple_car_enemy"]
];

const props = [
    /*vei hindringer*/  ["boost_arrows","work_brigade","work_cone"],
    /*politi*/          ["police_car","sivil_police_car","police_car"]
];
