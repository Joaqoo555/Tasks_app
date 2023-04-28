const { Router } = require("express");
const {
createWorckSpace,
deleteWorckSpace,
getAllWorckSpaces,
getOneWockSpace,
updateWorckSpace
} = require("../controllers/worckSpace.controller");
const router = Router();

router.get("/:idWS", getOneWockSpace);
router.get("/", getAllWorckSpaces);

router.post("/",createWorckSpace)

router.delete("/:idWS",deleteWorckSpace)


router.put("/:idWS",updateWorckSpace)


module.exports = router;
