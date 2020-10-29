const customerCtrl = {};

const Customer = require("../models/customer.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { transporter, welcome, verify } = require("../utils/mailer");

customerCtrl.checkInCustomer = async (req, res) => {
  try {
    const {
      names,
      lastNames,
      idType,
      idNumber,
      email,
      phone,
      birthDate,
      adress,
      userName,
      password,
    } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 8);
    const newCustomer = new Customer({
      names,
      lastNames,
      idType,
      idNumber,
      email,
      phone,
      birthDate,
      adress,
      userName,
      password: encryptedPassword,
    });
    await newCustomer.save();
    const token = jwt.sign({ id: newCustomer._id }, process.env.SECRET);
    const mail = {
      from: `"${process.env.MAIL_USERNAME}" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Bienvenido a MercaShop 😄",
      ...welcome(newCustomer.names, newCustomer._id),
    };
    await transporter.sendMail(mail);
    res.status(200).json({
      _id: newCustomer._id,
      names: newCustomer.names,
      email: newCustomer.email,
      token,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

customerCtrl.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    const {
      names,
      lastNames,
      idType,
      idNumber,
      email,
      phone,
      birthDate,
      adress,
      userName,
    } = req.body;
    if (customer) {
      customer.names = names || customer.names;
      customer.lastNames = lastNames || customer.lastNames;
      customer.idType = idType || customer.idType;
      customer.idNumber = idNumber || customer.idNumber;
      customer.email = email || customer.email;
      customer.phone = phone || customer.phone;
      customer.birthDate = birthDate || customer.birthDate;
      customer.adress = adress || customer.adress;
      customer.userName = userName || customer.userName;
      const updatedCustomer = await customer.save(customer);
      if (updatedCustomer) {
        res
          .status(200)
          .json({ message: "updatedCustomer", data: updatedCustomer });
      }
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

customerCtrl.logInCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ email });
    if (!customer) {
      throw Error("El cliente no existe.");
    }
    const isValid = bcrypt.compare(password, customer.password);
    if (!isValid) {
      throw Error("La contraseña es incorrecta.");
    }
    const token = jwt.sign({ id: customer._id }, process.env.SECRET);
    res.status(200).json({
      _id: customer._id,
      names: customer.names,
      email: customer.email,
      token,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

customerCtrl.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json(error);
  }
};

customerCtrl.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json(error);
  }
};

customerCtrl.deleteCustomer = async (req, res) => {
  try {
    Customer.findByIdAndDelete(req.params.id);
    res.status(200).json("Cliente borrado.");
  } catch (error) {
    res.status(400).json(error);
  }
};

customerCtrl.getOrders = async (req, res) => {
  try {
    const orders = await Customer.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json(error);
  }
};

customerCtrl.verifyAccount = async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  try {
    if (customer) {
      customer.isVerified = true;
      const verifiedCustomer = await customer.save();
      const token = jwt.sign({ id: verifiedCustomer._id }, process.env.SECRET);
      res.status(200).json({
        _id: verifiedCustomer._id,
        names: verifiedCustomer.names,
        email: verifiedCustomer.email,
        token,
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = customerCtrl;
