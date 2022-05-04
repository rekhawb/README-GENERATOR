
const inquirer = require('inquirer');
const ListPrompt = require('inquirer/lib/prompts/list');
const generateReadMe = require('./generatereadme');

inquirer
.prompt([{
    type: 'input',
    name:'name',
    message:'Enter name of the project:'

},
{
    type: 'input',
    name:'desc',
    message:'Enter project description:'

},
{
type: 'input',
name:'install',
message:'Enter installation instructions:'

},
{
type: 'input',
name:'usage',
message:'Enter usage information:'

},
{
    type: 'input',
    name:'contribute',
    message:'Enter contribution guidelines:'
    
    },
    {
    type: 'input',
    name:'test',
    message:'Enter tests:'
    
    },
    {
        type:'list',
        name:'license',
        message:'License list:',
        choices:['Development','Enterprise']
    },
    {
        type:'input',
        name:'git',
        message:'Enter your GitHub username:'
    },
    {
        type:'input',
        name:'email',
        message:'Enter your Email Address:'
    },

])
.then((data) => {
//var nameApp = data.name;
generateReadMe.generateReadMe(data);
});



