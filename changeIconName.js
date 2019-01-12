/**
 * Created by cyb on 2019/1/12.
 */

var fs = require('fs');
var path = './style/images';
var folderName = fs.readdirSync(path, 'utf-8');
console.log(folderName);

folderName.map(function(oldPath){
  var newPath = oldPath.replace(/ /g, '-');
  console.log(newPath);
  fs.rename(path + '/' + oldPath, path + '/' + newPath,function(err){
    if(err){
      console.log(err)
    } else {
      console.log('文件名替换成功')
    }
  })
})