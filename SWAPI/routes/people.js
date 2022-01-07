import express from 'express';

import { Person } from '../models/people';
import { getNextPageURL } from '../utils/pagination';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const page = +req.query.page ? +req.query.page : 0;
  if (pageNumber < 0) {
    res.status(409).json({ error: 'Invalid page attribute, should be greather or equal 0' });
  }
  const offset = page ? page * 24 : 0;

  const peopleCount = await Person.count();
  const people = await Person.findAll({
    limit: offset + 24,
    offset: offset,
  });

  res.json({
    count: peopleCount,
    next_page: getNextPageURL('people', peopleCount, page),
    results: people,
  });
});

router.get('/:id', async (req, res) => {
  const id = +req.params.id > 0 ? req.params.id : null;
  if (!id) {
    res.json({ error: 'Passed id is invalid' });
  }

  const person = await Person.findByPk(id);
  if (!person) {
    res.json({ error: 'Object with following id does not exist' });
  }
  res.json(person);
});

export default router;
