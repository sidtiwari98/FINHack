let guy = require('../../db/guy');
let { execFileSync } = require('child_process');
const path = require('path');

module.exports = (req, res) => {
    let data = req.body;
    let fucku = () => {
        res.status(400).send("Bad Parameters");
        // return;
    }
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
    } else {
        fucku();
        return;
    }

    if (data.smoker == 0 || data.smoker == 1){
        new_guy.smoker = data.smoker;
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

    let gg = execFileSync('python3', ['fucker.py', '19', '27.9', '0', '1', '0', '0', '1'], {
        cwd: path.resolve('../../../ML')
    })

    console.log(gg);

    res.send('.');
}