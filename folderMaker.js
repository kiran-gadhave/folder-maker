var fs              = require('fs'),
    filename        = process.argv[2],
    folderStructure = null;
    newLine         = {};


fs.readFile(filename,'utf8', function(err, data){
    if(err)
        throw err;
    else
    {

        folderStructure = data;
        lineSplit(folderStructure);
        folderMake(newLine);

    }
});


lineSplit = function(folderStructure){
    var letterCount = 0;
    var lineNo = 0;

    for (var i = 0; i<folderStructure.length; i++){
        if (folderStructure.charAt(i) === '\n')
        {
            var key = "Line";
            key = key + lineNo.toString();
            newLine[key] = folderStructure.substring(letterCount, i);
            lineNo++;
            //console.log(newLine[key]);
            letterCount = i;
            //console.log("###########");
        }
    }


};

folderMake = function(newLine){
    for(var prop in newLine){
        if(newLine.hasOwnProperty(prop)) {

            var folderFile = {name: "", ff: ""};
            folderFile.name = newLine[prop];
            if (folderFile.name.indexOf(".") != -1)
                folderFile.ff = "file";
            else
                folderFile.ff = "folder";


        }
    }
};