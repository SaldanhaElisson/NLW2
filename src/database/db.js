// importar a dependecia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no  banco de dados
const db = new sqlite3.Database ("./src/database/database.db")

module.exports = db //está exportando essa pagina para outra

//utilizar o objeto de banco de dados, para nossos operações 
// db.serialize(() => {

//     //com comando SQL eu vou :

//     // 1 criar uma tabela 
//     db.run(` 
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT

//         );
    
//     `)

//     // 2 inserir dados na tabela 
//     const query = `
//      INSERT INTO places (
//         image,
//         name,
//         address2,
//         state,
//         city,
//         items
        
//     ) VALUES(?,?,?,?,?,?);
//     `

//     const values = ["https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//     "Papesider",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"
//     ]

//         function afterInsertData(err){
//             if(err){
//                 return console.log(err)
//             }
    
//             console.log ("cadastrado com sucesso")
//             console.log(this) //referencia a resposta 
    
//         }//CALLBACK
        
//     //está inserindo dados no banco de dados
//     db.run (query, values, afterInsertData)


  



//     //4 Deletar um dado da tabela 

//     db.run (`DELETE FROM places WHERE id = ?`, [],  function(err){
//         if(err){
//             return console.log(err)

//         }
//         console.log("Registro deletado com sucesso")
//     })


//       //3 Consultar os dados da tabela 

//     db.all(`SELECT * FROM places`, function(err, rows){
//         if(err){
//             return console.log(err)
//         }

//         console.log ("Aqui estão seus registror")
//         console.log (rows) //rows é todos os registros
//     })

// })

// função atrelado ao um objeto se chama metodó
