const fs = require("fs");
const path = require("path");

const files = fs.readdirSync("TestFolder");
console.log(files);

const folder = "TestFolder";

files.forEach((file) => {
  const fullpath = path.join(folder, file);
  console.log(fullpath);

  const stats = fs.statSync(fullpath);
  console.log(stats.isFile());
//   console.log(stats.isDirectory());

  if (stats.isFile()) {
    //   console.log("welcome")
    
      const extension = path.extname(file);
    //   console.log(extension);

      const result = extension.replace(".", "");
      const foldername = result.toUpperCase();
      console.log(foldername);
    //   console.log(result);
      
      const folderpath = path.join(folder, foldername);
      console.log(folderpath);
    //   console.log("not welcome");

    if (fs.existsSync(folderpath)) {        
        console.log("Folder already exists");
      } 
      else{
          console.log("Creating Folder")
          fs.mkdirSync(folderpath);
      }
    const destinationPath=path.join(folderpath,file)
    console.log(destinationPath)
    
    fs.renameSync(fullpath, destinationPath)

}

});
