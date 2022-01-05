import express from 'express';

import { Starship } from '../models/starships';
import { getNextPageURL } from '../utils/pagination';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const page = +req.query.page ? +req.query.page : 0;
  if (page < 0) {
    res.status(409).json({ error: 'Invalid page attribute, should be greather or equal 0' });
  }
  const offset = page ? page * 24 : 0;

  const starshipCount = await Starship.count();
  const starships = await Starship.findAll({
    limit: offset + 24,
    offset: offset,
  });

  res.json({
    count: starshipCount,
    next_page: getNextPageURL('starships', starshipCount, page),
    results: starships,
  });
});

router.get('/:id', async (req, res) => {
  const id = +req.params.id > 0 ? req.params.id : null;
  if (!id) {
    res.json({ error: 'Passed id is invalid' });
  }

  const starship = await Starship.findByPk(id);
  if (!starship) {
    res.json({ error: 'Object with following id does not exist' });
  }
  res.json(starship);
});

export default router;
