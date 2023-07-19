const asyncHandler = require("express-async-handler");

//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler((req, res) => {
  res.status(200).json({ msg: 'Get all the Contacts' });
});

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler((req, res) => {
  console.log("The request body is ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("please enter all the fields");
  }

  res.status(200).json({ msg: 'Create a contact' });
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler((req, res) => {
  res.status(200).json({ msg: `Get contact for ${req.params.id}` });
});

//@desc update contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler((req, res) => {
  res.status(200).json({ msg: `update the contact ${req.params.id}` });
});

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler((req, res) => {
  res.status(200).json({ msg: `Delete the contact ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact
};
