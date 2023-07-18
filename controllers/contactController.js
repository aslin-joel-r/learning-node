//@desc get all contacts
//@route GET /api/contacts
//@acess public

const getContacts=(req, res) => {
    res.status(200).json({ msg: 'Get all the Contacts' });
  };

//@desc Create new contact
//@route POST /api/contacts
//@acess public

const createContact=(req, res) => {
  console.log("The request body is ",req.body);
  const{name,email,phone}=req.body;
  if(!name || !email || !phone ){
    res.status(400);
    throw new Error("please enter all the fields");
  }

  res.status(200).json({ msg: 'Create a contact' });
};

//@desc Get contact
//@route GET /api/contacts/:id
//@acess public

const getContact=(req, res) => {
  res.status(200).json({ msg: `Get contact for ${req.params.id}` });
}
//@desc update contacts
//@route PUT /api/contacts/:id
//@acess public

const updateContact=(req, res) => {
  res.status(200).json({ msg: `update the contact ${req.params.id}` });
};

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@acess public

const deleteContact=(req, res) => {
  res.status(200).json({ msg: `Delete the contact ${req.params.id}` });
};


  module.exports={getContacts,createContact,getContact,updateContact,deleteContact}