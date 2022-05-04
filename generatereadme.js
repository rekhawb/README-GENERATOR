const fs =  require('fs');
var filename = 'README.md';
/* fields required to generate ReadMe  */
var namePrj = '';
var descPrj = '';
var installPrj = '';
var usagePrj = '';
var contributePrj = '';
var testPrj = '';
var licensePrj = '';
var licenseText = '';
var gitPrj = '';
var emailPrj = '';



const generateReadMe = (param) =>{

    if(param.name === ''){
        namePrj = 'Unknown';
    }else{
        namePrj = param.name
    }

    if(param.desc === ''){
        descPrj = 'Unknown';
    }else{
        descPrj = param.desc;
    }

    if(param.install === ''){
        installPrj = 'Unknown';
    }else{
        installPrj = param.install;
    }

    if(param.usage === ''){
        usagePrj = 'Unknown';
    }else{
        usagePrj = param.usage;
    }

    if(param.contribute === ''){
        contributePrj = 'Unknown';
    }else{
        contributePrj = param.contribute;
    }

    if(param.test === ''){
        testPrj = 'Unknown';
    }else{
        testPrj = param.test;
    }

    if(param.license === ''){
        licensePrj = '';
    }else{
        licensePrj = `https://img.shields.io/static/v1?label=${param.license}&message=1.0`;
        licenseText = 
        
        `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    }

    if(param.git === ''){
        gitPrj = 'Unknown';
    }else{
        gitPrj = param.git;
    }

    if(param.email === ''){
        emailPrj = 'Unknown';
    }else{
        emailPrj = param.email;
    }



const readMeCreate = 
`# ${param.name}                                                                                                                                                 ![](${licensePrj})

## Table of Contents
1. [Description](#desc)
2. [Installtion Guide](#install)
3. [Usage](#usage)
4. [Contribute](#contribute)
5. [Tests](#test)
6. [License](#license)
7. [Questions](#questions)


##  Description <a name="desc"></a>
${descPrj}

##  Installation <a name="install"></a>
${installPrj}

##  Usage <a name="usage"></a>
${usagePrj}

##  License <a name="license"></a>
${licenseText}

##  Contribute <a name="contribute"></a>
${contributePrj}

##  Tests <a name="test"></a>
${testPrj}

##  Questions <a name="questions"></a>
GitHub link: [${gitPrj}](https://github.com/${gitPrj})
Email: [${emailPrj}](${emailPrj})

`

fs.writeFile(filename, readMeCreate, (err) =>
      err ? console.log(err) : console.log('README is successfully generated')
    );

};



module.exports = {
    generateReadMe
}