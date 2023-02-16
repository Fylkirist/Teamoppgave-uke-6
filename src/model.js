var playerPosition = {x:200,y:250};
let carPosition = {x:395, y:-120, id:0, type:0}; // posisjon på bro bil
let propPosition = {x:80, y:0, id:0, type:0}; // posisjon på prop
const roadGrid = {x:80,y:10, width: 267, height: 380}
var score = 0;
var health = 100;


let progressbar1 = 100;
let progressbar2 = 50;


const cars = [
    /*bro cars*/        ["blue_car","green_car","turqish_car","purple_car","banangreen_car","cyan_car","greenpurple_car","turqish_car"],
    /*ikke bro cars*/   ["orange_car_enemy","silver_car_enemy","blue_car_enemy","yellow_car_enemy","grayblue_car_enemy","green_car_enemy","red_car_enemy","midnightpurple_car_enemy"]
];

const props = [
    /*vei hindringer*/  ["work_cone","work_brigade"],
    /*politi*/          ["police_car","sivil_police_car"]
];

let greetingFlag = false

const propDict = {
    "work_cone":{width:47,height:55},
    "work_brigade":{width:79,height:47},
    "police_car":{width:71,height:103},
    "sivil_police_car":{width:71,height:103}
}

