from django_elasticsearch_dsl import Document, fields, Index
from martle_app_backend.models import Product


PUBLISHER_INDEX = Index("product")
PUBLISHER_INDEX.settings(
    number_of_shards=1,
    number_of_replicas=1
)


@PUBLISHER_INDEX.doc_type
class ProductDocument(Document):
    product_title = fields.TextField(attr="product_title", fields={
                                     "raw": {"type": "keyword"}})
    product_tags = fields.KeywordField(attr="get_product_tags")
    product_category = fields.NestedField(
        properties={'pk': fields.IntegerField(), 'product_category': fields.TextField()})
    product_brand = fields.NestedField(
        properties={'pk': fields.IntegerField(), 'brand_name': fields.TextField()})

    class Django:
        model = Product
        fields = ["id", "product_discounted_price",
                  "product_selling_price", "product_cover_image"]
