from django.apps import AppConfig


class MartleRecommendationSystemConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "martle_recommendation_system"

    def ready(self):
        import martle_recommendation_system.signals
