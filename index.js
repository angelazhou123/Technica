const Clarifai = require('clarifai');
const app = new Clarifai.App({
    apiKey: 'cd0eed6d5e594d9a8d534d4da07dfa61'
});
let module = require('./module.js');


function lookUp() {
    app.models.predict(Clarifai.GENERAL_MODEL, module.myFile).then(
        function (response) {
            console.log(response);
        },
        function (err) {
            console.error(err);
        }
    );
}