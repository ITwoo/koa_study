const Koa = require('koa')

const app = new Koa();

app.use((ctx, next) => {
  console.log(ctx.url)
  console.log(1)
  next();
})

app.use((ctx, next) => {
  console.log(2);
  next();
})

app.use(ctx => {
  ctx.body = 'hello world1';
});

app.listen(4000, () => {
  console.log('Listening to paort 4000')
});