const router = require('express').Router()
const {Template, Order} = require('../db/models')
const lobApiPostcard = require('../lob')

// matches POST requests to /api/orders/
router.post('/', async function(req, res, next) {
  try {
    const clientOrder = await Order.create(req.body)
    const order = await Order.findByPk(clientOrder.id, {
      include: [Template]
    })
    const cardDetails = {
      description: order.template.name,
      to: {
        name: order.to_name,
        address_line1: order.to_address_line1,
        address_line2: order.to_address_line2,
        address_city: order.to_address_city,
        address_state: order.to_address_state,
        address_zip: order.to_address_zip
      },
      from: {
        name: order.from_name,
        address_line1: order.from_address_line1,
        address_line2: order.from_address_line2,
        address_city: order.from_address_city,
        address_state: order.from_address_state,
        address_zip: order.from_address_zip
      },
      front: order.template.frontHTML,
      back: order.template.backHTML,
      merge_variables: {
        greeting: order.merge_variables_greeting,
        message: order.merge_variables_message,
        salutation: order.merge_variables_salutation,
        fromName: order.merge_variables_fromName
      }
    }
    const lobApiResponse = await lobApiPostcard(cardDetails)
    const lobResponseDetails = {
      lobId: lobApiResponse.id,
      lobPdfURL: lobApiResponse.url,
      lobFrontPngURL: lobApiResponse.thumbnails[0].large,
      lobBackPngURL: lobApiResponse.thumbnails[1].large,
      lobMailType: lobApiResponse.mail_type,
      lobExpectedDeliveryDate: lobApiResponse.expected_delivery_date
    }
    const response = await clientOrder.update(lobResponseDetails)
    res.send(response)
  } catch (err) {
    next(err)
  }
})

//matches GET req to /api/orders/:orderId

router.get('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
    res.send(order)
  } catch (err) {
    next(err)
  }
})

module.exports = router
