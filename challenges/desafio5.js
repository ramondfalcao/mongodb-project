db.produtos.find(
  { curtidas: { $in: [36, 85] } },
  { _id: false, nome: true, curtidas: true, vendidos: true },
  );