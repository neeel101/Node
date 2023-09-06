const User = require("../model/user");
async function handleGetAllUsers(req, res) {
  const allUsers = await User.find({});
  const html = `
        <ul>
        ${allUsers 
          .map(
            (user) =>
              `<li> ${user.first_name + user.last_name} - ${user.email} </li>`
          )
          .join("")}
        </ul>
    `;

  res.send(html);
}

async function handleGetUserById(req, res) {
  const ID = await User.findById(req.params.id);
  if (!ID) res.send("NO User exists");
  res.send(ID);
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { last_name: "undertaker" });
  res.json("update done");
}

async function handledeletUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  res.send("deleted");
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  console.log(body);
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.gender ||
    !body.email ||
    !body.job_title
  )
    return res.status(400).json({ msg: "All fields are mandatory !" });
  const result = await User.create({
    first_name: body.first_name, 
    last_name: body.last_name,
    email: body.email,
    job_title: body.job_title,
    gender: body.gender,
  });
  console.log("result", result);

  return res.status(201).json({ msg: "success", id : result._id });
}
module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handledeletUserById,
  handleCreateNewUser
};
