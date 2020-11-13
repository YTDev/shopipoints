const themeKit = require('@shopify/themekit');

console.log("starting deploying... ");

themeKit.command('deploy', {
  env: 'development',
  allowLive:true
}).then(()=>{
    console.log("oKy completed");
});