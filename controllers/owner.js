const Owner = require('../models/owner');
const bcrypt = require('bcrypt');

const handleCreateOwner = async (req, res) => {
    const { firstName, email, password } = req.body;
    try {
        const ownerExist = await Owner.find();
        console.log(ownerExist)
        if (ownerExist.length === 0) {
            const hashPassword = await bcrypt.hash(password, 10);
            const createOwner = await Owner.create({
                firstName,
                email,
                password: hashPassword,
            });
            res.status(201).json({ message: `Onwer created successfully\n ${createOwner}` })
        } else {
            res.status(400).json({ message: "Onwer already exist. Cannot be more than one owner." })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." })
    }
}

module.exports = { handleCreateOwner };