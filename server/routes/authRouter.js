const express = require('express');
const router = express.Router();


////////////// /api/user/
/**
 * Get all cards that are visible to current user
 */
router.get('', (req, res, next) => res.status(200).json({}));

/**
 * Get all groups current user is a member of.
 */


// router.put('/user')

module.exports = router;
