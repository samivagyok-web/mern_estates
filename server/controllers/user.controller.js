import User from "../mongo/models/user.js";

const getAllUsers = async (req, res) => {
    console.log("lol")
};

const createUser = async (req, res) => {
    const { name, email, avatar } = req.body;

    const user = await User.findOne({email});

    if (user) return res.status(200).json(user);

    const newUser = await User.create({name, email, avatar});

    return res.status(200).json(newUser);
};

const getUserInfoById = async (req, res) => {};

export {
    getAllUsers,
    createUser,
    getUserInfoById
};