const {OAuth2Client} = require('google-auth-library');
const clientId = "956293473525-6ljbo3kpik2mgu1v2jjhktaedj7he830.apps.googleusercontent.com";
const jwt = require('jsonwebtoken');

let User = require("../models/user.model");

const client = new OAuth2Client(clientId);

const addUser = (req, res) => {

    const { tokenId } = req.body;

    client.verifyIdToken({idToken: tokenId, audience: clientId}).then(response => {
        const { email_verified, name, email, given_name, family_name, picture } = response.payload;

        if(email_verified){
            User.findOne({email}).exec((err, user) => {
                if (err){
                    return res.status(400).json({
                        error: "Something went wrong..."
                    })
                } else{
                    if (user){

                        const {_id, username, fullname, firstname, lastname, email, pictureUrl} = user;

                        res.json({
                            token,
                            user: {_id, username, fullname, firstname, lastname, email, pictureUrl}
                        })

                    } else{
                        const username = email.substring(0, email.lastIndexOf('@'));
                        const fullname = name;
                        const firstname = given_name;
                        const lastname = family_name;
                        const pictureUrl = picture;

                        const newUser = new User({ username, email, fullname, firstname, lastname, pictureUrl });

                        newUser.save((err, data) => {
                            if (err) {
                                return res.status(400).json({
                                    error: "Something went wrong..."
                                })
                            }
                            
                            const token = jwt.sign({_id: data._id}, process.env.JWT_SIGNIN_KEY, {expiresIn: '7d'})

                            const {_id, username, fullname, firstname, lastname, email, pictureUrl} = newUser;

                            res.json({
                                token,
                                user: {_id, username, fullname, firstname, lastname, email, pictureUrl}
                            })
                            
                        })
                    }
                }
            })
        }
    }).catch(err => {
        console.log('Error: ' + err);
    })
}


const removeUser = async (req, res) => {
    await client.revokeCredentials();
    res.send('Successfully logged out');
}




module.exports = {
    addUser,
    removeUser
}