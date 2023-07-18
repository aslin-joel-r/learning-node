const express=require('express');
const router=express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({ msg: 'Get all the Contacts' });
  });

  router.route('/').post((req, res) => {
    res.status(200).json({ msg: 'Create a contacts' });
  });

  router.route('/:id').get((req, res) => {
    res.status(200).json({ msg: `Get contact for ${req.params.id}` });
  });

  router.route('/:id').put((req, res) => {
    res.status(200).json({ msg: `update the contact ${req.params.id}` });
  });

  router.route('/:id').delete((req, res) => {
    res.status(200).json({ msg: `Delete the contact ${req.params.id}` });
  });
  

module.exports=router;