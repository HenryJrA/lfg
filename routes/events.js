import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router();
export {
  router
}


/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, eventsCtrl.index)
router.delete('/', checkAuth, eventsCtrl.deleteEvent)
router.get('/:id', checkAuth, eventsCtrl.show)
// router.post('/addEvent', checkAuth, eventsCtrl.addEvent)