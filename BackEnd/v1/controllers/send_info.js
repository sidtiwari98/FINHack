let guy = require('../../db/guy');
let pool = require('../../db/pool');
let client = require('../../db/client');
let { execFileSync } = require('child_process');
const path = require('path');

module.exports = (req, res) => {
    let data = req.body;
    let fucku = () => {
        res.status(400).send("Bad Parameters");
        // return;
    }

    let female = "0";
    let male = "0";
    let smoker_no = "0";
    let smoker_yes = "0";
    /*
    dob - Date
    bmi - Number
    gender - 1/0 (male/female)
    smoker - 1/0 (yes/no)
    children - Number
    */

    console.log(data);

    let new_guy = new guy();

    if (typeof data.date == "string"){
        try {
            let x = new Date(data.date);
            new_guy.dob = x;
        } catch (e){
            console.log("Unable to parse as date");
            fucku();
            return;
        }
    } else {
        fucku();
        return;
    }

    if (typeof data.bmi == "number"){
        new_guy.bmi = data.bmi;
    } else {
        fucku();
        return;
    }

    if (data.gender == 0 || data.gender == 1){
        new_guy.gender = data.gender;
        if (data.gender == 1){
            male = "1";
        } else {
            female = "1";
        }
    } else {
        fucku();
        return;
    }

    if (data.smoker == 0 || data.smoker == 1){
        new_guy.smoker = data.smoker;

        if (data.smoker == 1){
            smoker_yes = 1;
        } else {
            smoker_no = 0;
        }
    } else {
        fucku();
        return;
    }

    if (typeof data.children == "number"){
        new_guy.children == data.children;
    } else {
        fucku();
        return;
    }

    let gg = execFileSync('python3', ['fucker.py', '19', data.bmi.toString(), data.children.toString(), female, male, smoker_no, smoker_yes], {
        cwd: path.resolve('../ML/')
    })

    // console.log(gg.toString().trim());
    // console.log(__dirname);
    // console.log(path.resolve('../ML/'));
    let ml_model = gg.toString().trim();
    let shit = ml_model.split(' ');
    // console.log(ml_model);
    // console.log(shit);

    res.json({
        risk: shit[0],
        expected_cost: shit[1]


    })
}