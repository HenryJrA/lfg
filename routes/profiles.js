import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router();
export {
  router
}


/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get("/", checkAuth, profilesCtrl.index)
router.get("/userProfile", checkAuth, profilesCtrl.userProfile)
router.patch('/update', checkAuth, profilesCtrl.update)
router.get('/:id/edit', checkAuth, profilesCtrl.edit)