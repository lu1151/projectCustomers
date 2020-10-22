const getRouter = require("router");
const router = getRouter();
const Customer = require("../model/user");
const template = require("art-template");
const querystring = require("querystring");

// present add new customer
router.get("/add", (req, res) => {
    let html = template("index.art", {});
    res.end(html);
})

// present customer list
router.get("/list", async (req, res) => {
    let customers = await Customer.find();
    let html = template("list.art", {
        customers: customers
    });
    res.end(html);
})

// post add new customer
router.post("/add", (req, res) => {
    let formData = "";
    req.on("data", param => {
        formData += param;
    })
    req.on("end", async () => {
        await Customer.create(querystring.parse(formData));
        res.writeHead(301, {
            Location: "/list"
        });
        res.end();
    })
})

module.exports = router;