const router = require("express").Router();
const Form = require("./formSend");

router.get("/", async (req, res) => {
  try {
    var data = await Form.find().exec();
    let array = [];
    let i = 0;
    data.forEach(name => {
      array[i] = ({expirationTime: name.expirationTime, name: name.name, author: name.author});;
      i++;
    });

const newArr = Array.from(new Set(array.map(s => s.name)))
.map ( name => {
  return array.find(s => s.name == name)
})
res.send(newArr);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
