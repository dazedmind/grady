const courseNumBtn = document.getElementById('course-num-btn')
const removeCourse = document.getElementById('rm-course-btn')
const calculateBtn = document.getElementById('average-btn')
let gradeInput = document.querySelectorAll('[data-grade]')

const courseNum = document.getElementById('course-num')
const courseList = document.getElementById('course-list')
// const unorderedList = document.getElementById('another-list')

let prevCounter = 0;

function setNum() {
    //prevents incrementing undendlessly
    courseList.textContent = "";

    let course = courseNum.value;
    if (course >= 12) {
        alert('Too many courses!');
        return 0;
    }
    for (i = 1; i <= course; i++) {
        const li = document.createElement('li');
        const input = document.createElement('input');
        li.textContent = "Course " + i;
        input.classList.add('grade-input');
        input.setAttribute('type', 'number');
        input.setAttribute('min', '0');
        input.setAttribute('value', '0');
        input.dataset.grade = "";
        courseList.appendChild(li);
        li.appendChild(input);
    }
    calculateBtn.removeAttribute('disabled', '');

}

let sum = 0;

function removeNum() {
    prevCounter = 0;
    courseList.textContent = "";
    gradeInput.forEach((e) => {
        e.value = "0";
    })
    courseNum.value = "";
    document.getElementById('finalgrade').textContent = "";
    // calculateBtn.removeAttribute('disabled', '');
}

function calcAve() {   
    let gradeInput = document.querySelectorAll('[data-grade]')
    let course = courseNum.value; 

    //alerts if no input
    if (course == 0) {
        alert('Please put number of course');
        return 0;
    } 
    calculateBtn.setAttribute('disabled', '');

    for (i = 0; i <= course; i++){
        let counter  = parseFloat(gradeInput[i].value);
        let sum = counter + prevCounter;
        prevCounter = sum;
        
        let average = sum / course;
        // console.log(sum);
        document.getElementById('finalgrade').innerText = "GWA/GPA = " + parseFloat(average).toFixed(2);
    } 
    return 0;
}

