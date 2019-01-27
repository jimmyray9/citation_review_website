//New Date object to set the date accessed as the current date
var d = new Date();
var month = d.getMonth() + 1
var date_accessed = "[Accessed: " + d.getDate() + "/" + month + "/" + d.getFullYear() + "]."

    
                                                                                                                                const q_one = "(Knight, 2017)";
                                                                                                                                const q_one_ref = "Knight, V. (2017). Study links college students' grades to sleep schedules. [Online]. Available at: https://edition.cnn.com/2017/06/12/health/student-sleep-grades-study/index.html " + date_accessed;
                                                                                                                                const q_two = "(Wahlstrom, 2017)";
                                                                                                                                const q_two_ref = "Wahlstrom, K. (2017). Sleepy teenage brains need school to start later in the morning. [Online]. Available at: https://theconversation.com/sleepy-teenage-brains-need-school-to-start-later-in-the-morning-82484 " + date_accessed;
                                                                                                                                const q_three = "(Persky, 2018)";
                                                                                                                                const q_three_ref = "Persky, M. (2018). The Effects of Sleep Deprivation on High School Students. [Online]. Available at: https://ysjournal.com/the-effects-of-sleep-deprivation-on-high-school-students/ " + date_accessed;
                                                                                                                                const q_four = "(Rueda, 2011)";
                                                                                                                                const q_four_ref = "Rueda, R. (2011). The 3 Dimensions of Improving Student Performance: Finding the Right Solutions to the Right Problems. New York: Teachers College Press.";
                                                                                                                                const q_five = "(Mccullough, 2015)";
                                                                                                                                const q_five_ref = "Mccullough, A. (2015). How Does Sleep Effect Grades? [Online]. Available at: https://sites.psu.edu/siowfa15/2015/10/07/how-does-sleep-effect-grades/ " + date_accessed;
                                                                                                                                const q_six = "(Barass, 2002)";
                                                                                                                                const q_six_ref = "Barass, R. (2002). Study! : a guide to effective learning, revision and examination techniques. 2nd ed. London: Routledge."
                                                                                                                            
console.log("#1 : " + q_one);
console.log("#1_ref : " + q_one_ref);
console.log("#2 : " + q_two);
console.log("#2_ref : " + q_two_ref);
console.log("#3 : " + q_three);
console.log("#3_ref : " + q_three_ref);
console.log("#4 : " + q_four);
console.log("#4_ref : " + q_four_ref);
console.log("#5 : " + q_five);
console.log("#5_ref : " + q_five_ref);
console.log("#6 : " + q_six);
console.log("#6_ref : " + q_six_ref);
    
// Check the input with the correct answer

function checkAnswer(input, icon, well_id, correct) {
    let answer = document.getElementById(input).value;
    if (answer == correct){
        document.getElementById(icon).className = 'fa fa-thumbs-o-up';
        document.getElementById(well_id).className = 'correct';
    } else if (answer != "" && answer == correct.substring(0, answer.length)){
        document.getElementById(well_id).className = 'correct';
    } else if(answer == "") {
        document.getElementById(icon).className = "";
        document.getElementById(well_id).className = "";
    } else {
        document.getElementById(well_id).className = 'incorrect';
    };
};
