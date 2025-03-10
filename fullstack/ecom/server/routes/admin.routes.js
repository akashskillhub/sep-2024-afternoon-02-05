const {
    getAllProducts,
    getAllSellers,
    publishUnpublishProduct,
    blockUnblockSeller,
    getAllOrders,
    updateOrderStatus,
    getAllUsers,
    blockUnblockUser
} = require("../controllers/admin.controller")

const router = require("express").Router()

router
    .get("/products", getAllProducts)
    .get("/sellers", getAllSellers)

    .patch("/product-update/:pid", publishUnpublishProduct)
    .patch("/seller-update/:sid", blockUnblockSeller)
    .get("/orders", getAllOrders)

    .patch("/update-order-status/:pid", updateOrderStatus)
    .get("/users", getAllUsers)
    .patch("/update-user-account/:uid", blockUnblockUser)


module.exports = router