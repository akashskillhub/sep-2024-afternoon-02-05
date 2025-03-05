const {
    getAllProducts,
    getAllSellers,
    publishUnpublishProduct,
    blockUnblockSeller
} = require("../controllers/admin.controller")

const router = require("express").Router()

router
    .get("/products", getAllProducts)
    .get("/sellers", getAllSellers)

    .patch("/product-update/:pid", publishUnpublishProduct)
    .patch("/seller-update/:sid", blockUnblockSeller)
module.exports = router