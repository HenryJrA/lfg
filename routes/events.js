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
router.delete('/:id', checkAuth, eventsCtrl.deleteEvent)
router.get('/:id', checkAuth, eventsCtrl.show)
router.put('/:id', checkAuth, eventsCtrl.update)
router.get('/:id/edit', checkAuth, eventsCtrl.edit)

// router.post('/:id/replies', isLoggedIn, postsCtrl.addReply)
// router.delete('/:postId/replies/:replyId', isLoggedIn, postsCtrl.deleteReply)
// router.post('/addEvent', checkAuth, eventsCtrl.addEvent)
// 