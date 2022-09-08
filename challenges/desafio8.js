db.produtos.deleteMany({ curtidas: { $lt: 50 } }, { nome: true });

db.produtos.find({}, { _id: false, nome: true });