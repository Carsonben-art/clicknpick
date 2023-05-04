const router = require("express").Router();
const stripe = require("stripe")("sk_test_51MHQYqGtN3knSKrnFcgn7VZNFMZDwMHvSj36ZzTBxwbjV6dnQNTyijlkzl7ZRhdg3gERyLoqf6igNQTS6LN5DT2500i1tcss4Q");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;