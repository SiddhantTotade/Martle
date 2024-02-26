from django.apps import AppConfig


class MartleAppPaymentConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "martle_app_payment"

    def ready(self) -> None:
        import martle_app_payment.signals
