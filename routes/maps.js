import { Router } from 'express'
import * as mapsCtrl from '../controllers/maps.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'