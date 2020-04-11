/**
 * Created by rockyl on 2018/3/14.
 */
 
const fs = require('fs');
const path = require('path');

let inPath = '../princess';
fs.readdir(inPath, null, function(err, files){
	files.forEach((id, index)=>{
		if(!isNaN(id)){
			let fold = path.join(inPath, id);
			let files2 = fs.readdirSync(fold, null);
			files2.forEach(file=>{
				fs.renameSync(path.join(fold, file), path.join(fold, file.replace(/.*?(\w{3}\.\w+)$/, '$1')))
			});

			rename(fold, id, 'ske.json');
			rename(fold, id, 'tex.json');
			rename2(fold, id, 'ske.json');
		}
	})
});

function rename(fold, id, name){
	let filePath = path.join(fold, name);

	let data = require(filePath);
	data.name = 'ani_princess_' + id;

	fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

function rename2(fold, id, name){
	let filePath = path.join(fold, name);

	let data = require(filePath);
	data.armature[0].name = 'body';

	fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}