import User from "../mongo/models/user.js";

const getAllUsers = async (req, res) => {
    const users = await User.find({}).limit(req.query._end);

    res.status(200).json(users);
};

const createUser = async (req, res) => {
    const { name, email, avatar } = req.body;

    const user = await User.findOne({email});

    if (user) return res.status(200).json(user);

    const newUser = await User.create({name, email, avatar});

    res.status(200).json(newUser);
};

const getUserInfoById = async (req, res) => {
    const { id } = req.params;

    const user = await User.findOne({_id: id}).populate('allProperties');

    if (!user) {
        res.status(404).json({message: 'Not found.'})
    }

    res.status(200).json(user);
};

export {
    getAllUsers,
    createUser,
    getUserInfoById
};