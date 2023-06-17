const router = require('express').Router();

const userManager = require('../managers/userManager');

const { errorMessageHandler } = require('../utils/errorMessageHandler')

router.get('/register', (req, res) => {
    res.render('./user/register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try {
        await userManager.register({ username, email, password, repeatPassword })
    } catch (error) {
        const errorMessage = errorMessageHandler(error)
        return res.render('./user/register', { errorMessage });
    }

    res.redirect('/');
});

router.get('/login', (req, res) => {
    res.render('./user/login')
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await userManager.login(username, password);

        res.cookie('auth', token, { httpOnly: true });

        res.redirect('/')
    } catch (error) {
        return res.render('./user/login', { errorMessage: errorMessageHandler(error) })
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})

module.exports = router;