import express from 'express';
import ejs from 'ejs';
import bodyparser from 'body-parser'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const app=express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));

const posts=[];
app.get('/',(req,res)=>
{
    res.render('home',{posts: posts});
});

app.get('/create',(req,res)=>{
    res.render('create');
});

app.post('/create',(req,res)=>{
    const {title,content}=req.body;
    posts.push({title,content});
    res.redirect('/');
});

app.listen(3000,()=>
{
    console.log("server runnint at 3000");
});