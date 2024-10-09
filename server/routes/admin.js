const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");

const adminLayout = '../views/layouts/admin';

/**
 * GET
 * Admin - Login
 */
router.get("/admin", async (req, res) => {
  try {
    const locals = {
      title: "Admin",
      description: "Blog criado com NodeJS, Express e MongoDB.",
    };

    res.render("admin/index", { locals, layout: adminLayout });
  } catch (error) {
    console.log(error);
  }
});

/**
 * GET
 * Admin - Check Login
 */
router.post("/admin", async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (req.body.username === 'admin' && req.body.password === 'password') {
      res.send('Login realizado com sucesso.')
    } else {
      res.send('Nome ou senha incorretos.')
    }
    
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;