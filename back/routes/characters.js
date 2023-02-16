const express = require("express");
const router = express.Router();

const getDataAPI = (req, res) => {
  const { id } = req.params;
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((data) => data.json())
    .then((character) => {
      res.send(character);
    });
};

router.get("rickandmorty/character/:id", getDataAPI);
router.get("rickandmorty/character/:detailId", getDataAPI);

const fav = [];

router.get("/rickandmorty/fav", (req, res) => {
  res.send(fav);
});

router.post("/rickandmorty/fav", (req, res) => {
  console.log(req.body);
  res.send("done");
});

router.delete("rickandmorty/fav/:id", (req, res) => {
  const { id } = req.params;
  const deleteItem = fav.filter((char) => char.id !== id);
  res.json({
    type: "Delete Success",
    char: deleteItem,
  });
});

module.exports = router;
