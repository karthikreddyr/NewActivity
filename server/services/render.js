const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/activity
    axios.get('http://localhost:3000/api/activity')
        .then(function (response) {
            res.render('index', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })


}

exports.add_activity = (req, res) => {

    res.render('add_activity');
}

exports.login = (req, res) => {
    res.render('login');
}
exports.main = (req, res) => {
    // console.log('req');

    // console.log(req);
    // console.log('res');

    // console.log(res);
    res.render('registration');


}

exports.registration = (req, res) => {
    console.log('req.Email');

    console.log(req.body.Email);
    // let registrationDetails = {
    //     "email": req.body.Email,
    //     "username": req.body.UserName,
    //     "password": req.body.Password
    // };
    // let registrationDetailsStore = window.localStorage.getItem('registrationDetails');
    // console.log(registrationDetailsStore);
    // if (registrationDetailsStore.length) {
    //     registrationDetailsStore.push(registrationDetails);
    //     window.localStorage.setItem('registrationDetails', registrationDetailsStore);
    // } else {
    //     window.localStorage.setItem('registrationDetails', [registrationDetailsStore]);

    // }

    //Open Banking changes
    // if(req.body.Email !== ''){
    // axios.post('https://apisandbox.openbankproject.com/obp/v4.0.0/users', {
    //     "email": req.body.Email,
    //     "username": req.body.UserName,
    //     "password": req.body.Password,
    //     "first_name": req.body.UserName,
    //     "last_name": req.body.UserName
    // }, {
    //     headers: {
    //         'Content-Type': 'application/json;charset=UTF-8',
    //         "Access-Control-Allow-Origin": "*",
    //     }

    // })
    //     .then(function (userdata) {
    //         res.render('login');
    //     })
    //     .catch(err => {
    //         //res.send(err);
    //         res.render('login');

    //     })
    // }
}
exports.update_activity = (req, res) => {
    axios.get('http://localhost:3000/api/activity', { params: { id: req.query.id } })
        .then(function (userdata) {
            res.render("update_activity", { user: userdata.data })
        })
        .catch(err => {
            res.send(err);
        })
}