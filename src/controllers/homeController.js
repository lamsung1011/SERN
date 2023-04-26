import db from '../models/index'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();

        return res.render('homepage.ejs', {
            data: JSON.stringify(data) // chuyển chuỗi JSON thành chuỗi String
        });
    } catch (e) {
        console.log(e);
    }


}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');

}

// let getAboutPage = (req, res) => {
//     return res.render('test/about.ejs');
// }

// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}