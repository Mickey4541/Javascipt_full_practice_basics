const course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructor: "RajBabu"
}

console.log(course.courseName);

const {courseInstructor} = course
console.log(courseInstructor);


const navbar = ({company}) => {
    //navbar=() maa barcket bhitra by default
    // props hunxa aani har time manau company lai access 
    // gardai xau vani props.company lekhnu vanda
    // {company} lekhnu parxa.

}
navbar(company = "rajankocompany");


//////////////APIS/////////////////////////////
// apis bata aako data ki ta array ki ta objects jun 
// sukai maa aauna sakxa

// 1_array: or this is json format
// {
//     "name": "Rajan",
//     course: "js",
//     price: "999"
// }

// 2_object:
// [
//     {},
//     {},
//     {}
// ]
