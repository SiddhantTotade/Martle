from elasticsearch_dsl import Q
from elasticsearch_dsl import Search
from rest_framework.views import APIView
from rest_framework.response import Response
from django_elasticsearch_dsl_drf.filter_backends import SuggesterFilterBackend, FilteringFilterBackend,  CompoundSearchFilterBackend
from django_elasticsearch_dsl_drf.constants import LOOKUP_FILTER_RANGE, LOOKUP_QUERY_GTE, LOOKUP_QUERY_IN, SUGGESTER_COMPLETION
from django_elasticsearch_dsl_drf.viewsets import DocumentViewSet
from .documents import *
from .serializers import ProductDocumentSerializer, ProductSerializer


class ProductSearchView(APIView):
    serializer_class = ProductSerializer
    document_class = ProductDocument

    def generate_q_expression(self, query):
        return Q("match", product_title={"query": query, "fuzziness": "auto"})

    def get(self, request, query):
        q = self.generate_q_expression(query)
        search = self.document_class.search().query(q)
        return Response(self.serializer_class(search.to_queryset(), many=True).data)


class ProductSearchDocumentView(DocumentViewSet):
    document = ProductDocument
    serializer_class = ProductDocumentSerializer

    filter_backends = [SuggesterFilterBackend,
                       FilteringFilterBackend, CompoundSearchFilterBackend]

    search_fields = ('product_title',
                     'product_description', 'product_details', 'product_tags')

    filter_fields = {
        "id": {"field": "id", "lookups": [LOOKUP_QUERY_IN]},
        "product_title": {"field": "product_title", "lookups": [LOOKUP_QUERY_IN]},
        "product_discounted_price": {"field": "product_discounted_price", "lookups": [LOOKUP_QUERY_GTE, LOOKUP_FILTER_RANGE]}}

    suggester_fields = {
        "product_title_suggest": {"field": "product_title.suggest", "suggesters": [SUGGESTER_COMPLETION]},
        "product_description_suggest": {"field": "product_description.suggest", "suggesters": [SUGGESTER_COMPLETION]}
    }
