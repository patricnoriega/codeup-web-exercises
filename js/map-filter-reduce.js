//1.  copy the users data below into it.
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
console.log('-------Exercise Time------');
//2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let atLeast3Languages = users.filter(function (userLanguage){
    return userLanguage.languages.length >= 3;
})
console.log(".filter for each user obj. that has at least 3 languages")
console.log(atLeast3Languages);

//3. Use .map to create an array of strings where each element is a user's email address

let userEmails = users.map(function (userEmail){
    return userEmail.email;
})
console.log(".map to get back each user email address");
console.log(userEmails);

//4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalExp =  users.reduce(function (total, individual){
    return total + individual.yearsOfExperience
}, 0);
console.log('used .reduce to list the total exp of the instructors, and for the next two problems.');
console.log(totalExp);

let avgExp = totalExp / users.length
console.log(avgExp);

//5. Use .reduce to get the longest email from the list of users.

let longestEmailLength = users.reduce(function (total, characterLength){
return characterLength.email.length
}, 0)
console.log('character length for longest email: ' , longestEmailLength)


let longestEmails = users.reduce(function (longestEmail, user){
    if (longestEmail.length > user.email.length){
        return longestEmail;
    }else {
        return user.email;
    }
})
console.log('longest email is ' , longestEmails)

//6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let singleStringNames = users.reduce(function(result,name){
    return result + name.name + ', '
}, 'Your instructors are: ')
console.log(singleStringNames);
// used with .map
let nameString = users.map(function (user){
    return user.name
}).join(', ')
console.log(nameString, 'with .map');