import express from 'express';

import { Vehicle } from '../models/vehicles';
import { getNextPage } from '../utils/pagination';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const page = +req.query.page ? +req.query.page : 0;
  if (page < 0) {
    res.status(409).json({ error: 'Invalid page attribute, should be greather or equal 0' });
  }
  const offset = page ? page * 24 : 0;

  const vehiclesCount = await Vehicle.count();
  const vehicles = await Vehicle.findAll({
    limit: offset + 24,
    offset: offset,
  });

  res.json({
    count: vehiclesCount,
    next_page: getNextPageURL('vehicles', vehiclesCount, page),
    results: vehicles,
  });
});

router.get('/:id', async (req, res) => {
  const id = +req.params.id > 0 ? req.params.id : null;
  if (!id) {
    res.json({ error: 'Passed id is invalid' });
  }

  const vehicle = await Vehicle.findByPk(id);
  if (!vehicle) {
    res.json({ error: 'Object with following id does not exist' });
  }
  res.json(vehicle);
});

export default router;
