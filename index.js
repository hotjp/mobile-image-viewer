const express = require('express');
const app = express();

const readline = require('readline');
const fs = require('fs');
const stream = fs.createReadStream('./data/urls_porn.txt',{encoding:'utf-8'});

const line = readline.createInterface({
  input: stream
});

let index = 0;
let list = [];
line.on('line',line => {
  //   console.log(line);
  index++;
  list[index] = line;
});
app.use(express.static(__dirname));
app.set('view engine', 'pug');

app.get('/:pagesize/:page', function (req, res) {
//   console.log(req);
  let pageList = [],
    pageSize = Number(req.params.pagesize) && Number(req.params.pagesize) > 0? Number(req.params.pagesize) : 20,
    page = Number(req.params.page) && Number(req.params.page) > 0 ? Number(req.params.page) : 1;

  for(let i = 0; i < pageSize; i++){
    pageList.push(list[page * pageSize + i]);
  }
  res.render('index', { title: 'pics', pageList, page, count: Math.floor(index/pageSize) });
});
app.listen(8888, () => console.log('app listening on port 8888'));
