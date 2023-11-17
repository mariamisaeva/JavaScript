import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {//who's from mentors canTeach the provided(included) moduleName
    const availableMentors = mentors.filter(m => m.canTeach.includes(moduleName))
    //extract the names which match with previous condition
    return availableMentors.map(el => el.name);
};
// You can uncomment out this line to try your function
//console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
    const modMentors = possibleMentorsForModule(moduleName);

    if (modMentors.length > 0) {
        const random = Math.floor(Math.random() * modMentors.length);
        return modMentors[random];
    }

};
// You can uncomment out this line to try your function
//console.log(findMentorForModule('javascript'));
