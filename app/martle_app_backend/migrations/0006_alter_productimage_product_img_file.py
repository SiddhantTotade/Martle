# Generated by Django 4.1.2 on 2022-11-04 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('martle_app_backend', '0005_alter_productimage_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productimage',
            name='product_img_file',
            field=models.ImageField(upload_to='product_images'),
        ),
    ]
