import Users from "../Model/user.model.js";

export const create = async (req, res) => {
  try {
    const newUser = new Users(req.body);
    const { email } = newUser;
    const userExist = await Users.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const saveData = await newUser.save();
    // res.status(200).json(saveData);
    res.status(200).json({ message: "User created sucessfully" });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const userData = await Users.find();
    if (!userData || userData.length === 0) {
      res.status(404).json("User data not found");
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json("Enternal server error");
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await Users.findById(id);
    if (!userExist) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json("Entarnal server error");
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await Users.findById(id);

    if (!userExist) {
      res.status(404).json("user not found");
    }
    const updatedData = await Users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    // res.status(200).json(updatedData);
    res.status(200).json({ message: "User updated sucessfully" });
  } catch (error) {
    res.status(500).json("Enternal server error");
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await Users.findById(id);
    if (!userExist) {
      return res.status(404).json("User not found");
    }
    await Users.findByIdAndDelete(id);
    res.status(200).json("User deleted successfully");
  } catch (error) {
    res.status(500).json("Enternal server error");
  }
};
