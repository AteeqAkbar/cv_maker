const  express= require("express")
const  routes= require("./routes/index")
const path = require('path')
var cookieParser = require('cookie-parser')

const showdown  = require('showdown')
converter = new showdown.Converter()
const TurndownService = require('turndown');
const turndownService = new TurndownService();

const app = express();
app.use(express.json());
app.use(cookieParser());


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/home1', async function  (req, res) {

    const markdown = turndownService.turndown(`
    <h1>JavaScript for Beginners</h1>
    <p>Follow <a href="https://attacomsian.com/blog">Atta</a> to learn <b>JavaScript</b> from scratch!</p>
`);

// output Markdown
console.log(markdown);

    text      = '# hello, markdown!',
    html      = converter.makeHtml(markdown);
    console.log(html);

 




    // res.sendFile(path.join(__dirname+'/public/tamp.html'));
})



app.use('/',routes);

app.listen(3000,console.log("server is runing 3000"))