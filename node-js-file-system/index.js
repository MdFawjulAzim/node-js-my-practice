const fs = require('fs');

//write a file

// async function writeFileSync(){
//     try{
//         const data = await fs.writeFileSync('sample.txt', 'hello 3');
//         console.log('File created successfully');
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// (async () => {
//     await writeFileSync();
// })();


// async function readFileSync(){
//     try{
//         const data = await fs.readFileSync('sample.txt', 'utf8');
//         console.log(data);
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// (async () => {
//     await readFileSync();
// })();

// async function renameSync(){
//     try{
//         const data = await fs.renameSync('sample2.txt', 'tex.txt');
//         console.log('File created successfully');
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// renameSyn();

// async function deleteFileSync(){
//     try{
//         const data = await fs.unlinkSync('sample2.txt');
//         console.log('File created successfully');
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// (async () => {
//     await deleteFileSync();
// })();


//Folder Manage

async function CreateFolderSync(){
    try{
        const data = await fs.mkdirSync('sample2.html');
        console.log('File created successfully');
    }
    catch(err){
        console.error(err);
    }
}

CreateFolderSync();

// const data = await fs.readdirSync('sample2.html');
// const data = await fs.rmdirSync('sample2.html');
// const data = await fs.renameFile('sample2.html', 'sample');