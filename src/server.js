const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db")


//configurar pasta public
server.use(express.static("public"))

//habilitar o uso do req.body  na  nossa aplicação
server.use(express.urlencoded({ extended: true }))
// use server para fazer configurações 


// utilizando template engine 
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true

})

//configurar caminhos da minha aplicação
// página inicial
// req: requisição
// res: resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})



server.get("/create-point", (req, res) => {




    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    //req.query: Query strings das url, ou seja dados  
    // console.log(req.query)

    //req.body: O corpo do nosso formulário 
    // console.log(req.body) 
    // precisamos habilitar a função body 

    //inserir dados no banco de dados depois do req.body
    const query = `
         INSERT INTO places (
            image,
            name,
            address2,
            state,
            city,
            items
            
        ) VALUES(?,?,?,?,?,?);
        `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
             console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("cadastrado com sucesso")
        console.log(this) //referencia a resposta 

        return res.render("create-point.html", {saved: true})
        
    }


    db.run(query, values, afterInsertData)

})// camuflar os dados  na abba de endereço com post




server.get("/search", (req, res) => {

    const search = req.query.search

    if(search ==""){
        //pesquisa vazia
        return res.render("search-results.html", {total:0 })
    }
    



    // pegar os dados do banco de dados 
    db.all(`SELECT * FROM places WHERE state LIKE '%${search}%'`, function (err, rows) {
        // selecione de place onde tem cidade como (ouseja que tem algo parecido ) no local que guardei os dados 

        if (err) {
            console.log(err) 
            return res.send("Erro no cadastro")
        }
        const total = rows.length //vai contar quantas rows tem

        // mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", { place: rows, total: total })
    })
})

//ligar o servidor
server.listen(3000)
