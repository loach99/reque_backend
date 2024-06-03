const fs = require('fs')
function givMeFiles (dir, files){
    
    files = files || [];
      var allFiles = fs.readdirSync(dir);
      for (var i =0; i<allFiles.length; i++){
          var name = dir + '/' + allFiles[i];
          if (fs.statSync(name).isDirectory()){
              givMeFiles (name, files);
          } else {
              files.push(allFiles[i]);
          }
      }
      return files;
  };

module.exports = givMeFiles;