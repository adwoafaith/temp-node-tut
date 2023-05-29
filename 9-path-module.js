const path=require('path')


//separator property
console.log(path.sep)

//finding the path that your file is 
const filePath =path.join('/content/','subfolder','test.txt')
console.log(filePath)// /content/subfolder/test.txt
//getting get the last file in a folder or getting a folder in a folder

const base=path.basename(filePath)
console.log(base)
//path.resolve returns an absolute path

const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)// ps c:users/faith/destop/tutorial/conten/folder/test.txt

