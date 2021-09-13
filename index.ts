import express, { Request, Response, NextFunction } from 'express';
// Express é um gerenciador de rotas HTTP req, res, next tipados: Request, Response, NextFunction
const app = express();

//Instancia com Rota simples apenas um end point, vai chamar essa função como call back resolver
app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'bar' });


});
app.listen(3000, () => {
    console.log('Aplicação escutando na porta 3000!');

});


