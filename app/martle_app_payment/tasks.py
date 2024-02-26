from celery import shared_task
from django.db import transaction
from .models import Martlet
from martle_app_backend.models import OrderPlaced, ProductStatusChoices
import logging

logger = logging.getLogger(__name__)


@shared_task
def process_order(order_id, payment_method):
    try:
        with transaction.atomic():
            order = OrderPlaced.objects.get(pk=order_id)
            total_cost = order.quantity * order.product_discounted_price

            martlet = Martlet.objects.get(user=order.user)

            if (payment_method == "Martlet"):
                martlet.martle_pay -= total_cost
            if (payment_method == "Cash on delivery" or payment_method == "Stripe"):
                martlet.martle_bank -= total_cost

            logger.debug(f"Total Cost: {total_cost}")

        return martlet.save()

    except OrderPlaced.DoesNotExist:
        logger.error(f"Error: Order with ID {order_id} does not exist.")
    except Martlet.DoesNotExist:
        logger.error(f"Error: Martlet for user {order.user} not found.")
    except Exception as e:
        logger.error(f"Error processing order with ID {order_id}: {e}")
