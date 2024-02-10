const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    // console.log(err);
    const errMsg = err.errors[0].message;
    res.status(400).json({ msg: errMsg });
  }
};

module.exports = validate;
